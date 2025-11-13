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

export default function LectureMDOO() {
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
          These are course notes for lectures on Materials and Devices for Optics and Optoelectronics, provided at the Department of Materials, University of Oxford, Michalemas term 2025.
        </Typography>
      </Box>
    
    <div style={{ padding: "20px" }}>
      <a
        href="../public/documents/mdoo_lecture_notes.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Course Notes - Lectures 1-5
      </a>
    </div>

    </div>
  );
}
