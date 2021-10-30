import React, { useContext, useEffect, useState } from "react";
import { Context as CountriesContext } from "../../context/CountriesContext";
import { IoIosArrowRoundBack } from "react-icons/io";
import styles from "./Country.module.css";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
const Country = () => {
  const {
    state: { selectedCountry },
    removeSelected,
    selectCountry,
  } = useContext(CountriesContext);
  const [loading, setLoading] = useState(false);
  const onClickHandler = async (border) => {
    setLoading(true);
    const res = await axios.get(`https://restcountries.com/v2/alpha/${border}`);
    setLoading(false);
    selectCountry(res.data);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <div className={styles.container}>
      <button
        className={`${styles.btn} ${styles.back}`}
        onClick={() => removeSelected()}
      >
        <IoIosArrowRoundBack size={20} />
        Back
      </button>
      <div>
        <img
          className={styles.img}
          src={selectedCountry.flag}
          alt={selectedCountry.name}
        />
        <div className={styles.info}>
          <h3>{selectedCountry.name}</h3>
          <div>
            <div>
              <p>
                <span>Native Name: </span>
                {selectedCountry.nativeName}
              </p>
              <p>
                <span>Population: </span>
                {selectedCountry.population}
              </p>
              <p>
                <span>Region: </span>
                {selectedCountry.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {selectedCountry.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {selectedCountry.capital}
              </p>
            </div>
            <div>
              <p>
                <span>Top Level Domain: </span>
                {selectedCountry.topLevelDomain}
              </p>
              {selectedCountry.currencies ? (
                <p>
                  <span>Currencies: </span>
                  {selectedCountry.currencies.map((currency, idx) =>
                    selectedCountry.currencies.length === idx + 1
                      ? currency.name
                      : `${currency.name}, `
                  )}
                </p>
              ) : null}
              {selectedCountry.languages ? (
                <p>
                  <span>Languages: </span>
                  {selectedCountry.languages.map((lang, idx) =>
                    selectedCountry.languages.length === idx + 1
                      ? lang.name
                      : `${lang.name}, `
                  )}
                </p>
              ) : null}
            </div>
          </div>

          {selectedCountry.borders ? (
            <div className={styles.borders}>
              <h3>Border Countries</h3>
              <div className={styles.borders__btns}>
                {selectedCountry.borders.map((border) => (
                  <button
                    key={border}
                    className={styles.btn}
                    onClick={() => onClickHandler(border)}
                  >
                    {border}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Country;
