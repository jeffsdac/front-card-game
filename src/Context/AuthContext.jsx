import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");

    return(

        <AuthContext.Provider value = {{ token, setToken, user, setUser}}>{children}</AuthContext.Provider>
    )
};