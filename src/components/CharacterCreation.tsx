import React, { useState } from 'react';

function CharacterCreation() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleStatus = (statusText: string) => {
    if (statusText === 'Saved') {
      setStatus(`${name} Saved!`);
    } else {
      setStatus('Character already exist!');
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch('http://localhost:8000/characters/character-creation', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, age, description }),
    })
      .then((res) => res.text())
      .then((statusText: string) => handleStatus(statusText));
  };

  return (
    <div>
      <h2>Character Creation</h2>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="input-field">
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            name="age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div className="input-field">
          <label htmlFor="desc">Description: </label>
          <textarea
            name="desc"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default CharacterCreation;
