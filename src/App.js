import React, {useState, useEffect} from "react";
import {Login} from "./Components/Login";
import {Main} from "./Components/Main";
import {onAuthStateChanged} from "firebase/auth";
import {app} from "./Components/FireBase";

export function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        authListener();
    });

    function authListener() {
        onAuthStateChanged(app, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }

    return (
        <div className="App">
            {user ? (<Main/>) : (<Login/>)}
        </div>
    );
}
export default App;