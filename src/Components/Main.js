import {auth} from "./FireBase";
import {onAuthStateChanged, signOut} from "firebase/auth";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export function Main() {
    const [user, setUser] = useState(null);
    const history = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            if (!user) history('/');
        })
    }, [user, history]);

    function logOut() {
        signOut(auth)
            .then(() => {
                console.log("Succesfully");
                //...
            })
            .catch((error) => {
                console.log("Error" + error.toString());
                //...
            })
    }

    const userCurrent = auth.currentUser;
    if (user) {
        return (
            <div>
                <h1>Hello {userCurrent.email}</h1>
                <button onClick={logOut}>Sign Out</button>
            </div>
        );
    } else {
        return (
            <h1>...</h1>
        );
    }
}