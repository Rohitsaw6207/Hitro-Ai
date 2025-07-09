const Logo = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-20 h-20 text-lg'
  };

  return (
    <div className={`${sizes[size]} ${className} relative group`}>
      <div className="relative w-full h-full">
        {/* Main Logo Container with Gradient */}
        <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-6 group-hover:shadow-purple-500/50">
          
          {/* Animated Border Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
          
          {/* Inner Container */}
          <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center overflow-hidden">
            
            {/* Animated Background Shapes */}
            <div className="absolute inset-0">
              <div className="absolute top-1 left-1 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-white/20 rounded-full animate-spin-slow"></div>
            </div>
            
            {/* AI Brain Icon */}
            <div className="relative z-10 flex items-center justify-center">
              <svg 
                className="w-3/4 h-3/4 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                {/* Brain/AI Circuit Pattern */}
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                
                {/* Animated Dots */}
                <circle cx="8" cy="8" r="1" className="animate-pulse" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="16" cy="8" r="1" className="animate-pulse" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="12" cy="16" r="1" className="animate-pulse" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.4;0.7" dur="1.8s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>
        
        {/* Outer Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur-xl scale-150 opacity-0 group-hover:opacity-60 transition-all duration-700 -z-10 animate-pulse-slow"></div>
        
        {/* Floating Particles */}
        <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-1 h-1 bg-blue-400 rounded-full animate-float-fast"></div>
          <div className="absolute top-0 right-0 w-1 h-1 bg-purple-400 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-0 left-0 w-1 h-1 bg-pink-400 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-400 rounded-full animate-float-reverse"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;