import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://xcountries-backend.labs.crio.do/all"
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="App">
      <div className="card-container">
        {countries.map((country, i) => (
          <Card key={`${country.name}${i}`} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
