import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");
    const [deckId, setDeckId] = useState(-1);

    return(

        <AuthContext.Provider value = {{ token, setToken, user, setUser, deckId, setDeckId}}>{children}</AuthContext.Provider>
    )
};