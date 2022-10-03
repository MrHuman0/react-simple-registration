import React from "react";
import {app} from "./FireBase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

export function Sign() {

    function login() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        signInWithEmailAndPassword(app, email, password)
            .then((userCredintal) => {
                console.log("Succesfully");
                //...
            })
            .catch((error) => {
                console.log("Error" + error.toString());
                //...
            })
    }

    function signUp() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        createUserWithEmailAndPassword(app, email, password)
            .then((userCredential) => {
                console.log("Succesfully");
                //...
            })
            .catch((error) => {
                console.log("Error" + error.toString());
                //...
            });
    }


    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <div>Email</div>
                <input id="email" placeholder="Enter Email.." type="text"/>
            </div>
            <div>
                <div>Password</div>
                <input id="password" placeholder="Enter Password.." type="text"/>
            </div>
            <button style={{margin: '10px'}} onClick={login}>Login</button>
            <button style={{margin: '10px'}} onClick={signUp}>Sign Up</button>
        </div>
    );
}

export default Sign;