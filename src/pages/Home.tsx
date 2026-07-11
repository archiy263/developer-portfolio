import React, { Suspense } from 'react';
import Hero from '../components/sections/Hero';

const About = React.lazy(() => import('../components/sections/About'));
const Skills = React.lazy(() => import('../components/sections/Skills'));
const Experience = React.lazy(() => import('../components/sections/Experience'));
const Projects = React.lazy(() => import('../components/sections/Projects'));
const Certificates = React.lazy(() => import('../components/sections/Certificates'));
const Contact = React.lazy(() => import('../components/sections/Contact'));

const LoadingFallback = () => (
  <div className="w-full h-32 flex items-center justify-center text-secondary">
    Loading...
  </div>
);

const Home = () => {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
