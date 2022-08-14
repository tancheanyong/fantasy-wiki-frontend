import { Button, Dialog, InputGroup, Label, TextArea } from '@blueprintjs/core';
import React, { useContext } from 'react';
import { StoryBoardContext } from './StoryBoard';
import './EventDialog.scss';

const EventDialog = () => {
  const { eventDialogOpen, openAddEventCard } = useContext(StoryBoardContext);
  return (
    <Dialog
      isOpen={eventDialogOpen}
      className="event-dialog"
      canOutsideClickClose
    >
      <div className="header">
        <div className="event-title" contentEditable>
          New Event
        </div>
        <Button
          icon={'cross'}
          minimal
          onClick={() => openAddEventCard(false)}
        />
      </div>
      <form action="post" className="body">
        <Label>
          Event Title:
          <InputGroup className="event-title" placeholder="Event Title" />
        </Label>
        <Label>
          Event Description:
          <TextArea
            className="event-desc"
            placeholder="Event Description"
            fill
            id="event-dialog__event-desc"
            growVertically={false}
          />
        </Label>
      </form>
    </Dialog>
  );
};

export default EventDialog;
