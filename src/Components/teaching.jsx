import React, { Component } from 'react';
import { Grid, Box } from '@mui/material';

class Teaching extends Component{
    render() {
        return(
            <Grid container>
                <Grid item xs={4}>
                    <Box col={4}>
                        <p style={{fontSize: '18px'}}>{this.props.startYear} - {this.props.endYear}</p>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                <Box>
                    <h4 style={{marginTop: '0px', marginBottom: '0px'}}>{this.props.courseName}</h4>
                    <p>{this.props.institute}</p>
                </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Teaching;