import { useState } from "react";
import "./App.css";

import Button from "./components/button";
import Text from "./components/text";

function App() {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");

  const getData = () => {
    let json;
    let clearInput;
    let formatInput;

    console.log(input.replace(/\s/g, ""));

    clearInput = input.replace(/\s/g, "");

    formatInput = '{"json":[' + clearInput + "]}";

    try {
      json = JSON.parse(formatInput);

      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(json),
      };

      console.log(JSON.stringify(json));

      fetch("http://localhost:8080/convert", requestOptions)
        .then((response) => response.text())
        .then((res) => setData(res));
    } catch (error) {
      console.log(error);
      setData("Invalid JSON.");
    }
  };

  return (
    <div className="App-main">
      <h1>JSONtoCSV</h1>
      <div className="App">
        <Text name="JSON" setText={setInput}></Text>
        <Text name="CSV" outputText={data}></Text>
      </div>
      <Button name="Convert" onClick={getData}></Button>
    </div>
  );
}

export default App;
