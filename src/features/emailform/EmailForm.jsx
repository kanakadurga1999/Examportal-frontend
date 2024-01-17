// EmailForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const EmailForm = ({ onSendEmail }) => {
  const [recipientEmail, setRecipientEmail] = useState('');

  const handleSendEmail = () => {
    // Add validation if needed
    onSendEmail(recipientEmail);
  };

  return (
    <div>
      <TextField
        label="Recipient's Email"
        variant="outlined"
        value={recipientEmail}
        onChange={(e) => setRecipientEmail(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSendEmail}>
        Send Email
      </Button>
    </div>
  );
};

export default EmailForm;
