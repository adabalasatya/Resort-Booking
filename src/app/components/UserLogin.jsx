"use client"

import React, { useState } from 'react'
import { loginAction } from '../serverActions/loginAction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Circles } from 'react-loader-spinner';

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const loginHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const loginDetails = { email, password };
        console.log(loginDetails);

        try {
            const response = await loginAction(loginDetails);
            if (response.success) {
                router.push("/");
            } else {
                setError(response.message || "Login failed, Invalid Credentials");
            }
        } catch (error) {
            setError("Invalid Credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="loginBody">
            <Image
                src="/login.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="backgroundImage"
            />
            <div className="loginWrapper">
                <div className="infoSection">
                    <h1>Welcome to Your Dream Resort!</h1>
                    <p>
                    Escape to a world of relaxation and fun. Our resort offers beautiful views, top-class facilities, and services tailored just for you.
                    From water sports to nature walks and cultural tours, there’s something for everyone. Booking is easy, and we offer great deals to make your dream vacation come true.
                    <br /><br /><strong>Your perfect getaway starts here. Book now!</strong>
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
                        <form onSubmit={loginHandler} className="formSection">
                            <h1>Login</h1>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
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
                            <br />
                            <button type="submit">Login</button>
                            <Link href="/register" className="authLink">
                                If not registered? Register
                            </Link>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
