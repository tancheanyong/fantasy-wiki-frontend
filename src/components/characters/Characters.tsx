import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './scss/characters.scss';
import { characterNames } from '../../../types';
import CharacterCard from './CharacterCard';

function Characters() {
  const [characterNames, setCharacterNames] = useState<string[]>([]);
  const [listKey, setListKey] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/characters')
      .then((res) => res.json())
      .then((data: Array<characterNames>) => {
        for (let i = 0; i < data.length; i += 1) {
          setCharacterNames((characterNames) => [
            ...characterNames,
            data[i].name,
          ]);
          setListKey((listKey) => [...listKey, data[i]._id]);
        }
      });
  }, []);

  return (
    <div className="char-page">
      <h2>Characters List</h2>
      {characterNames.map((characterName, index) => (
        <Link to={`/characters/${characterName}`}>
          <CharacterCard characterName={characterName} />
        </Link>
      ))}
      <Link to={'/characters/character-creation'}>Add a new character!</Link>
    </div>
  );
}

export default Characters;
