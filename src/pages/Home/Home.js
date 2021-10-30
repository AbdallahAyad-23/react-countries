import React, { useContext } from "react";
import { Context as CountriesContext } from "../../context/CountriesContext";
import Search from "../../components/Search/Search";
import styles from "./Home.module.css";
import Countries from "../../components/Countries/Countries";
import Spinner from "../../components/Spinner/Spinner";
const Home = () => {
  const {
    state: { countries, filter },
  } = useContext(CountriesContext);

  return (
    <div className={styles.home}>
      <Search />
      {countries.length ? (
        <Countries countries={countries} filter={filter} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
