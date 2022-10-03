import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {auth} from "../Components/FireBase";
import {onAuthStateChanged} from "firebase/auth";

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
            if (user) history('/main');
        })
    }, [user, history]);

    const value = {user};

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}