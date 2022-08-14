import { Button, Card, Icon, IconSize } from '@blueprintjs/core';
import { DragEvent, useContext, useState } from 'react';
import EventCard from './EventCard';
import './EventsPanel.scss';
import nextId from 'react-id-generator';
import { EventCardInfo } from '../../../types';
import { StoryBoardContext } from '../StoryBoard';

const EventsPanel = () => {
  const { openAddEventCard } = useContext<{ openAddEventCard: Function }>(
    StoryBoardContext
  );

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
      {/* TODO:  Make this functional */}
      {/* <Button
        className="add-card-btn"
        icon={'add'}
        onClick={() => openAddEventCard(true)}
      ></Button> */}
      <button
        className="add-card-btn"
        type="button"
        onClick={() => openAddEventCard(true)}
      >
        <span className="bp4-icon-standard bp4-icon-add"></span>
      </button>
    </div>
  );
};

export default EventsPanel;
