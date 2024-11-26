'use client'

import React, { useState } from 'react'
import { registerAction } from '../serverActions/registerAction';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Circles } from 'react-loader-spinner';

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const registerHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const userRegisterDetails = { username, email, password };
        console.log(userRegisterDetails);

        try {
            const response = await registerAction(userRegisterDetails);
            if (response.success) {
                alert("Registration successful");
                router.push("/login");
            } else {
                setError(response.message);
            }
        } catch (error) {
            console.log(error);
            setError("An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="registerBody">
            <Image
                src="/login.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={75}
                priority
                className="backgroundImage"
            />
            <div className="registerWrapper">
                <div className="infoSection">
                    <h1>Join Us Today!</h1>
                    <p>
                        Become a part of our growing community. Sign up to explore exciting features and stay connected like never before.
                    </p>
                </div>
                <div className="formContainer">
                    {loading ? (
                        <Circles
                            height="80"
                            width="80"
                            color="white"
                            ariaLabel="circles-loading"
                            visible={true}
                        />
                    ) : (
                        <form onSubmit={registerHandler} className="formSection">
                            <h1>Register</h1>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <h3>Username</h3>
                            <input
                                type="text"
                                name="username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <h3>Email</h3>
                            <input
                                type="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <h3>Password</h3>
                            <input
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit">Register</button>
                            <Link href="/login" className="authLink">
                                Already registered? Login
                            </Link>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
