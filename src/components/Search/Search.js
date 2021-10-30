import React, { useContext, useState } from "react";
import styles from "./Search.module.css";
import { BiSearch } from "react-icons/bi";
import Filter from "../Filter/Filter";
import axios from "axios";
import { Context as CountriesContext } from "../../context/CountriesContext";
const Search = () => {
  const { selectCountry } = useContext(CountriesContext);
  const [value, setValue] = useState("");
  const searchForCountry = async (e) => {
    if (e.keyCode === 13) {
      const res = await axios.get(`https://restcountries.com/v2/name/${value}`);
      if (res.data.status == 404) {
        setValue(res.data.message);
      }
      selectCountry(res.data[0]);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <BiSearch size={25} className={styles.icon} />
        <input
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={searchForCountry}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      <Filter />
    </div>
  );
};

export default Search;
