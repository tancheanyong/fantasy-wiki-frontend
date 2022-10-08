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

  return (
    <div
      className="event-node"
      onMouseOver={() => setShowEditBtn(true)}
      onMouseLeave={() => {
        setShowEditBtn(false);
      }}
    >
      <CustomBtn
        innerElement={'hi'}
        showBtn={showEditBtn}
        customClass="edit-btn"
        minimal
      />
      <p className="header">{data.title}</p>
      <div className="characters"></div>
    </div>
  );
};

export default EventNode;
