import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './scss/Characters.scss';
import CharacterCard from './CharacterCard';
import { Button, Dialog } from '@blueprintjs/core';
import CharacterCreationDialog from './CharacterCreationDialog';
import { CharacterInfo } from '../../../types';

function CharactersPage() {
  const [characters, setCharacters] = useState<Array<CharacterInfo>>([]);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    // Only fetch when dialog closes, where user has created a new character
    if (!dialogOpen) {
      fetch('http://localhost:8000/characters')
        .then((res) => res.json())
        .then((data: Array<CharacterInfo>) => {
          setCharacters(data);
        })
        .catch((err) => console.log(err));
    }
  }, [dialogOpen]);

  const handleDialogOpenClose = (openDialog: boolean) => {
    setDialogOpen(openDialog);
  };

  return (
    <div className="char-page">
      <header className="header">
        <h2 className="page-title">Characters List</h2>
        <Button
          text="Add Character!"
          className="btn--add-character"
          onClick={() => handleDialogOpenClose(true)}
          type="button"
        />
      </header>

      <section className="character-roaster">
        {characters.map((character, index) => (
          <CharacterCard character={character} key={character._id} />
        ))}
      </section>
      <CharacterCreationDialog
        dialogOpen={dialogOpen}
        handleDialogOpenClose={handleDialogOpenClose}
      />
    </div>
  );
}

export default CharactersPage;
