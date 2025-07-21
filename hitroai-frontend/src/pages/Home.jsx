import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe, Sparkles } from 'lucide-react';
import Logo from '../components/Logo';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get instant AI-powered responses for all your needs',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Support for multiple languages and regions',
      gradient: 'from-blue-400 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8 animate-fade-in">
            <Logo size="xl" className="hover:scale-110 transition-transform duration-500" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 dark:text-secondary-100 mb-6 animate-fade-in-up">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 bg-clip-text text-transparent animate-gradient">
              Hitro AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400 mb-8 max-w-4xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '200ms' }}>
            Your intelligent companion for{' '}
            <span className="text-primary-600 font-semibold">blog writing</span>,{' '}
            <span className="text-purple-600 font-semibold">coding</span>,{' '}
            <span className="text-blue-600 font-semibold">translation</span>, and more.{' '}
            <br className="hidden md:block" />
            Powered by advanced AI technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Link
              to="/signup"
              className="group btn-primary px-8 py-4 text-lg font-semibold rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl"
            >
              Get Started
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              <Sparkles size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              to="/login"
              className="btn-secondary px-8 py-4 text-lg font-semibold rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group text-center p-8 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${600 + index * 150}ms` }}
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <feature.icon size={32} className="text-white drop-shadow-lg" />
                </div>
                <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mx-auto opacity-0 group-hover:opacity-30 blur-xl scale-150 transition-all duration-500`} />
              </div>
              
              <h3 className="text-xl font-bold text-secondary-900 dark:text-secondary-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed group-hover:text-secondary-700 dark:group-hover:text-secondary-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-2xl shadow-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} />
              <span>Limited Time Offer</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
            Ready to boost your productivity?
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 mb-6 text-lg">
            Join thousands of users who are already using Hitro AI to streamline their work.
          </p>
          <Link
            to="/signup"
            className="group btn-primary px-8 py-4 text-lg font-semibold rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-2xl"
          >
            Start Free Trial
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-screen bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border-t border-secondary-200/50 dark:border-secondary-700/50 py-8 mt-16 -mx-4">
        <div className="w-full px-4">
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

export default Home;