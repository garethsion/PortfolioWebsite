import React, { Component } from 'react'
import { Grid, Box } from '@mui/material';

class Awards extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={4}>
                    <Box>
                        <p style={{fontSize: '18px'}}>{this.props.awardYear}</p>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box>
                        <h5 style={{marginTop: '0px', marginBottom: '0px'}}>{this.props.awardName}</h5>
                        <p>{this.props.awardDescription}</p>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Awards;
