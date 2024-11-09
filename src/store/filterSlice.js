import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
const initialState = {
  brandData: [],
  modelsData: [],
  generationsData: [],
};
export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setBrandData(state, action) {
      state.brandData = action.payload;
    },

    setModelsData(state, action) {
      state.modelsData = action.payload;
    },

    setGenerationData(state, action) {
      state.generationsData = action.payload;
    },
  },
});
export function getBrandData() {
  return function (dispatch) {
    const apiUrl = "https://frost.runtime.kz/api/brands";
    axios.get(apiUrl).then((resp) => {
      const data = resp.data;
      dispatch(setBrandData(data));
    });
  };
}
export function getModelsData(brandId) {
  return function (dispatch) {
    axios
      .get(`https://frost.runtime.kz/api/models?brandId=${brandId}`)
      .then((resp) => {
        const data = resp.data;
        dispatch(setModelsData(data));
      });
  };
}
export function getGenerationsData(modelId) {
  return function (dispatch) {
    axios
      .get(`https://frost.runtime.kz/api/generations?modelId=${modelId}`)
      .then((resp) => {
        const data = resp.data;
        dispatch(setGenerationData(data));
      });
  };
}

export const {
  setBrandData,
  brandChange,
  setModelsData,
  modelChange,
  setGenerationData,
} = filterSlice.actions;
export default filterSlice.reducer;
