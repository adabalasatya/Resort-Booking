import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import UserModel from './utils/models/User'; // Assuming this is your user model

export const authOptions = NextAuth({
  providers: [
    CredentialsProvider({
      // Descriptive name for credential provider
      name: 'customCredentials',
      async authorize(credentials) {
        try {
          // Find user by email
          const user = await UserModel.findOne({ email: credentials.email });

          // Check for user existence and password match
          if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
            return null; // Authentication failure
          }

          // Return user object for successful authentication
          return {
            id: user._id, // Assuming your user model has an _id property
            name: user.username,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error('Error during authentication:', error);
          // Consider returning a specific error object or redirecting to an error page
          return null;
        }
      },
    }),
  ],
  secret: process.env.SECRET_KEY, // Ensure this environment variable is set
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.username = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.userId;
      session.user.username = token.username;
      session.user.email = token.email;
      session.user.role = token.role;
      return session;
    },
  },
});

export const { auth, signIn, signOut } = authOptions;