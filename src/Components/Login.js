import React from "react";
import {app} from "./FireBase";
import {signInWithEmailAndPassword} from "firebase/auth";

export function Login() {

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
    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <div>Email</div>
                <input id="email" placeholder="Email" type="email"/>
            </div>
            <div>
                <div>Password</div>
                <input id="password" placeholder="Password" type="password"/>
            </div>
            <button style={{margin: '10px'}} onClick={login}>Log In</button>
            <h3>Don't have an account?<a href="/signup">Sign up</a></h3>
        </div>
    );
}