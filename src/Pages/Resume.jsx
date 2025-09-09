// import React from 'react'
import React, {Component } from 'react';
import { Grid, Box } from '@mui/material';
import Education from '../Components/education';
import Experience from '../Components/experience';
import Skills from '../Components/skills';
import Awards from '../Components/awards';
import Teaching from '../Components/teaching';

class Resume extends Component{
  render(){
    return(
            <Grid container ml={5} mt={430}>
                <Grid item xs={3}>
                    <Box>
                        {/* <h2 style={{paddingTop: '20em'}}>Gareth Jones</h2> */}
                        <h2>Gareth Siôn Jones</h2>
                        <h4 style={{color: 'grey'}}>Physicist | Programmer | Data Scientist</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}} />
                        <p>I am a physicist working towards developing quantum network nodes using solid state defects in diamond. I alsp have a background in electronics engineering, software engineering, and data science, and I have applied these areas of expertise in academia, the public sector, and the private sector.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}} />
                        {/* <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p> */}
                        <h5>Phone</h5>
                        <p>+447561230920</p>
                        <h5>Email</h5>
                        <p>gareth.jones@materials.ox.ac.uk</p>
                        <p>garethsion@googlemail.com</p>
                        <h5>Web</h5>
                        <p>www.garethsionjones.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}} />
                    </Box>
                </Grid>
                <Grid item xs={6} ml={2} mr={5}>
                    <Box>

                    <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Experience</h2>

                    {/* <Experience
                        startYear={2025}
                        jobName="Solitaire"
                        jobDescription="Co-Founder and Chief Technology Officer (CTO). Leading a diverse team developing diamond-based quantum network nodes. Leading a scientific development team to develop efficient spin-photon interfaces in diamond for quantum networking."
                    /> */}
                    
                    <Experience
                        startYear={2025}
                        jobName="University of Oxford"
                        jobDescription="Lecturer in Physics at Corpus Christi College, University of Oxford, teaching 3rd Year Quantum, Atomic, and Molecular Physics, 1st Year Optics, and 1st Year Electromagnetism"
                    />

                    <Experience 
                        startYear={2025}
                        // endYear={2028}
                        jobName="University of Oxford"
                        jobDescription="Postdoctoral Research Scientist. Working within the Integrated Quantum Networks (IQN) national project to develop the UK's quantum internet, focussing on solid state defects as the quantum processing unit. Assisting in the supervision of multiple graduate and undergraduate students."
                    />

                    <Experience 
                        startYear={2020}
                        // endYear={2012}
                        jobName="Northrop Grumman"
                        jobDescription="Software Developer. Provided bespoke data driven solutions for tackling cyber security threats, working on projects for national security. Produced software applications in a variety of languages, in a full-stack role. I was required to  use a variety of different tech stacks on each project, and primarily employed C++ and GoLang for back-end microservices communicating front-end services to SQL, NoSQL, MongoDB database structures, and React.js for front-end web application development. Worked closely with development teams under an agile framework."
                    />

                    <Experience 
                        startYear={2020}
                        // endYear={2016}
                        jobName="Trusted Data Ltd"
                        jobDescription="Senior Consultant Data Scientist. Supported the chief technology officer at a data science consultancy, delivering advanced data driven solutions to a variety of complex commercial problems across a range of projects in the commercial sector. Delivered a six-figure data driven solution to major office space provider client, to optimise forecasting and price prediction. Supervised junior developers and oversaw their training needs. Using advanced statistical methods and machine learning techniques using tensorflow and keras in python, optimised maintenance analysis for major oil provider. Successfully piloted the launch of a new company initiative applying predictive methods to match prospective employees to appropriate work."
                    />

                    <Experience 
                        startYear={2017}
                        endYear={2020}
                        jobName="University College London"
                        jobDescription="Postgraduate Teaching Assistant. Supported academic faculty in delivering undergraduate and graduate lecture content. Interacted closely with students, proving support in teaching labs, and direct lectures in the form of tutorial sessions. Assessed students via marking and face-to-face assessment."
                    />

                    <Experience 
                        startYear={2015}
                        // endYear={2016}
                        jobName="Ministry of Defence (MoD)"
                        jobDescription="Electronics Engineer. Improved the technical capability for multiple partners throughout the MoD, working on projects for national security. Provided highly bespoke backend software for embedded systems, primarily using C++, Python, and Java. Lead multiple projects designing hardware and microcontroller software for electronic countermeasures. "
                    />

                    <Experience 
                        startYear={2013}
                        endYear={2014}
                        jobName="BAE Systems Applied Intelligence Labs"
                        jobDescription="Research and Development Scientist. Provided specialised capabilities in hardware and software design for applications in tracking and navigation, RF communication systems, and control and embedded systems. Lead an award-winning navigation and tracking project. Critical contribution procuring six-figure public sector investment for future mission capabilities, and interfacing with clients."
                    />
                    <h2>Education</h2>
                    <Education 
                        startYear={2020}
                        endYear={2024}
                        schoolName="University of Oxford"
                        degreeName="D.Phil in Quantum Optics and Photonic Nanomaterials"
                        schoolDescription="Department of materials science, investigating diamond based quantum computing"
                    />

                    <Education 
                        startYear={2017}
                        endYear={2019}
                        schoolName="University College London"
                        degreeName="M.Phil in Quantum Information Processing"
                        schoolDescription="Department of Physics. Investigations of strongly correlated many body systems for quantum metrology, and superconducting resonators for solid state qubit coupling."
                    />

                    <Education 
                        startYear={2016}
                        endYear={2017}
                        schoolName="University College London"
                        degreeName="M.Res in Quantum Technologies"
                        schoolDescription="Department of Physics. Specialised taught and research graduate training in quantum technologies."
                    />

                    <Education 
                        startYear={2011}
                        endYear={2016}
                        schoolName="Cardiff University"
                        degreeName="M.Eng in Electronics Engineering"
                        schoolDescription="Department of Engineering. Strongly focussed on high frequency (RF/Microwave)) engineering."
                    />

                <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Scholarships and Awards</h2>
                    
                    <Awards 
                        awardYear={2020}
                        awardName="EPSRC Doctoral Training Program Studentship"
                        awardDescription="Oxford University - a scholarship proivided for completion of D.Phil studies."
                    />

                    <Awards 
                        awardYear={2016}
                        awardName="EPSRC Research Studentship"
                        awardDescription="University College London - a scholarship proivided for completion of graduate studies."
                    />
                    
                    <Awards 
                        awardYear={2016}
                        awardName="Rohde and Schwartz Prize for Outstanding Research"
                        awardDescription="Cardiff University - Awarded for research undertaken as part of master's project."
                    />

                    <Awards 
                        awardYear={2016}
                        awardName="DaVinci Innovation Grant"
                        awardDescription="Cardiff University - Awarded for research undertaken as part of master's project."
                    />

                    <Awards 
                        awardYear={2015}
                        awardName="United Kingdom Electronic Skills Foundation (UKESF) Scholarship"
                        awardDescription="Cardiff University - Awarded for research undertaken as part of master's project."
                    />
                    
                    <Awards 
                        awardYear={2015}
                        awardName="Vice Chancellor's Scholarship"
                        awardDescription="Cardiff University - Scholarship awarded to attend 2015 DjangoCon conference"
                    />

                    <Awards 
                        awardYear={2015}
                        awardName="Keysight RF/Microwave Industry Ready Certificate"
                        awardDescription="Keysight - Professional 2015 Certification"
                    />

                    <Awards 
                        awardYear={2014}
                        awardName="Technical Innovation Award"
                        awardDescription="BAE Systems - Awarded for the design and prototype of a 2014 novel GPS tracking system."
                    />

                    <Awards 
                        awardYear={2014}
                        awardName="Licentiate of the City and Guilds Institute (LCGI)"
                        awardDescription="CGI - Professional Certification"
                    />

<hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Teaching Experience</h2>
                    
                    <Teaching 
                        startYear={2025}
                        endYear="Present"
                        courseName="3rd Year Quantum, Atomic, and Molecular Physics"
                        institute="University of Oxford - Dept. of Physics"
                    />

                    <Teaching 
                        startYear={2025}
                        endYear="Present"
                        courseName="1st Year Optics"
                        institute="University of Oxford - Dept. of Physics"
                    />

                    <Teaching 
                        startYear={2025}
                        endYear="Present"
                        courseName="1st Year Electromagnetism"
                        institute="University of Oxford - Dept. of Physics"
                    />

                    <Teaching 
                        startYear={2025}
                        endYear="Present"
                        courseName="3rd Year Materials for Optics and Optoelectronics"
                        institute="University of Oxford - Dept. of Materials"
                    />

                    <Teaching 
                        startYear={2021}
                        endYear="Present"
                        courseName="2nd Year Computing"
                        institute="University of Oxford - Dept. of Physics"
                    />

                    <Teaching 
                        startYear={2021}
                        endYear="Present"
                        courseName="1st Year Computing"
                        institute="University of Oxford - Dept. of Physics"
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
                        institute="UCL, Dept of Engineering"
                    />

                    <Teaching 
                        startYear={2017}
                        endYear={2019}
                        courseName="2nd Year Physics Electronics Laboratory"
                        institute="UCL, Dept of Physics and Astronomy"
                    />

                    <Teaching 
                        startYear={2017}
                        endYear={2018}
                        courseName="3rd Year Java Programming"
                        institute="UCL, Dept of Physics and Astronomy"
                    />

                    <Teaching 
                        startYear={2018}
                        // endYear={2018}
                        courseName="Msc Signal Processing"
                        institute="UCL, Dept of Physics and Astronomy"
                    />
{/* 
<hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Skills</h2>
                    <h3>Physics</h3>
                    <Skills 
                        skill="Quantum Optics"
                        progress={100}
                    />

                    <Skills 
                        skill="Superconducting Resonators"
                        progress={100}
                    />

                    <Skills 
                        skill="Electromagnetic Modelling"
                        progress={100}
                    />

                    <Skills 
                        skill="Microwave Engineering"
                        progress={100}
                    />

                    <h3 //TODO Remove progress bar and change for categories [Rudimentary, Advanced, Expert]
                    >Programming</h3>
                    <Skills 
                        skill="javascript"
                        progress={100}
                    />

                    <Skills 
                        skill="HTML/CSS"
                        progress={80}
                    />

                    <Skills 
                        skill="NodeJS"
                        progress={50}
                    />

                    <Skills 
                        skill="React"
                        progress={25}
                    /> */}

                    </Box>
                </Grid>
                
            </Grid>
    )
  }
}

export default Resume;