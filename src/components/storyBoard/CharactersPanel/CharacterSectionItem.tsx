import React, { DragEvent, FunctionComponent } from 'react';
import { Icon, IconSize } from '@blueprintjs/core';
import { CharacterInfo } from '../../../types';

type CharacterItemProps = {
  character: CharacterInfo;
};

const CharacterSectionItem: FunctionComponent<CharacterItemProps> = ({
  character,
}) => {
  const onDragStart = (e: DragEvent) => {
    e.dataTransfer.setData('characterId', character._id);
    e.dataTransfer.setData('characterName', character.name);
  };

  return (
    <div
      className="character-section__item"
      key={character._id}
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
