import React, { useEffect, useState } from 'react';

function Characters() {
  const [characters, setCharacters] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/characters')
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  return (
    <div>
      <h2>Characters List</h2>
      <ul>
        {characters.map((character) => (
          <li key={Math.random()}>{character}</li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;
