import { Button, Card, Icon, IconSize } from '@blueprintjs/core';
import { useState } from 'react';
import EventCard from './EventCard';
import './EventsPanel.scss';
import nextId from 'react-id-generator';
import { EventCardInfo } from '../../../../types';

const EventsPanel = () => {
  const [eventCardInfos, setEventCardInfos] = useState<Array<EventCardInfo>>([
    { id: '1', title: 'Event 1', characters: ['johnny', 'queen'] },
  ]);

  return (
    <div className="events-panel">
      <p className="header">Events Backlog</p>
      <div className="cards-roster">
        {eventCardInfos.map((cardInfo) => (
          <EventCard cardInfo={cardInfo} key={cardInfo.id} />
        ))}
      </div>
      <button className="add-card-btn" type="button">
        <span className="bp4-icon-standard bp4-icon-add"></span>
      </button>
    </div>
  );
};

export default EventsPanel;
