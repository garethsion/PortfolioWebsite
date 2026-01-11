import React, { Component } from 'react';
import { Grid, Box } from '@mui/material';
import Education from '../Components/education';
import Experience from '../Components/experience';
import Skills from '../Components/skills';
import Awards from '../Components/awards';
import Teaching from '../Components/teaching';

class Resume extends Component {
  render() {
    return (
      <Box sx={{ width: '100%', height: '100%', px: { xs: 2, sm: 3, md: 6 }, py: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={4}>
        {/* LEFT COLUMN (Sidebar) */}
        <Grid item xs={12} sm={4} md={3}>
          <Box>
            <h2>Gareth Siôn Jones</h2>
            <h4 style={{ color: 'grey' }}>
              Physicist | Programmer | Data Scientist
            </h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
            <p>
              I am a physicist working towards developing quantum network nodes
              using solid state defects in diamond. I also have a background in
              electronics engineering, software engineering, and data science,
              and I have applied these areas of expertise in academia, the
              public sector, and the private sector.
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />

            <h5>Phone</h5>
            <p>+447561230920</p>

            <h5>Email</h5>
            <p>gareth.jones@materials.ox.ac.uk</p>
            <p>garethsion@googlemail.com</p>

            <h5>Web</h5>
            <p>www.garethsionjones.com</p>

            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
          </Box>
        </Grid>

        {/* RIGHT COLUMN (Main Content) */}
        <Grid item xs={12} sm={8} md={9}>
          <Box>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience</h2>

            <Experience
              startYear={2025}
              jobName="University of Oxford"
              jobDescription="Lecturer in Physics at Corpus Christi College, University of Oxford, teaching 3rd Year Quantum, Atomic, and Molecular Physics, 1st Year Optics, and 1st Year Electromagnetism"
            />

            <Experience
              startYear={2025}
              jobName="University of Oxford"
              jobDescription="Postdoctoral Research Scientist. Working within the Integrated Quantum Networks (IQN) national project to develop the UK's quantum internet, focussing on solid state defects as the quantum processing unit."
            />

            <Experience
              startYear={2020}
              jobName="Northrop Grumman (MoD)"
              jobDescription="Software Developer. Provided bespoke data driven solutions for tackling cyber security threats."
            />

            <Experience
              startYear={2020}
              jobName="Trusted Data Ltd"
              jobDescription="Senior Consultant Data Scientist. Delivered advanced data driven solutions to complex commercial problems."
            />

            <Experience
              startYear={2017}
              endYear={2020}
              jobName="University College London"
              jobDescription="Postgraduate Teaching Assistant."
            />

            <Experience
              startYear={2015}
              jobName="Ministry of Defence (MoD)"
              jobDescription="Electronics Engineer."
            />

            <Experience
              startYear={2013}
              endYear={2014}
              jobName="BAE Systems Applied Intelligence Labs"
              jobDescription="Research and Development Scientist."
            />

            <h2>Education</h2>

            <Education
              startYear={2020}
              endYear={2024}
              schoolName="University of Oxford"
              degreeName="D.Phil in Quantum Optics and Photonic Nanomaterials"
              schoolDescription="Department of Materials Science."
            />

            <Education
              startYear={2017}
              endYear={2019}
              schoolName="University College London"
              degreeName="M.Phil in Quantum Information Processing"
              schoolDescription="Department of Physics."
            />

            <Education
              startYear={2016}
              endYear={2017}
              schoolName="University College London"
              degreeName="M.Res in Quantum Technologies"
              schoolDescription="Department of Physics."
            />

            <Education
              startYear={2011}
              endYear={2016}
              schoolName="Cardiff University"
              degreeName="M.Eng in Electronics Engineering"
              schoolDescription="Department of Engineering."
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Scholarships and Awards</h2>

            <Awards
              awardYear={2020}
              awardName="EPSRC Doctoral Training Program Studentship"
              awardDescription="Oxford University."
            />

            <Awards
              awardYear={2016}
              awardName="EPSRC Research Studentship"
              awardDescription="University College London."
            />

            <Awards
              awardYear={2016}
              awardName="Rohde and Schwartz Prize for Outstanding Research"
              awardDescription="Cardiff University."
            />

            <Awards
              awardYear={2016}
              awardName="DaVinci Innovation Grant"
              awardDescription="Cardiff University."
            />

            <Awards
              awardYear={2015}
              awardName="United Kingdom Electronic Skills Foundation (UKESF) Scholarship"
              awardDescription="Cardiff University."
            />

            <Awards
              awardYear={2015}
              awardName="Vice Chancellor's Scholarship"
              awardDescription="Cardiff University."
            />

            <Awards
              awardYear={2015}
              awardName="Keysight RF/Microwave Industry Ready Certificate"
              awardDescription="Keysight."
            />

            <Awards
              awardYear={2014}
              awardName="Technical Innovation Award"
              awardDescription="BAE Systems."
            />

            <Awards
              awardYear={2014}
              awardName="Licentiate of the City and Guilds Institute (LCGI)"
              awardDescription="CGI."
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Teaching Experience</h2>

            <Teaching
              startYear={2025}
              endYear="Present"
              courseName="3rd Year Quantum, Atomic, and Molecular Physics"
              institute="University of Oxford"
            />

            <Teaching
              startYear={2025}
              endYear="Present"
              courseName="1st Year Optics"
              institute="University of Oxford"
            />

            <Teaching
              startYear={2025}
              endYear="Present"
              courseName="1st Year Electromagnetism"
              institute="University of Oxford"
            />

            <Teaching
              startYear={2025}
              endYear="Present"
              courseName="3rd Year Materials for Optics and Optoelectronics"
              institute="University of Oxford"
            />

            <Teaching
              startYear={2021}
              endYear="Present"
              courseName="2nd Year Computing"
              institute="University of Oxford"
            />

            <Teaching
              startYear={2021}
              endYear="Present"
              courseName="1st Year Computing"
              institute="University of Oxford"
            />

            <Teaching
              startYear={2017}
              endYear="Present"
              courseName="Private Tutoring"
              institute=""
            />

            <Teaching
              startYear={2017}
              endYear={2020}
              courseName="1st Year Design and Professional Skills"
              institute="University College London"
            />

            <Teaching
              startYear={2017}
              endYear={2020}
              courseName="1st Year Electronics Laboratory"
              institute="UCL"
            />

            <Teaching
              startYear={2017}
              endYear={2019}
              courseName="2nd Year Physics Electronics Laboratory"
              institute="UCL"
            />

            <Teaching
              startYear={2017}
              endYear={2018}
              courseName="3rd Year Java Programming"
              institute="UCL"
            />

            <Teaching
              startYear={2018}
              courseName="MSc Signal Processing"
              institute="UCL"
            />
          </Box>
        </Grid>
      </Grid>
      </Box>
    );
  }
}

export default Resume;
