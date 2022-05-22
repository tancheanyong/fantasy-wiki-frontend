import React, { FunctionComponent } from 'react';
import { Card, Icon, IconSize } from '@blueprintjs/core';

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
  return (
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
  );
};

export default CharacterSectionItem;
