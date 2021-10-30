import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { useContext, useEffect } from "react";
import {
  Context as CountriesContext,
  Provider,
} from "./context/CountriesContext";
import Country from "./pages/Country/Country";
function App() {
  const {
    state: { selectedCountry },
    fetchCountries,
  } = useContext(CountriesContext);
  useEffect(() => {
    document.querySelector("body").className =
      localStorage.getItem("theme") || "light-theme";
  }, []);
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div className="App">
      <Header />
      {selectedCountry ? <Country /> : <Home />}
    </div>
  );
}

const app = () => (
  <Provider>
    <App />
  </Provider>
);

export default app;
