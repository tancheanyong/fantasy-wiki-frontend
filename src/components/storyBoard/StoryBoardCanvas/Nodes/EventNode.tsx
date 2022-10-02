import './EventNode.scss';
import { FunctionComponent } from 'react';
import { EventNodeData } from '../types';

type EventNodeProps = {
  data: EventNodeData;
};

const EventNode: FunctionComponent<EventNodeProps> = ({ data }) => {
  return (
    <div className="event-node">
      <p className="header">{data.title}</p>
      <div className="characters"></div>
    </div>
  );
};

export default EventNode;
