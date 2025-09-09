import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function OpticsLanding() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10pt', padding: '20px' }}>
      
      {/* Intro text box */}
      <Box
        sx={{
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '800px',
          boxShadow: 1,
          marginBottom: '30px'
        }}
      >
        <Typography variant="body1">
          Typically, undergraduate courses in optics cover a wide theoretical range, including geometric optics, wave optics, ray optics, Fourier optics, amongst much else. Whilst this background is invaluable, it tells us very little about how to actually implement optics and build optical systems in the lab. Unfortunately, practical guides to building optical systems seem to be few and far between, and this is information which is mainly acquired under apprenticeship. In these pages, I have assembled a collection of pedagogical notes which I have built over recent years, intended for graduate students and budding optical engineers, with a specific focus on the practical implementation of optics.
        </Typography>
      </Box>

      {/* Cards container - flex row */}
      <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Card 1 */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.anl.gov/sites/www/files/styles/article_teaser_16x9/public/2019-09/Argonne_MagnonScienceHighlight_Draft02_1600x900.png?h=8abcec71&itok=yw298ns8"
              alt="Fibre Coupling"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fibre Coupling
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Practical guide to fibre coupling
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => navigate('/fibrecoupling')}>
              Go
            </Button>
          </CardActions>
        </Card>

        {/* Card 2 */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.anl.gov/sites/www/files/styles/article_teaser_16x9/public/2019-09/Argonne_MagnonScienceHighlight_Draft02_1600x900.png?h=8abcec71&itok=yw298ns8"
              alt="Fibre Coupling"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Focussing
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                A guide to finding the focus point of a lens
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => navigate('/focussing')}>
              Go
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
