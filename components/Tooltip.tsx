import React from 'react';

interface TooltipProps {
  name?: string;
  description?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ name, description }) => {
  return (
    <div 
      className="absolute bottom-full mb-3 w-72 p-3 bg-emerald-900 text-slate-100 rounded-lg shadow-xl z-10 -translate-x-1/2 left-1/2"
      role="tooltip"
    >
      {name && <h4 className="font-arabic font-bold text-lg text-center text-emerald-100 mb-1">{name}</h4>}
      {description && <p className="font-arabic text-sm text-right leading-relaxed">{description}</p>}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-emerald-900"></div>
    </div>
  );
};

export default Tooltip;