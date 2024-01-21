import React, { useEffect, useState } from 'react'
import './addStudent.css'
import { Container, Typography, TextField, Button, MenuItem, FormControl, InputLabel, Grid, Paper} from "@mui/material";
import { useForm } from './useForm';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/UseAxiosPrivate';
import axios from '../../api/axios';

import Select from '@mui/material/Select';



const batches = [
    'KKEM March CSA',
    'KKEM March DSA',
    'KKEM March MLAI',
    'KKEM March FSD',
    'KKEM March ST',
  ];

const AddStudent = () => {
  const[id,setId]=useState('')
  const [name,setName]= useState('')
  const [phone_number, setphonenumber]= useState('')
  const[email,setEmail]=useState('')
  const[dob,setDob]=useState('')
  const[batch_name, setBatch]=useState('')
  const[gender, setGender]=useState('')
   const options=[
     {value: "Male",label:"MALE"},
     {value: "Female",label:"FEMALE"},
     {value: "other",label:"OTHER"}
   ]
  // function handleSelect(event){
  //   setGender(event.target.gender)
  
    // const [value, handleChange] = useForm({
    //   id:'',
    //     name: '',
    //     phone_number: '',

    //     email: '',
    //     dob: '',
    //     batch_name: '',
    //     gender: ''
        
    // })

    const navigate = useNavigate();

    const axiosPrivate = useAxiosPrivate();

    useEffect(()=> {
      if(!localStorage.getItem('accessToken')){
        navigate('/')
      }
      const userid=localStorage.getItem('Id')
      setId(userid)
    },[])


    const submitHandler = async () => {
      


console.log('Form Data:', {
  id,
  name,
  phone_number,
  email,
  dob,
  batch_name,
  gender,
});

 console.log(id);
      

      // Validation for Name
      // if (value.name === "") {
      //   toast.error('Please enter a Name', { position: "top-right" });
      //   return;
      // }
      
      // Validation for Phone Number
      // if (value.phoneNumber === "") {
      //   toast.error('Phone Number is mandatory', { position: "top-right" });
      //   return;
      // }
      
      // // Check if Phone Number contains only numbers
      // if (!/^\d+$/.test(value.phoneNumber)) {
      //   toast.error('Phone Number must contain only numbers', { position: "top-right" });
      //   return;
      // }
      
      // // Validation for Email
      // if (value.email === "") {
      //   toast.error('Email is mandatory', { position: "top-right" });
      //   return;
      // }
      
      // // Check if Email is in the correct format
      // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // if (!emailRegex.test(value.email)) {
      //   toast.error('Invalid Email format', { position: "top-right" });
      //   return;
      // }
      
      // // Validation for Batch
      // if (value.batch === "") {
      //   toast.error('Batch is mandatory', { position: "top-right" });
      //   return;
      // }
      
      // // Validation for Gender
      // if (value.gender === "") {
      //   toast.error('Gender is mandatory', { position: "top-right" });
      //   return;
      // }
      
   
      
      

        //  value.id=id
        // console.log(value)
        await axios.post('/api/v1/dash/studentprofiles/create', {id,name,phone_number,email,dob,gender,batch_name})
        .then((response) => {
          console.log(response.data)
          
             toast.success("Form submitted successfully. You cannot edit the form anymore.", {position:"bottom-right"})
            // navigate('/dash/students')
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
              <TextField variant="outlined" required label="Name" name='name' value={name} onChange={(event)=> setName(event.target.value)} fullWidth />

              </Grid>
              <Grid item xs={12}>
              <TextField variant="outlined" required label="PhoneNumber" name='phoneNumber' value={phone_number} onChange={(event)=> setphonenumber(event.target.value)} fullWidth />

              </Grid>
              <Grid item xs={12}>
              <TextField variant="outlined" required label="email" name='email' value={email} onChange={(event)=> setEmail(event.target.value)} fullWidth />

              </Grid>
              <Grid item xs={12}>
              <TextField variant="outlined" required label="dob" name='dob' value={dob} onChange={(event)=> setDob(event.target.value)} fullWidth />

              </Grid>
              <Grid item xs={12}>
                 <FormControl fullWidth>
                  <InputLabel>Batch Name</InputLabel>
                  
                  <Select
                    value={batch_name}
                    onChange={(event) => setBatch(event.target.value)}
                    required
                  >
                    {batches.map((batch_name) => (
                      <MenuItem key={batch_name} value={batch_name}>
                        {batch_name}
                      </MenuItem>
                    ))}



                  </Select>
                </FormControl> 
              </Grid>
              <Grid item xs={12}>
                  <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  {/* <Select 
                   name='gender'
                  // options={options}
                  // value={gender}
                  // //  onChange={gender=>setGender(gender)}
                  //  onChange={(event)=> setGender(event.target.value)}
                  > 
                    {/* {options.map(option =>(
                      <option value={option.gender}>{option.label}</option>
                    ))} */}
                      {/* <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>   */}
                    {/* <option></option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>other</option> */}
                   {/* </Select> */} 
                   <Select
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                    // input={<Input />}
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
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