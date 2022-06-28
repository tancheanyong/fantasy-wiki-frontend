import { Card, Elevation, Button } from '@blueprintjs/core';
import StoryBoardCanvas from './StoryBoardCanvas/StoryBoardCanvas';
import './StoryBoard.scss';
import EventsPanel from './EventsPanel/EventsPanel';
import EditNodePanel from './EditNodePanel/EditNodePanel';
import CharactersPanel from './CharactersPanel/CharactersPanel';

function StoryBoard() {
  return (
    <div className="story-board">
      <EventsPanel />
      <StoryBoardCanvas />
      <div className="right-panel">
        <EditNodePanel />
        <CharactersPanel />
      </div>
    </div>
  );
}

export default StoryBoard;
