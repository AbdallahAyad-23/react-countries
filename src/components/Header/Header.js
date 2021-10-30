import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  const switchTheme = () => {
    const body = document.querySelector("body");
    if (body.className === "light-theme") {
      body.className = "dark-theme";
      localStorage.setItem("theme", "dark-theme");
    } else {
      body.className = "light-theme";
      localStorage.setItem("theme", "light-theme");
    }
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Where in the world?</h1>
      <button onClick={switchTheme} className={styles.header__mode}>
        <svg
          className={styles.mode}
          aria-hidden="true"
          role="img"
          width="15px"
          height="15px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 750 850"
        >
          <path d="M732 392q3-2 7-1t3 5q-4 76-36 142t-84 114t-122 74t-147 23q-71-4-133-33t-109-77t-77-109T1 397q-4-78 23-147t74-122t114-84T354 8q4 0 6 3t-2 7q-31 40-46 90t-8 106q5 45 25 85t51 71t71 51t85 25q56 7 106-8t90-46z" />
        </svg>
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
