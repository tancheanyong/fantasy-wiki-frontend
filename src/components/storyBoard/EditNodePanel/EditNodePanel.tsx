import React from 'react';
import './EditNodePanel.scss';

const EditNodePanel = () => {
  return (
    <div className="edit-node-panel">
      <p className="header">EditNodePanel</p>
      <form action="" className="form">
        <div className="input-group">
          <label htmlFor="title-input" className="label">
            Title:
          </label>
          <input name="title-input" type="text" className="input" />
        </div>
        <div className="input-group">
          <label htmlFor="desc-input" className="label">
            Description:
          </label>
          <input name="desc-input" type="text" className="input" />
        </div>
      </form>
    </div>
  );
};

export default EditNodePanel;
