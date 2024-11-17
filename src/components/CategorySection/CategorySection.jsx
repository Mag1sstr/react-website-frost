import axios from "axios";
import DropdownCategory from "../DropdownCategory/DropdownCategory";
import "./CategorySection.css";
import { useEffect, useState } from "react";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrandChange,
  getBrandData,
  getModelChange,
} from "../../store/filterSlice";
export default function CategorySection(props) {
  //  const [brandData, setBrandData] = useState([])
  //  const [modelsData, setModelsData] = useState([])
  //  const [generationsData, setGenerationsData] = useState([])
  const dispatch = useDispatch();
  const brandData = useSelector((state) => state.filter.brandData);
  const modelsData = useSelector((state) => state.filter.modelsData);
  const generationsData = useSelector((state) => state.filter.generationsData);

  useEffect(() => {
    dispatch(getBrandData());
  }, []);

  // function brandChange(brandId) {
  //   if (brandId === "all") {
  //     dispatch(setModelsData([]));
  //     dispatch(setGenerationData([]));
  //   } else {
  //     dispatch(getModelsData(brandId));
  //     props.getModelId("all");
  //     props.setCurrentPage(1);
  //   }
  //   props.getBrandId(brandId);
  // }
  // function modelChange(modelId) {
  //   if (modelId === "all") {
  //     dispatch(setGenerationData([]));
  //   } else {
  //     dispatch(getGenerationsData(modelId));
  //     props.getGenerationId("all");
  //     props.setCurrentPage(1);
  //   }
  //   props.getModelId(modelId);
  // }
  // function generationChange(generationId) {
  //   props.getGenerationId(generationId);
  // }
  function inputChange(value) {
    props.getInputValue(value);
  }

  // GET - axios.get() -> Promise
  // POST - axios.post() -> Promise

  //  useEffect(() => {
  //     const apiUrl = "https://frost.runtime.kz/api/brands"
  //     axios.get(apiUrl).then((resp) => {
  //        const data = resp.data
  //        setBrandData(data)
  //     })
  //  }, [setBrandData])

  //  console.log(brandData)

  //  function brandChange(brandId) {
  //     if (brandId === "all") {
  //        setModelsData([])
  //        setGenerationsData([])
  //     } else {
  //        axios
  //           .get(`https://frost.runtime.kz/api/models?brandId=${brandId}`)
  //           .then((resp) => {
  //              const data = resp.data
  //              setModelsData(data)
  //           })
  //        props.getModelId("all")
  //        props.setCurrentPage(1)
  //     }
  //     props.getBrandId(brandId)
  //  }
  //  function modelChange(modelId) {
  //     if (modelId == "all") {
  //        setGenerationsData([])
  //     } else {
  //        axios
  //           .get(`https://frost.runtime.kz/api/generations?modelId=${modelId}`)
  //           .then((resp) => {
  //              const data = resp.data
  //              setGenerationsData(data)
  //           })
  //        props.getGenerationId("all")
  //        props.setCurrentPage(1)
  //     }
  //     props.getModelId(modelId)
  //  }
  //  function generationChange(generationId) {
  //     props.getGenerationId(generationId)
  //  }
  //  function inputChange(value) {
  //     props.getInputValue(value)
  //  }
  return (
    <div className="product__conteiner">
      <div className="category__section">
        <div className="category__section--inner">
          <div className="category__block">
            <div className="category__item">
              <p className="category__item--text">Категория</p>
              <DropdownCategory title="Все категории" items={[]} />
            </div>
            <div className="category__item">
              <p className="category__item--text">Марка</p>
              <DropdownCategory
                title="Все марки"
                items={brandData}
                onChange={function (brandId) {
                  dispatch(getBrandChange(brandId));
                  props.getBrandId(brandId);
                  props.setCurrentPage(1);
                }}
              />
            </div>
            <div className="category__item">
              <p className="category__item--text">Модель</p>
              <DropdownCategory
                title="Все модели"
                items={modelsData}
                onChange={function (modelId) {
                  dispatch(getModelChange(modelId));
                  props.getModelId(modelId);
                  props.setCurrentPage(1);
                }}
              />
            </div>
            <div className="category__item">
              <p className="category__item--text">Поколения</p>
              <DropdownCategory
                title="Все поколения"
                items={generationsData}
                onChange={function (generationId) {
                  props.getGenerationId(generationId);
                  props.setCurrentPage(1);
                }}
              />
            </div>
          </div>
          <InputCheckbox onChange={inputChange} />
        </div>
      </div>
    </div>
  );
}
