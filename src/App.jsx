import "./App.css"
import BuyInfo from "./components/BuyInfo/BuyInfo"
import Header from "./components/Header/Header"
import ProductPage from "./components/ProductPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterForm from "./components/RegisterForm/RegisterForm"
import LoginForm from "./components/LoginForm/LoginForm"
import ForgotPass from "./components/ForgotPass/ForgotPass"
import BuyButtonForm from "./components/BuyButtonForm/BuyButtonForm"
import BasketPage from "./components/BasketPage/BasketPage"
import Personal from "./components/Personal/Personal"

function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<ProductPage />} />
               <Route path={`/product/:id`} element={<BuyInfo />} />

               <Route path="/basket" element={<BasketPage />} />

               <Route path="/personal" element={<Personal />} />
            </Routes>
            {/* <RegisterForm /> */}
            {/* <LoginForm /> */}
            {/* <ForgotPass /> */}
            {/* <BuyButtonForm /> */}
         </BrowserRouter>
      </>
   )
}

export default App
