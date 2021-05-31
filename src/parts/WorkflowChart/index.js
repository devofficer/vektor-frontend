import React, { useState, useCallback, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Plus } from 'react-feather';
import ReactFlow, {
  ReactFlowProvider,
  removeElements,
  addEdge,
  Background
} from 'react-flow-renderer';

const useStyles = makeStyles((theme) => ({
  plusIcon: {
    color: theme.custom.palette.lightGreen,
  },
  chart: {
    height: 450,
    borderRadius: theme.spacing(1),
    margin: theme.spacing(2, 0)
  }
}));

const getNodeId = () => `randomnode_${+new Date()}`;

const initialElements = [
  { id: '1', type: 'input', sourcePosition: 'right', targetPosition: 'left', data: { label: 'Node 1' }, position: { x: 100, y: 100 } },
  { id: '2', sourcePosition: 'right', targetPosition: 'left', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
  { id: 'e1-2', type: 'smoothstep', source: '1', target: '2' },
];

const WorkflowChart = () => {
  const classes = useStyles()

  const [rfInstance, setRfInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onConnect = (params) =>
    setElements((els) =>
      addEdge({ ...params, type: 'smoothstep' }, els)
    );

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      console.log('onSave => ', flow)
    }
  }, [rfInstance]);

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Added node' },
      position: {
        x: Math.random() * 300 - 100,
        y: Math.random() * 300,
      },
    };
    setElements((els) => els.concat(newNode));
  }, [setElements]);

  return (
    <>
      <div className={classes.chart}>
        <ReactFlowProvider>
          <ReactFlow
            elements={elements}
            onElementsRemove={onElementsRemove}
            onConnect={onConnect}
            onLoad={setRfInstance}
          >
            <Background
              variant="dots"
              gap={12}
              size={1}
            />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
      <Button onClick={onAdd} >
        <Plus className={classes.plusIcon} />
        Add Deliverable
      </Button>
    </>
  );
};

export default memo(WorkflowChart);