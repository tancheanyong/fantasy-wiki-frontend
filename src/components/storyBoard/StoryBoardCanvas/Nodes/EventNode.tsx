import './EventNode.scss';
import { FunctionComponent, useState } from 'react';
import { EventNodeData } from '../types';
import { Button } from '@blueprintjs/core';
import CustomBtn from '../commons/CustomBtn';

type EventNodeProps = {
  data: EventNodeData;
};

const EventNode: FunctionComponent<EventNodeProps> = ({ data }) => {
  const [showEditBtn, setShowEditBtn] = useState<boolean>(false);
  const [expandNode, setExpandNode] = useState<boolean>(false);

  const onMouseOver = () => {
    setShowEditBtn(true);
    setExpandNode(true);
  };

  const onMouseLeave = () => {
    setShowEditBtn(false);
    setExpandNode(false);
  };

  return (
    <div
      className="event-node"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <CustomBtn
        innerElement={'hi'}
        showBtn={showEditBtn}
        customClass="edit-btn"
        minimal
      />
      <p className="header">{data.title}</p>
      {expandNode ? (
        <div className="expanded-section">
          <div className="event-desc">{data.description}</div>
          <div className="characters">{data.characters}</div>
        </div>
      ) : null}
    </div>
  );
};

export default EventNode;
