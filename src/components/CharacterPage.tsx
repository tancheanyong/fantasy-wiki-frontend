import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { characterInfo } from '../../types';

function CharacterPage() {
  const params = useParams();
  const { name } = params;
  const [characterInfo, setCharacterInfo] = useState<characterInfo>();

  useEffect(() => {
    fetch(`http://localhost:8000/characters/${name}`)
      .then((res) => res.json())
      .then((data: characterInfo) => setCharacterInfo(data));
  }, []);

  return (
    <div>
      <h2>CharacterPage</h2>
      <div>Name: {characterInfo?.name}</div>
      <div>age: {characterInfo?.age.toString()}</div>
      <div>Description: {characterInfo?.description}</div>
    </div>
  );
}

export default CharacterPage;
