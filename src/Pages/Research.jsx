import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import NV_EnergyLevels from './Research/figs/NV_EnergyLevels.png';
import quantum_sensing from './Research/figs/quantum_sensing.png';
import sc_devices from './Research/figs/supercond_devices.png';
import Grid from '@mui/material/Grid';

export default function Research() {
  const navigate = useNavigate();

  const cards = [
    { title: 'Solid State Defects in Diamond', img: NV_EnergyLevels, link: '/diamonddefects' },
    { title: 'Quantum Enhanced Metrology', img: quantum_sensing, link: '/quantumsensing' },
    { title: 'Superconducting Devices', img: sc_devices, link: '/superconddevices' },
    { title: 'Cavity Quantum Electrodynamics', img: sc_devices, link: '/superconddevices' },
    { title: 'Electro-Optic Thin-Films', img: sc_devices, link: '/superconddevices' }
  ];

  return (
    <Grid container mt={50} rowSpacing={4} sm={8}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={card.img}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => navigate(card.link)}>
                Go
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}