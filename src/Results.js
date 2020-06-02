import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search-results">
      {pets.length === 0 ? (
        <h1 className="heading message-heading">No results found!</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city} , ${pet.contact.address.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
