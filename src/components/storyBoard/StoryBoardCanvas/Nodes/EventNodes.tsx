import React from 'react';
import { FunctionComponent } from 'react';

type EventNodesProps = {
  data: {
    label: string;
  };
};

const EventNodes: FunctionComponent<EventNodesProps> = ({ data }) => {
  return <div>{data.label}</div>;
};

export default EventNodes;
