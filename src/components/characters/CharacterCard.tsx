import React, { FunctionComponent } from 'react';
import { CharacterInfo } from '../../../types';
import './scss/CharacterCard.scss';

type CharacterCardProps = {
  character: CharacterInfo;
};

const CharacterCard: FunctionComponent<CharacterCardProps> = ({
  character,
}) => {
  return (
    <div className="char-card">
      <div className="char-pic__container">
        <img
          className="char-pic"
          src={require('../../assets/icons/defaultImg.webp')}
          alt=""
        />
      </div>
      <p className="char-name">{character.name}</p>
      <p className="char-desc">{character.description}</p>
    </div>
  );
};

export default CharacterCard;
