import React, { useEffect } from 'react'
import './addStudent.css'
import { Container, Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select, Grid, Paper} from "@mui/material";
import { useForm } from './useForm';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/UseAxiosPrivate';


const batches = [
    'KKEM March CSA',
    'KKEM March DSA',
    'KKEM March MLAI',
    'KKEM March FSD',
    'KKEM March ST',
  ];

const AddStudent = () => {
    const [value, handleChange] = useForm({
      Id:'',
        name: '',
        phoneNumber: '',

        email: '',
        dob: '',
        batch: '',
        gender: '',
        
    })

    const navigate = useNavigate();

    const axiosPrivate = useAxiosPrivate();

    useEffect(()=> {
      if(!localStorage.getItem('accessToken')){
        navigate('/')
      }
    },[])


    const submitHandler = async () => {
const Id=localStorage.getItem('Id')

console.log(Id);
      console.log(value);
      console.log(value);

      // Validation for Name
      if (value.name === "") {
        toast.error('Please enter a Name', { position: "top-right" });
        return;
      }
      
      // Validation for Phone Number
      if (value.phoneNumber === "") {
        toast.error('Phone Number is mandatory', { position: "top-right" });
        return;
      }
      
      // Check if Phone Number contains only numbers
      if (!/^\d+$/.test(value.phoneNumber)) {
        toast.error('Phone Number must contain only numbers', { position: "top-right" });
        return;
      }
      
      // Validation for Email
      if (value.email === "") {
        toast.error('Email is mandatory', { position: "top-right" });
        return;
      }
      
      // Check if Email is in the correct format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.email)) {
        toast.error('Invalid Email format', { position: "top-right" });
        return;
      }
      
      // Validation for Batch
      if (value.batch === "") {
        toast.error('Batch is mandatory', { position: "top-right" });
        return;
      }
      
      // Validation for Gender
      if (value.gender === "") {
        toast.error('Gender is mandatory', { position: "top-right" });
        return;
      }
      
   
      
      

        value.Id=Id
        await axiosPrivate.post('/api/v1/dash/studentprofiles', value)
        .then((response) => {
            toast.success(response.data.message, {position:"top-right"})
            navigate('/dash/students')
        }).catch(error => console.log(error))
    }


  return (
    <>
     <div className="outer">
     <Container>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
        <Grid>
        <Typography variant="h4" gutterBottom>
          Student Dashboard
        </Typography>
        </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <TextField variant="outlined" required label="Name" name='name' value={value.name} onChange={handleChange} fullWidth />

              </Grid>
              <Grid item xs={12}>
              <TextField variant="outlined" required label="PhoneNumber" name='phoneNumber' value={value.phoneNumber} onChange={handleChange} fullWidth />

              </Grid>
              <Grid item xs={12}>
              <TextField variant="outlined" required label="email" name='email' value={value.email} onChange={handleChange} fullWidth />

              </Grid>
              <Grid item xs={12}>
              <TextField variant="outlined" required label="dob" name='dob' value={value.dob} onChange={handleChange} fullWidth />

              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Batch Name</InputLabel>
                  <Select
                  name='batch'
                    value={value.batch}
                    onChange={ handleChange}
                    required
                  >
                    {batches.map((batch) => (
                      <MenuItem key={batch} value={batch}>
                        {batch}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select
                  name='gender'
                    value={value.gender}
                    onChange={ handleChange}
                    required
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" onClick={submitHandler}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          
        
          {/* <Typography variant="h6">
            Form submitted successfully. You cannot edit the form anymore.
          </Typography> */}
        
      </Paper>
    </Container>
        
      </div>
    </>
  )
}

export default AddStudent