import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CharacterPage() {
  const params = useParams();
  const { name } = params;

  useEffect(() => {
    fetch(`http://localhost:8000/characters/${name}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>CharacterPage {name}</div>;
}

export default CharacterPage;
