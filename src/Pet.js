import React from "react";
import { Link } from "@reach/router";

const Pet = ({ animal, name, breed, media, location, id }) => {
  let Pic = "http://placecorgi.com/300/300";
  if (media.length !== 0) {
    Pic = media[0].medium;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="pet-image">
        <img className="result-img" src={Pic} alt={animal} />
      </div>
      <div className="pet-info">
        <h2 className="heading">{name}</h2>
        <h3 className="heading">{`${animal}-${breed}`}</h3>
        <h3 className="heading">{location}</h3>
      </div>
    </Link>
  );
};

export default Pet;
