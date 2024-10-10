import { createContext, useEffect, useState } from "react"
import axios from "axios"
import A from "./A"

export const AuthContext = createContext()
export default function AuthContextProvider({children}){
    const [tokenInfo,setTokenInfo] = useState(null)
    const [user,setUser] = useState(null)

    useEffect(()=>{
      axios.post('https://frost.runtime.kz/api/auth/user',{},{}).then((resp)=>{
        console.log(resp);
      })
    },[tokenInfo])

    function signIn(username,password){
        axios.post('https://frost.runtime.kz/api/auth/token',{
            username:username,
            password:password,
          }).then((resp)=>{
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + resp.data.access_token;
            setTokenInfo(resp.data.access_token)
          })
          .catch(()=>{
            // setRequestError(!requestError)
          }) 
    }
  
    // console.log(user);

    // Почитать про HTTP заголовки и как их отправлять через axios, отдельно ознакомиться с заголовком Authorization.
    
    return(
        <AuthContext.Provider value={{
            user:null,
            signIn:signIn,
            signOut:null,
            token:tokenInfo
        }}>
            {children}

        </AuthContext.Provider>
    )
}