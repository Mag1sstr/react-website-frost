import { useContext } from "react"
import { AuthContext } from "./AuthContextProvider"

export default function A(){
    const count = useContext(AuthContext)
    return(
        <div>
            <p>count:{count}</p>
        </div>
    )
}