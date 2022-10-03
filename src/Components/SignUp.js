import React from "react";
import {app} from "./FireBase";
import {createUserWithEmailAndPassword} from "firebase/auth";

function SignUp() {
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
                <input id="email" placeholder="Email" type="email"/>
            </div>
            <div>
                <div>Password</div>
                <input id="password" placeholder="Password" type="password"/>
            </div>
            <button style={{margin: '10px'}} onClick={signUp}>Sign Up</button>
        </div>
    );
}

export default SignUp;