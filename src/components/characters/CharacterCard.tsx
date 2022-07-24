import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterInfo } from '../../../types';
import './scss/CharacterCard.scss';

type CharacterCardProps = {
  character: CharacterInfo;
};

const CharacterCard: FunctionComponent<CharacterCardProps> = ({
  character,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="char-card"
      onClick={() => {
        navigate(`/characters/${character._id}`);
      }}
    >
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
