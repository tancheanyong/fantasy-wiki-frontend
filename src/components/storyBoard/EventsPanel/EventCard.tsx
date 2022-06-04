import { Card, Icon, IconSize } from '@blueprintjs/core';
import { FunctionComponent } from 'react';
import { EventCardInfo } from '../../../../types';
import './EventCard.scss';

type EventCardProps = {
  cardInfo: EventCardInfo;
};

const EventCard: FunctionComponent<EventCardProps> = ({ cardInfo }) => {
  return (
    <Card className="event-card">
      <p className="title">{cardInfo.title}</p>
      <div className="character-roster">
        {cardInfo.characters.map((character) => (
          <Icon
            icon={'person'}
            size={IconSize.LARGE}
            className="character-section__item-icon"
          />
        ))}
      </div>
    </Card>
  );
};

export default EventCard;
