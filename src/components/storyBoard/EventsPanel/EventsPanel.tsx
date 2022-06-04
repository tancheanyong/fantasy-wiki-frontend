import { Button, Card, Icon, IconSize } from '@blueprintjs/core';
import EventCard from './EventCard';
import './EventsPanel.scss';

const EventsPanel = () => {
  return (
    <div className="events-panel">
      <p className="header">Events Backlog</p>
      <div className="cards-roster">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <button className="add-card-btn" type="button">
        <span className="bp4-icon-standard bp4-icon-add"></span>
      </button>
    </div>
  );
};

export default EventsPanel;
