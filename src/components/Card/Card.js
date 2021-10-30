import React, { useContext } from "react";
import { Context as CountriesContext } from "../../context/CountriesContext";
import Img from "../Img/Img";
import styles from "./Card.module.css";

const Card = ({ src, title, region, population, capital }) => {
  const {
    state: { countries },
    selectCountry,
  } = useContext(CountriesContext);
  const onClickHandler = () => {
    selectCountry(countries.find((country) => country.name === title));
  };
  return (
    <div className={styles.card} onClick={onClickHandler}>
      <Img className={styles.card__img} src={src} alt={title} />
      <div className={styles.card__info}>
        <h3 className={styles.card__title}>{title}</h3>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
