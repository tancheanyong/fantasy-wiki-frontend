import { Card, Elevation, Button } from '@blueprintjs/core';
import StoryBoardCanvas from './StoryBoardCanvas/StoryBoardCanvas';
import StoryBoardSidePanel from './StoryBoardSidePanel/StoryBoardSidePanel';
import './StoryBoard.scss';

function StoryBoard() {
  return (
    <div className="story-board">
      <StoryBoardCanvas />
      <Card elevation={Elevation.THREE} className="story-board__side-panel">
        <StoryBoardSidePanel />
      </Card>
    </div>
  );
}

export default StoryBoard;
