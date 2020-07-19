import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const Homepage = () => {
  const [location, setLocation] = useState("Seattle , WA");
  const [Breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", Breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function searchResults() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map(({ name }) => name);
      setBreeds(breedString);
    });
  }, [animal, setBreed, setBreeds]);

  return (
    <div id="second-section">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchResults();
        }}
        className="search-form"
      >
        <label htmlFor="location">
          Location
          <br />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        with class
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="green">Green</option>
            <option value="coral">Coral</option>
            <option value="seagreen">Sea green</option>
            <option value="salmon">Salmon</option>
          </select>
        </label>
        <button
          style={{
            backgroundColor: "light" + theme,
            borderColor: theme,
          }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default Homepage;
