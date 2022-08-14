import { Dialog } from '@blueprintjs/core';
import React, { useContext } from 'react';
import { StoryBoardContext } from './StoryBoard';

const EventDialog = () => {
  const { eventDialogOpen } = useContext(StoryBoardContext);
  return <Dialog isOpen={eventDialogOpen}>Hi</Dialog>;
};

export default EventDialog;
