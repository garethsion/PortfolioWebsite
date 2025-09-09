import React, { Component } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { Grid, Box } from '@mui/material';

class Skills extends Component{
    render() {
        return(
            <Grid container>
                <Grid item xs={12}>
                    <Box>
                        <div style={{display: 'flex'}}>{this.props.skill}  <ProgressBar style={{margin:'auto', width:'75%'}} completed={this.props.progress} customLabel=" " /></div>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Skills;