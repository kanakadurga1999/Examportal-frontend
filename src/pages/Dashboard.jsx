// Dashboard.js
import React, { useEffect, useState } from 'react';
import BatchList from '../components/BatchList';
 import StudentList from '../components/StudentList';
import ResultUploadForm from '../features/resultUploadForm/ResultUploadForm';
import EmailForm from '../features/emailform/EmailForm';
import '../components/Login.css';
import axios from 'axios';

const Dashboard = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [resultLink, setResultLink] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');

  const batches = [
    { id: 1, name: 'Batch A' },
    { id: 2, name: 'Batch B' },
    // Add more batches as needed
  ];

  const students = [
    { id: 1, name: 'Student 1', email: 'student1@example.com' },
    { id: 2, name: 'Student 2', email: 'student2@example.com' },
    // Add more students as needed
  ];

  const handleBatchClick = (batchId) => {
    console.log(batchId);
    setSelectedBatch(batchId);
  };

  const handleUploadResult = (link) => {
    // Handle result upload logic here
    setResultLink(link);
  };

  const handleSendEmail = (email) => {
    // Handle email sending logic here
    setRecipientEmail(email);
  };

//   useEffect(()=>{
//     axios.get('http://localhost:3500/')
//   },[])

  return (
    <>
    <h1>Test admin Dashboard</h1>
    <div className='wrapper'>
        
      <BatchList batches={batches} onBatchClick={handleBatchClick} />
      {selectedBatch && (
        <>
          <h2>Student List for {selectedBatch}</h2>
          <StudentList students={students} />
          <ResultUploadForm onUpload={handleUploadResult} />
          <EmailForm onSendEmail={handleSendEmail} />
        </>
      )}                          
    </div>
    </>
  );
};

export default Dashboard;
