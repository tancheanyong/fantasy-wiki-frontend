import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './scss/Characters.scss';
import { CharacterInfo } from '../../../types';
import CharacterCard from './CharacterCard';
import { Button, Dialog } from '@blueprintjs/core';

function Characters() {
  const [characters, setCharacters] = useState<Array<CharacterInfo>>([]);

  useEffect(() => {
    fetch('http://localhost:8000/characters')
      .then((res) => res.json())
      .then((data: Array<CharacterInfo>) => {
        setCharacters(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="char-page">
      <header className="header">
        <h2 className="page-title">Characters List</h2>
        <Button text="Add Character!" className="btn--add-character" />
      </header>

      <section className="character-roaster">
        {/* TODO: Clicking on a new character will create a wiki page using that character's __id */}
        {characters.map((character, index) => (
          <Link to={`/characters/${character.name}`} key={character._id}>
            <CharacterCard character={character} key={character._id} />
          </Link>
        ))}
      </section>
      {/* TODO: Make this into a dialog instead. */}
      {/* <Link to={'/characters/character-creation'}>Add a new character!</Link> */}
      <Dialog isOpen={false} className="dialog--create-character" />
    </div>
  );
}

export default Characters;
