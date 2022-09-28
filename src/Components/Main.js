import {app} from "./FireBase";
import {signOut} from "firebase/auth";
import React from "react";

export function Main() {
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

    return (
        <div>
            <h1>You are logged in...</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

/*
export class Main extends React.Component{
    logout(){
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

    render() {
        return(
            <div>
                <h1>You are logged in...</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

 */