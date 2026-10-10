import { Aurora } from '@/components/animations';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Workshops from '@/components/Workshops';
import ResumeCTA from '@/components/ResumeCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Aurora />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Education />
        <Certifications />
        <Workshops />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
