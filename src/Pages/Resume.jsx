import React, { Component } from 'react';
import { Grid, Box } from '@mui/material';
import Education from '../Components/education';
import Experience from '../Components/experience';
import Awards from '../Components/awards';
import Teaching from '../Components/teaching';

class Resume extends Component {
  render() {
    return (
      <Box sx={{ width: '100%', px: { xs: 2, sm: 3, md: 6 }, py: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={4}>
          
          {/* LEFT COLUMN */}
          <Grid item xs={12} sm={4} md={3}>
            <Box>
              <h2>Gareth Siôn Jones</h2>
              <h4 style={{ color: 'grey' }}>Physicist | Programmer | Data Scientist</h4>
              <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
              <p>
                I am a physicist working towards developing quantum network nodes
                using solid state defects in diamond. I also have a background
                in electronics engineering, software engineering, and data science.
              </p>
              <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />

              <h5>Phone</h5>
              <p>+447561230920</p>

              <h5>Email</h5>
              <p>gareth.jones@materials.ox.ac.uk</p>
              <p>garethsion@googlemail.com</p>

              <h5>Web</h5>
              <p>www.garethsionjones.com</p>
            </Box>
          </Grid>

          {/* RIGHT COLUMN */}
          <Grid item xs={12} sm={8} md={9}>
            <Box>
              <hr style={{ borderTop: '3px solid #e22947' }} />
              <h2>Experience</h2>
              <Experience
                startYear={2025}
                jobName="University of Oxford"
                jobDescription="Lecturer in Physics at Corpus Christi College..."
              />
              <Experience 
                startYear={2025}
                jobName="University of Oxford"
                jobDescription="Postdoctoral Research Scientist..."
              />
              <Experience 
                startYear={2020}
                jobName="Northrop Grumman (MoD)"
                jobDescription="Software Developer..."
              />
              <Experience 
                startYear={2020}
                jobName="Trusted Data Ltd"
                jobDescription="Senior Consultant Data Scientist..."
              />
              <Experience 
                startYear={2017}
                endYear={2020}
                jobName="University College London"
                jobDescription="Postgraduate Teaching Assistant..."
              />
              <Experience 
                startYear={2015}
                jobName="Ministry of Defence (MoD)"
                jobDescription="Electronics Engineer..."
              />

              <h2>Education</h2>
              <Education 
                startYear={2020}
                endYear={2024}
                schoolName="University of Oxford"
                degreeName="D.Phil in Quantum Optics and Photonic Nanomaterials"
                schoolDescription="Department of Materials Science"
              />
              <Education 
                startYear={2017}
                endYear={2019}
                schoolName="University College London"
                degreeName="M.Phil in Quantum Information Processing"
                schoolDescription="Department of Physics"
              />

              <h2>Scholarships and Awards</h2>
              <Awards awardYear={2020} awardName="EPSRC Doctoral Training Program Studentship" awardDescription="Oxford University" />
              <Awards awardYear={2016} awardName="EPSRC Research Studentship" awardDescription="University College London" />

              <h2>Teaching Experience</h2>
              <Teaching startYear={2025} endYear="Present" courseName="3rd Year Quantum, Atomic, and Molecular Physics" institute="University of Oxford - Dept. of Physics" />
              <Teaching startYear={2025} endYear="Present" courseName="1st Year Optics" institute="University of Oxford - Dept. of Physics" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Resume;
