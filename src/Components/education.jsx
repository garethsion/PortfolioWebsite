import React, { Component } from 'react';
import { Grid, Box } from '@mui/material';

class Education extends Component{
    render() {
        return(
            <Grid container my={4} spacing={2}>
                <Grid item xs={3}>
                    <Box>
                        <p style={{fontSize: '18px'}}>{this.props.startYear} - {this.props.endYear}</p>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box>
                        <h4 style={{marginTop: '0px', marginBottom: '0px'}}>{this.props.schoolName}</h4>
                        <p style={{marginTop: '0px', marginBottom: '0px', fontSize:'18px'}}>{this.props.degreeName}</p>
                        <p>{this.props.schoolDescription}</p>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Education;