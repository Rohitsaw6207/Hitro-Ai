import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Calendar, Settings, LogOut } from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    plan: 'Free',
    joinDate: '2024-01-15',
    messagesUsed: 150,
    messageLimit: 1000
  });
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const name = localStorage.getItem('userName') || 'User';
    const email = localStorage.getItem('userEmail') || 'user@example.com';
    setUser(prev => ({ ...prev, name, email }));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  const usagePercentage = (user.messagesUsed / user.messageLimit) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="card p-8 mb-8 animate-fade-in">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center">
              <User size={48} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                {user.name}
              </h1>
              <p className="text-secondary-600 dark:text-secondary-400 flex items-center">
                <Mail size={16} className="mr-2" />
                {user.email}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar size={20} className="text-secondary-500" />
                <div>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">Member Since</p>
                  <p className="font-medium text-secondary-900 dark:text-secondary-100">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Settings size={20} className="text-secondary-500" />
                <div>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">Current Plan</p>
                  <p className="font-medium text-secondary-900 dark:text-secondary-100">
                    {user.plan}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-2">
                  Messages Used This Month
                </p>
                <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${usagePercentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  {user.messagesUsed} / {user.messageLimit} messages
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-4">
              Account Settings
            </h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200">
                <div className="font-medium text-secondary-900 dark:text-secondary-100">
                  Change Password
                </div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">
                  Update your password
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200">
                <div className="font-medium text-secondary-900 dark:text-secondary-100">
                  Notification Settings
                </div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">
                  Manage your preferences
                </div>
              </button>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button 
                onClick={() => navigate('/subscription')}
                className="w-full text-left p-3 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200"
              >
                <div className="font-medium text-secondary-900 dark:text-secondary-100">
                  Upgrade Plan
                </div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">
                  Get more features
                </div>
              </button>
              <button 
                onClick={handleLogout}
                className="w-full text-left p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 text-red-600"
              >
                <div className="font-medium flex items-center">
                  <LogOut size={16} className="mr-2" />
                  Sign Out
                </div>
                <div className="text-sm text-red-500">
                  Sign out of your account
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border-t border-secondary-200/50 dark:border-secondary-700/50 py-8 mt-16">
        <div className="w-full max-w-none px-4">
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

export default Profile;