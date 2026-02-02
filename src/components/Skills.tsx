import typescriptpng from '../assets/typescript.png';
import csspng from '../assets/css.png';
import htmlpng from '../assets/html.webp';
import reactpng from '../assets/react.png';
import jspng from '../assets/js.png';
import tailwindpng from '../assets/tailwind.png';
import bootstrappng from '../assets/bootstrap.png';
import nextpng from '../assets/next.png';
import vitepng from '../assets/vite.png';
import reactnativepng from '../assets/react.png';
import csharppng from '../assets/csharp.png';
import pythonpng from '../assets/python.png';
import cpng from '../assets/c.png';
import phppng from '../assets/php.png';
import postgrepng from '../assets/postgre.png';
import mysqlpng from '../assets/mysql.svg';
import dotnetpng from '../assets/dotnet.svg';
import gitpng from '../assets/git.png';
import githubpng from '../assets/github.png';
import azurepng from '../assets/azure.png';
import SkillCard from './skillcard/SkillCard';
import { useEffect, useState } from 'react';

function Skills() {
     const [scrolled, setScrolled] = useState(false);
        useEffect(() => {
          const handleScroll = () => {
            setScrolled(prev => prev || window.scrollY > 4050);
          };
          handleScroll();

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
        
  const principais = [
    { name: 'TypeScript', icon: typescriptpng },
    { name: 'CSS', icon: csspng },
    { name: 'HTML', icon: htmlpng },
    { name: 'React.js', icon: reactpng },
    { name: 'JavaScript', icon: jspng },
    { name: 'Tailwind', icon: tailwindpng },
    { name: 'React Native', icon: reactnativepng },
    { name: 'Bootstrap', icon: bootstrappng },
    { name: 'Next.js', icon: nextpng },
    { name: 'Vite', icon: vitepng },
  ];

  const secundarios = [
    { name: 'C#', icon: csharppng },
    { name: 'Python', icon: pythonpng },
    { name: 'C', icon: cpng },
    { name: 'PHP', icon: phppng },
    { name: 'PostgreSQL', icon: postgrepng },
    { name: 'MySQL', icon: mysqlpng },
    { name: '.NET', icon: dotnetpng },
  ];

  const devops = [
    { name: 'Git', icon: gitpng },
    { name: 'GitHub', icon: githubpng },
    { name: 'Azure', icon: azurepng },
  ];

  return (
    <section id="habilidades" className="min-h-screen bg-[#10001c] py-20">
      <div className={`container mx-auto w-full px-6  mainANIMATION ${scrolled ? 'animate' : ''}`}>
        <h2 className="text-4xl md:text-7xl font-bold mb-16 text-center" style={{ color: '#464FF0' }}>
          Habilidades
        </h2>

        <div className="max-w-auto mx-auto overflow-x-auto">
          <div className="flex flex-col md:flex-row items-start px-4 gap-32 w-full">

            <div className="md:w-1/3 flex-1 order-1">
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-center" style={{ color: '#9fb2ff' }}>Secundários</h3>
              <div className="grid grid-cols-2 gap-6 justify-center items-center">
                {secundarios.map((tech, idx) => (
                  <SkillCard
                    key={idx}
                    icon={tech.icon}
                    name={tech.name}
                    containerClass="w-auto p-10 h-32 rounded-lg flex flex-col items-center justify-center shadow-lg bg-gradient-to-b from-transparent via-[#10001C] to-gray-500"
                  />
                ))}
              </div>
            </div>

            <div className="md:w-1/3 flex-1 order-2 relative z-10 transform md:-translate-y-100 mx-10">
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-center" style={{ color: '#9fb2ff' }}>Principal</h3>
              <div className="grid grid-cols-3 gap-6 md:gap-16 justify-center items-center">
                {principais.map((tech, idx) => (
                  <SkillCard key={idx} icon={tech.icon} name={tech.name} />
                ))}
              </div> 
            </div>

            <div className="md:w-1/3 flex-1 order-3">
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-center" style={{ color: '#9fb2ff' }}>DevOps</h3>
              <div className="grid grid-cols-2 gap-6 justify-center items-center">
                {devops.map((tech, idx) => (
                  <SkillCard
                    key={idx}
                    icon={tech.icon}
                    name={tech.name}
                    containerClass="w-auto p-10 h-32 rounded-lg flex flex-col items-center justify-center shadow-lg bg-gradient-to-b from-transparent via-[#10001C] to-gray-500"
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
