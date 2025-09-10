import React from 'react'
import { Grid, Box } from '@mui/material';

const About = () => {
  return (
    <Grid
      className="tutorial-resonators"
      container
      mt={10}
      // Responsive horizontal margins
      sx={{
        mx: { xs: 2, sm: 5, md: 15, lg: 30 }, // left/right margin changes by screen size
      }}
    >
      <Grid item xs={12}>
        <Box>
          <p>
            I am a researcher at the University of Oxford, aiming to develop network interfaces for distributed quantum information systems, using diamond as a host material. I study the properties of solid-state defects in diamond, and manipulate their properties to generate spin-photon entangled qubits for quantum networking. To enhance the optical coupling efficiency of these qubits, I study the cavity quantum electrodynamics of these systems when coupled to monolithic cavities, and I design and synthesise a variety of cavity structures for this. In addition, I synthesise and study novel electro-optical materials and aim to integrate them in heterogeneous structures. 
          </p>
        </Box>
      </Grid>

      <Grid item xs={12} mt={2}>
        <Box>
          <p>
            I previously worked in industry as an both an electronics and software engineer. In the defence sector, I led hardware and software development for electronic countermeasures and cybersecurity solutions, specialising in microwave and coherent superconducting systems, as well as embedded systems. I also designed full-stack web applications, utilizing frameworks such as React.js, C++, and GoLang, and developed data-driven solutions for commercial clients at a data science consultancy. 
          </p>
        </Box>
      </Grid>

      <Grid item xs={12} mt={2}>
        <Box>
          <p>
            I earned a doctorate (D.Phil.) in Quantum Optics under the supervision of Prof. Jason Smith at the University of Oxford in 2024. In addition to this, I hold an MRes in Quantum Physics from University College London (UCL) and an MEng in Electronics Engineering from Cardiff University, where I graduated top of my class with First Class Honours. 
          </p>
        </Box>
      </Grid>

      <Grid item xs={12} mt={2}>
        <Box>
          <p>
            I am also a committed educator, and over the last decade I have been very fortunate to teach undergraduate and postgraduate students in a wide variety of subject areas. At present, I am a physics lecturer at the University of Oxford, teaching Optics, Electromagnetism, Quantum, Atomic, and Molecular Physics, and Scientific Computing. Previously at University College London, I worked as a teaching assistant on a multitude of modules, including in the  Physics department: 1st Year Electromagnetism, 3rd Year Condensed Matter Physics, 3rd Year Java programming; and in the Engineering department: MRes-level Signal Processing, 1st-Year Design and Professional Skills, and 1st-Year Electronics.
          </p>
        </Box>
      </Grid>
    </Grid>
  )
}

export default About
