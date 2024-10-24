import { createContext, useEffect, useState } from "react";
import axios from "axios";
import A from "./A";

export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [tokenInfo, setTokenInfo] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (tokenInfo) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + tokenInfo;
      axios
        .post("https://frost.runtime.kz/api/auth/user", {}, {})
        .then((resp) => {
          console.log(resp);
          setUser(resp.data);
        });
    }
  }, [tokenInfo]);
  // console.log(user);

  function signIn(username, password) {
    axios
      .post("https://frost.runtime.kz/api/auth/token", {
        username: username,
        password: password,
      })
      .then((resp) => {
        setTokenInfo(resp.data.access_token);
        localStorage.setItem("token", resp.data.access_token);
      })
      .catch(() => {
        // setRequestError(!requestError)
      });
  }
  function newOrder(phone, area, city, street, house, apartment) {
    axios
      .post("https://frost.runtime.kz/api/orders", {
        phone,
        area,
        city,
        street,
        house,
        apartment,
      })
      .then((resp) => {
        console.log(resp);
      });
  }

  // console.log(user);

  // Почитать про HTTP заголовки и как их отправлять через axios, отдельно ознакомиться с заголовком Authorization.

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUser,
        signIn: signIn,
        signOut: null,
        token: tokenInfo,
        setTokenInfo: setTokenInfo,
        newOrder: newOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
