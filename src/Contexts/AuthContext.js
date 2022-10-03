import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {app} from "../Components/FireBase";
import {onAuthStateChanged} from "firebase/auth";

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useNavigate();

    useEffect(() => {
        onAuthStateChanged(app, (user) => {
            setUser(user);
            setLoading(false);
            if (user) history('/main');
            //if (!user) history('/');
        })
    }, [user, history]);

    const value = {user};

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}