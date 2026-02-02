import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Download } from 'lucide-react';
import resume from '../assets/resume.pdf';

function Contact() {
  return (
    <section id="contato" className="min-h-screen py-20 flex items-center" style={{ backgroundColor: '#10001c' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center items-center flex flex-col bg-transparent shadow-xl shadow-[#464FF0] p-10 rounded-[15px]">
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: '#464FF0' }}>
            Contato:
          </h2>

        <div className='flex flex-row'>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/Digiss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg transition-transform duration-800 hover:scale-110"
              style={{ backgroundColor: '#fff' }}
            >
              <Github className="text-[#464FF0]" size={48} />
            </a>

            <a
              href="https://www.linkedin.com/in/gustavo-martins-fernandes/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg transition-transform duration-800 hover:scale-110"
              style={{ backgroundColor: '#fff' }}
            >
              <Linkedin className="text-[#464FF0]" size={48} />
            </a>
          </div>
          <div className='mt-5 flex flex-col flex-center w-[100%] bg-transparent'>
                <div className='flex flex-row items-center'>
                  <Mail className="text-white mx-4" size={28} />
                  <a
                    className='transition-transform duration-300'
                    style={{ backgroundColor: 'transparent', color: '#fff', fontSize: '20px' }}
                  >
                    gustavo7234.mf@gmail.com
                  </a>
                </div>

                <div className='flex flex-row items-center'>
                  <Phone className="text-white mx-4" size={28} />
                  <a
                    className='transition-transform duration-300'
                    style={{ backgroundColor: 'transparent', color: '#fff', fontSize: '20px' }}
                  >
                    +55 (41) 99565-2583
                  </a>
                </div>
          </div>

         </div>
           <a
              href={resume}
              download="cv_Gustavo_Martins_Fernandes.pdf"
              className="flex mt-10 transition-all items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium"
              style={{ backgroundColor: '#5e65f2', color: 'white', width: 'auto', padding: '10px', paddingTop: '5px' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1e29ed'; e.currentTarget.style.boxShadow = '0 4px 4px rgba(0, 0, 0, 0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#5e65f2'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Download size={18} />
              Currículo
            </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
