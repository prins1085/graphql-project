import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharacterList = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  console.log({error, loading, data});

  if (error) return <div>Something Went Wrong!</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex flex-wrap justify-evenly p-4">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} alt="character_image"/>
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
