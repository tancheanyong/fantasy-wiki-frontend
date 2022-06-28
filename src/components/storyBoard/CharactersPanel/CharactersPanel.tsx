import CharacterSectionItem from './CharacterSectionItem';
import './CharactersPanel.scss';

const CharactersPanel = () => {
  const tempCharacters = [
    { name: 'Johnny', id: '1' },
    { name: 'Ba', id: '2' },
    { name: 'Fury', id: '3' },
    { name: 'Anastasia', id: '4' },
    { name: 'Anya', id: '5' },
  ];
  // TODO: Trim off long character names

  return (
    <div className="characters-panel">
      <p className="characters__header">Characters</p>
      <div className="characters-section__container">
        {tempCharacters.map((character) => (
          <CharacterSectionItem character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
};
export default CharactersPanel;
