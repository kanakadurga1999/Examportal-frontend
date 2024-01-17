// ResultUploadForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ResultUploadForm = ({ onUpload }) => {
  const [resultLink, setResultLink] = useState('');

  const handleUpload = () => {
    // Add validation if needed
    onUpload(resultLink);
  };

  return (
    <div>
      <TextField
        label="Result Link"
        variant="outlined"
        value={resultLink}
        onChange={(e) => setResultLink(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
};

export default ResultUploadForm;
