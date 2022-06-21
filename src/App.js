import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Navbar } from "./components";

const App = () => {
  // const BASE_URL = "https://v1.baseball.api-sports.io/";

  // const [countries, setCountries] = useState([]);

  // useEffect(async () => {
  //   const countries = await fetchCountries();
  //   console.log("COUNTRIES: ", countries);
  // });
  return (
    <div className="home-page-view">
      <Navbar />
      <h1>Homepage, dawg.</h1>
    </div>
  );
};

export default App;
