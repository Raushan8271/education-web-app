import {createContext, useState, useEffect} from "react";
import axios from "axios"

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(false);
    const [token,setToken] = useState(null);
   

    const handleLogout = () => {
        setIsAuth(false); 
       // setUserData({username:"",password:""});
    }

    

    const value = {isAuth,setIsAuth, handleLogout };
    return (
        <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
    );
  };

  export { AuthContext, AuthContextProvider };




// const contextcreate  = React.crateConetxt()
