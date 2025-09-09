import React,{ Component } from 'react'
import { Grid, Box } from '@mui/material'
class experience extends Component{
    render() {
        return(
            <Grid container my={4} spacing={2}>
                <Grid item xs={4}>
                    <Box>
                        <p style={{fontSize: '18px'}}>{this.props.startYear} - {this.props.endYear}</p>
                        </Box>
                </Grid>
                
                <Grid item xs={8}>
                    <Box col={8}>
                        <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                        <p>{this.props.jobDescription}</p>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default experience