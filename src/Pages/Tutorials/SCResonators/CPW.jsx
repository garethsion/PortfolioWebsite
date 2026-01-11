import React, { Component } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
import Tex2SVG from 'react-hook-mathjax';
import EllipticIntegral from './code_blocks/ellipticintegral';
import EffectivePermittivity from './code_blocks/effpermitivity';
import ConformalMapping from './code_blocks/conformalmapping';
import { Grid, Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom'
import ResonatorNavbar from '../../../Components/ResonatorNavbar';

// Hello <Tex2SVG display='inline' latex='e^{i^pi}'/> nice to met you!

const CPW = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ width: '100%', height: '100%', px: { xs: 2, sm: 3, md: 6 }, py: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Box>
                    <ProgressBar style={{ margin: 'auto', width: '75%' }} completed={(3 / 6) * 100} customLabel=" " />
                    <ResonatorNavbar />

                    <p className='tutorial-h1'>Quasi Static Analysis of CPW's with Conformal Mapping</p>

                    <p>To determine the distributed capacitance and inductance of a transmission line, it is necessary to solve Laplace's equation in two-dimensions. When working in this equations natural coordinate space, this is not a trivial task when applied to transmission lines. However, a powerful method from the field of complex analysis, known as conformal mapping, can be applied to transform the transmission line into an equivalent simpler configuration, for which solutions to Laplace's equation can be more easily found.</p>

                    <h2>Complex Analysis</h2>
                    <p>Lipsum lipsum</p>

                    <h3>Infinitely deep dielectric, negligible conductor thickness</h3>

                    <p>
                        <Tex2SVG latex='
                    w = \int_{z_{0}}^{z} \frac{ dz }{ \sqrt{ \left(z-W/2\right) \left(z-W/2-s\right) } }                
                '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                        C_{d} = 2 \epsilon_{0}\epsilon_{r}\frac{ K(k_{1}) }{ K^{\prime}(k_{1} }
                    '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                    C_{a} = 2 \epsilon_{0}\frac{ K(k_{1}) }{ K^{\prime}(k_{1} }
                    '/>
                    </p>

                    <p>
                        <Tex2SVG latex='K(k) = \int_{0}^{\frac{\pi}{2}} \frac{ d\theta }{ \sqrt{1 - k^{2} \sin^{2} \theta} } = \int_{0}^{1} \frac{ dt }{ \sqrt{ \left(1-t^{2}\right) \left(1-k^{2}t^{2}\right) } }' />
                    </p>

                    <p>
                        <Tex2SVG latex='k_{1} = \frac{W}{W+2s}' />
                    </p>

                    <p>
                        <Tex2SVG latex='k^{\prime} = \sqrt{1-k^{2}}' />
                    </p>

                    <p>
                        <Tex2SVG latex='\frac{K(k)}{K^{\prime}(k)} = 
                    \begin{cases}
                        \frac{ \pi }{ \ln\left(2 \frac{1+\sqrt{k^{\prime}}  }{ 1-\sqrt{k^{\prime}} }  \right) } &\text{for  } 0\le k \le \frac{1}{\sqrt{2}}\\ 
                        \frac{ \ln\left(2 \frac{1+\sqrt{k}  }{ 1-\sqrt{k} }  \right) }{ \pi } &\text{for  } \frac{1}{\sqrt{2}} \le k \le 1
                    \end{cases}'/>
                    </p>

                    <EllipticIntegral />

                    <p>
                        <Tex2SVG latex='\epsilon_{eff} = \frac{ \epsilon_{r} + 1 }{ 2 }' />
                    </p>

                    <p>
                        <Tex2SVG latex='Z = \frac{ 30\pi }{ \sqrt{\epsilon_{eff}} } \frac{K^{\prime}(k_{1})}{K(k1)}' />
                    </p>

                    <h3>Infinitely deep dielectric, negligible conductor thickness</h3>

                    <p>
                        <Tex2SVG latex='\epsilon_{eff} = 1 + \frac{\epsilon_{r}-1}{2} \frac{K(k2)}{K^{\prime}(k2)} \cdot  \frac{K(k1)}{K^{\prime}(k1)}' />
                    </p>

                    <EffectivePermittivity />

                    <p>
                        <Tex2SVG latex='k_{2} = \frac{ \sinh\left( \frac{\pi W}{4h} \right) }{ \sinh \left( \frac{\pi (W+2s)}{4h}  \right)  }' />
                    </p>

                    <h3>Finite Dielectric backed by infinite ground plane</h3>

                    <p>
                        <Tex2SVG latex='\epsilon_{eff} = 1+q\cdot (\epsilon_{r}-1)' />
                    </p>

                    <p>
                        <Tex2SVG latex='q = \frac{ \frac{K(k3)}{K^{\prime}(k3)} }{\frac{K(k1)}{K^{\prime}(k1)} + \frac{K(k3)}{K^{\prime}(k3)} }' />
                    </p>

                    <p>
                        <Tex2SVG latex='k_{2} = \frac{ \tanh\left( \frac{\pi W}{4h} \right) }{ \tanh \left( \frac{\pi (W+2s)}{4h}  \right)  }' />
                    </p>

                    <p>
                        <Tex2SVG latex='Z = \frac{ 60\pi }{ \sqrt{\epsilon_{eff}} } \cdot  \frac{ 1 }{\frac{K(k1)}{K^{\prime}(k1)} + \frac{K(k3)}{K^{\prime}(k3)} }' />
                    </p>

                    <h3>Metal Thickness</h3>

                    <p>
                        <Tex2SVG latex='s_{e} = s - \Delta' />
                    </p>

                    <p>
                        <Tex2SVG latex='W_{e} = W + \Delta' />
                    </p>

                    <p>
                        <Tex2SVG latex='\Delta = \frac{1.25t}{\pi} \cdot \left( 1 + \ln \left( \frac{4\pi W}{t} \right) \right)' />
                    </p>

                    <p>
                        <Tex2SVG latex='k_{e} = \frac{W_{e}}{W_{e} + 2s_{e}} \approx k_{1} + \left(1-k_{1}^{2}\right) \cdot \frac{\Delta}{2s}' />
                    </p>

                    <p>
                        <Tex2SVG latex='\epsilon_{eff}^{t} = \epsilon_{eff} - \frac{0.7 \cdot (\epsilon_{eff}-1)\frac{t}{s} }{ \frac{K(k1)}{K^{\prime}(k1)} + 0.7 \frac{t}{s} }' />
                    </p>

                    <h3>Losses</h3>

                    <p>
                        <Tex2SVG latex='\alpha_{d}^{CW} = \frac{ \epsilon_{r} }{ \sqrt{\epsilon_{eff}} } \cdot \frac{ \epsilon_{eff} - 1 }{ \epsilon_{r} - 1  } \cdot \frac{ \pi }{ \lambda_{0} } \tan \delta_{d}' />
                    </p>

                    <p>
                        <Tex2SVG latex='\alpha_{c}^{CW} = 0.0023 \cdot \frac{R_{s}}{Z_{0cp}} \left[\frac{\partial Z_{0cp}^{a}}{\partial s} - \frac{\partial Z_{0cp}^{a}}{\partial W} - \frac{\partial Z_{0cp}^{a}}{\partial t}   \right] &\text{dB / unit length}' />
                    </p>

                    <p>
                        <Tex2SVG latex='\alpha_{c}^{CW} = \frac{ R_{s} \cdot \sqrt{\epsilon_{eff}} }{ 480 \pi \cdot K(k_{1}) \cdot K^{\prime}(k_{1}) \cdot (1-k_{1}^{2}) }' />
                    </p>

                    <p>
                        <Tex2SVG latex='\cdot \left( \frac{1}{a} \left[ \pi + \ln \frac{ 8\pi a\cdot(1-k_{1}) }{ t\cdot(1+k_{1}) } \right] + \frac{1}{b} \left[ \pi + \ln \frac{ 8\pi b\cdot(1-k_{1}) }{ t\cdot(1+k_{1}) } \right]  \right)' />
                    </p>

                    <p>
                        <Tex2SVG display='inline' latex='a=W/2' /> , <Tex2SVG display='inline' latex='b=s+W/2' />, <Tex2SVG display='inline' latex='t > 3\delta' />, <Tex2SVG display='inline' latex='t \ll W' />, <Tex2SVG display='inline' latex='t \ll s' />
                    </p>

                    <ConformalMapping />

                </Box>
            </Grid>
            <div >
                <button className='resonator-back-button' onClick={() => navigate('/resonators-page2')}>Back</button>
                <button className='resonator-next-button' onClick={() => navigate('/resonators-page4')}>Next</button>
            </div>
        </Grid>
        </Box>
    )
}
export default CPW;