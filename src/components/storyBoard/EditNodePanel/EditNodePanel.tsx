import { Button } from '@blueprintjs/core';
import React, { FormEvent, FormEventHandler } from 'react';
import './EditNodePanel.scss';

type EditNodeForm = {
  title: { value: string };
  desc: { value: string };
};

const EditNodePanel = () => {
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, desc } = e.target as typeof e.target & EditNodeForm;
    console.log(title.value);

    await fetch('http://localhost:8000/storyboard/edit-node', {
      method: 'PUT',
    });
  };
  return (
    <div className="edit-node-panel">
      <p className="header">EditNodePanel</p>
      <form id="form" className="form" onSubmit={handleFormSubmit}>
        <fieldset className="input-group">
          <label htmlFor="title-input" className="label">
            Title:
          </label>
          <input name="title" type="text" className="input" />
        </fieldset>
        <fieldset className="input-group">
          <label htmlFor="desc-input" className="label">
            Description:
          </label>
          <input name="desc" type="text" className="input" />
        </fieldset>
        <div className="characters-panel">characters</div>
      </form>
      <Button type="submit" className="save-btn" form="form">
        Save
      </Button>
    </div>
  );
};

export default EditNodePanel;
