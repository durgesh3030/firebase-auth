import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "./Navbar";

function HomePage() {
    const auth = getAuth();
    const [user, setUser] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setUser(user)
            else setUser(null)
            console.log("User", user)
        });
    }, [])

    const isLoggedIn = user ? true : false;
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }
    })

    return (
        <>
            {isLoggedIn ? (

                <div >
                    <Navbar />
                    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

                        <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">

                            <h2 className="text-3xl font-semibold mb-6">Welcome back, User!</h2>
                            <p className="text-gray-600 mb-8">You are now logged in. Explore our platform and enjoy the services.</p>
                        </div>
                    </div>

                </div>
            )
                :
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                    (
                    <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
                        <h2 className="text-3xl font-semibold mb-6">Welcome to Our Website</h2>
                        <p className="text-gray-600 mb-8">Explore amazing features of our platform. Sign up to get started!</p>
                        <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                            Sign Up
                        </Link>

                        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Sign In
                        </Link>
                    </div>
                    )

                </div >
            }
        </>
    );
}

export default HomePage;
