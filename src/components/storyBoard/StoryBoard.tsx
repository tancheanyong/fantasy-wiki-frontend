import { Card, Elevation, Button } from '@blueprintjs/core';
import StoryBoardCanvas from './StoryBoardCanvas/StoryBoardCanvas';
import './StoryBoard.scss';
import EventsPanel from './EventsPanel/EventsPanel';
import CharactersPanel from './CharactersPanel/CharactersPanel';
import EditNodePanel from './EditNodePanel/EditNodePanel';

function StoryBoard() {
  return (
    <div className="story-board">
      <EventsPanel />
      <StoryBoardCanvas />
      <EditNodePanel />
    </div>
  );
}

export default StoryBoard;
