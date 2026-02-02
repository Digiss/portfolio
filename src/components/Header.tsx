import { Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import resume from '../assets/resume.pdf';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const SCROLL_POS = { home: 0, sobre: 1200, formation: 2400, skills: 4600, contact: 5700 };
  const scrollToSection = (key: keyof typeof SCROLL_POS) =>
   window.scrollTo({ top: SCROLL_POS[key], behavior: 'smooth' });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isOverButton, setIsOverButton] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 950 && window.scrollY < 1900);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = scrolled ? '#000000' : '#fff';
  const hoverColor = scrolled ? '#1e29ed' : '#fff';;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent" onMouseMove={handleMouseMove} >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="bg-white px-6 py-2 rounded-lg shadow-md"    
          style={{ overflow: 'hidden' }}
          onMouseEnter={() => setIsOverButton(true)}
          onMouseLeave={() => setIsOverButton(false) }>
            <h1 className="text-xl font-bold" style={{ color: '#1e29ed' }}>Gustavo M. Fernandes</h1>
          </div>

          <nav className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:opacity-80 transition-opacity font-medium"
              style={{ 
                transition: 'all 0.2s ease-in-out',
                color: textColor,
                width: 'auto',
                height: '40px',
                padding: '10px',
                paddingTop: '5px',
                border: '2px solid transparent',
                borderRadius: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.border = '2px solid currentColor';
                e.currentTarget.style.boxShadow = '0 4px 4px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = textColor;
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="hover:opacity-80 transition-opacity font-medium"
              style={{ 
                transition: 'all 0.2s ease-in-out',
                color: textColor,
                width: 'auto',
                height: '40px',
                padding: '10px',
                paddingTop: '5px',
                border: '2px solid transparent',
                borderRadius: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.border = '2px solid currentColor';
                e.currentTarget.style.boxShadow = '0 4px 4px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = textColor;
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('formation')}
              className="hover:opacity-80 transition-opacity font-medium"
              style={{ 
                transition: 'all 0.2s ease-in-out',
                color: textColor,
                width: 'auto',
                height: '40px',
                padding: '10px',
                paddingTop: '5px',
                border: '2px solid transparent',
                borderRadius: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.border = '2px solid currentColor';
                e.currentTarget.style.boxShadow = '0 4px 4px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = textColor;
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Formação
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:opacity-80 transition-opacity font-medium"
              style={{ 
                transition: 'all 0.2s ease-in-out',
                color: textColor,
                width: 'auto',
                height: '40px',
                padding: '10px',
                paddingTop: '5px',
                border: '2px solid transparent',
                borderRadius: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.border = '2px solid currentColor';
                e.currentTarget.style.boxShadow = '0 4px 4px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = textColor;
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:opacity-80 transition-opacity font-medium"
              style={{ 
                transition: 'all 0.2s ease-in-out',
                color: textColor,
                width: 'auto',
                height: '40px',
                padding: '10px',
                paddingTop: '5px',
                border: '2px solid transparent',
                borderRadius: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.border = '2px solid currentColor';
                e.currentTarget.style.boxShadow = '0 4px 4px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = textColor;
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contato
            </button>
            <a
              href={resume}
              download="cv_Gustavo_Martins_Fernandes.pdf"
              className="flex transition-all items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium"
              style={{ backgroundColor: '#5e65f2', color: 'white', width: 'auto', padding: '10px', paddingTop: '5px' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1e29ed'; e.currentTarget.style.boxShadow = '0 4px 4px rgba(0, 0, 0, 0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#5e65f2'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Download size={18} />
              Currículo
            </a>
          </nav>
        </div>
        <div
        style={{
          position: 'fixed',
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          opacity: isOverButton ? 0.5 : 0,
          scale: isOverButton ? 1 : 0.5,
          transition: 'all 0.2s ease-out',
        }}
        className="w-8 h-8 bg-[#5e65f2] rounded-full"
      />
      </div>
    </header>
  );
}

export default Header;
