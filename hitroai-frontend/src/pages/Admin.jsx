import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Users, Crown, TrendingUp, DollarSign, Calendar, Mail, User, Eye, EyeOff } from 'lucide-react';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'Rohit Kumar' && credentials.password === 'Rohit@6207') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900">
      <div className="w-full max-w-md">
        <div className="bg-white/90 dark:bg-secondary-800/90 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Crown size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-2">
              Admin Access
            </h1>
            <p className="text-secondary-600 dark:text-secondary-400">
              Enter admin credentials to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                Username
              </label>
              <div className="relative">
                <User size={20} className="absolute left-3 top-3 text-secondary-400" />
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-secondary-100"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Eye size={20} className="absolute left-3 top-3 text-secondary-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full pl-10 pr-10 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-secondary-100"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-secondary-400 hover:text-secondary-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Access Admin Panel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('insights');
  const navigate = useNavigate();

  const tabs = [
    { id: 'insights', name: 'Insights', icon: BarChart3 },
    { id: 'users', name: 'Total Users', icon: Users },
    { id: 'premium', name: 'Premium Users', icon: Crown }
  ];

  const insights = {
    totalUsers: 1247,
    premiumUsers: 89,
    totalRevenue: 17731,
    monthlyGrowth: 23.5
  };

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2024-01-15', plan: 'Free' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2024-01-20', plan: 'Pro' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', joinDate: '2024-02-01', plan: 'Free' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', joinDate: '2024-02-05', plan: 'Pro' },
    { id: 5, name: 'David Brown', email: 'david@example.com', joinDate: '2024-02-10', plan: 'Free' }
  ];

  const premiumUsers = users.filter(user => user.plan === 'Pro');

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-xl border-r border-secondary-200/50 dark:border-secondary-700/50 min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Crown size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-secondary-900 dark:text-secondary-100">
                  Admin Panel
                </h1>
                <p className="text-xs text-secondary-600 dark:text-secondary-400">
                  Hitro AI Management
                </p>
              </div>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg'
                        : 'text-secondary-700 hover:bg-secondary-100 dark:text-secondary-300 dark:hover:bg-secondary-700/50'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-secondary-200 dark:border-secondary-700">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                {tabs.find(tab => tab.id === activeTab)?.name}
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400">
                Manage and monitor your Hitro AI platform
              </p>
            </div>

            {/* Insights Tab */}
            {activeTab === 'insights' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <Users size={24} className="text-white" />
                      </div>
                      <span className="text-green-600 text-sm font-medium">+12%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-1">
                      {insights.totalUsers.toLocaleString()}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm">Total Users</p>
                  </div>

                  <div className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <Crown size={24} className="text-white" />
                      </div>
                      <span className="text-green-600 text-sm font-medium">+8%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-1">
                      {insights.premiumUsers}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm">Premium Users</p>
                  </div>

                  <div className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <DollarSign size={24} className="text-white" />
                      </div>
                      <span className="text-green-600 text-sm font-medium">+15%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-1">
                      ₹{insights.totalRevenue.toLocaleString()}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm">Total Revenue</p>
                  </div>

                  <div className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                        <TrendingUp size={24} className="text-white" />
                      </div>
                      <span className="text-green-600 text-sm font-medium">+{insights.monthlyGrowth}%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-1">
                      {insights.monthlyGrowth}%
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm">Monthly Growth</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-4">
                    User Growth Chart
                  </h3>
                  <div className="h-64 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl flex items-center justify-center">
                    <p className="text-secondary-600 dark:text-secondary-400">Chart visualization would go here</p>
                  </div>
                </div>
              </div>
            )}

            {/* Total Users Tab */}
            {activeTab === 'users' && (
              <div className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-secondary-200/50 dark:border-secondary-700/50">
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                    All Users ({users.length})
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary-50 dark:bg-secondary-700/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                          Join Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider">
                          Plan
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-200 dark:divide-secondary-700">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-secondary-50 dark:hover:bg-secondary-700/30">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-medium">
                                  {user.name.charAt(0)}
                                </span>
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                                  {user.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-600 dark:text-secondary-400">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-600 dark:text-secondary-400">
                            {new Date(user.joinDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              user.plan === 'Pro' 
                                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                            }`}>
                              {user.plan}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Premium Users Tab */}
            {activeTab === 'premium' && (
              <div className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-secondary-200/50 dark:border-secondary-700/50">
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                    Premium Users ({premiumUsers.length})
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-purple-50 dark:bg-purple-900/20">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          Join Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          Revenue
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-200 dark:divide-secondary-700">
                      {premiumUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                                <Crown size={16} className="text-white" />
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                                  {user.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-600 dark:text-secondary-400">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-600 dark:text-secondary-400">
                            {new Date(user.joinDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                            ₹99/month
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <AdminDashboard />
  ) : (
    <AdminLogin onLogin={() => setIsAuthenticated(true)} />
  );
};

export default Admin;