import {app} from "./FireBase";
import {onAuthStateChanged, signOut} from "firebase/auth";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export function Main() {
    //const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useNavigate();

    useEffect(() => {
        onAuthStateChanged(app, (user) => {
            setUser(user);
            if (!user) history('/');
        })
    }, [user, history]);

    function logout() {
        signOut(app)
            .then(() => {
                console.log("Succesfully");
                //...
            })
            .catch((error) => {
                console.log("Error" + error.toString());
                //...
            })
    }
    const userCurrent = app.currentUser;
    if (user) {
        return (
            <div>
                <h1>You are logged in...{userCurrent.email}</h1>
                <button onClick={logout}>Logout</button>
                <h2>Test</h2>
            </div>
        );
    } else {
        return (
            <h1>...</h1>
        );
    }
}