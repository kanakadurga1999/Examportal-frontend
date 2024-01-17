// StudentList.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const StudentList = ({ students }) => {
  return (
    <List>
      {students.map((student) => (
        <ListItem key={student.id}>
          <ListItemText primary={student.name} secondary={student.email} />
        </ListItem>
      ))}
    </List>
  );
};

export default StudentList;
