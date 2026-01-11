import React, { Component } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
import Tex2SVG from 'react-hook-mathjax';
import { Grid, Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom'
import ResonatorNavbar from '../../../Components/ResonatorNavbar';

// Hello <Tex2SVG display='inline' latex='e^{i^pi}'/> nice to met you!

const SurfaceImpedance = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ width: '100%', height: '100%', px: { xs: 2, sm: 3, md: 6 }, py: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Box>
                    <ProgressBar style={{ margin: 'auto', width: '75%' }} completed={(6 / 6) * 100} customLabel=" " />
                    <ResonatorNavbar />

                    <p className='tutorial-h1'>Surface Impedance of a Superconductor</p>
                    <h3>Non-Local Electrodynamics of a Superconductor</h3>

                    <p>
                        An electromagnetic field penetrates into a normal metal with a finite skin depth <Tex2SVG display='inline' latex='\delta' />. this depth can be calculated from Maxwell's equations and Ohm's law, which gives a local relationship between the current density <Tex2SVG display='inline' latex='\vec{J}_{n}' /> and the electric field <Tex2SVG display='inline' latex='\vec{E}' />
                    </p>
                    <p>
                        <Tex2SVG latex='
                            \vec{J}_{n}(\vec{r}) = \sigma \vec{E}(\vec{r}) = \frac{\sigma_{dc}}{1+i\omega\tau} \vec{E}(\vec{r})
                        '/>
                    </p>

                    <p>
                        .... where <Tex2SVG display='inline' latex='\sigma_{dc}' /> is the normal state conductivity, <Tex2SVG display='inline' latex='\tau = \frac{l}{\nu_{0}}' />, is the electron relaxation time, <Tex2SVG display='inline' latex='l' /> is the mean free path of the electrons, and <Tex2SVG display='inline' latex='\nu_{0}' /> is the fermi velocity. At room temperature, <Tex2SVG display='inline' latex='\tau' /> is typically in the sub-pico-seconds, and so <Tex2SVG display='inline' latex='\omega\tau << 1' /> and <Tex2SVG display='inline' latex='\sigma \approx \sigma_{dc}' />. The skin-depth then is approximately:
                    </p>

                    <p>
                        <Tex2SVG latex='
                            \delta \approx \sqrt{ \frac{ 2 }{ \omega \mu_{0} \sigma_{dc} } }
                        '/>
                    </p>

                    <p> The local relationship of equation *** is only valid if <Tex2SVG display='inline' latex='\vec{E}' /> varies little within a radius <Tex2SVG display='inline' latex='l' /> about some point <Tex2SVG display='inline' latex='\vec{r}' />, i.e. for <Tex2SVG display='inline' latex='l \ll \vec{r}' />. Since <Tex2SVG display='inline' latex='\delta' /> decreases at higher frequencies, and <Tex2SVG display='inline' latex='l' /> increases at lower temperatures, a non-local relationship may occur at low enough tdemperatures or high enough frequencies. This non-local relationship is described by Chambers:</p>

                    <p>
                        <Tex2SVG latex='
                            \vec{J}_{n}(\vec{r}) = \frac{3\sigma_{dc}}{4\pi l} \int_{V} \frac{ \vec{R}\vec{R} \cdot \vec{E}(\vec{r}) e^{-R/l} }{ R^{4} } d\vec{r}
                        '/>
                    </p>

                    <p> .... where <Tex2SVG display='inline' latex='\vec{R} = \vec{r} - \vec{r}' /> </p>

                    <p>Due to the Meissner effect, an electromagnetic field also penetrates into a superconductor over a distance called the penetration depth. Assuming the two fluid model (<Tex2SVG display='inline' latex='\vec{J} = \vec{J}_{s} + \vec{J}_{n}' />), the relationship between <Tex2SVG display='inline' latex='\vec{J}_{s}' />, <Tex2SVG display='inline' latex='\vec{E}' /> and <Tex2SVG display='inline' latex='\vec{H}' /> were proposed by London:</p>

                    <p>
                        <Tex2SVG latex='
                            \frac{\partial}{\partial t} = \frac{\vec{E}}{\mu_{0}\lambda_{L}^{2}}
                        '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                        \nabla \times \vec{J}_{s} = - \frac{1}{\lambda_{L}^{2}} \vec{H}
                    '/>
                    </p>
                    <p>At zero temperature:</p>

                    <p>
                        <Tex2SVG latex='
                            \lambda_{LO} = \sqrt{ \frac{ m }{ \mu_{0}ne^{2} } }
                        '/>
                    </p>

                    <p>.... where <Tex2SVG display='inline' latex='m' />, <Tex2SVG display='inline' latex='n' />, and <Tex2SVG display='inline' latex='e' /> are the mass, density, and charge of the electron. In the London gauge <Tex2SVG display='inline' latex='\nabla \cdot \vec{A} = 0' />:</p>

                    <p><Tex2SVG latex='\vec{J}_{s} = -\frac{1}{\lambda_{L}^{2}} \vec{A}' /></p>

                    <p>These equations only apply if the local condition is satisfied. This may not be a correct assumpton though, since the mean free path <Tex2SVG display='inline' latex='l' /> may be large in a good superconductor at low temperatures, and penetration depth increases with a decreasing mean free path or increasing impurity density. From these observations, Pippard proposed an empirical non-local equation:</p>

                    <p>
                        <Tex2SVG latex='\vec{J}_{s}(\vec{r}) = -\frac{3\sigma_{dc}}{4\pi \zeta_{0}\lambda_{L}^{2}} \int_{V} \frac{ \vec{R}\vec{R} \cdot \vec{A}(\vec{r}) e^{-R/\zeta} }{ R^{4} } d\vec{r}' />
                    </p>

                    <p>....with</p>

                    <p>
                        <Tex2SVG latex='\frac{1}{\zeta} = \frac{1}{\zeta_{0}} + \frac{1}{\alpha_{p}l}' />
                    </p>

                    <p> ....where <Tex2SVG display='inline' latex='\zeta_{0}' /> and <Tex2SVG display='inline' latex='\zeta' /> are the coherence lengths of a pure and impure superconductor, and <Tex2SVG display='inline' latex='\alpha_{p}' /> is an empirical constant. The cohefrence length can be related to <Tex2SVG display='inline' latex='\nu_{0}' /> and <Tex2SVG display='inline' latex='\Delta_{0}' /> by: </p>

                    <p>
                        <Tex2SVG latex='
                        \zeta_{0} = \frac{\hbar \nu_{0}}{\pi\Delta_{0}}'/>
                    </p>

                    <p>The coherence length is the minimum size of a Cooper pair as dictated by the Heisenberg uncertainty principle.</p>

                    <h4>Mattis-Bardeen and the Theory of the Anomalous Skin-Effect</h4>

                    <p>From BCS theory, Mattis and Bardeen proposed a non-local equation between the total current density <Tex2SVG display='inline' latex='\vec{J}' /> and <Tex2SVG display='inline' latex='\vec{A}' />:</p>

                    <p>
                        <Tex2SVG latex='
                        \vec{J}(\vec{r}) = \frac{3\sigma_{dc}}{4\pi \nu_{0}\hbar\lambda_{L}^{2}} \int_{V} \frac{ \vec{R}\vec{R} \cdot I(\omega,R,T) e^{-R/l} }{ R^{4} } d\vec{r}
                        '/>
                    </p>

                    <p><Tex2SVG display='inline' latex='I(\omega,R,t)' /> is known as the Mattis-Bardeen kernel, and is given by:</p>

                    <p>
                        <Tex2SVG latex='
                        I(\omega,R,t) = -i\pi \int_{\Delta-\hbar\omega}^{\Delta} [1 - 2f(E+\hbar\omega)][g(E)\cos\alpha\Delta_{2} - i \sin\alpha\Delta_{2}] e^{i\alpha\Delta_{1}} dE'/>
                    </p>
                    <p>
                        <Tex2SVG latex='- i\pi \int_{\Delta}^{\infty} [1 - 2f(E+\hbar\omega)][g(E)\cos\alpha\Delta_{2} - i \sin\alpha\Delta_{2}] e^{i\alpha\Delta_{1}} dE' />
                    </p>
                    <p>
                        <Tex2SVG latex='+ i\pi \int_{\Delta}^{\infty} [1 - 2f(E+\hbar\omega)][g(E)\cos\alpha\Delta_{1} + i \sin\alpha\Delta_{1}] e^{i\alpha\Delta_{2}} dE' />
                    </p>

                    <p>....where:</p>

                    <p>
                        <Tex2SVG latex='
                        \Delta_{1} =
                        \begin{cases}
                            \sqrt{E^{2} - \Delta^{2} }, |E| > \Delta \\ 
                            i\sqrt{\Delta^{2}-E^{2} }, |E| < \Delta
                        \end{cases}
                    '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                        \Delta_{2} = \sqrt{ (E+\hbar\omega)^{2} - \Delta^{2} }
                        '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                        g(E) = \frac{E^{2} + \Delta^{2} + \hbar\omega E}{\Delta_{1} \delta_{2}}
                        '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                        \alpha = \frac{R}{(\hbar\nu_{0})}
                        '/>
                    </p>

                    <p>and</p>

                    <p>
                        <Tex2SVG latex='\Delta = \Delta(T)' />
                    </p>

                    <p>....is the gap parameter with temperature, and <Tex2SVG display='inline' latex='f(E)' /> is the Fermi-Dirac distribution function:</p>

                    <p>
                        <Tex2SVG latex='f(E) = \frac{1}{1+e^{E/kT}}' />
                    </p>

                    <p>The kernel decays over a characteristic length scale <Tex2SVG display='inline' latex='R \sim \zeta_{0}' />, since the superconducting electron density cannot change much within a distance of the coherence length.</p>

                    <h4>Origin of the Matis-Bardeen Kernel</h4>

                    <p>In a normal metal, the density of electronic states close to the Fermi energy are more or less constant. In Fig. (a), the dark shaded regions represent he occupied states according to the fermi-Dirac statistics at finite temperature.</p>

                    <p>In a superconductor though, an energy gap opens up around <Tex2SVG display='inline' latex='E_{f}' />, and grows continuously until <Tex2SVG display='inline' latex='T < T_{C}' /> (Fig. (b)). From BCS theory, electrons near the Fermi surface are unstable against the formation of Cooper pairs. The dotted arrow in (b) indicates the possible excitations of the occupied states above the gap, leading to z quasiparticle peak at $\omega = 0$. This is captured by the first two terms in eq. The solid arrows show electronic excitations which require a minimum energy of $2\Delta$. this is represented buy the third term in eq. The dark shaded area up to <Tex2SVG display='inline' latex='|\Delta(T) + \hbar\omega|' /> indicate the states which can contribute to the conductivity by absorption of photons of energy <Tex2SVG display='inline' latex='\hbar\omega' />.</p>

                    <p>The full size of the superconducting energy gap is given at $T=0$. No quasi-particle peak is present, meaning that there is only absortion above <Tex2SVG display='inline' latex='\omega_{g} = 2\Delta/\hbar' />. The states removed from the gap areas are stacked below and above the gap, leading to a divergence of <Tex2SVG display='inline' latex='E/\sqrt{E^{2} - \Delta_{0}^{2}}' /></p>

                    <p>From the Fermi Golden Rule, the transition probabilities can be written as:</p>

                    <p>
                        <Tex2SVG latex='
                            \alpha_{s} = \int |M_{s}|^{2} N_{s}(E) N_{s}(E+\hbar\omega) \times [f(E) - F(E+\hbar\omega)] dE
                        '/>
                    </p>

                    <p>....where <Tex2SVG display='inline' latex='N_{s}' /> is the density of states, and <Tex2SVG display='inline' latex='M_{s}' /> is the matrix element of an interaction Hamiltonian:</p>

                    <p>
                        <Tex2SVG latex='
                        H_{int} = \sum_{k\sigma,k^{\prime}\sigma^{\prime}} B_{k^{\prime}\sigma^{\prime},k\sigma} c^{*}_{k^{\prime},\sigma^{\prime}} c_{k^{\prime},\sigma^{\prime}}
                        '/>
                    </p>

                    <p>The superconducting state consists of a phase-coherent superposition of occupied one-electron states, so each term in the Hamiltonian is dependent, whereas it is independant in the normal state. This means that interference terms appear in the absolute square of the matrix element. The coherence changes the matrix element <Tex2SVG display='inline' latex='M_{s}' /> into the matrix element <Tex2SVG display='inline' latex='M' /> of a single electron and the coherence factors <Tex2SVG display='inline' latex='F(\Delta,E,E^{\prime})' />:</p>

                    <p>
                        <Tex2SVG latex='
                        F(\Delta,E,E^{\prime}) = \frac{1}{2} \left( 1 \pm \frac{\Delta^{2}}{EE^{\prime}} \right)
                        '/>
                    </p>

                    <p>The transition rate can be rewritten then as:</p>

                    <p>
                        <Tex2SVG latex='
                        \alpha = \int |M|^{2} F(\Delta,E,E+\hbar\omega) N_{s}(E) N_{s}(E+\hbar\omega) \times [f(E) - F(E+\hbar\omega)] dE
                        '/>
                    </p>

                    <p>The transition rate can be related to the real part of the complex conductivity <Tex2SVG display='inline' latex='\sigma_{1}' />, since the electrodynamic energy absorption is proportional to <Tex2SVG display='inline' latex='\sigma_{1}E^{2}' />:</p>

                    <p>
                        <Tex2SVG latex='
                            \frac{\alpha_{s}}{\alpha_{n}} = \frac{\sigma_{1s}}{\sigma_{n}}
                        '/>
                    </p>

                    <p>At a finite temperature, the response of the electrons to an incident EM wave can be written in two parts, the 'superconducting' and 'normal' components, following the two-fluid model. The first component corresponds to the superconducting ground state, and the second to the thermally excited electrons from the ground state. So:</p>

                    <p>
                        <Tex2SVG latex='
                            \frac{ \alpha_{s} }{ \alpha_{n} } = \frac{2}{\hbar\omega} \int_{\Delta}^{\infty} \frac{ |E(E+\hbar\omega) + \Delta^{2}| [f(E) - f(E+\hbar\omega)] }{ (E^{2} - \Delta^{2})^{1/2} [(E+\hbar\omega)^{2} - \Delta^{2}]^{1/2}  } dE 
                        '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                            + \frac{1}{\hbar\omega} \int_{\Delta-\hbar\omega}^{-\Delta} \frac{ |E(E+\hbar\omega) + \Delta^{2}| [1 - 2ff(E+\hbar\omega)] }{ (E^{2} - \Delta^{2})^{1/2} [(E+\hbar\omega)^{2} - \Delta^{2}]^{1/2}  } dE 
                        '/>
                    </p>

                    <h4>Solving the Mattis-Bardeen Kernel</h4>

                    <p>For a plane wave incident on a bulk superconductor, the components can be expressed as <Tex2SVG display='inline' latex='\vec{E} = E_{x}(z)\hat{x}' />, <Tex2SVG display='inline' latex='\vec{A} = A_{x}(z)\hat{x}' />, and <Tex2SVG display='inline' latex='\vec{J} = J_{x}(z)\hat{x}' />. Introudicing the 1D Fourier transforms:</p>

                    <p>
                        <Tex2SVG latex='
                            J_{x}(z) = \int_{-\infty}^{+\infty} J_{x}(q)e^{iqz}dq
                        '/>
                    </p>

                    <p>
                        <Tex2SVG latex='
                            A_{x}(z) = \int_{-\infty}^{+\infty} A_{x}(q)e^{iqz}dq
                        '/>
                    </p>

                    <p>The equation <Tex2SVG display='inline' latex='\vec{J}(\vec{r}) = \frac{3\sigma_{dc}}{4\pi \nu_{0}\hbar\lambda_{L}^{2}} \int_{V} \frac{ \vec{R}\vec{R} \cdot I(\omega,R,T) e^{-R/l} }{ R^{4} } d\vec{r}' /> takes the form of a spatial convolution, and can be converted into a product in Fourier space:</p>

                    <p>
                        <Tex2SVG latex='J_{x}(q) = -K(q)A_{x}(q)' />
                    </p>

                    <p>....with the Mattis-Bardeen kernel:</p>

                    <p>
                        <Tex2SVG latex='K(q) = -\frac{3}{\pi\hbar\nu_{0}\lambda_{LO}^{2}q} \int_{0}^{\infty} \left[ \frac{\sin x}{x^{3}} - \frac{\cos x}{x^{2}}\right] I(\omega,x/q,T) e^{-x/ql} dx' />
                    </p>

                    <p>.... where <Tex2SVG display='inline' latex='x = qR' /></p>

                    <p>From a sequence of laplace transforms, and a long derivation, this kernel can be solved. The details of this are not yet detailed here, but can be found in Tinkham, and also in Gao.</p>

                    <h4><Tex2SVG display='inline' latex='Z_{s}' /> and  <Tex2SVG display='inline' latex='\lambda_{eff}' /> for specular and diffusive surface scattering</h4>

                    <p>
                        <Tex2SVG latex='Z_{s} = \frac{E_{x}}{H_{y}} | z=0' />
                    </p>
                </Box>
            </Grid>
            <div >
                <button className='resonator-back-button' onClick={() => navigate('/resonators-page5')}>Back</button>
            </div>
        </Grid>
    </Box>
    )
}
export default SurfaceImpedance;