import { Card, Icon, IconSize } from '@blueprintjs/core';
import './EventCard.scss';

const EventCard = () => {
  return (
    <Card className="event-card">
      <p className="title">Event 1</p>
      <div className="character-roster">
        <Icon
          icon={'person'}
          size={IconSize.LARGE}
          className="character-section__item-icon"
        />
        <Icon
          icon={'person'}
          size={IconSize.LARGE}
          className="character-section__item-icon"
        />
        <Icon
          icon={'person'}
          size={IconSize.LARGE}
          className="character-section__item-icon"
        />
      </div>
    </Card>
  );
};

export default EventCard;
