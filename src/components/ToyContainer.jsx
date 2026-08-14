import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, setToyList, onLike, onDelete }) {
  return (
    <div id="toy-collection">
      {toyList.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          setToyList={setToyList}
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
