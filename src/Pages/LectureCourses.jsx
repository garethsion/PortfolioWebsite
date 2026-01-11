import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';
// import LectureMDOO from './Pages/Lectures/mdoo'

export default function LectureCourses() {

  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image='https://www.eonenergy.com/content/dam/eon-energy-com/images-2024/b2b/b2b-products/solar-panels/solar-panel-sky.jpg/jcr:content/renditions/cq5dam.web.1280.816.jpeg'
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Materials and Devices for Optics and Optoelectronics
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              A third year course at the Department of Materials, University of Oxford
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=> navigate('/lecture_mdoo')}>Go</Button>
        </CardActions>
      </Card>
      </div>
    </div>

    
  );
}