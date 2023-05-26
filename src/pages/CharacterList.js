import React from "react";
import Characterhooks from "../hooks/Characterhooks";

const CharacterList = () => {
  const { error, loading, data } = Characterhooks();
  if (error) return <div>Something Went Wrong!</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex flex-wrap justify-evenly p-4">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} alt="character_image" />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
