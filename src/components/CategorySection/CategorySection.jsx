import axios from "axios";
import DropdownCategory from "../DropdownCategory/DropdownCategory";
import "./CategorySection.css";
import { useEffect, useState } from "react";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
export default function CategorySection(props) {

  const [brandData, setBrandData] = useState([]);
  const [modelsData, setModelsData] = useState([]);
  const [generationsData, setGenerationsData] = useState([]);

  // GET - axios.get() -> Promise
  // POST - axios.post() -> Promise

  // axios
  //   .get('https://frost.runtime.kz/api/brands')
  //   .then(function (response) {
  //     const brand = response.data
  //     setBrandData(brand)
  //   })

  useEffect(() => {
    const apiUrl = "https://frost.runtime.kz/api/brands";
    axios.get(apiUrl).then((resp) => {
      const data = resp.data;
      setBrandData(data);
    });
  }, [setBrandData]);

  function brandChange(brandId) {
    if (brandId === "all") {
      setModelsData([]);
      setGenerationsData([]);
    } else {
      axios
        .get(`https://frost.runtime.kz/api/models?brandId=${brandId}`)
        .then((resp) => {
          const data = resp.data;
          setModelsData(data);
        });
        props.getModelId('all')
        props.setCurrentPage(1)
    }
    props.getBrandId(brandId);
  }
  function modelChange(modelId) {
    if (modelId == "all") {
      setGenerationsData([]);
    } else {
      axios
        .get(`https://frost.runtime.kz/api/generations?modelId=${modelId}`)
        .then((resp) => {
          const data = resp.data;
          setGenerationsData(data);
        });
        props.getGenerationId('all')
        props.setCurrentPage(1)
    }
    props.getModelId(modelId);
  }
  function generationChange(generationId) {
    props.getGenerationId(generationId);
  }
  function inputChange(value) {
    props.getInputValue(value);
  }
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
                onChange={brandChange}
              />
            </div>
            <div className="category__item">
              <p className="category__item--text">Модель</p>
              <DropdownCategory
                title="Все модели"
                items={modelsData}
                onChange={modelChange}
              />
            </div>
            <div className="category__item">
              <p className="category__item--text">Поколения</p>
              <DropdownCategory
                title="Все поколения"
                items={generationsData}
                onChange={generationChange}
              />
            </div>
          </div>
          <InputCheckbox onChange={inputChange} />
        </div>
      </div>
    </div>
  );
}
