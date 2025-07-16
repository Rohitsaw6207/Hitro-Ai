import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ToolCard from '../components/ToolCard';
import { PenTool, GraduationCap, Code, Languages, FileText, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const tools = [
    {
      title: 'Blog Generator',
      description: 'Create engaging blog posts and articles with AI assistance. Generate SEO-optimized content in minutes.',
      icon: PenTool,
      href: '/tools/blog',
      gradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'
    },
    {
      title: 'Student Assistant',
      description: 'Get help with homework, research, and academic writing. Your personal study companion.',
      icon: GraduationCap,
      href: '/tools/student',
      gradient: 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      title: 'Code Assistant',
      description: 'Debug, optimize, and write better code with AI guidance. Support for all programming languages.',
      icon: Code,
      href: '/tools/code',
      gradient: 'bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500'
    },
    {
      title: 'Translator',
      description: 'Translate text between multiple languages instantly with context-aware AI translation.',
      icon: Languages,
      href: '/tools/translator',
      gradient: 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500'
    },
    {
      title: 'Resume Assistant',
      description: 'Create professional resumes and cover letters that stand out to employers.',
      icon: FileText,
      href: '/tools/resume',
      gradient: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Sparkles size={18} className="animate-spin-slow" />
          <span>AI-Powered Productivity Suite</span>
          <Sparkles size={18} className="animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '300% 300%' }}>
            Welcome Back!
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Choose your AI assistant and unlock unlimited possibilities. 
          <br className="hidden md:block" />
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Transform your workflow today.</span>
        </p>
      </div>

      {/* Tools Grid - Centered */}
      <div className="flex justify-center mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              href={tool.href}
              gradient={tool.gradient}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '800ms' }}>
        <div className="group relative p-8 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <TrendingUp size={32} className="text-white" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              150
            </div>
            <div className="text-secondary-600 dark:text-secondary-400 font-medium mb-3">Messages Used</div>
            <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 animate-pulse" style={{ width: '15%' }} />
            </div>
            <div className="text-sm text-secondary-500 dark:text-secondary-400 mt-2">15% of monthly limit</div>
          </div>
        </div>
        
        <div className="group relative p-8 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <Zap size={32} className="text-white" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              5
            </div>
            <div className="text-secondary-600 dark:text-secondary-400 font-medium mb-3">Active Tools</div>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="group relative p-8 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <Users size={32} className="text-white" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Free
            </div>
            <div className="text-secondary-600 dark:text-secondary-400 font-medium mb-3">Current Plan</div>
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={14} className="mr-1 animate-pulse" />
              Upgrade Available
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="text-center animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-secondary-900 to-secondary-700 dark:from-secondary-100 dark:to-secondary-300 bg-clip-text text-transparent mb-8">
          Ready to get started?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/tools/blog')}
            className="group px-8 py-4 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 hover:from-primary-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl"
          >
            <span className="flex items-center justify-center space-x-2">
              <PenTool size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Start Writing</span>
            </span>
          </button>
          <button 
            onClick={() => navigate('/subscription')}
            className="group px-8 py-4 bg-white/80 dark:bg-secondary-800/80 hover:bg-white dark:hover:bg-secondary-700/80 border border-secondary-200 dark:border-secondary-600 hover:border-primary-300 dark:hover:border-primary-600 text-secondary-800 dark:text-secondary-200 font-semibold rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl backdrop-blur-xl"
          >
            <span className="flex items-center justify-center space-x-2">
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Upgrade Plan</span>
            </span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border-t border-secondary-200/50 dark:border-secondary-700/50 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Left - Developer */}
            <div className="text-sm text-secondary-600 dark:text-secondary-400">
              Developed by Rohit Kumar
            </div>
            
            {/* Center - Copyright */}
            <div className="flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-400">
              <span>© 2025 Hitro AI. All rights reserved</span>
              <span>|</span>
              <Link 
                to="/privacy-policy" 
                className="font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
            
            {/* Right - Social Links */}
            <div className="flex items-center space-x-3">
              <a 
                href="mailto:rohitku6207@gmail.com"
                className="group p-2 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-lg transition-all duration-300 hover:scale-110"
                title="Email"
              >
                <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              
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
              
              <a 
                href="https://github.com/Rohitsaw6207"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
                title="GitHub"
              >
                <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;