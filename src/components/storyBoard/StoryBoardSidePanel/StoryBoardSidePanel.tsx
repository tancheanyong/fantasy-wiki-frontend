import { Card, Icon, IconSize } from '@blueprintjs/core';
import './StoryBoardSidePanel.scss';

function StoryBoardSidePanel() {
  const tempCharacters = [
    { name: 'Johnny', id: '1' },
    { name: 'Ba', id: '2' },
    { name: 'Fury', id: '3' },
    { name: 'Anastasia', id: '4' },
    { name: 'Anya', id: '5' },
  ];
  // TODO: Trim off long character names

  return (
    <div className="side-panel__container">
      <p className="side-panel__header">Characters</p>
      <div className="characters-section__container">
        {tempCharacters.map((character) => (
          <div
            className="character-section__item"
            key={character.id}
            draggable={true}
          >
            <Icon
              icon={'person'}
              size={IconSize.LARGE}
              className="character-section__item-icon"
            />
            <p className="character-section__item-text">{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryBoardSidePanel;
