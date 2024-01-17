// BatchList.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const BatchList = ({ batches, onBatchClick }) => {
  return (
    <List>
      {batches.map((batch) => (
        <ListItem button key={batch.id} onClick={() => onBatchClick(batch.id)}>
          <ListItemText primary={batch.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default BatchList;
