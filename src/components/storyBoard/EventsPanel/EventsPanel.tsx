import { Card } from '@blueprintjs/core';
import EventCard from './EventCard';
import './EventsPanel.scss';

const EventsPanel = () => {
  return (
    <div className="events-panel">
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default EventsPanel;
