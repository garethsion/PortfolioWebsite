import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom'
import Tex2SVG from 'react-hook-mathjax';

const Focussing = () => {

  const navigate = useNavigate();

  return (
    <Grid className="tutorial-resonators" container mt={700} mr={5} ml={5}>
      <Grid item xs={12}>
        <Box>

          Hi
        
        </Box>
      </Grid>
      <div >
        {/* <button className='resonator-next-button' onClick={() => navigate('/resonators-page2')}>Next</button> */}
        {/* <ResonatorButtons page={"/resonators-page2"} text={'Next'}/> */}
        {/* <ResonatorButtons/> */}
      </div>
    </Grid>
  )
}

export default Focussing