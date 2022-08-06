import { useEffect, useState } from 'react';
import { CharacterInfo } from '../../../../types';
import CharacterSectionItem from './CharacterSectionItem';
import './CharactersPanel.scss';

const CharactersPanel = () => {
  const [characters, setCharacters] = useState<Array<CharacterInfo>>();

  // TODO: Trim off long character names
  useEffect(() => {
    fetch('http://localhost:8000/characters')
      .then((res) => res.json())
      .then((data: Array<CharacterInfo>) => {
        setCharacters(data);
      });
  }, []);

  return (
    <div className="characters-panel">
      <p className="characters__header">Characters</p>
      <div className="characters-section__container">
        {characters
          ? characters.map((character) => (
              <CharacterSectionItem character={character} key={character._id} />
            ))
          : 'loading'}
      </div>
    </div>
  );
};
export default CharactersPanel;
