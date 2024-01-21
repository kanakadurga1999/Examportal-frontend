// Dashboard.js
import React, { useEffect, useState } from 'react';
import BatchList from '../components/BatchList';
 import StudentList from '../components/StudentList';
import ResultUploadForm from '../features/resultUploadForm/ResultUploadForm';
import EmailForm from '../features/emailform/EmailForm';
import '../components/Login.css';
import axios from '../api/axios';
import { List, ListItem, ListItemText } from '@mui/material';

const Dashboard = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [resultLink, setResultLink] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [batches,setBatches]=useState([]);
  const [ students,setStudents] = useState([])

  // const batches = [
  //   { id: 1, name: 'Batch A' },
  //   { id: 2, name: 'Batch B' },
  //   // Add more batches as needed
  // ];

  // const students = [
  //   { id: 1, name: 'Student 1', email: 'student1@example.com' },
  //   { id: 2, name: 'Student 2', email: 'student2@example.com' },
  //   // Add more students as needed
  // ];

  const handleBatchClick = (batchName) => {
   
    setSelectedBatch(batchName);

    axios.get(`/api/v1/dash/students?batch=${batchName}`)
    .then(response =>setStudents(response.data))
    .catch(error=>console.log(error))
    
  };

  const handleUploadResult = (link) => {
    // Handle result upload logic here
    setResultLink(link);
  };

  const handleSendEmail = (email) => {
    // Handle email sending logic here
    setRecipientEmail(email);
  };

  useEffect(()=>{
    axios.get('/api/v1/dash/batches').then(response => setBatches(response.data)
    )
    console.log(batches)
    
    
  },[])

  return (
    <>
     {/* <h1>Test admin Dashboard</h1>
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
    </div>  */}


 <div  className='outer'> 
      <h1>Admin Page</h1>

      <div>
        <h2>Batches</h2>
        <div>
          <List>
           {batches.map(batch=>(
             <ListItem button key={batch} onClick={() => handleBatchClick(batch)}>
             <ListItemText primary={batch}></ListItemText>
           </ListItem>
           )) }
          </List>
          {/* {batches.map(batch => (
            <button key={batch} onClick={() => handleBatchClick(batch)}>
              {batch}
            </button>
          ))} */}
        </div>
      </div>

      <div>
        <h2>Students</h2>
        {selectedBatch ? (
          <div>
            <p>Selected Batch: {selectedBatch}</p>
            <ul>
              {students.map(student => (
                <li key={student._id}>
                  Name: {student.name}, Email: {student.email}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Please select a batch to view students.</p>
        )}
      </div>
      <ResultUploadForm onUpload={handleUploadResult} />
          <EmailForm onSendEmail={handleSendEmail} />
    </div>
    </>
  );
};

export default Dashboard;
