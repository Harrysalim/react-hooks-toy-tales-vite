import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, setToyList, onLike }) {
  return (
    <div id="toy-collection">
      {toyList.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          setToyList={setToyList}
          onLike={onLike}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
