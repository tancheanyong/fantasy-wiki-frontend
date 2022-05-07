import React, { useState } from 'react';

function CharacterCreation() {
  const [input, setInput] = useState('');

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch('http://localhost:8000/characters/character-creation', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name: input }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('result: ', result);
      });
  };

  return (
    <div>
      <h2>Character Creation</h2>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} value={input} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CharacterCreation;
