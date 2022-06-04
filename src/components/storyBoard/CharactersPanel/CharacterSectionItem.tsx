import React, { DragEvent, FunctionComponent } from 'react';
import { Icon, IconSize } from '@blueprintjs/core';

type CharacterInfoType = {
  id: string;
  name: string;
};
type CharacterType = {
  character: CharacterInfoType;
};

const CharacterSectionItem: FunctionComponent<CharacterType> = ({
  character,
}) => {
  const onDragStart = (e: DragEvent) => {
    e.dataTransfer.setData('characterId', character.id);
    e.dataTransfer.setData('characterName', character.name);
  };

  return (
    <div
      className="character-section__item"
      key={character.id}
      draggable={true}
      onDragStart={onDragStart}
    >
      <Icon
        icon={'person'}
        size={IconSize.LARGE}
        className="character-section__item-icon"
      />
      <p className="character-section__item-text">{character.name}</p>
    </div>
  );
};

export default CharacterSectionItem;
