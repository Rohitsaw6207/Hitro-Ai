import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    </div>
  );
};

export default Profile;