import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductPage.css";

import cardImage1 from "../images/card/01.png";
import cardImage2 from "../images/card/02.png";
import cardImage3 from "../images/card/03.png";
import axios from "axios";
import Pagination from "./Pagination/Pagination";
import CategorySection from "./CategorySection/CategorySection";
import LoadingAnim from "./LoadingAnim/LoadingAnim";
import { NavLink } from "react-router-dom";

export default function ProductPage(props) {
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  let [brandId, setBrandId] = useState(null);
  let [modelId, setModelId] = useState(null);
  let [generationId, setGenerationId] = useState(null);
  let [available, setAvailable] = useState(0);

  // if (productData.length === 0) {
  //   return <LoadingAnim />;
  // }
  useEffect(() => {
    let params = `?page=${currentPage}&size=6`;
    if (brandId) {
      params += "&brandId=" + brandId;
    } else {
      modelId = null;
      generationId = null;
    }
    if (modelId) {
      params += "&modelId=" + modelId;
    } else {
      generationId = null;
    }
    if (generationId) {
      params += "&generationId=" + generationId;
    }
    axios
      .get(
        `https://frost.runtime.kz/api/products${params}&available=${available}`
      )
      .then((resp) => {
        const data = resp.data;
        setProductData(data.items);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      });

    // console.log(params);

    // ВАЖНО: Один вызов axios.get()
  }, [currentPage, brandId, modelId, generationId, available]);

  function getBrandId(id) {
    if (id === "all") {
      setBrandId(null);
    } else {
      setBrandId(id);
    }
  }
  function getModelId(id) {
    if (id === "all") {
      setModelId(null);
    } else {
      setModelId(id);
    }
  }
  function getGenerationId(id) {
    if (id === "all") {
      setGenerationId(null);
    } else {
      setGenerationId(id);
    }
  }
  function getInputValue(value) {
    setAvailable(value);
  }

  return (
    <>
      <CategorySection
        getBrandId={getBrandId}
        getModelId={getModelId}
        getGenerationId={getGenerationId}
        getInputValue={getInputValue}
        setCurrentPage={setCurrentPage}
      />
      <div className="product__conteiner">
        <div className="product__row">
          {productData.length == 0 ? <LoadingAnim /> : null}
          {productData.map((el) => {
            return (
              // <NavLink style={{ color: "#000" }} to={`/product/${el.id}`}>
              <ProductCard
                key={el.id}
                image={cardImage3}
                text={el.name}
                price={el.price}
                id={el.id}
                available={el.available}
              />
              // </NavLink>
            );
          })}
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}
