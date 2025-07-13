import { X, Home, Grid3x3, User, CreditCard, PenTool, GraduationCap, Code, Languages, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Sidebar = ({ isOpen, onClose, isAuthenticated }) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/', icon: Home, public: true },
    { name: 'Dashboard', href: '/dashboard', icon: Grid3x3, public: false },
    { name: 'Profile', href: '/profile', icon: User, public: false },
    { name: 'Subscription', href: '/subscription', icon: CreditCard, public: false },
  ];

  const tools = [
    { name: 'Blog Generator', href: '/tools/blog', icon: PenTool },
    { name: 'Student Assistant', href: '/tools/student', icon: GraduationCap },
    { name: 'Code Assistant', href: '/tools/code', icon: Code },
    { name: 'Translator', href: '/tools/translator', icon: Languages },
    { name: 'Resume Assistant', href: '/tools/resume', icon: FileText },
  ];

  const isCurrentPath = (path) => location.pathname === path;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-300 ease-out lg:relative lg:translate-x-0 flex flex-col ${
        isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full shadow-none'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50 flex-shrink-0">
          <div className="flex items-center space-x-3 group">
            <Logo size="md" />
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Hitro AI
              </span>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Powered by AI
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 active:scale-95 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Navigation - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin">
          {/* Main Navigation */}
          <nav className="space-y-2">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Navigation
            </div>
            {navigation.map((item) => {
              if (!item.public && !isAuthenticated) return null;
              
              const Icon = item.icon;
              const isActive = isCurrentPath(item.href);
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  <Icon size={18} className={`transition-all duration-300 ${isActive ? 'text-white' : 'group-hover:scale-110'}`} />
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>
          
          {/* AI Tools */}
          {isAuthenticated && (
            <nav className="space-y-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                AI Tools
              </div>
              {tools.map((item, index) => {
                const Icon = item.icon;
                const isActive = isCurrentPath(item.href);
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={onClose}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Icon size={18} className={`transition-all duration-300 ${isActive ? 'text-white' : 'group-hover:scale-110'}`} />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl flex-shrink-0">
          <div className="space-y-4">
            
            {/* Developer Info */}
            <div className="text-center">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Developed by <span className="font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Rohit Kumar</span>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mb-4">
                {/* Email */}
                <a 
                  href="mailto:rohitku6207@gmail.com"
                  className="group p-2 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-lg transition-all duration-300 hover:scale-110"
                  title="Email"
                >
                  <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/rohit-kumar-saw6207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-lg transition-all duration-300 hover:scale-110"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/Rohitsaw6207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
                  title="GitHub"
                >
                  <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer Bottom Line */}
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              © 2025 <span className="font-semibold text-black dark:text-white">Hitro Ai</span> | 
              <Link 
                to="/privacy-policy" 
                className="font-bold hover:text-primary-600 dark:hover:text-primary-400 ml-1 transition-colors duration-200"
                onClick={onClose}
              >
                Privacy Policy
              </Link>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Sidebar;