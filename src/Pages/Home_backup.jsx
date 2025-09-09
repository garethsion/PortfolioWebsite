// Home.jsx
import React from "react";
import { TypeAnimation } from "react-type-animation";
import PublicationsCarousel from "./PublicationsCarousel";
import NewsColumn from "./NewsColumn";

const Home = () => {
  const publications = [
    { title: "Nature paper", url: "https://www.nature.com/articles/XXXX" },
    { title: "Science Advances paper", url: "https://www.science.org/doi/XXXX" },
    { title: "PRL paper", url: "https://journals.aps.org/prl/abstract/XXXX" },
  ];

  const news = [
    {
      title: "Invited talk at APS March Meeting",
      date: "September 2025",
      description:
        "I gave an invited talk on quantum networks based on diamond color centers.",
      link: "https://march.aps.org/",
    },
    {
      title: "New grant awarded",
      date: "August 2025",
      description:
        "Our group received funding from UKRI to develop scalable photonic interfaces for quantum networking.",
    },
    {
      title: "Paper accepted in Nature Photonics",
      date: "July 2025",
      description:
        "Our recent work on nanophotonic cavity-enhanced NV centers has been published in Nature Photonics.",
      link: "https://www.nature.com/nphoton/",
    },
  ];

  return (
    <section id="intro" className="p-6">
      {/* Intro animation */}
      <TypeAnimation
        sequence={[
          `Hello, I'm Gareth. Welcome to my website!
I am a physicist and lecturer at the University of Oxford.
My research is at the interface of Quantum Optics and photonic nanomaterials.
I synthesise quantum network nodes based around solid state defects in diamond
and I am working as part of the UK Integrated Quantum Networks Hub to build the
UK's first national quantum network. I am also a software developer, and I am very
interested in building open source visualisation and simulation applications for science.`,
          1000,
        ]}
        speed={50}
        wrapper="pre"
        repeat={0}
        style={{ whiteSpace: "pre-line" }}
      />

      {/* Side-by-side Publications + News */}
      {/* <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Publications</h2>
          <PublicationsCarousel publications={publications} />
        </div>

        <div>
          <NewsColumn news={news} />
        </div>
      </div> */}
    </section>
  );
};

export default Home;
