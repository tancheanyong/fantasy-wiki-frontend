import { Card, Elevation, Button } from '@blueprintjs/core';
import StoryBoardCanvas from './StoryBoardCanvas/StoryBoardCanvas';
import './StoryBoard.scss';
import EventsPanel from './EventsPanel/EventsPanel';
import EditNodePanel from './EditNodePanel/EditNodePanel';
import CharactersPanel from './CharactersPanel/CharactersPanel';
import EventDialog from './EventDialog';
import { createContext, useState } from 'react';

export const StoryBoardContext = createContext<any>({
  eventDialogOpen: false,
  openAddEventCard: () => {},
});

function StoryBoard() {
  const [eventDialogOpen, setEventDialogOpen] = useState(false);

  const openAddEventCard = (open: boolean) => {
    setEventDialogOpen(open);
  };

  return (
    <StoryBoardContext.Provider
      value={{
        eventDialogOpen: eventDialogOpen,
        openAddEventCard: openAddEventCard,
      }}
    >
      <div className="story-board">
        <EventsPanel />
        <StoryBoardCanvas />
        <div className="right-panel">
          <EditNodePanel />
          <CharactersPanel />
        </div>
      </div>
      <EventDialog />
    </StoryBoardContext.Provider>
  );
}

export default StoryBoard;
