import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom'
import Tex2SVG from 'react-hook-mathjax';
// import ResonatorNavbar from '../../../Components/ResonatorNavbar';
// import ResonatorButtons from '../../../Components/ResonatorButtons';
import fig1 from './figs/sm_fibre_coupling.pdf';
import fig2 from './figs/sm_fibre_coupling_lens1.pdf';
import fig3 from './figs/sm_coupling_gaussianProfiles.pdf';
import fig4 from './figs/fibre_coupling_components.pdf';

const FibreCoupling = () => {

  const navigate = useNavigate();

  return (
    <Grid className="tutorial-resonators" container mt={700} mr={5} ml={5}>
      <Grid item xs={12}>
        <Box>

          {/* <ProgressBar style={{ margin: 'auto', width: '75%' }} completed={(1 / 6) * 100} customLabel=" " /> */}
          {/* <ResonatorNavbar /> */}

          <p className='tutorial-h1'>Coupling Coherent Light into Single Mode Fibre</p>

            <p>Coupling light into single mode (SM) fibre can be rather challenging. SM fibre has a very small core, typically between 4-10 um in diameter, so the alignment is extremely sensitive. This is compounded by issues with beam stability: any mechanical vibration or thermal drift can significantly affect coupling efficiency. In addition, the laser beam profile, which is typically Gaussian, needs to be well-matched to the fiber's fundamental mode.</p>
            <p> 
                .
            </p>

            <p>When considering the focusing of light from a larger beam to a smaller one, it is tempting to invoke geometric optics, and determine the required focal length and NA of the focussing lens for this task in this manner. For focusing laser light, this is not the optimal approach, since laser light has a Gaussian beam profile</p>
            <p>.</p>
            <p>The combination of optical components required for SM fibre coupling is rather simple. At the most basic level, a lens is needed to focus light into the fibre, which may be mounted in a fibre coupler whose position can be actuated by a translation mount/stage. These additional optomechanic elements will be discussed shortly, but first the coupling lens must be considered. When devising an approach for coupling a laser beam into an SM fibre, one must first consider the required focal length and numerical aperture of the coupling lens. This can be handled by a geometric optical approach.</p>  

            <p>Efficiently coupling collimated laser light into a single-mode fiber requires matching the laser beam parameters to the fibre's mode field. This is achieved by matching the waist of the focused laser beam <Tex2SVG display="inline"  latex='w_{in}'/> to be the same size as the mode field radius <Tex2SVG display="inline" latex='w_{f}'/> of the SM fibre, i.e. <Tex2SVG latex='w_{in}=w_{f}'/>. Empirically, it is considered that <Tex2SVG display="inline"  latex='w_{f}'/> can be approximated by:</p>

            
            <Tex2SVG latex='w_{f} \approx 0.65 \frac{\lambda}{NA}'/>
        

            <p>....where NA is the numerical aperture of the fibre, given by a difference of the refractive indices of the fibre core and cladding, <Tex2SVG display="inline"  latex='NA=n_{0} \sin \theta{=}\sqrt{n^{2}_{core} - n^{2}_{clad}}'/></p>

        <img
            src={fig1}
            alt="fibrecouplingfig1"
            className="fibrecouplingfigs"
            style={{ display: 'block', margin: '0 auto' }}
        />

        <p>If a collimated beam with a beam radius <Tex2SVG display="inline" latex='w_{beam}'/> is focused using a lens of focal length <Tex2SVG display="inline" latex='f'/>, the focused spot size (beam waist) is:</p>
    
        <Tex2SVG latex='w_{o} = \frac{4\lambda f}{\pi w_{beam}}'/>        

        <p>Therefore, to match <Tex2SVG display="inline" latex='w_{o}{=}w_{f}'/>, the focal length of the focusing lens must satisfy:</p>

        <Tex2SVG latex='f=\frac{\pi w_{f} w_{beam}}{4 \lambda}'/>

        <p>When choosing the focusing lens, it usually isn't possible to choose the focal length needed for 100% coupling efficiency. So, it is useful to consider the maximal efficiency possible based on the choice limitations. The efficiency <Tex2SVG display="inline" latex='\eta'/> of the coupling is given by:</p>

        <Tex2SVG latex='\eta = \left( \frac{2w_{o}w_{f}}{w^{2}_{o} + w^{2}_{f}} \right)^{2}'/>

        <h2>Fibre Coupling Efficiency</h2>

        <p>The electric field amplitude profiles of the focussed beam spot:</p>

        <Tex2SVG latex='E_{in}(r) = \frac{1}{\omega_{0}} \exp(\frac{-r^{2}}{\omega^{2}_{0}})'/>

        <p>.... and the mode field diameter:</p>

        <Tex2SVG latex='E_{in}(r) = \frac{1}{\omega_{f}} \exp(\frac{-r^{2}}{\omega^{2}_{f}})'/>

        <p>The square root prefactor ensures that the fields are normalised so that:</p>

        <Tex2SVG latex='\iint\left|E_{r}\right|^{2} dx dy = 1'/>

        <p>The overlap integral <Tex2SVG display="inline" latex='I'/> is:</p>
        
        <Tex2SVG latex='I = \iint E_{in}(r) E_{fibre}^{*} dx dy'/>

        <p>Since the fields are real and circularly symmetric, convert to polar coordinates:</p>
        
        <Tex2SVG latex='I = \int_{0}^{2\pi} d\theta \int_{0}^{\infty} r dr E_{in}(r) E_{fibre}(r)'/>        

        <p>Substitute the Gaussian profiles:</p>

        <Tex2SVG latex='I = \int_{0}^{2\pi} d\theta \int_{0}^{\infty} r dr \sqrt{\frac{2}{\pi\omega_{0}^{2}}} \sqrt{\frac{2}{\pi\omega^{2}_{f}}} \exp \left(- \frac{r^{2}}{\omega_{0}^{2}} - \frac{r^{2}}{\omega_{f}^{2}}\right)'/>
        
        <Tex2SVG latex='= \frac{2}{\pi\sqrt{\omega^{2}_{0}\omega^{2}_{f}}} 2\pi \int_{0}^{\infty}r dr \exp\left( -r^{2} \left( \frac{1}{\omega^{2}_{0}} + \frac{1}{\omega^{2}_{f}} \right)\right)'/>
        
        <Tex2SVG latex='= \frac{4}{\omega^{2}_{0}\omega^{2}_{f}} \int_{0}^{\infty}r dr \exp\left(-Ar^{2}\right)'/>
        

        ....where <Tex2SVG display="inline" latex='A=\frac{1}{\omega|^{2}_{0}} + \frac{1}{\omega^{2}_{f}}'/>. The integral:

        <Tex2SVG latex='\int_{0}^{\infty} r \exp\left( -Ar^{2} \right) = \frac{1}{2A}'/>

        So:

        <Tex2SVG latex='I = \frac{4}{\sqrt{\omega^{2}_{0}\omega^{2}_{f}}}\cdot \frac{1}{2A} = \frac{2}{\sqrt{\omega^{2}_{0}\omega^{2}_{f}}} \cdot \frac{1}{\frac{1}{\omega^{2}_{0}} + \frac{1}{\omega^{2}_{f}}}'/>

        The coupling efficiency is the overlap integral:

        <Tex2SVG latex='\eta = \left| \iint E_{m}(x,y) E_{fibre}^{*}(x,y) \cdot dx dy \right|^{2}'/>

        So:
        
        <Tex2SVG latex='\eta = \left|I\right|^{2} = \left(\frac{2}{\sqrt{\omega^{2}_{0}\omega^{2}_{f}}} \cdot \frac{1}{\frac{1}{\omega^{2}_{0}} + \frac{1}{\omega^{2}_{f}}}\right)^{2} = \left(\frac{2\omega_{0}\omega_{f}}{\omega^{2}_{0} + \omega^{2}_{f}}\right)^{2}'/>

        Therefore, assuming perfect alignment, the maximum expected fibre coupling efficiency is:

        <Tex2SVG latex='\eta = \left(\frac{2\omega_{0}\omega_{f}}{\omega^{2}_{0} + \omega^{2}_{f}}\right)^{2}'/>

        <h3>Coupling Light into SM Fibre</h3>
        <p>A GEM532 laser has a centre wavelength of 532 nm, with a beam diameter of <Tex2SVG display="inline "latex='0.9\pm 0.1'/> mm and a beam divergence of 0.8 mrad. The aim is to couple this beam into Thorlabs SM450 single mode fibre, which has a mode-field diameter of 2.8-4.1 <Tex2SVG display="inline "latex='\mu'/>m, and an SiO2 core with <Tex2SVG display="inline "latex='n{=}1.45'/>. Calculate the focussed spot size of the laser beam if it is focussed through (a) a Thorlabs C171TMD mounted aspheric lens, with focal length <Tex2SVG display="inline "latex='f=6.2'/> mm, <Tex2SVG display="inline "latex='NA=0.30'/>, <Tex2SVG display="inline "latex='WD=2.8'/> mm; and (b) a Thorlabs C140TMD mounted aspheric lens with <Tex2SVG display="inline "latex='f=1.5'/> mm, <Tex2SVG display="inline "latex='NA=0.58'/>, <Tex2SVG display="inline"latex='WD=0.8'/> mm, at a distance of 10 cm away from the laser source. For each, what is the impact on the amount of power which can be coupled into the fibre?</p>

        <img
            src={fig2}
            alt="fibrecouplingfig2"
            className="fibrecouplingfigs"
            style={{ display: 'block', margin: '0 auto' }}
        />
    
        <p>The Rayleigh range for this laser is</p> 

        <Tex2SVG latex='Z_{R}{=}\frac{\pi\omega^{2}n}{\lambda} = 2.141 \text{ m}'/>
        
        <p>At <Tex2SVG display="inline" latex='z{=}10'/> cm away from the laser source, the small divergence of the laser beam means that the beam waist radius is very close to <Tex2SVG display="inline "latex='\omega_{0}'/> as</p> 
        
        <Tex2SVG latex='\omega(z){=}w_{0} \sqrt{1+\left(\frac{z}{Z_{R}}\right)^{2}}{=}0.5005 \text{ mm}'/>
        
        <p>The focussed beam radius <Tex2SVG display="inline "latex='\omega_{focus}'/> following the lens is</p> 
        
        <Tex2SVG latex='\omega_{focus}{=}\frac{4\lambda f}{\pi\omega_{0}}{=}3.7891 \text{ } \mu m'/>
        
        <p>Recalling that the fibre mode field diameter is between 2.8-4.1 <Tex2SVG display="flex" latex='\mu'/>m, with this lens choice, if the MFD is at the higher end, up to around 50% of the laser power could be lost at the coupling interface alone.</p> 

        <p>(b) Now the focussed beam spot radius is</p> 
  
        <Tex2SVG latex='\omega_{focus}{=}2.0299 \text{ }\mu m'/>
    
        <p>Now the power lost at the coupling interface will be minimal. However, this comes at a cost of significant difficulty of coupling, since the Rayleigh range of the focused beam is short, and therefore the focus is tight. This means there is a very shallow depth of focus, and the alignment is far more sensitive. In practice, therefore, often a compromise is made between the theoretical best lens for the fibre coupling, and what is achievable to maximally couple with.</p> 

        <img
            src={fig3}
            alt="fibrecouplingfig3"
            className="fibrecouplingfigs"
            style={{ display: 'block', margin: '0 auto' }}
        />

        <table style={{ margin: '0 auto' }} border="1">
        <thead>
            <tr>
            <th>Lens</th>
            <th>Focal Length</th>
            <th>Beam Waist</th>
            <th>Max <Tex2SVG display="inline" latex='\eta'/></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Thorlabs C140TMD</td>
            <td><Tex2SVG display="inline" latex='1.5'/>mm</td>
            <td><Tex2SVG display="inline" latex='2.032 \mu m'/></td>
            <td>99.99%</td>
            </tr>
            <tr>
            <td>Thorlabs C330TMD</td>
            <td><Tex2SVG display="inline" latex='3.1'/>mm</td>
            <td><Tex2SVG display="inline" latex='4.20 \mu m'/></td>
            <td>61.50%</td>
            </tr>
            <tr>
            <td>Thorlabs C171TMD </td>
            <td><Tex2SVG display="inline" latex='6.25'/> mm</td>
            <td><Tex2SVG display="inline" latex='8.467 \mu m'/></td>
            <td>20.92%</td>
            </tr>
            <tr>
            <td>Thorlabs C260TMD</td>
            <td><Tex2SVG display="inline" latex='15.3'/> mm</td>
            <td><Tex2SVG display="inline" latex='20.727 \mu m'/></td>
            <td>3.84%</td>
            </tr>
        </tbody>
        </table>

        \<h2>Impact of Tilt on Coupling Efficiency</h2>

        <p>If the incoming Gaussian beam is tilted by angle <Tex2SVG display="inline" latex='\theta'/> from the z-axis and <Tex2SVG display="inline" latex='\phi'/> from the transverse (x-y) plane, the beam's propagation vector is now:</p>

        
        <Tex2SVG latex='\vec{k}_{in} = k\left( \sin\theta \cos\phi, \sin\theta \sin\phi, \cos\theta \right)'/>
        
        <p>The fibre mode is assumed here to propagate along z i.e. <Tex2SVG display="inline" latex='$\vec{k}_{fibre}=-k\hat{z}'/>. If the incoming beam has a tilt, it picks up a transverse phase ramp, and therefore:</p>

        <Tex2SVG latex='E_{in}(x,y) = E_{0}(x,y) \cdot \exp\left( i\kappa (x\sin\theta \cos\phi + y \sin\theta \sin\phi ) \right)'/>

        <p>Now, the overlap integral I becomes:</p>

        <Tex2SVG latex='I = \iint E_{in}(x,y) \cdot E_{fibre}(x,y) dx dy
        & = E_{0}(x,y)^{2} \exp\left( i\kappa (x\sin\theta \cos\phi + y \sin\theta \sin\phi ) \right) dx dy'/>

        <p>This is the Fourier transform of the Gaussian mode profile, evaluated at spatial frequencies:</p>

        <Tex2SVG latex='k_{x} = k\sin\theta \cos\phi '/>

        and 

        <Tex2SVG latex='k_{y} = k\sin\theta \sin\phi'/>        

        <p>Using the result of the Gaussian Fourier transform, the overlap efficiency becomes:</p>

        <Tex2SVG latex='\eta(\theta) = \left(\frac{2\omega_{0}\omega_{f}}{\omega_{0}^{2} + \omega_{f}^{2}}\right)^{2}\cdot \exp\left( - \frac{k^{2}\omega^{2}sin^{2}\theta}{2} \right)'/>

        <p>....where <Tex2SVG display="inline" latex='\omega{=}\frac{2\omega_{0}\omega_{f}}{\omega_{0}^{2} + \omega_{f}^{2}}'/> is the effective mode radius, and <Tex2SVG display="inline" latex='\kappa=\frac{2\pi}{\lambda}'/> is the wavenumber. The above formula shows an exponential drop in coupling as <Tex2SVG display="inline" latex='\theta'/> increases, but <Tex2SVG display="inline" latex='\phi'/> does not affect the efficiency in the ideal symmetric case — it only changes the direction of the tilt, not the overlap.</p>

        <h2>Techniques for Coupling Light into SM Fibre</h2>

        <p>Coupling into SM fibre can be achieved using coupling packages, but often there is a need to do this in free space using a lens to focus into the fibre core. To accomplish this, the laser light must be collimated and have minimal divergence. With this, the light can be focused into the fibre core using either a microscoope objective lens or an aspheric lens. An aspheric lens is preferred over other lenses since it minimises spherical aberations leading to higher coupling efficiency. In addition, aspheric lenses preserve the Gaussian beam shape of the laser, ensuring better mode matching between the laser and the fiber. Aspheric lenses also tend to have higher numerical apertures than other lenses. This is an important consideration, since the NA of the lens should match or slightly exceed the fiber's NA. Many SM fibres have an NA around 0.12 to 0.15, and a high-NA spherical lens would introduce strong aberrations. An aspheric lens, on the other hand, can achieve a higher NA while maintaining a clean focus.</p>

        <p>To align the laser beam into the fibre, at least three degrees of fine control are required, but ideally six. At the most basic level, a control of the Cartesian positions in X, Y, and Z require fine control using well machined translation stages. These can be a combination of stages in different axes, or a single 3-axis stage. Additionally, control of tip, tilt, and rotation would provide the most fine-tuned coupling into the fibre core possible, although this can be very expensive to achieve.</p>

        <img
            src={fig4}
            alt="fibrecouplingfig4"
            className="fibrecouplingfigs"
            style={{ display: 'block', margin: '0 auto' }}
        />

        <p>Setup:</p>
        <p>1. Laser</p>
        <p>2. Lens mounted in z-drive kinematic</p>
        <p>3. Fibre coupler mounted in Differential mount</p>
        <p>4. Fibre</p>
        <p>5. Fibre coupler connected to Thorlabs Power Meter</p>

        <p>This is a common way to couple a laser to SM fibre but it isn't optimal. It is the cheaper approach, but does not allow for the finest grain movements possible, and doesn't allow for tip/tilt correction. The optimal approach is:</p> 

        <p>More Tips:</p>
        <p>6. Anti-Reflection (AR) Coatings: Use a lens with a wavelength-matched AR coating to reduce losses and back-reflection.</p>
        <p>7. Fibre connectors: e.g., FC/APC can also help reduce back-reflected light into the laser.</p>
        <p>8. Index matching gel: a dab of index-matching gel between fibre and lens can reduce Fresnel losses and increase coupling stability.</p>

        <p>With only having three degrees of freedom available, it is best to place the lens in the Z-drive, and the fibre-coupler in the x-y drive, due to:</p>

        
        <p>Fine-Tuning Beam Coupling: The fibre is the “acceptor” of the light—small XY shifts at the fibre face matter much more than at the lens. You want to be able to scan the fibre laterally to align its core precisely with the focused beam spot.</p>
        <p>Optical Axis Stability: Keeping the lens fixed keeps the beam path stable. If you move the lens instead, you're also shifting the beam focus in space, and it becomes harder to maintain proper coupling geometry.</p>
        <p>Fewer Unintended Effects: Moving the lens changes the beam's convergence point, not just the lateral position. Moving the fibre is more “pure” in the sense that it changes the position of the acceptance region without affecting beam focus.</p>

        <h4>Cheap Option - Back Reflection Technique</h4>

        <p>The back-reflection trick is a powerful alignment technique for ensuring a laser beam is incident normal to an optical surface. It is especially useful for lenses, mirrors, and fibre facets. When a laser beam hits a flat optical surface, some light is reflected back. If the beam is perfectly aligned (i.e. centred and perpendicular to the surface), the reflected beam travels directly back along the incoming path. However, if the beam is off-centre or at an angle, the reflected beam walks off.</p>

        <h4>Medium Option - Autocollimator</h4>

        <p>An autocollimator can be used here.</p>

        <h4>Expensive Option - Beam Profiler</h4>
        
        </Box>
      </Grid>
      <div >
        {/* <button className='resonator-next-button' onClick={() => navigate('/resonators-page2')}>Next</button> */}
        {/* <ResonatorButtons page={"/resonators-page2"} text={'Next'}/> */}
        {/* <ResonatorButtons/> */}
      </div>
    </Grid>
  )
}

export default FibreCoupling