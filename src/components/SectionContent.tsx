import { ReactNode } from 'react';

interface SectionContentProps {
  title: string;
  description: ReactNode;
  imageSide: 'left' | 'right';
  imageUrl?: string;
  colorbg?: string;
  imageStyle?: React.CSSProperties;
}

function SectionContent({ title, description, imageSide, imageUrl, colorbg, imageStyle  }: SectionContentProps) {
  const isImageLeft = imageSide === 'left';

  return (
    <div className={`flex flex-col md:flex-row ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[400px] bg-gray-300 overflow-hidden bg-transparent"
      style={{transition: 'all 0.3s'}} 
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" style={imageStyle}/>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white-500 font-mono text-lg">
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12" style={{ backgroundColor: colorbg || '#F8F9FA' }}>
        
        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-serif">
          {description}
        </p>
      </div>
    </div>
  );
}

export default SectionContent;