import React, { useState } from "react";

function ToyForm() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  function HandleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function HandleSubmit(e) {
    e.preventDefault();
    setFormData(formData);

    setFormData({
      name: "",
      image: "",
    });
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={HandleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={HandleChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={HandleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
