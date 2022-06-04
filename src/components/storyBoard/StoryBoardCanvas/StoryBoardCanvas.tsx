import { useState, DragEvent } from 'react';
import ReactFlow, {
  Elements,
  Controls,
  MiniMap,
  removeElements,
  addEdge,
  Edge,
  Connection,
  OnLoadParams,
} from 'react-flow-renderer';
import EventNode from './Nodes/EventNode';
import './StoryBoardCanvas.scss';

function StoryBoardCanvas() {
  const initialElements = [
    {
      id: 'firstEvent',
      type: 'event',
      data: { label: 'First Event' },
      position: { x: 500, y: 150 },
    },
  ];

  const nodeTypes = {
    event: EventNode,
  };

  const flowStyles = { width: '100%', height: '500px' };

  const [elements, setElements] = useState<Elements>(initialElements);
  const [rfInstance, setRfInstance] = useState<OnLoadParams | null>(null);

  const onLoad = (reactFlowInstance: OnLoadParams) => {
    setRfInstance(reactFlowInstance);
    reactFlowInstance.fitView();
  };
  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  };
  const onDrop = (event: DragEvent) => {
    event.preventDefault();

    if (rfInstance) {
      const id = event.dataTransfer.getData('characterId');
      const name = event.dataTransfer.getData('characterName');
      const position = rfInstance.project({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode: any = {
        id,
        type: 'event',
        position,
        data: { id, label: name },
      };

      setElements((es) => es.concat(newNode));
    }
  };
  const onElementsRemove = (elementsToRemove: Elements) => {
    setElements((els) => removeElements(elementsToRemove, els));
  };

  const onConnect = (params: Edge | Connection) => {
    setElements((els) => addEdge(params, els));
  };

  return (
    <ReactFlow
      elements={elements}
      nodeTypes={nodeTypes}
      style={flowStyles}
      onLoad={onLoad}
      onElementsRemove={onElementsRemove}
      deleteKeyCode={46}
      onConnect={onConnect}
      onDragOver={onDragOver}
      snapToGrid={true}
      onDrop={onDrop}
      defaultZoom={0.5}
    >
      <MiniMap />
    </ReactFlow>
  );
}

export default StoryBoardCanvas;
