import SectionContent from './SectionContent';
import foto from '../assets/fotominha.jfif';

function About() {
  return (
    <section id="sobre" className="min-h-screen bg-white mb-[-80px]">
       <img width='100%' className='position-relative ' src="https://capsule-render.vercel.app/api?type=waving&color=0017ea&height=120&section=header
"/>
      <div className="container mx-auto px-50">
        <h2 className="text-4xl md:text-7xl mb-16 mt-20 font-bold text-center" style={{ color: '#1e29ed' }}>
          Sobre
        </h2>
        <div className="max-w-7xl mx-auto">
        <SectionContent
          title="Sobre Mim"
          imageUrl={foto}
          description={
          <>
          <span className='text-black'>Sou um desenvolvedor FrontEnd junior com 3 anos de experiência na área. Sempre fui apaixonado por tecnologia. Além de projetos pessoais, no meu tempo livre faço edição e pós-produção de vídeos no After Effects.</span>
     <br /><br />
          <span className='text-black'>Tenho uma certa facilidade em entender design e usabilidade, isso junto a um planejamento adequado sempre me possibilitou trazer soluções eficientes para os meus projetos e em tarefas profissionais.</span>
  
          </>}
           imageStyle={{ 
            borderRadius: '50%',
  objectFit: 'cover',
  aspectRatio: '1/1', 
          }}
          imageSide="right"
          colorbg="#FFFFFF"
        /></div>
      </div>
<div 
  style={{
    background: 'linear-gradient(180deg, transparent 0%, rgba(16, 0, 28, 0.5) 50%, #10001C 100%)',
    minHeight: '500px',
  }}
  className="w-full position-relative"
>
  {/* Conteúdo */}
</div>
    </section>
  );
}

export default About;
