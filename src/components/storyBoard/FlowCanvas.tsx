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

function FlowCanvas() {
  const initialElements = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Input Node' },
      position: { x: 500, y: 150 },
    },
    {
      id: '2',
      type: 'default',
      data: { label: 'Default Node' },
      position: { x: 400, y: 250 },
    },
    {
      id: '3',
      type: 'output',
      data: { label: 'Output Node' },
      position: { x: 400, y: 350 },
    },
    {
      id: 'c1',
      style: {
        background: '#454052',
        width: 200,
        color: '#fff',
        fontSize: '20px',
        fontFamily: 'Helvetica',
        boxShadow: '5px 5px 5px 0px rgba(0,0,0,.10)',
      },
      data: { label: 'My custom node' },
      position: { x: 500, y: 250 },
    },
    {
      id: 'c2',
      style: {
        background: '#fff',
        width: 400,
        color: '#454052',
        fontSize: '25px',
        fontFamily: 'Helvetica',
        boxShadow: '5px 5px 5px 0px rgba(0,0,0,.10)',
      },
      data: { label: 'My second custom node 😉' },
      position: { x: 550, y: 300 },
    },
  ];

  const flowStyles = { width: '100%', height: '500px' };

  const [elements, setElements] = useState<Elements>(initialElements);

  const onLoad = (reactFlowInstance: OnLoadParams) =>
    reactFlowInstance.fitView();

  const onElementsRemove = (elementsToRemove: Elements) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onConnect = (params: Edge | Connection) =>
    setElements((els) => addEdge(params, els));

  // What is this for?
  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  };

  return (
    <ReactFlow
      elements={elements}
      style={flowStyles}
      onLoad={onLoad}
      onElementsRemove={onElementsRemove}
      deleteKeyCode={46}
      onConnect={onConnect}
      onDragOver={onDragOver}
    />
  );
}

export default FlowCanvas;
