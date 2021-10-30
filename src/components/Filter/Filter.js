import React, { useContext } from "react";
import { Context as CountriesContext } from "../../context/CountriesContext";
import styles from "./Filter.module.css";
const Filter = () => {
  const {
    state: { filter },
    changeFilter,
  } = useContext(CountriesContext);
  const onChangeHandler = (e) => {
    changeFilter(e.target.value);
  };
  return (
    <select className={styles.filter} value={filter} onChange={onChangeHandler}>
      <option value="" disabled>
        Filter by Region
      </option>
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Filter;
