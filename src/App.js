import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

const url =
  "https://sheet.best/api/sheets/3e416eae-461d-48a1-ae11-e3e1f52f9ee5";

const apikey =
  "7uI3FXmM4NxxPT91t%v8J%wIL$Q20p7yJvKFu1HRL$6AV-6UT3zSAn1A5QiS%913";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const info = {
    name: name,
    age: age,
  };
  const submitHandler = async (e) => {
    console.log(info);
    e.preventDefault();

    axios
      .post(url, info, { headers: { "x-api-key": apikey } })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
