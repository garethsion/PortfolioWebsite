import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom'
import ResonatorNavbar from '../../../Components/ResonatorNavbar';
import ResonatorButtons from '../../../Components/ResonatorButtons';

const Resonators = () => {

  const navigate = useNavigate();

  return (
    <Grid className="tutorial-resonators" container mt={95} mr={5} ml={5}>
      <Grid item xs={12}>
        <Box>

          <ProgressBar style={{ margin: 'auto', width: '75%' }} completed={(1 / 6) * 100} customLabel=" " />
          <ResonatorNavbar />

          <p className='tutorial-h1'>Designing Coplanar Waveguide Superconducting Resonators</p>

          <p>Superconducting resonators are a fundamental component of many advanced technologies, particularly in quantum computing and high-frequency signal processing. These resonant structures exploit the unique properties of superconductors, materials which when cooled below a critical temperature have zero electrical resistance and expel magnetic fields. Superconducting resonators can achieve extraordinarily high quality factors, making them ideal for use in qubits, the fundamental units of quantum computers. Their low energy dissipation and high sensitivity make superconducting resonators invaluable in scientific instrumentation, such as particle detectors and radio telescopes.</p>

          <p className='embedded-p'>The design of microwave circuits is quite distinct from lumped element electronics design, and is a very well established field. High-frequency resonant structures can be manufactured using metalic transmission lines, with the impedance and centre wavelength of the resonator determined by geometric properties of the transmission lines.    </p>
          
          <h2>Resonator Background</h2>

          <p>There are many different kinds of resonant structure. Here we will focus on transmission line resonators, but resonant structures can be formed from dielectric or optical materials as well. Below is a non-exhaustive list of the different kinds of resonant structure one may come across:</p>

          <h4>N-Wave Transmission-Line Resonators</h4>
          <p>Most often, TL resonators are designed to be physically a half wavelength λ/2 or a quarter wavelength λ/4. However, there are also extensions where the length corresponds to an integer or fractional multiple of the wavelength. Examples include, e.g. 3λ/4 and λ/8.</p>

          <h4>Whispering Gallery Mode (WGM) Resonators</h4>
          <p>These are circular resonators where light or acoustic waves travel around the perimeter via total internal reflection. These are common in dielectric microspheres, toroidal cavities, and optical microdisks.</p>
          
          <h4>Fabry-Pérot Resonators</h4>
          <p>Consist of two parallel mirrors forming a standing-wave cavity. These structures can support multiple longitudinal modes, and are used in lasers, interferometers, and microcavities.</p>

          <h4>Dielectric Resonators</h4>
          <p>Typically made of high-permittivity dielectric materials. Used in microwave and millimetre-wave applications.</p>

          <h4>Phononic and Acoustic Resonators</h4>
          <p>Designed for elastic waves instead of electromagnetic waves. Used in SAW (Surface Acoustic Wave) and BAW (Bulk Acoustic Wave) filters.</p>

          <h4>Photonic Crystal Resonators</h4>
          <p>Created by engineering periodic dielectric structures to trap and guide light. Can achieve ultra-high Q-factors.</p>

          <h4>Hybrid and Coupled Resonators</h4>
          <p>Combine different types (e.g., whispering gallery + Fabry-Pérot) to achieve specific dispersion and mode properties. Used in advanced optical circuits.</p>         

          <p className='embedded-p'>The choice of most appropriate resonant structure depends on the intended application.</p> 

          <h2>Superconductors and Superconducting Resonators</h2>
          <p>In this post, I will outline the fundamental analytic, numeric, and theoretical framework necessary for designing supercondiucting resonators with coplanar waveguide structures.</p>

        </Box>
      </Grid>
      <div >
        <button className='resonator-next-button' onClick={() => navigate('/resonators-page2')}>Next</button>
        {/* <ResonatorButtons page={"/resonators-page2"} text={'Next'}/> */}
        {/* <ResonatorButtons/> */}
      </div>
    </Grid>
  )
}

export default Resonators