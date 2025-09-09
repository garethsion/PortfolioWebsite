import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom'
import NV_EnergyLevels from './Research/figs/NV_EnergyLevels.png';
import quantum_sensing from './Research/figs/quantum_sensing.png';
import sc_devices from './Research/figs/supercond_devices.png'

export default function Research() {

  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={NV_EnergyLevels}
            // image='https://www.anl.gov/sites/www/files/styles/article_teaser_16x9/public/2019-09/Argonne_MagnonScienceHighlight_Draft02_1600x900.png?h=8abcec71&itok=yw298ns8)'
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Solid State Defects in Diamond
            </Typography>
            {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              A review of analytic methods for designing superconducting coplanar waveguide resonators, with supporting python code.
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=> navigate('/diamonddefects')}>Go</Button>
        </CardActions>
      </Card>
      </div>

      <div style={{ marginRight: '20px' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={quantum_sensing}
            // image='https://www.anl.gov/sites/www/files/styles/article_teaser_16x9/public/2019-09/Argonne_MagnonScienceHighlight_Draft02_1600x900.png?h=8abcec71&itok=yw298ns8)'
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Quantum Enhanced Metrology
            </Typography>
            {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              A review of analytic methods for designing superconducting coplanar waveguide resonators, with supporting python code.
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=> navigate('/quantumsensing')}>Go</Button>
        </CardActions>
      </Card>
      </div>
      
      <div style={{ marginRight: '20px' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={sc_devices}
            // image='https://www.anl.gov/sites/www/files/styles/article_teaser_16x9/public/2019-09/Argonne_MagnonScienceHighlight_Draft02_1600x900.png?h=8abcec71&itok=yw298ns8)'
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Superconducting Devices
            </Typography>
            {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              A review of analytic methods for designing superconducting coplanar waveguide resonators, with supporting python code.
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=> navigate('/superconddevices')}>Go</Button>
        </CardActions>
      </Card>
      </div>

    </div>

    
  );
}



// import React from 'react'
// import { Grid, Box } from '@mui/material';

// const Research = () => {
//   return (
//     <Grid className="tutorial-resonators" container mt={10} mr={20} ml={20}>
//       <Grid item xs={12}>
//         <Box>

//         <p>Quantum Networks</p>
//         <p>Solid State Defects in Diamond </p>
//         <p>Electro-Optic Materials</p>
//         <p>Quantum Sensing</p>
//         <p>Superconducting Devices</p>
//         </Box>
//       </Grid>
//     </Grid>
//   )
// }


// export default Research