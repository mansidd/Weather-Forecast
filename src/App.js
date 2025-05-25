import Card from "./components/card";
import Input from "./components/input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
import { useEffect } from "react";
import "./App.css";

function App() {
  const weather = useWeather();
  console.log(weather)

  useEffect(() => {
    // Get Current Location 
    weather.fetchCurrentUserLocationData();
  }, [])
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search"/>
      <Card />
    </div>
  );
}

export default App;
