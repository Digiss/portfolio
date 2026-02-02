import SectionContent from './SectionContent';
import fotoprincipal from '../assets/roblox.png'; 
import ifprlogo from '../assets/ifprlogo.jpg'; 
import garage from '../assets/garage sprint.png';
import bne from '../assets/bne.jpg';
import { useEffect, useState } from 'react';

function Formation() {
   const [scrolled, setScrolled] = useState(false);
      useEffect(() => {
        const handleScroll = () => {
           setScrolled(prev => prev || window.scrollY > 2100);
        };
    
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  const formations = [
    {
      title: 'Criação de jogos e escola Dumont',
      description: (
        <>
          Em 2017 passei a me interessar por desenvolvimento de jogos no <span className="text-white font-semibold">Roblox Studio</span> usando <span className="text-white font-semibold">Lua</span> e passei a frequentar as aulas de robótica no meu colégio.
        </>
      ),
      side: 'left' as const,
      imageUrl: fotoprincipal,
    },
    {
      title: 'Formação 2',
      description: (
        <>
          Em 2023 comecei o Ensino Médio Técnico em Informática no <span className="text-green-500 font-semibold">IFPR </span><span className="text-white font-semibold">Campus Colombo</span>, onde tive matérias focadas em programação, tais como: <span className="text-white"><br />- Lógica de programação em C</span>; <span className="text-white"><br />- Algoritmos</span>; <span className="text-white"><br />- POO com Python</span>; <span className="text-white"><br />- Desenvolvimento Web (HTML, CSS, PHP)</span>;
        </>
      ),
      side: 'right' as const,
      imageUrl: ifprlogo,
    },
    {
      title: 'Formação 3',
      description: (
        <>
          Participei do evento <span className="text-white font-semibold">Garage Sprint</span> do <span className="text-blue-400 font-semibold">SEBRAE</span>. No evento os alunos de todo o IF fizeram equipes para montar projetos do zero. O <span className="text-green-500 bold">"Logic'Qs"</span>, como era chamado o projeto da minha equipe, foi <span className="text-white font-semibold">idealizado por mim</span> e ficou em <span className="text-white font-semibold">terceiro lugar</span> entre doze projetos.
        </>
      ),
      side: 'left' as const,
      imageUrl: garage,
    },
    {
      title: 'Formação 4',
      description: (
        <>
          Em outubro de 2024 fiz  <span className="text-white font-semibold">meu primeiro estágio</span> no <span className="text-purple-500 font-semibold">BNE</span> (onde também trabalhei em <span className="text-white font-semibold">outros produtos da Employer</span>). Inicialmente me desenvolvi como dev <span className="text-white">FrontEnd</span> (voltado para React.js). <br /><br /> Planejei e criei a base de um Front para um sistema <span className="text-purple-500">LMS da UEMP</span>. Depois atuei como dev de suporte do <span className="text-white">Floox</span> e, por fim, participei ativamente do desenvolvimento do FrontEnd de um sistema <br /><span className="text-green-500 font-semibold">ATS do LUGARH R&S</span>, implementando protótipos completos do Figma, features e corrigindo bugs.
        </>
      ),
      side: 'right' as const,
      imageUrl: bne,
    },
  ];

  return (
    <section id="formacao" className="min-h-screen py-20" style={{ backgroundColor: '#10001c' }}>
      <div className={`container mx-auto px-6 mainANIMATION ${scrolled ? 'animate' : ''}`}>
        <h2 className="text-4xl md:text-7xl font-bold text-center mb-20" style={{ color: '#464FF0' }}>
          Formação
        </h2>
        <div className="max-w-5xl mx-auto">
          {formations.map((formation, index) => (
            <SectionContent
              key={index}
              title={formation.title}
              description={formation.description}
              imageSide={formation.side}
              imageUrl={formation.imageUrl}
              colorbg={'#10001c'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Formation;
