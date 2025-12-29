import React from 'react';

// Using consistent height SVGs for better alignment
const LOGOS = [
  { 
    name: 'Google', 
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' 
  },
  { 
    name: 'Meta', 
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' 
  },
  { 
    name: 'AWS', 
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' 
  },
  { 
    name: 'Vercel', 
    url: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' 
  },
  { 
    name: 'React', 
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' 
  },
  { 
    name: 'Stripe', 
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' 
  }
];

export const TrustBar: React.FC = () => {
  return (
    <div className="w-full bg-black border-y border-white/5 py-10 overflow-hidden relative z-20">
      
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
          Tecnologias & Integrações
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-deepBlack to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-deepBlack to-transparent z-10 pointer-events-none"></div>
        
        {/* Marquee Container - Width must be fit-content to allow correct 50% translation calculation */}
        <div className="flex w-max animate-scroll">
          
          {/* Set 1 */}
          <div className="flex items-center gap-12 md:gap-20 px-6 md:px-10">
            {LOGOS.map((logo, index) => (
              <div key={`s1-${index}`} className="flex items-center justify-center w-24 md:w-32">
                 <img 
                  src={logo.url} 
                  alt={logo.name}
                  className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
                  style={{ 
                    // Only invert Vercel because it's black. Others are colorful.
                    filter: logo.name === 'Vercel' ? 'invert(1)' : 'none',
                    opacity: 0.9
                  }}
                />
              </div>
            ))}
          </div>

          {/* Set 2 (Duplicate for Seamless Loop) */}
          <div className="flex items-center gap-12 md:gap-20 px-6 md:px-10">
            {LOGOS.map((logo, index) => (
              <div key={`s2-${index}`} className="flex items-center justify-center w-24 md:w-32">
                 <img 
                  src={logo.url} 
                  alt={logo.name}
                  className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
                  style={{ 
                    filter: logo.name === 'Vercel' ? 'invert(1)' : 'none',
                    opacity: 0.9
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};