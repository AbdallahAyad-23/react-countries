import React from "react";
import Card from "../Card/Card";
import styles from "./Countries.module.css";
const Countries = ({ countries, filter }) => {
  const filterCountries = () => {
    return filter !== "All" && filter !== ""
      ? countries.filter((c) => c.region === filter)
      : countries;
  };
  return (
    <div className={styles.countries}>
      {filterCountries().map((country) => (
        <Card
          key={country.name}
          src={country.flags.svg}
          title={country.name}
          capital={country.capital}
          population={country.population}
          region={country.region}
        />
      ))}
    </div>
  );
};

export default Countries;
