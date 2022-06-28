import { Button } from '@blueprintjs/core';
import React, { FormEvent, FormEventHandler, useState } from 'react';
import './EditNodePanel.scss';

type EditNodeForm = {
  title: string;
  desc: string;
};

const EditNodePanel = () => {
  const [formData, setFormData] = useState<EditNodeForm>({
    title: '',
    desc: '',
  });

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    await fetch('http://localhost:8000/storyboard/edit-node', {
      method: 'PUT',
    });
  };

  return (
    <div className="edit-node-panel">
      <p className="header">Edit Event</p>
      <form id="form" className="form" onSubmit={handleFormSubmit}>
        <fieldset className="input-group">
          <label htmlFor="title-input" className="label">
            Title:
          </label>
          <input
            name="title"
            type="text"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
          />
        </fieldset>
        <fieldset className="input-group">
          <label htmlFor="desc-input" className="label">
            Description:
          </label>
          <input
            name="desc"
            type="text"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, desc: e.target.value };
              })
            }
          />
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
