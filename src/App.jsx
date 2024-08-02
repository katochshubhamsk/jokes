import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import SavedJokes from "./components/SavedJokes";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState();
  const [btn, setBtn] = useState(0);
  const [data, setData] = useState([]);
  const [savedJokes, setSavedJokes] = useState([]);

  useEffect(() => {
    // Fetching the data when the page loads
    const fetchData = async () => {
      return await axios.get(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
    };

    let result = fetchData();
    result.then((res) => {
      setJokes(res.data[0]);
      // Saving the fetch data in a state variable so that everytime when user clicks , a new joke is added
    });
  }, [btn]);

  const getJoke = (event) => {
    // saving All jokes in a variable.Passing them in cards so that user can save the wanted jokes
    setBtn((prevState) => {
      return prevState + 1;
    });
    setData((prevState) => [...prevState, { jokes, id: uuidv4() }]);
  };

  const saveJoke = (event, joke) => {
    // Saving the saved jokes in a array and passing them to the SavedJokes component.
    setSavedJokes((prevState) => {
      return [...prevState, joke];
    });
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Card saveJoke={saveJoke} data={data} getJoke={getJoke} />}
        />
        <Route
          path="/card"
          element={<Card saveJoke={saveJoke} data={data} getJoke={getJoke} />}
        />
        <Route path="/saved" element={<SavedJokes savedJokes={savedJokes} />} />
      </Routes>
    </Router>
  );
}

export default App;
