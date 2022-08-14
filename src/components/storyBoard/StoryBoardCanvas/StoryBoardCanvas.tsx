import { useState, DragEvent, MouseEvent } from 'react';
import ReactFlow, {
  Elements,
  Controls,
  MiniMap,
  removeElements,
  addEdge,
  Edge,
  Connection,
  OnLoadParams,
  Node,
} from 'react-flow-renderer';
import EventNode from './Nodes/EventNode';
import './StoryBoardCanvas.scss';
import nextId from 'react-id-generator';
import { Button } from '@blueprintjs/core';
import { EventCardInfo } from '../../../types';

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
    reactFlowInstance.setTransform({ x: 100, y: 50, zoom: 1 });
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
      const id = event.dataTransfer.getData('eventCardId');
      const nodeId = `node_${nextId()}`;
      const position = rfInstance.project({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode: any = {
        id: nodeId,
        type: 'event',
        position,
        data: { label: nodeId },
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
  const onNodeDragStop = (e: MouseEvent, node: Node) => {
    setElements((elements: any) => {
      return elements.map((el: EventCardInfo) => {
        if (el.id === node.id) {
          return { ...el, position: node.position };
        } else {
          return el;
        }
      });
    });
  };
  const handleSaveStoryboard = async (e: MouseEvent) => {
    await fetch('http://localhost:8000/storyboard/save', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(elements),
    });
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
      onNodeDragStop={onNodeDragStop}
    >
      <MiniMap />
      <Button className="save-btn" type="button" onClick={handleSaveStoryboard}>
        SaveStoryBoardBtn
      </Button>
    </ReactFlow>
  );
}

export default StoryBoardCanvas;
