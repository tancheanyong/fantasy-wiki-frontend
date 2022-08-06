import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CharacterWikiType } from '../../../types';

function CharacterWiki() {
  const params = useParams();
  const { id } = params;
  const [characterInfo, setCharacterInfo] = useState<CharacterWikiType>();
  const [deleteStatus, setDeleteStatus] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/characters/wiki/${id}`)
      .then((res) => res.json())
      .then((data: CharacterWikiType) => {
        setCharacterInfo(data);
      });
  }, []);

  const handleNavigation = () => {
    navigate('/characters');
  };

  const deleteCharacter = () => {
    fetch(`http://localhost:8000/characters/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ _id: characterInfo?.characterId }),
    }).then(() => handleNavigation());
  };

  return (
    <div>
      <h2>CharacterPage</h2>
      <div>Name: {characterInfo?.characterInfo.name}</div>
      <div>age: {characterInfo?.characterInfo.age}</div>
      <div>Description: {characterInfo?.characterInfo.description}</div>
      <div>
        <button onClick={deleteCharacter}>Delete this character</button>
        <button>Edit this character</button>
      </div>
      <p>{deleteStatus}</p>
    </div>
  );
}

export default CharacterWiki;
