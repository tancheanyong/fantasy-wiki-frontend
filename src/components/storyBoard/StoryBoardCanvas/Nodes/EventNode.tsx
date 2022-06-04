import './EventNode.scss';
import { FunctionComponent } from 'react';

type EventNodeProps = {
  data: {
    label: string;
  };
};

const EventNode: FunctionComponent<EventNodeProps> = ({ data }) => {
  return (
    <div className="event-node">
      <p className="header">{data.label}</p>
      <div className="characters"></div>
    </div>
  );
};

export default EventNode;
