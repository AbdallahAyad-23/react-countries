import createContext from "./createContext";
import axios from "axios";

const countriesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COUNTRIES":
      return { ...state, countries: action.payload };
    case "CHANGE_FILTER":
      return { ...state, filter: action.payload };
    case "SELECT_COUNTRY":
      return { ...state, selectedCountry: action.payload };
    case "REMOVE_SELECTED":
      return { ...state, selectedCountry: null };
    default:
      return state;
  }
};

const fetchCountries = (dispatch) => async () => {
  const res = await axios.get("https://restcountries.com/v2/all");
  const data = res.data;
  dispatch({ type: "ADD_COUNTRIES", payload: data });
};

const changeFilter = (dispatch) => (filter) => {
  dispatch({ type: "CHANGE_FILTER", payload: filter });
};
const selectCountry = (dispatch) => (country) => {
  dispatch({ type: "SELECT_COUNTRY", payload: country });
};
const removeSelected = (dispatch) => () => {
  dispatch({ type: "REMOVE_SELECTED" });
};
export const { Context, Provider } = createContext(
  countriesReducer,
  { fetchCountries, changeFilter, selectCountry, removeSelected },
  { countries: [], filter: "", selectedCountry: null }
);
