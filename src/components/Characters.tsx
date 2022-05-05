import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './characters.scss';

function Characters() {
  const [characters, setCharacters] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/characters')
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  return (
    <div className="char-page">
      <h2>Characters List</h2>
      <ul>
        {characters.map((character) => (
          <li key={Math.random()}>
            <Link to={`/characters/${character}`}>{character}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;
