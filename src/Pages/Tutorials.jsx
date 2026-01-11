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
import yee_cell from "../assets/yee_cell.png"

export default function Tutorials() {

  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image='https://www.anl.gov/sites/www/files/styles/article_teaser_16x9/public/2019-09/Argonne_MagnonScienceHighlight_Draft02_1600x900.png?h=8abcec71&itok=yw298ns8)'
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Designing Coplanar Waveguide Superconducting Resonators
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              A review of analytic methods for designing superconducting coplanar waveguide resonators, with supporting python code.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=> navigate('/resonators')}>Go</Button>
        </CardActions>
      </Card>
      </div>

      <div style={{ marginRight: '20px' }}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image='https://www.zygo.com/-/media/project/ameteksxa/zygo/ametekzygo/industries/optics-photonics/optics-photonics-industry.jpg?la=en&revision=f682da62-c44c-469d-9322-44056c87223d'
            alt="green iguana"
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Practical Optics
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              A collection of tutorials on practical implementation of optics in the lab.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=> navigate('/optics')}>Go</Button>
        </CardActions>
      </Card>
    </div>

    <div style={{ marginRight: '20px' }}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={yee_cell}
            alt="green iguana"
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Finite Difference Time Domain Simulation
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              A tutorial on FDTD simulation of optical structures.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=> navigate('/fdtd')}>Go</Button>
        </CardActions>
      </Card>
    </div>

    </div>

    
  );
}