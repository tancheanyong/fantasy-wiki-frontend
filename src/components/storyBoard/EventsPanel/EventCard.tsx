import { Card, Icon, IconSize } from '@blueprintjs/core';
import { DragEvent, FunctionComponent } from 'react';
import { EventCardInfo } from '../../../types';
import './EventCard.scss';

type EventCardProps = {
  cardInfo: EventCardInfo;
};

const EventCard: FunctionComponent<EventCardProps> = ({ cardInfo }) => {
  const onDragStart = (e: DragEvent) => {
    e.dataTransfer.setData('eventCardId', cardInfo.id);
  };

  return (
    <Card className="event-card" draggable onDragStart={onDragStart}>
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
