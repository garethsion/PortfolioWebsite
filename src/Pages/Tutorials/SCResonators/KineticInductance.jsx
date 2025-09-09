import React, { Component } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
import Tex2SVG from 'react-hook-mathjax';
import fig1 from './figs/ClemFig1_Hy_and_Kz.jpg';
import fig2 from './figs/ClemFig3_Lm_with_approxs.jpg';
import fig3 from './figs/jz_from_section_IIB.jpg';
import fig4 from './figs/Lki_from_section_IIB.jpg';
import fig5 from './figs/compare_Clem_Lki_w_ec.jpg';
import fig6 from './figs/current_density_one_slit.jpg';
import fig7 from './figs/supercurrent_one_slit.jpg';
import fig8 from './figs/vector_potential_two_slits.jpg'
import { Grid, Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom'
import ResonatorNavbar from '../../../Components/ResonatorNavbar';

// Hello <Tex2SVG display='inline' latex='e^{i^pi}'/> nice to met you!

const KineticInductance = () => {
    const navigate = useNavigate()
    return (
        <Grid container mt={1087} mr={5} ml={5}>
            <Grid item xs={12}>
                <Box>
                    <ProgressBar style={{ margin: 'auto', width: '75%' }} completed={(5 / 6) * 100} customLabel=" " />
                    <ResonatorNavbar />

                    <p className='tutorial-h1'>Kinetic Inductance</p>

                    <h3>Inductances for a Thin-Film CPW Assuming No Field penetration</h3>

                    <p>From Clem. Consider a cpw with a center conductor <Tex2SVG display='inline' latex='|x| <a' />, <Tex2SVG display='inline' latex='|y| < d/2' />, which carries a current <Tex2SVG display='inline' latex='I_{z}' /> in the <Tex2SVG display='inline' latex='z' /> direction. When <Tex2SVG display='inline' latex='d \ll a' />, and <Tex2SVG display='inline' latex='\lambda^{2}/d \ll a' />, a magnetic flux per unit length passes up through the right-hand slot (<Tex2SVG display='inline' latex='a < x < b' />, and down through the left-hand slot) (<Tex2SVG display='inline' latex='-b < x < -a' />). Assume that <Tex2SVG display='inline' latex='b-a \gg \lambda^{2}/d' />, so we can neglect the flux which penetrates into the film edges. The complex magnetic field <Tex2SVG display='inline' latex='H(\zeta) = H_{y}(x,y) + iH_{x}(x,y)' /> describing this situation is: </p>

                    <p>
                        <Tex2SVG latex='H(\zeta) = \frac{ iA }{ \sqrt{(\zeta^{2}-a^{2}) (\zeta^{2}-b^{2}) } }' />
                    </p>

                    <p>
                        .... where <Tex2SVG display='inline' latex='\zeta = x + iy' />, and <Tex2SVG display='inline' latex='A' /> is some constant, determined later. The magnetic flux density in the plane <Tex2SVG display='inline' latex='y=0' /> in the slots (<Tex2SVG display='inline' latex='a < |x| < b' />) is <Tex2SVG display='inline' latex='B_{y}(x,0) = \mu_{0}H_{y}(x,0)' />, where:
                    </p>

                    <p>
                        <Tex2SVG latex='H_{y}(x,0) = \frac{ A_{x} }{|x| \sqrt{(x^{2}-a^{2}) (b^{2}-x^{2}) } }
                    '/>
                    </p>

                    <p>
                        .... and the average sheet current density in the centre-conductor and the ground plane, averaged over the film thickness, is given by <Tex2SVG display='inline' latex='K_{z}(x) = -2H_{x}(x,\epsilon)' />, where:
                    </p>

                    <p>
                        <Tex2SVG latex='
                    K_{z}(x) = 
                    \begin{cases}
                        & \frac{ 2A }{\sqrt{(a^{2}-x^{2}) (b^{2}-x^{2}) } }, & |x| < a  \\
                        & -\frac{ 2A }{\sqrt{(x^{2}-a^{2}) (x^{2}-b^{2}) } }, & |x| > a
                    \end{cases}
                    '/>
                    </p>

                    <p>
                        <Tex2SVG display='inline' latex='H_{y}(x,0)' /> and <Tex2SVG display='inline' latex='K_{z}(x)' /> are shown below for <Tex2SVG display='inline' latex='a=1' />, <Tex2SVG display='inline' latex='b=2' />, and <Tex2SVG display='inline' latex='A=1' />
                    </p>

                    <img
                        src={fig1}
                        alt="resfig1"
                        className="resfigs"
                    />

                    <p>
                        The constant <Tex2SVG display='inline' latex='A' /> can be determined from the requirement that the current carried by the central conductor <Tex2SVG display='inline' latex='I_{z}' /> is:
                    </p>

                    <p>
                        <Tex2SVG latex='I_{z} = \frac{4A}{b} \textbf{K}(k)' />
                    </p>

                    <p>
                        The magnetic flux per unit length <Tex2SVG display='inline' latex='\Phi^{\prime}' /> is found by integrating <Tex2SVG display='inline' latex='H_{y}(x,0)' /> over the slot, giving:
                    </p>

                    <p>
                        <Tex2SVG latex='\Phi^{\prime} = \frac{\mu_0A}{b} \textbf{K}(k^{\prime}) = \frac{\mu_{0}\textbf{K}(k^{\prime})}{4\textbf{K}(k)} I_{z}' />
                    </p>

                    <p>
                        The complex potential from which <Tex2SVG display='inline' latex='H(\zeta)' /> can be derived via <Tex2SVG display='inline' latex='H(\zeta) = d\mathcal{G}/d\zeta ' /> is
                    </p>

                    <p>
                        <Tex2SVG latex='\mathcal{G}(\zeta) = \frac{iA}{b} F\left[ \arcsin \left( \frac{\zeta}{a} \right), \frac{a}{b} \right]' />
                    </p>

                    <p>
                        .... where <Tex2SVG display='inline' latex='F(\phi,k)' /> is the incomplete elliptic integral of the first kind with amplitude <Tex2SVG display='inline' latex='\phi' /> and modulus <Tex2SVG display='inline' latex='k' />.
                    </p>

                    <h3>Geometric Inductance for <Tex2SVG display='inline' latex='\lambda^{2}/d \ll a' /></h3>

                    <p>
                        We can recover the result for geometric inductance from <Tex2SVG display='inline' latex='I_{z}' /> and <Tex2SVG display='inline' latex='\Phi^{\prime}' />:
                    </p>

                    <p>
                        <Tex2SVG latex='L^{\prime}_{m} = \frac{\Phi^{\prime}}{I_{z}} = \frac{\mu_{0} \textbf{K}(k^{\prime})}{4\textbf{K}(k)}' />
                    </p>

                    <p>
                        For large <Tex2SVG display='inline' latex='b/a' />, this is well approximated by:
                    </p>

                    <p>
                        <Tex2SVG latex='L^{\prime}_{m} \approx \frac{\mu_{0}}{2\pi} \left[ \ln(4b/a) - (a/2b)^{2} \right]
                    '/>
                    </p>

                    <p>
                        For <Tex2SVG display='inline' latex='(b-a) \ll a' />:
                    </p>

                    <p>
                        <Tex2SVG latex='L^{\prime}_{m} \approx \frac{ \left(\frac{\pi\mu_{0}}{4}\right) }{ \ln\left( \frac{8a}{b-a} \right) }' />
                    </p>

                    <img
                        src={fig2}
                        alt="resfig2"
                        className="resfigs"
                    />

                    <h3>Kinetic Inductance for <Tex2SVG display='inline' latex='\lambda^{2}/d \ll a' /></h3>

                    <p>
                        With <Tex2SVG display='inline' latex='I_{z} \ll I_{c}' />, the penetration depth is well approximated by the low-current <Tex2SVG display='inline' latex='\lambda' />. The kinetic energy per unit volume of the supercurrent in this case is <Tex2SVG display='inline' latex='\mu_{0}\lambda^{2}j^{2}/2' />, where <Tex2SVG display='inline' latex='j' /> is the supercurrent density. The kinetic inductance per unit length can be calculated from:
                    </p>

                    <p>
                        <Tex2SVG latex='\frac{1}{2} L^{\prime}_{k}I_{z}^{2} = \frac{1}{2} \mu_{0} \lambda^{2} \int j^{2} dS' />\
                    </p>

                    <p>
                        When <Tex2SVG display='inline' latex='\lambda^{2}/d \ll a' />, the supercurrent density is well approximated by
                    </p>

                    <p>
                        <Tex2SVG latex='j_{z}(x,y) = \frac{K_{z}(x)}{2\lambda} \frac{ \cosh\left( \frac{y}{\lambda} \right) }{ \sinh\left( \frac{ d}{ 2\lambda } \right) }' />
                    </p>

                    <p>
                        ....apart from very close to the slots. <Tex2SVG display='inline' latex='K_{z}(x)' /> has been given earlier, and the integral of <Tex2SVG display='inline' latex='j^{2}_{z}(x,y)' /> over the film thickness is
                    </p>

                    <p>
                        <Tex2SVG latex='\int_{-d/2}^{d/2} j^{2}_{z}(x,y)dy = K^{2}_{z}(x) \frac{q(d/\lambda)}{\lambda}' />
                    </p>

                    <p>.... where</p>


                    <p>
                        <Tex2SVG latex='q(u) = \frac{ \sinh u+u }{ 8 \sinh^{2} \left(u/2\right) }' />
                    </p>

                    <p>
                        Note, <Tex2SVG display='inline' latex='q(u) \approx 1/u' /> when <Tex2SVG display='inline' latex='u \ll 1' />, and <Tex2SVG display='inline' latex='q(u) \approx 1/4' /> when <Tex2SVG display='inline' latex='u \gg 1' />
                    </p>

                    <img
                        src={fig3}
                        alt="resfig3"
                        className="resfigs"
                    />

                    <p>
                        <Tex2SVG display='inline' latex='K^{2}_{z}(x)' /> diverges at the edges of the slots, and so the integral of this quantity over x cannot be full evaluated, unless it is cut off at <Tex2SVG display='inline' latex='x=\pm(a-\delta_{a})' /> and <Tex2SVG display='inline' latex='x=\pm(b+\delta_{b})' />, where <Tex2SVG display='inline' latex='\delta_{a} \ll a' /> and <Tex2SVG display='inline' latex='\delta_{b} \ll b' />. The cutoffs must be chosen such that the magnitudes of the current in the central conductor and the total return current in the ground plane are the same. With this in mind, evaluating the currents for <Tex2SVG display='inline' latex='|x| < a-\delta_{a}' /> and <Tex2SVG display='inline' latex='|x| > b+\delta_{b}' /> gives the condition:
                    </p>


                    <p>
                        <Tex2SVG latex='F\left[ \arcsin\left( \frac{a-\delta_{a}}{a}, \frac{a}{b} \right) \right] = F\left[ \arcsin\left( \frac{b}{\delta_{b}+b}, \frac{a}{b} \right) \right]' />
                    </p>

                    <p>
                        .... i.e. that <Tex2SVG display='inline' latex='\delta_{a}/a = \delta_{b}/b = \epsilon \ll 1' />. Applying this cutoff to evaluate the integral of <Tex2SVG display='inline' latex='K_{z}^{2}(x)' /> over <Tex2SVG display='inline' latex='x' /> yields, to lowest order in <Tex2SVG display='inline' latex='\epsilon' />:
                    </p>

                    <p>
                        <Tex2SVG latex='
                        L^{\prime}_{k} = \frac{\mu_{0} \lambda q(d/\lambda)}{4a(1-k)\textbf{K}^{2}(k)} \ln \left[ \frac{2(1-k)}{\epsilon(1+k)} \right]
                        \approx \frac{\mu_{0}\lambda}{2a} q(d/\lambda) g_{\epsilon}(k,\epsilon)'/>
                    </p>

                    <p>....where </p>

                    <p>
                        <Tex2SVG latex='g_{\epsilon}(k,\epsilon) = \frac{1}{21-k)\textbf{K}^{2}(k)} \ln \left[ \frac{2(1-k)}{\epsilon(1+k)} \right]' />
                    </p>

                    <p>
                        With this, we can plot the kinetic inductance for the case where <Tex2SVG display='inline' latex='\lambda^{2}/d \ll a' />
                    </p>

                    <img
                        src={fig4}
                        alt="resfig4"
                        className="resfigs"
                    />

                    <p>
                        A similar derivation was provided by both Watanabe, et al, J. Appl. Phys. **33**, 5708 (1994) and Booth, Holloway, and Kuester, IEEE International Symposium on Electromagnetic Compatibility 594 (2001). However, in these analyses, the cutoff lengths <Tex2SVG display='inline' latex='\delta_{a}' /> and <Tex2SVG display='inline' latex='\delta_{b}' /> were assumed to be the same. This is in violation of the requirement that the magnitude of the centre conductor current is the same as the return current in the ground plane. Both papers derived expressions for <Tex2SVG display='inline' latex='L^{\prime}_{k}' /> that contain two logarithmic terms arising from the cutoffs near <Tex2SVG display='inline' latex='a' /> and <Tex2SVG display='inline' latex='b' />. These are both similar to the RHS of the equation above, which is in approximate agreement with the derivations of these two papers.
                    </p>

                    <p>Watanabe used <Tex2SVG display='inline' latex='w' /> as the width, <Tex2SVG display='inline' latex='s' /> as the gap, and <Tex2SVG display='inline' latex='\delta=d/4' /> as the single cutoff length. Here, we have <Tex2SVG display='inline' latex='a=w/2' />, <Tex2SVG display='inline' latex='b=w/2+s' />, and <Tex2SVG display='inline' latex='\delta=d/4' />. With this, they derived an equation for <Tex2SVG display='inline' latex='g(s,w,d)' />:</p>

                    <p>
                        <Tex2SVG latex='g(s,w,t) = \frac{1}{2k^{2}K(k)^{2}} \left\{ -\ln \frac{t}{4w} - \frac{w}{w+2s} \ln \frac{t}{4(w+2s)} + \frac{2(w+2s)}{w+2s} \ln \frac{s}{w+s} \right\} 
                    '/>
                    </p>

                    <p>
                        Our equation here for the kinetic inductance is in agreement with Watanabe's when <Tex2SVG display='inline' latex='s\ll w' />, except for a typo in that paper: the <Tex2SVG display='inline' latex='k^{2}' /> in the denominator of the prefactor should have been <Tex2SVG display='inline' latex='k^{\prime}^{2} = 1-k^{2}' />.
                    </p>

                    <p>
                        Meservey1969 calculated the kinetic inductance of a long, thin superconducting strip. To handle the divergence, they introduced a single cutoff length <Tex2SVG display='inline' latex='\delta' /> given by <Tex2SVG display='inline' latex='\delta \approx d/2' /> when <Tex2SVG display='inline' latex='d>2\lambda' /> and <Tex2SVG display='inline' latex='\delta \approx d/4' /> when <Tex2SVG display='inline' latex='d < 2\lambda' />. However, it is now well understood that for <Tex2SVG display='inline' latex='d<2\lambda' />, the equations for the current density and self-field no longer contain the penetration depth <Tex2SVG display='inline' latex='\lambda' />, but instead contain the Pearl length or two-dimensional screening length <Tex2SVG display='inline' latex='\lambda = 2\lambda^{2}/d' />. Consequently, when <Tex2SVG display='inline' latex='d<2\lambda' />, it is incorrect to assume that <Tex2SVG display='inline' latex='\delta \approx d/4' />, and instead a cuttof of order <Tex2SVG display='inline' latex='\lambda^{2}/d' /> should be used. We can see the effect of this in the below figure:
                    </p>

                    <img
                        src={fig5}
                        alt="resfig5"
                        className="resfigs"
                    />

                    <h4>Inductances for Arbitrary <Tex2SVG display='inline' latex='\lambda^{2}/d' /> relative to <Tex2SVG display='inline' latex='a' /></h4>

                    <p>
                        We're particularly interested in the condition where <Tex2SVG display='inline' latex='\lambda \gg 2a' />, when the kinetic inductance is expected to be much greater that the geometric inductance. In this case, the equation <Tex2SVG display='inline' latex='L^{\prime}_{k} \approx (\mu_{0}\Lambda/4a) g_{\epsilon}(k,\epsilon)' /> cannot be used, since it is only a good approximation when both <Tex2SVG display='inline' latex='d \ll \lambda' /> and <Tex2SVG display='inline' latex='\epsilon \approx \lambda^{2}/da \ll 1' />. The equation for the geometric inductance is no longer valid also, since it's derivation required the assumption that <Tex2SVG display='inline' latex='\lambda^{2}/d \ll (b-a)' />, so that the field was confined entierly to the slots. So, to deal with a film of an arbitrary value of <Tex2SVG display='inline' latex='\Lambda = 2\lambda^{2}/d' />, including the case for <Tex2SVG display='inline' latex='\lambda>2a' />, a new approach is required to obtain a good estimate of <Tex2SVG display='inline' latex='L^{\prime}_{m}' /> and <Tex2SVG display='inline' latex='L^{\prime}_{k}' />, which was provided by Clem.
                    </p>

                    <h3>Thin-Film CPW with Narrow Slits</h3>

                    <p>
                        For the case when <Tex2SVG display='inline' latex='d' /> is somewhat less than <Tex2SVG display='inline' latex='\lambda' />, and when the film carries a supercurrent density <Tex2SVG display='inline' latex='\textbf{j}(x,y,z)e^{i\omega t}' />, solutions of the London equation and Maxwell's equations reveal that the supercurrent density is practically uniform across the thickness of the film (<Tex2SVG display='inline' latex='y' />). In this case, we can take the sheet-current density as <Tex2SVG display='inline' latex='\textbf{K} = \textbf{j}d' />, so that the London equantion becomes:
                    </p>

                    <p>
                        <Tex2SVG latex='\textbf{K} = -\frac{2}{\mu_{0}\Lambda} \left[ \textbf{A} + \left(\frac{\phi_{0}}{2\pi}\right) \nabla_{\gamma} \right]' />
                    </p>

                    <p>
                        .... where <Tex2SVG display='inline' latex='\textbf{A}' /> is the magnetic vector potential, <Tex2SVG display='inline' latex='\phi_{0}=h/2e' /> is the superconducting flux quantum, and <Tex2SVG display='inline' latex='\gamma' /> is the phase of the superconducting order parameter. The gauge-invariant quantity <Tex2SVG display='inline' latex='\textbf{A}_{s} = \textbf{A} + (\phi_{0}/2\pi)\nabla_{\gamma}' />, which is proportional to the superfluid velocity, is sometimes known as the gauge-invariant vector potential.
                    </p>

                    <p>
                        This thin-film London equation will be used to to derive exact analytical solutions for the geometric and kinetic inductance of a thin-film CPW with narrow slit widths.
                    </p>

                    <h4>Exact solution for a film with one long slit</h4>

                    <p>
                        Consider a thin superconducting wire, containing <Tex2SVG display='inline' latex='N^{\prime}' /> flux quanta along its length <Tex2SVG display='inline' latex='z' />, such that the magnetic flux per unit length through the film is <Tex2SVG display='inline' latex='\Phi^{\prime} = N^{\prime}\phi_{0}' />. We choose a guage such that the vector potential has only a component along the <Tex2SVG display='inline' latex='z' /> direction, given by
                    </p>

                    <p>
                        <Tex2SVG latex='A_{0}(x,y) = \int_{0}^{\infty} \alpha(k)\sin(kx)e^{-k|y|}dk' />
                    </p>

                    <p>From this we can define components for the magnetic flux density:</p>

                    <p>
                        <Tex2SVG latex='B_{0x}(x,y) = \frac{\partial A_{0}(x,y)}{\partial y}' />
                    </p>

                    <p>
                        <Tex2SVG latex='B_{0y}(x,y) = -\frac{\partial A_{0}(x,y)}{\partial x}' />
                    </p>

                    <p>
                        The supercurrent sheet density is only along <Tex2SVG display='inline' latex='z' /> and is given by the thin-film London equation:
                    </p>

                    <p>
                        <Tex2SVG latex='K_{0}(x) = -\frac{2}{\mu_{0}\Lambda} \left[ A_{0}(x,0) + \left(\frac{\phi_{0}}{2\pi}\right) \gamma_{z} \right]' />
                    </p>

                    <p>...where </p>

                    <p>
                        <Tex2SVG latex='\gamma_{z}(x) = \frac{\partial\gamma(x,y)}{\partial z} = \frac{\pi \Phi^{\prime}_{0}}{\phi_{0}} sgn(x)' />
                    </p>

                    <p>
                        ....where <Tex2SVG display='inline' latex='sgn(x) = 1' /> for <Tex2SVG display='inline' latex='x>0' /> and <Tex2SVG display='inline' latex='sgn(x) = -1' /> for <Tex2SVG display='inline' latex='x<0' />. From Ampere's law, the sheet current density is given by the discontinuity in <Tex2SVG display='inline' latex='B_{x}' /> across the film thickness. Using <Tex2SVG display='inline' latex='K_{0}(x) = \left[B_{x}(x,0^{-}) - B_{x}(x,0^{+})\right]/\mu_{0}' /> and our gauge chosen above, substituting into the sheet current density and taking the derivative w.r.t. <Tex2SVG display='inline' latex='x' /> yields:
                    </p>

                    <p>
                        <Tex2SVG latex='\int_{0}^{\infty} \alpha(k)k(1+k\Lambda) \cos(kx)dk = -\Phi^{\prime}\delta(x)' />

                    </p>

                    <p>
                        ... where <Tex2SVG display='inline' latex='\delta(x)' /> is the Dirac delta function. Multiplying by <Tex2SVG display='inline' latex='\cos(k^{\prime}x)' /> and integrating over all <Tex2SVG display='inline' latex='x' />:
                    </p>


                    <p>
                        <Tex2SVG latex='\alpha(k) = -\frac{\Phi^{\prime}}{\pi k(1+k\Lambda)}' />
                    </p>

                    <p>
                        <Tex2SVG display='inline' latex='B_{0y}(x,0)' /> is an even function of <Tex2SVG display='inline' latex='x/\Lambda' /> that diverges at <Tex2SVG display='inline' latex='x=0' /> but decreases to zero as <Tex2SVG display='inline' latex='|x| \rightarrow \infty' />. For <Tex2SVG display='inline' latex='y>0' /> (<Tex2SVG display='inline' latex='y<0' />) and <Tex2SVG display='inline' latex='\rho=\sqrt{x^{2}+y^{2}} \gg \Lambda' />, <Tex2SVG display='inline' latex='B_{0}\approx\hat{\rho}\Phi^{\prime}/\pi \rho' /> (<Tex2SVG display='inline' latex='B_{0}\approx-\hat{\rho}\Phi^{\prime}/\pi \rho' />), where <Tex2SVG display='inline' latex='\hat{\rho} = (\hat{x}x + \hat{y}y)/\rho' />. In other words, for <Tex2SVG display='inline' latex='y>0' />, screening by the superconducting film causes the masgnetic flux density at large distances to look like that produced by a magnetic line charge.
                    </p>

                    <p>The vector potential has the following characteristics:</p>

                    <p>
                        Along the <Tex2SVG display='inline' latex='x' />-axis, <Tex2SVG display='inline' latex='A_{0}(x,0)' /> is an odd function of <Tex2SVG display='inline' latex='x/\Lambda' /> and <Tex2SVG display='inline' latex='A_{0}(0,0) =0' />. For <Tex2SVG display='inline' latex='\rho = \sqrt{x^{2}+y^{2}}\gg \Lambda' />, <Tex2SVG display='inline' latex='A_{0} \approx \frac{-Phi^{\prime}}{\pi} \tan\left(\frac{x}{|y|}\right)' />, so that <Tex2SVG display='inline' latex='A_{0}(\pm\infty,0)=\mp\frac{\Phi^{\prime}}{2}' />
                    </p>

                    <p>The corresponding sheet-current density is</p>

                    <p>
                        <Tex2SVG latex='K_{0}(x) = -2\frac{2\Phi^{\prime}sgn(x)}{\pi\mu_{0}\Lambda} f\left( \frac{|x|}{\Lambda} \right)' />
                    </p>

                    <p>....where </p>

                    <p>
                        <Tex2SVG latex='f(u) = \int_{0}^{\infty} \frac{\sin(t) dt}{t+u} = \int_{0}^{\infty} \frac{e^{-ut} dt}{t^{2} + 1}' />
                    </p>

                    <p>
                        <Tex2SVG display='inline' latex='f(0) = \pi/2' />, <Tex2SVG display='inline' latex='df(u)/du=-\infty' /> at <Tex2SVG display='inline' latex='u=0' />, and <Tex2SVG display='inline' latex='f(u)\approx1/u' /> for <Tex2SVG display='inline' latex='u\gg1' />
                    </p>

                    <img
                        src={fig6}
                        alt="resfig6"
                        className="resfigs"
                    />

                    <img
                        src={fig7}
                        alt="resfig7"
                        className="resfigs"
                    />

                    <h4>Exact solution for a CPW with two narrow slits</h4>

                    <p>Now, take a CPW in the xz plane with two long narrow slits parallel to the <Tex2SVG display='inline' latex='z' />-axis, one at <Tex2SVG display='inline' latex='x=a' /> containing <Tex2SVG display='inline' latex='N^{\prime}' /> positive flux quanta per unit, and one at <Tex2SVG display='inline' latex='x=-a' /> containing <Tex2SVG display='inline' latex='N^{\prime}' /> negative flux quanta per unit. The resulting vector potential, magnetic flux density, and sheet-current density are found by a linear superposition of the results in <Tex2SVG display='inline' latex='A' />:</p>

                    <p>
                        <Tex2SVG latex='A_{z}(x,y) = A_{0}(x-a,y) - A_{0}(x+a,y)' />
                    </p>

                    <p>
                        <Tex2SVG latex='\textbf{B}(x,y) = \textbf{B}_{0}(x-a,y) - \textbf{B}_{0}(x+a,y)' />
                    </p>

                    <p>
                        <Tex2SVG latex='
                        K_{z}(x) = K_{0}(x-a) - K_{0}(x+a)  
                        \begin{cases}
                        = \frac{2}{\mu_{0}\Lambda} \left[ \Phi^{\prime} - A_{z}(x,0) \right], & |x| < a
                        = -\frac{2}{\mu_{0}\Lambda} A_{z}(x,0), & |x|>a
                        \end{cases}
                        '/>
                    </p>

                    <h5>Magnetic Field</h5>

                    <p>
                        <Tex2SVG display='inline' latex='B_{y}(x,0)' /> is an odd function of <Tex2SVG display='inline' latex='x' /> which diverges at <Tex2SVG display='inline' latex='x=\pm a' /> but decreases to zero as <Tex2SVG display='inline' latex='|x|\rightarrow \infty' />. For <Tex2SVG display='inline' latex='\rho=\sqrt{x^{2}+y^{2}} \gg \Lambda' /> and <Tex2SVG display='inline' latex='\rho \gg a' />:
                    </p>

                    <p>
                        <Tex2SVG latex='B_{y}(x,y) \approx \frac{4\Phi^{\prime}ax|y|}{\pi(x^{2}+y^{2})^{2}}' />
                    </p>

                    <p>
                        <Tex2SVG latex='B_{x}(x,y) \approx \frac{\pm2\Phi^{\prime}ia(x^{2}+y^{2})}{\pi(x^{2}+y^{2})^{2}}' />
                    </p>

                    <p>
                        .... where the upper (lower) sign holds for <Tex2SVG display='inline' latex='y>0' /> (<Tex2SVG display='inline' latex='y<0' />). This is to say, for <Tex2SVG display='inline' latex='y>0' />, screening by the superconducting film causes the magnetic flux density at large distances to look like that of a dipole produced by magnetic line charges.
                    </p>

                    <h5>Magnetic Vector Potential</h5>

                    <p>Along the <Tex2SVG display='inline' latex='x' />-axis, <Tex2SVG display='inline' latex='A_{z}(x,0)' /> is an even function of <Tex2SVG display='inline' latex='x' />. For <Tex2SVG display='inline' latex='\rho=\sqrt{x^{2}+y^{2}} \gg \Lambda' />,</p>

                    <p>
                        <Tex2SVG latex='A_{z}\approx -\frac{\Phi^{\prime}}{\pi} \left[ \tan^{-1}\left( \frac{x-a}{|y|}\right) - \tan^{-1}\left( \frac{x+a}{|y|}\right)\right]' />
                    </p>

                    <p>
                        So, for <Tex2SVG display='inline' latex='\rho=\sqrt{x^{2}+y^{2}} \gg \Lambda' /> and <Tex2SVG display='inline' latex='\rho \gg a' />:
                    </p>

                    <p>
                        <Tex2SVG latex='A_{z}(x,y) \approx \frac{2\Phi^{\prime}a|y|}{\pi(x^{2}+y^{2}}' />
                    </p>

                    <img
                        src={fig8}
                        alt="resfig8"
                        className="resfigs"
                    />

                    <h5>Sheet Current Density</h5>

                    <p>
                        <Tex2SVG display='inline' latex='K_{z}(x)' /> is an even function of <Tex2SVG display='inline' latex='x' /> with discontiuities at <Tex2SVG display='inline' latex='x=\pm a' />. For <Tex2SVG display='inline' latex='\rho=\sqrt{x^{2}+y^{2}} \gg \Lambda' />:
                    </p>

                    <p>
                        <Tex2SVG latex='K_{z}(x)\approx \frac{-4\Phi^{\prime}a}{\pi\mu_{0}x^{2}}' />
                    </p>

                    <p>
                        In the limit as <Tex2SVG display='inline' latex='\Lambda\rightarrow0' />, <Tex2SVG display='inline' latex='K_{z}(x)' /> reduces to the form given earlier, with <Tex2SVG display='inline' latex='b=a' />, i.e.
                    </p>

                    <p>
                        <Tex2SVG latex='
                        K_{z}(x) = 
                        \begin{cases}
                            & \frac{ 2A }{\sqrt{(a^{2}-x^{2}) (b^{2}-x^{2}) } }, & |x| < a  \\
                            & -\frac{ 2A }{\sqrt{(x^{2}-a^{2}) (x^{2}-b^{2}) } }, & |x| > a
                            \end{cases}
                    '/>
                    </p>

                </Box>
            </Grid>
            <div >
                <button className='resonator-back-button' onClick={() => navigate('/resonators_page4')}>Back</button>
                <button className='resonator-next-button' onClick={() => navigate('/resonators-page6')}>Next</button>
            </div>
        </Grid>
    )
}
export default KineticInductance;

