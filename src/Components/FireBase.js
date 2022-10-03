import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqsFu3Ppv658sLXdcHLWrp2LVPYtCU4ro",
    authDomain: "registration-ceff4.firebaseapp.com",
    projectId: "registration-ceff4",
    storageBucket: "registration-ceff4.appspot.com",
    messagingSenderId: "109642521553",
    appId: "1:109642521553:web:59232060ae1c9ae8639ef0"
};

export const auth = getAuth(initializeApp(firebaseConfig));