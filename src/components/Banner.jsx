import React, { useEffect, useState } from 'react'
// import {Container} from 'react-bootstrap';
import headerImg from '../assets/examportal.png'
import { FaArrowCircleRight } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { Box,styled,Typography } from '@mui/material';
import{ Container }from '@mui/system';

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(10),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(7),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));


const Banner = () => {
    // const [loopNum , setLoopNum]=useState(0);
    // const [isDeleting,setDeleting]=useState(false);
    // const toRotate =["Registration","Portal"];
    // const [text,setText]= useState('');
    // const [delta,setDelta]= useState(300 - Math.random() * 100);
    // const period= 2000;

    // useEffect(()=>
    // {
    //     let ticker = setInterval(()=>{
    //         tick();
    //     },delta)
    //     return()=>{clearInterval(ticker)}
    // },{text})

    // const tick=()=>{
    //     let i = loopNum % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText= isDeleting ? fullText.substring(0,text.length -1):fullText.substring(0,text.length +1);

    //     setText(updatedText);
    //     if(isDeleting){
    //         setDelta(prevDelta=> prevDelta /2)
    //     }
    //     if(!isDeleting&& updatedText===fullText){
    //         setDeleting(true);
    //         setDelta(period);
    //     }else if(isDeleting && updatedText===''){
    //         setDeleting(false);
    //         setLoopNum(loopNum+1);
    //         setDelta(500)
    //     }
            
    //     }

  return (
    
    <div className='banner' id='home'style={{ height: '100vh' }}>
        <Container>
          
             {/* <Row > 
                <Col xs={12} md={6} lg={6}>
                    <span className='tagline'>Welcome to ICTAK</span>
                    <h1>Exam Registration Portal  <span className='wrap'></span></h1>
                    <button  onClick={()=>console.log('connect')}><Link to={'/login'} style={{ textDecoration: "none",color:"white" }}>Login</Link> <FaArrowCircleRight /></button>
                </Col>
                <Col xs={12} md={6} lg={6} >
                     <img src={headerImg}/>
                </Col> */}

            {/* </Row>
             */}

<CustomBox>
          <Box sx={{ flex: "1" }}>
            {/* <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 5,
                mb: 4,
              }}
            >
              Welcome to ICTAK Internship Portal
            </Typography>
             */}
             <span className='tagline'>Welcome to ICTAK</span>
            {/* <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Transforming Education into Experience: Your Gateway to Innovative Internship Opportunities.
            </Typography> */}
            <h1>Exam Registration Portal  <span className='wrap'></span></h1>
            <button  onClick={()=>console.log('connect')}><Link to={'/login'} style={{ textDecoration: "none",color:"white" }}>Login</Link> <FaArrowCircleRight /></button>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={headerImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "30px" }}
            />
          </Box>
        </CustomBox>
        </Container>



    
     </div>
    
  )
}

export default Banner