import { createContext, useContext } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyCKmKHRSMhgtC4UknPi5_lrzceRdmAW2Yo",
    authDomain: "login-page-1d2ff.firebaseapp.com",
    databaseURL: "https://login-page-1d2ff-default-rtdb.firebaseio.com",
    projectId: "login-page-1d2ff",
    storageBucket: "login-page-1d2ff.appspot.com",
    messagingSenderId: "362228839746",
    appId: "1:362228839746:web:c7fda79d0182c0596cc4db",
    measurementId: "G-WJ5X55S8P9"
};

export const useFirebase = () => {
    return useContext(FirebaseContext);
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signinUserWithEmailAndPassword = (email, password) =>
        signInWithEmailAndPassword(firebaseApp, email, password);

    return (
        <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, signinUserWithEmailAndPassword }}>
            {props.children}
        </FirebaseContext.Provider>);
};