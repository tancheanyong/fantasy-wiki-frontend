import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { characterInfo, deleteObject } from '../../types';

function CharacterPage() {
  const params = useParams();
  const { name } = params;
  const [characterInfo, setCharacterInfo] = useState<characterInfo>();
  const [deleteStatus, setDeleteStatus] = useState<string>();

  useEffect(() => {
    fetch(`http://localhost:8000/characters/${name}`)
      .then((res) => res.json())
      .then((data: characterInfo) => setCharacterInfo(data));
  }, []);

  const deleteCharacter = () => {
    fetch(`http://localhost:8000/characters/${name}`, {
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
      });
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

export default CharacterPage;
