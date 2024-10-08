import { createContext, useState } from "react"
import axios from "axios"
import A from "./A"

export const AuthContext = createContext()
export default function AuthContextProvider({children}){
    const [tokenInfo,setTokenInfo] = useState(null)
    const [user,setUser] = useState(null)
    function signIn(username,password){
        axios.post('https://frost.runtime.kz/api/auth/token',{
            username:username,
            password:password,
          }).then((resp)=>{
            console.log(resp);
            setTokenInfo(resp.data.access_token)
            
          }).catch(()=>{
            setRequestError(!requestError)
          })
    }
    // console.log(tokenInfo);

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