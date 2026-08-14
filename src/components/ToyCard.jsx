import React from "react";

function ToyCard({ toy, setToyList, onLike }) {
  console.log("TOYCARD:", toy);

  function HandleLike() {
    onLike(toy.id);
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button id={toy.id} onClick={HandleLike} className="like-btn">
        Like {"<3"}
      </button>
      <button id={toy.id} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
