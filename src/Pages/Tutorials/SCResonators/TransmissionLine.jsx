import React, { Component } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
import Tex2SVG from 'react-hook-mathjax';
import { Grid, Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom'
import ResonatorNavbar from '../../../Components/ResonatorNavbar';

// Hello <Tex2SVG display='inline' latex='e^{i^pi}'/> nice to met you!

const TransmissionLine = () => {
    const navigate = useNavigate();
    return (
        <Grid container mt={72} mr={5} ml={5}>
            <Grid item xs={12}>
                <Box>
                    <ProgressBar style={{ margin: 'auto', width: '75%' }} completed={(4 / 6) * 100} customLabel=" " />
                    <ResonatorNavbar />

                    <p className='tutorial-h1'>Transmission Line Analysis</p>

                    <p>The superconducting resonator is a microwave circuit, which can be described as a 'black-box', with some inout and ouputs. Such structures are refrerred to as "Two-Port Networks". Pozar details the mathermatical framework of these structures rigorosously, and below is a snippet of the background which is germane to the structures discussed here. </p>

                    <h2>Scattering (S-) Parameters</h2>

                    The scattering (S-) matrix of a two-port network quantifies how RF energy propagates through the circuit. For an RF signal incident on one port, a fraction is reflected back, whilst a fraction is scattered to some or all of the other ports. The remaining incident power is dissipated as heat/radiation. 

                    <p>
                        <Tex2SVG latex='
                        \left[\begin{matrix}
                             V_{1}  \\ 
                             I_{1}
                        \end{matrix}\right]
                        =
                        \left[\begin{matrix}
                            A & B \\ 
                            C & D
                       \end{matrix}\right]
                       \left[\begin{matrix}
                            V_{2} \\
                            I_{2}
                        \end{matrix}\right]
                    '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                        V_{1} = AV_{2} + BI_{2}
                    '/>
                    </p>
                    <p>
                        <Tex2SVG latex='
                        V_{1} = AV_{2} + BI_{2}
                    '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                        \left[\begin{matrix}
                             V_{1}  \\ 
                             I_{1}
                        \end{matrix}\right]
                        =
                        \left[\begin{matrix}
                            A_{1} & B_{1} \\ 
                            C_{1} & D_{1}
                       \end{matrix}\right]
                       \left[\begin{matrix}
                            V_{2} \\
                            I_{2}
                        \end{matrix}\right]
                    '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                        \left[\begin{matrix}
                             V_{2}  \\ 
                             I_{2}
                        \end{matrix}\right]
                        =
                        \left[\begin{matrix}
                            A_{2} & B_{2} \\ 
                            C_{2} & D_{2}
                       \end{matrix}\right]
                       \left[\begin{matrix}
                            V_{3} \\
                            I_{3}
                        \end{matrix}\right]
                    '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                        \left[\begin{matrix}
                             V_{1}  \\ 
                             I_{1}
                        \end{matrix}\right]
                        =
                        \left[\begin{matrix}
                            A_{1} & B_{1} \\ 
                            C_{1} & D_{1}
                       \end{matrix}\right]
                       \left[\begin{matrix}
                            A_{2} & B_{2} \\ 
                            C_{2} & D_{2}
                        \end{matrix}\right]
                       \left[\begin{matrix}
                            V_{3} \\
                            I_{3}
                        \end{matrix}\right]
                    '/>
                    </p>

                    <p> <Tex2SVG display='inline' latex='A=\cos{\beta_{l}}' /> , <Tex2SVG display='inline' latex='B=iZ_{0}\sin{\beta_{l}}' /> , <Tex2SVG display='inline' latex='C=i Y_{0}\sin{\beta_{l}}' />, <Tex2SVG display='inline' latex='D=\cos{\beta_{l}}' />  </p>

                    <p>
                        <Tex2SVG latex='
                        S_{11} = \frac{A + B/Z_{0} - CZ_{0} - D}{A + B/Z_{0} + CZ_{0} + D}
                    '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                        S_{12} = \frac{2(AD - BC)}{A + B/Z_{0} + CZ_{0} + D}
                    '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                        S_{21} = \frac{2}{A + B/Z_{0} + CZ_{0} + D}
                    '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                        S_{22} = \frac{-A + B/Z_{0} - CZ_{0} + D}{A + B/Z_{0} + CZ_{0} + D}
                    '/>
                    </p>
                </Box>
            </Grid>
            <div > 
                <button className='resonator-back-button' onClick={()=> navigate('/resonators_page3')}>Back</button>
                <button className='resonator-next-button' onClick={() => navigate('/resonators-page5')}>Next</button> 
            </div>
        </Grid>

    )
}
export default TransmissionLine;