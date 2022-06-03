import { Card, Elevation, Button } from '@blueprintjs/core';
import StoryBoardCanvas from './StoryBoardCanvas/StoryBoardCanvas';
import StoryBoardSidePanel from './StoryBoardSidePanel/StoryBoardSidePanel';
import './StoryBoard.scss';
import EventsPanel from './EventsPanel/EventsPanel';
import CharactersPanel from './CharactersPanel/CharactersPanel';

function StoryBoard() {
  return (
    <div className="story-board">
      <EventsPanel />
      <StoryBoardCanvas />
      <CharactersPanel />
    </div>
  );
}

export default StoryBoard;
