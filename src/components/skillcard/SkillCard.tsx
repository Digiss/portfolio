
type SkillCardProps = {
  icon: string;
  name: string;
  containerClass?: string;
  containerClass2?: string;
  imgClass?: string;
  titleClass?: string;
};

export default function SkillCard({
  icon,
  name,
  containerClass = "w-32 h-32 rounded-lg flex flex-col items-center justify-center shadow-lg bg-gradient-to-b from-[#10001C] via-[#10001C] to-gray-500 overflow-hidden border-2 border-[#10001C]",
  imgClass = "w-auto h-16",
  titleClass = "text-white font-semibold text-sm",
}: SkillCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className={containerClass}  
              style={{ transition: 'all 0.3s', color: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#464FF0';
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.border = '2px solid currentColor';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'transparent';
                e.currentTarget.style.border = '2px solid #10001C';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>

        <span className="mb-2">
            <div >    <img src={icon} alt={name} className={imgClass} /></div>
      
        </span>
        <span className={titleClass}>{name}</span>
      </div>
    </div>
  );
}
