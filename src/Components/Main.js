import {app} from "./FireBase";
import {onAuthStateChanged, signOut} from "firebase/auth";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export function Main() {
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
                <h1>Hello {userCurrent.email}</h1>
                <button onClick={logout}>Logout</button>
            </div>
        );
    } else {
        return (
            <h1>...</h1>
        );
    }
}