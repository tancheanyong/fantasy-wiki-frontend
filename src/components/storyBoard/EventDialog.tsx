import { Button, Dialog, InputGroup, Label, TextArea } from '@blueprintjs/core';
import React, { SyntheticEvent, useContext } from 'react';
import { StoryBoardContext } from './StoryBoard';
import './EventDialog.scss';
import axios from 'axios';

type FormElements = HTMLFormControlsCollection & {
  eventTitle: HTMLInputElement;
  eventDesc: HTMLInputElement;
};
type EventFormElements = HTMLFormElement & {
  readonly elements: FormElements;
};

const EventDialog = () => {
  const { eventDialogOpen, openAddEventCard } = useContext(StoryBoardContext);

  const onSubmit = async (e: React.FormEvent<EventFormElements>) => {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    const newEvent = {
      eventTitle: formElements.eventTitle.value,
      eventDesc: formElements.eventDesc.value,
    };
    await axios.post('http://localhost:8000/storyboard/events', newEvent);
  };

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
      <form action="post" className="body" onSubmit={onSubmit}>
        <Label>
          Event Title:
          <InputGroup
            className="event-title"
            placeholder="Event Title"
            name="eventTitle"
          />
        </Label>
        <Label>
          Event Description:
          <TextArea
            className="event-desc"
            placeholder="Event Description"
            fill
            id="event-dialog__event-desc"
            growVertically={false}
            name="eventDesc"
          />
        </Label>
        <Button type="submit">Save</Button>
      </form>
    </Dialog>
  );
};

export default EventDialog;
