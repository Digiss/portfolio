import Header from './components/Header';
import Hero from './components/hero/Hero';
import About from './components/About';
import Formation from './components/Formation';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Formation />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
