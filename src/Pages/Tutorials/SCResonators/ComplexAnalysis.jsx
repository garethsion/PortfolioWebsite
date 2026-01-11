import React, {Component } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom'
import ResonatorNavbar from '../../../Components/ResonatorNavbar';
// import Tex2SVG from 'react-hook-mathjax';

// Hello <Tex2SVG display='inline' latex='e^{i^pi}'/> nice to met you!

const ComplexAnalysis = () =>{

        const navigate = useNavigate();
        return(
            <Box sx={{ width: '100%', height: '100%', px: { xs: 2, sm: 3, md: 6 }, py: { xs: 2, sm: 3, md: 4 } }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Box>
                <ProgressBar style={{margin:'auto', width:'75%'}} completed={(2/6)*100} customLabel=" "/>
                <ResonatorNavbar />

                <p className='tutorial-h1'>Complex Analysis</p>
                
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                </Box>
        </Grid>
        <div > 
            <button className='resonator-back-button' onClick={()=> navigate('/resonators')}>Back</button>
            <button className='resonator-next-button'onClick={()=> navigate('/resonators-page3')}>Next</button> 
            </div>
      </Grid>
        </Box>
        )
    }
export default ComplexAnalysis;