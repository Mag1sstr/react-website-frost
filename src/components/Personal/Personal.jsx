import "./Personal.css"
import personalImage1 from "./../../images/personal/01.svg"
import personalImage2 from "./../../images/personal/02.svg"
import personalImage3 from "./../../images/personal/03.svg"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Personal() {
   const [ordersData, setOrdersData] = useState([])
   useEffect(() => {
      axios.get("https://frost.runtime.kz/api/orders").then((resp) => {
         //  console.log(resp)
         setOrdersData(resp.data)
      })
   }, [])
   console.log(ordersData)

   return (
      <section className="personal">
         <div className="conteiner">
            <h3 className="personal__title">Личный кабинет</h3>
            <div className="personal__row">
               <div className="my__order">
                  <button className="my__order-link">
                     <div className="order__linkrow">
                        <img
                           className="my__order-img"
                           src={personalImage1}
                           alt=""
                        />
                        <p>Мои заказы</p>
                     </div>
                  </button>
                  <button className="my__order-link">
                     <div className="order__linkrow">
                        <img src={personalImage2} alt="" />
                        <p>Контактные данные</p>
                     </div>
                  </button>
                  <button className="my__order-link">
                     <div className="order__linkrow">
                        <img src={personalImage3} alt="" />
                        <p>Доставка</p>
                     </div>
                  </button>
               </div>
               <div className="history">
                  <h3 className="history__title">История заказов</h3>
                  <div className="history__row">
                     <div className="number__name">
                        <p>Номер заказа</p>
                        <p>Наименование товара</p>
                     </div>
                     <div className="date__price">
                        <p>Дата заказа</p>
                        <p>Стоимость</p>
                     </div>
                  </div>
                  {ordersData.map((el) => {
                     return (
                        <div key={el.id} className="history__product-row">
                           <p className="history__product-number">№{el.id}</p>
                           <div className="history__product-column">
                              {el.items.map((item) => {
                                 return (
                                    <p className="history__product-text">
                                       {item.product.name}
                                    </p>
                                 )
                              })}
                           </div>

                           <p>{new Date(el.created_at).toLocaleString()}</p>

                           <div key={el.id} className="history__product-column">
                              {el.items.map((item) => {
                                 return <p>{item.product.price * item.count}</p>
                              })}
                           </div>
                        </div>
                     )
                  })}
                  {/* <div className="history__product-row">
                     <p className="history__product-number">№100001</p>
                     <p className="history__product-text">
                        Компрессор кондиционера Hyundai Tucson, Kia Sportage
                        97701-2E300FD; 0935-03se; Kia Sportage 97701-2E300FD;
                        0935-02
                     </p>

                     <p>06.07.2019</p>
                     <p>206 998 тг</p>
                  </div> */}
               </div>
            </div>
         </div>
      </section>
   )
}
