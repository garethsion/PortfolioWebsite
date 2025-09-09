import React from 'react'
// import { Carousel } from "../components/publications_carousel"
import { slides } from "../data/publications.json"
// import ReactTypingEffect from 'react-typing-effect';
// import { Typewriter } from '../Components/typewriter'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
      <section id="intro">
      {/* <div className="introContent">
          <span className="hello"><ReactTypingEffect speed={100} typingDelay={0} staticText={["Hello, I'm Gareth, I am a physicist working at the interface of Quantum Optics"]}/></span>
      </div> */}
      <TypeAnimation
      sequence={[
        // Line 1
        "Hello, I'm Gareth. Welcome to my website!\nI am a physicist and lecturer at the University of Oxford.\nMy research is at the interface of Quantum Optics and photonic nanomaterials.\nI sythesise quantum network nodes based around solid state defects in diamond\nand I am working as part of the UK Integrated Quantum Networks Hub to build the\nUKs first national quantum network. I am also a software developer, and I am very\ninterested in building open source visualisation and simulation applications for science.",
        1000,
      ]}
      speed={50}
      wrapper="pre"   // ✅ use <pre> instead of <span>
      repeat={0}      // run once
      style={{ whiteSpace: "pre-line" }} // ✅ respects \n
    />
      {/* <Carousel data={slides} /> */}
      {/* <img src={bg} alt="Profile" className="bg" /> */}
  </section>
  )
}

export default Home