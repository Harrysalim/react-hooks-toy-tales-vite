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

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => {
        console.log("GET DATA:", data);
        setToyList((prev) => {
          const fetchedToyIds = new Set(data.map((toy) => toy.id));
          return [...prev, prev.filter((toy) => !fetchedToyIds.has(toy.id))];
        });
      });
  }, []);

  async function addToy(formData) {
    const response = await fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to add new toy");
    }
    const newToy = await response.json();

    console.log("POST returned:", newToy);

    setToyList((prev) => {
      console.log("ADDING TOY TO STATE:", [...prev, newToy]);
      return [...prev, newToy];
    });
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onSubmit={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} />

      {/*{toyList.map((toy) => {
        console.log("TOYCARD FOR:", toy.name);

        return <ToyCard key={toy.id} toy={toy} />;
      })} */}
    </>
  );
}

export default App;
