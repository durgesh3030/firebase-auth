import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    const handleSignOut = async () => {
        // Initialize Firebase Authentication
        const auth = getAuth();

        try {
            // Sign out the user
            await signOut(auth);
            navigate('/')

            // Handle successful sign-out (e.g., navigate to another page)
            console.log("User signed out");
        } catch (error) {
            // Handle sign-out errors
            console.error("Sign-out error:", error);
        }

    };

    return (
        <div className="max-w-md p-8 bg-white shadow-lg rounded-lg ">
            <h2 className="text-3xl font-semibold mb-6">Welcome back, User!</h2>
            <p className="text-gray-600 mb-8">You are now logged in. Explore our platform and enjoy the services.</p>
            <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Logout
            </button>
        </div>
    );
}

export default Logout;
