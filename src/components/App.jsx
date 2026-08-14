import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
/*import { aa } from "vitest/dist/chunks/reporters.6vxQttCV.js";*/
import ToyCard from "./ToyCard";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [toyList, setToyList] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  async function addToy(formData) {}

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => setToyList(data));
  }, []);

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer />

      {toyList.map((toy) => (
        <ToyCard key={toy.id} toy={toy} />
      ))}
    </>
  );
}

export default App;
