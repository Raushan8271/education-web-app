import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/TeacherAuthContext"
import { useContext } from "react";

const { default: Login } = require("../component/authentication/Login")

const TeacherLogin = () => {

    const {isAuth,setIsAuth} = useContext(AuthContext);


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = () =>{
        axios.post('https://reqres.in/api/login', {
            email: email,
            password: password        
          })
          .then(function (response) {
            console.log(response.data.token);
            setIsAuth(true)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return(
         <div>
             <h3>{email}</h3>
             <h3>{password}</h3>
            <Login email={email} password={password} 
               handleChangePass={(e)=>setPassword(e.target.value)} 
               handleChangeEmail={(e)=>setEmail(e.target.value)} 
               handleSubmit={handleSubmit}
            />
            <h4>Or</h4> <br/>
            <button onClick={()=> setIsAuth(true)}>Guest Login</button>
         </div>
    )
}


export default TeacherLogin;

