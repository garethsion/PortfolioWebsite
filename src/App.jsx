import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './Components/ContactInfo'
import ContactForm from './Components/ContactForm'
import NotFound from './Components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs from './Pages/Jobs'
import Research from './Pages/Research'
import Tutorials from './Pages/Tutorials'
import Resonators from './Pages/Tutorials/SCResonators/Resonators'
import ComplexAnalysis from './Pages/Tutorials/SCResonators/ComplexAnalysis'
import CPW from './Pages/Tutorials/SCResonators/CPW'
import TransmissionLine from './Pages/Tutorials/SCResonators/TransmissionLine'
import KineticInductance from './Pages/Tutorials/SCResonators/KineticInductance'
import SurfaceImpedance from './Pages/Tutorials/SCResonators/SurfaceImpedance'
import OpticsLanding from './Pages/Tutorials/Optics/OpticsLanding'
import FibreCoupling from './Pages/Tutorials/Optics/FibreCoupling'
import Focussing from './Pages/Tutorials/Optics/Focussing'
import FDTDLanding from './Pages/Tutorials/fdtd/fdtd_landing'
import Media from './Pages/Media'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/biography' element={<About />}/>
        <Route path='/research' element={<Research />}/>
        <Route path='/contact' element={<ContactLayout />}>
          <Route path='info' element={<ContactInfo/>}/>
          <Route path='form' element={<ContactForm/>}/>
        </Route>
        <Route path='jobs' element={<JobsLayout/>}>
          <Route index element={<Jobs/>}/>
        </Route>
        <Route path='/tutorials' element={<Tutorials/>}/>
        {/* <Route path='/cpw' element={<CPW/>}/> */}

        <Route path = "/resonators" element={<Resonators/>}/>
        {/* <Route path = "/resonators-page2" element={<ComplexAnalysis/>}/> */}
        <Route path = "/resonators-page2" element={<CPW/>}/>
        <Route path = "/resonators-page3" element={<TransmissionLine/>}/>
        <Route path = "/resonators-page4" element={<KineticInductance/>}/>
        <Route path = "/resonators-page5" element={<SurfaceImpedance/>}/>

        <Route path = "/optics" element={<OpticsLanding/>}/>
        <Route path = "/fibrecoupling" element={<FibreCoupling/>}/>
        <Route path = "/focussing" element={<Focussing/>}/>

        <Route path = "/fdtd" element={<FDTDLanding/>}/>

        <Route path='/media' element={<Media />}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App