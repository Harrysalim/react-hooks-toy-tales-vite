import React, { useState } from "react";

function ToyForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0,
  });

  function HandleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function HandleSubmit(e) {
    e.preventDefault();

    console.log("Handle Submit:", formData);
    onSubmit(formData);

    console.log("AFTER ONSUBMIT");

    setFormData({
      name: "",
      image: "",
      likes: 0,
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
