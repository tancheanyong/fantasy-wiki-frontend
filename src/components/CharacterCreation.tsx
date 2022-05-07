import React, { useState } from 'react';

function CharacterCreation() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch('http://localhost:8000/characters/character-creation', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, age, description }),
    })
      .then((res) => res.json())
      .then((data) => console.log('result: ', data.response));
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
    </div>
  );
}

export default CharacterCreation;
