import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CharacterInfo, deleteObject } from '../../../types';

function CharacterWiki() {
  const params = useParams();
  const { id } = params;
  const [characterInfo, setCharacterInfo] = useState<CharacterInfo>();
  const [deleteStatus, setDeleteStatus] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:8000/characters/wiki/${id}`)
      .then((res) => res.json())
      .then((data: CharacterInfo) => setCharacterInfo(data));
  }, []);

  const handleNavigation = () => {
    setTimeout(() => {
      navigate('/characters');
    }, 2000);
  };

  const deleteCharacter = () => {
    fetch(`http://localhost:8000/characters/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ _id: characterInfo?._id }),
    })
      .then((res) => res.json())
      .then((result: deleteObject) => {
        if (result.deletedCount) {
          setDeleteStatus(`${characterInfo?.name} is successfully deleted.`);
        } else {
          setDeleteStatus(`${characterInfo?.name} has already been deleted`);
        }
      })
      .then(() => handleNavigation());
  };

  return (
    <div>
      <h2>CharacterPage</h2>
      <div>Name: {characterInfo?.name}</div>
      <div>age: {characterInfo?.age.toString()}</div>
      <div>Description: {characterInfo?.description}</div>
      <div>
        <button onClick={deleteCharacter}>Delete this character</button>
        <button>Edit this character</button>
      </div>
      <p>{deleteStatus}</p>
    </div>
  );
}

export default CharacterWiki;
