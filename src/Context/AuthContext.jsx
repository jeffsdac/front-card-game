import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");
    const [deckId, setDeckId] = useState(-1);

    useEffect( () =>{
        if (user !== ""){
            localStorage.setItem('username', user);
        };
    }, [user]  )

    useEffect( () => {
        if (deckId !== -1){
            localStorage.setItem('idDeck', deckId.toString());
        }
    }, [deckId] )

    useEffect( () => {
      const storedUser = localStorage.getItem('username');
      const storedDeckId = Number(localStorage.getItem('idDeck'));
      if (storedDeckId === -1 || storedUser === ""){
        return;
      }
      setUser(storedUser);
      setDeckId(storedDeckId);
    },[] )

    return(

        <AuthContext.Provider value = {{ token, setToken, user, setUser, deckId, setDeckId}}>{children}</AuthContext.Provider>
    )
};