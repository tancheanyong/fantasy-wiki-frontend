import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CharacterPage() {
  const params = useParams();
  const { name } = params;
  const [characterInfo, setCharacterInfo] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8000/characters/${name}`)
      .then((res) => res.json())
      .then((data) => setCharacterInfo(JSON.stringify(data)));
  }, []);

  return (
    <div>
      CharacterPage <div>{characterInfo}</div>
    </div>
  );
}

export default CharacterPage;
