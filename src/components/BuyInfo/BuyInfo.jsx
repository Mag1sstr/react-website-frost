import "./BuyInfo.css";
import BuyInfoImage1 from "../../images/buyinfo/01.png";
import BuyInfoImage2 from "../../images/buyinfo/02.png";
import BuyInfoImage3 from "../../images/buyinfo/03.png";
import BuyInfoImage4 from "../../images/buyinfo/04.png";
import BuyInfoImage5 from "../../images/buyinfo/05.png";
import PointImage from "../../images/buyinfo/point.svg";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import LoadingAnim from "../LoadingAnim/LoadingAnim";
import notAvailableImage from "../../images/buyinfo/notAvailableImage.svg";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContextProvider";

export default function BuyInfo(props) {
  const [buyinfoData, setBuyinfoData] = useState(null);
  const [reviews, setReviews] = useState([]);

  const [cardImages, setCardImages] = useState([
    BuyInfoImage1,
    BuyInfoImage3,
    BuyInfoImage4,
    BuyInfoImage5,
  ]);
  const [mainCardImage, setMainCardImage] = useState(0);
  // const [productId, setProductId] = useState(props.clickCardId);
  const user = useContext(AuthContext);

  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://frost.runtime.kz/api/products/${params.id}`)
      .then((resp) => {
        let data = resp.data;
        setBuyinfoData(data);
      });
  }, [params]);
  useEffect(() => {
    axios
      .get(`https://frost.runtime.kz/api/reviews?productId=${params.id}`)
      .then((resp) => {
        let data = resp.data;
        setReviews(data);
      });
  }, [params]);

  if (buyinfoData === null) {
    return <LoadingAnim />;
  }

  return (
    <section className="buyinfo">
      <div className="conteiner">
        <div className="buyinfo__row">
          <div className="buyinfo__box-one">
            <div className="buyinfo__box-card">
              {/* <div className="adaptiv__title">
                  <h3 className="adap__title">
                    Компрессор кондиционера Hyundai Tucson, Kia Sportage
                    97701-2E300
                  </h3>
                </div> */}
              <img
                className="buyinfo__box-img"
                src={cardImages[mainCardImage]}
                alt=""
              />
              <div className="img__row">
                {cardImages.map((img, index) => {
                  return (
                    <img
                      key={index}
                      onClick={() => setMainCardImage(index)}
                      className="img__row-item"
                      src={img}
                      alt=""
                    />
                  );
                })}
                {/* <img className="img__row-item" src={BuyInfoImage3} alt="" />
                <img className="img__row-item" src={BuyInfoImage4} alt="" />
                <img className="img__row-item" src={BuyInfoImage5} alt="" /> */}
              </div>
            </div>
            <div className="auto">
              <p className="auto__text">Применим к автомобилям:</p>
              <div className="auto__card">
                <p className="auto__text-main">- {buyinfoData.brand.name}</p>
                <p className="auto__card-text">
                  + {buyinfoData.model.name + " " + buyinfoData.generation.name}
                </p>
                {/* <p className="auto__card-text">+ Sportage(JE) 2004-2019</p>
                  <p className="auto__card-text">+ Sportage(JE) 2004-2019</p>
                  <p className="auto__card-text">+ Sportage(JE) 2004-2019</p>
                  <p className="auto__text-main">- Hyndai</p>
                  <p className="auto__card-text">- Tucson(JM) 2004-2010</p>
                  <p className="auto__card-another">2 CRDi</p>
                  <p className="auto__card-another">2 CRDi Привод на все колеса</p>
                  <p className="auto__card-text">+ Tucson(JM) 2006-2010</p>
                  <p className="auto__card-text">+ Tucson(JM) 2006-2010</p> */}
              </div>
            </div>
          </div>
          <div className="buyinfo__box-two">
            <div className="description__inner">
              <div className="description__content">
                <h3 className="description__title">{buyinfoData.name}</h3>
                <p className="description__text">
                  <span>Артикул:</span> {buyinfoData.code}
                </p>
                <p className="description__text">
                  <span>Производитель:</span> {buyinfoData.manufacturer}
                </p>
                <p className="description__text">
                  <span>Описание:</span> {buyinfoData.description}
                </p>
              </div>
              <div className="description__card">
                <p className="card__price">{buyinfoData.price} тг</p>
                <p className="description__card-text">
                  {buyinfoData.available == 1 ? (
                    <img src={PointImage} alt="" />
                  ) : (
                    <img src={notAvailableImage} alt="" />
                  )}
                  {buyinfoData.available == 1 ? "в наличии" : "нет в наличии"}
                </p>
                <p className="city">г. Нур-Султан</p>
                <p className="city">г. Алматы</p>
                <button className="description__card-btn">Купить</button>
              </div>
            </div>
            {/* <div className="auto adaptive">
                <p className="auto__text">Применим к автомобилям:</p>
                <div className="auto__card">
                  <p className="auto__text-main">- Kia</p>
                  <p className="auto__card-text">+ Sportage(JE) 2004-2019</p>
                  <p className="auto__card-text">+ Sportage(JE) 2004-2019</p>
                  <p className="auto__card-text">+ Sportage(JE) 2004-2019</p>
                  <p className="auto__card-text">+ Sportage(JE) 2004-2019</p>
                  <p className="auto__text-main">- Hyndai</p>
                  <p className="auto__card-text">- Tucson(JM) 2004-2010</p>
                  <p className="auto__card-another">2 CRDi</p>
                  <p className="auto__card-another">2 CRDi Привод на все колеса</p>
                  <p className="auto__card-text">+ Tucson(JM) 2006-2010</p>
                  <p className="auto__card-text">+ Tucson(JM) 2006-2010</p>
                </div>
              </div> */}
            <div className="reviews__inner">
              {user.user ? (
                <div className="auth__reviews">
                  <input
                    className="auth__reviews-input"
                    type="text"
                    placeholder="Поделитесь своими впечатлениями о товаре."
                  />
                  <button className="auth__reviews-btn">Оставить отзыв</button>
                </div>
              ) : (
                <div>
                  <h3 className="reviews__title">Отзывы</h3>
                  <p className="reviews__text">
                    Чтобы оставить отзыв <a href="#">войдите на сайт</a>
                  </p>
                </div>
              )}
              {reviews.map((el, i) => {
                return (
                  <div key={i} className="reviews__card">
                    <p className="reviews__card-title">
                      {el.user.firstName + " " + el.user.lastName}
                    </p>
                    <p className="reviews__card-text">{el.review}</p>
                  </div>
                );
              })}
              {/* <div className="reviews__card">
                <p className="reviews__card-title">
                  Константин Константинович Константинопольский
                </p>
                <p className="reviews__card-text">
                  Несколько лет покупаю запчасти в этом магазине, ребята очень
                  быстро подбирают, что нужно и по адекватным ценам. Спасибо,
                  что выручаете! Смело рекомендую своим знакомым.
                </p>
              </div>
              <div className="reviews__card">
                <p className="reviews__card-title">Дмитрий О.</p>
                <p className="reviews__card-text">
                  Скорость обработки заказов и отношение к заказчику радует.
                  Заказывал этот компрессор. После двух месяцев работы нареканий
                  нет.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
