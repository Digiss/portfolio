import './hero.css';
import { useEffect, useState } from 'react';

function Hero() {
  const [iniciado, setiniciado] = useState(false);

  useEffect(() => {
    setiniciado(true);
  }, []);
  
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(0deg, #5C6AF2 0%, #1e29ed 100%)' }}
    >
      <div className="text-center" >
        <h1 className={`text-5xl md:text-7xl font-bold text-white mb-4 name ${iniciado ? 'animate' : ''}`}>
          Gustavo Martins Fernandes
        </h1>
        <p className="text-2xl md:text-3xl text-white opacity-90">
         <code>&lt;&gt; Dev. FrontEnd &lt;/&gt;</code>
        </p>
      </div>
    </section>
    
  );
}

export default Hero;
