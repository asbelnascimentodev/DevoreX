import React from 'react';

// Aceitar props genéricas de botão para manter compatibilidade com a âncora do Hero
export const RainbowButton = ({ children, className = "", onClick, href }: any) => {
  const ButtonContent = () => (
    <>
      <div className={`rainbow-border relative w-full h-full flex items-center justify-center gap-2.5 px-8 py-4 bg-primary rounded-full text-secondary font-bold text-lg transition-all duration-200 z-10 ${className}`}>
        {children}
      </div>
      
      <style>{`
        .rainbow-border-container {
          position: relative;
          display: inline-block;
          border-radius: 9999px; /* full rounded */
        }
        .rainbow-border-container::before,
        .rainbow-border-container::after {
          content: '';
          position: absolute;
          left: -3px;
          top: -3px;
          border-radius: 9999px;
          background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);
          background-size: 400%;
          width: calc(100% + 6px);
          height: calc(100% + 6px);
          z-index: 0;
          animation: rainbow 20s linear infinite;
        }
        .rainbow-border-container::after {
          filter: blur(20px);
          opacity: 0.7;
        }
        @keyframes rainbow {
          0% { background-position: 0 0; }
          50% { background-position: 400% 0; }
          100% { background-position: 0 0; }
        }
      `}</style>
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="rainbow-border-container w-full sm:w-auto hover:scale-105 transition-transform cursor-pointer">
        <ButtonContent />
      </a>
    );
  }

  return (
    <button onClick={onClick} className="rainbow-border-container w-full sm:w-auto hover:scale-105 transition-transform cursor-pointer border-none outline-none">
      <ButtonContent />
    </button>
  );
};
