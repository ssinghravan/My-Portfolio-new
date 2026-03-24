import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Certificates } from './components/Certificates';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white selection:bg-purple-500/30 selection:text-purple-200 antialiased font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Gallery />
        <Certificates />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;