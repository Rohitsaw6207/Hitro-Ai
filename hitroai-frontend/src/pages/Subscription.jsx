import { Check, Star, Zap, Crown, Sparkles, TrendingUp, Shield, Headphones, Clock, Database } from 'lucide-react';
import { useState } from 'react';

const Subscription = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: '₹0',
      originalPrice: null,
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '1,000 messages per month',
        'Basic AI tools access',
        'Email support',
        'Community access',
        'Standard response time'
      ],
      current: true,
      icon: Sparkles,
      gradient: 'from-gray-400 to-gray-600',
      bgGradient: 'from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900'
    },
    {
      name: '🔐 Pro Plan',
      subtitle: '(Prescription Plan)',
      price: '₹199',
      originalPrice: null,
      period: 'per month',
      description: 'For power users and professionals',
      features: [
        '🔓 Unlimited access to all tools',
        '⚡ Priority response time (faster API handling)',
        '💾 Save chat/code history',
        '🎯 Advanced AI models',
        '🔒 Enhanced security',
        '📞 Priority support (24/7)',
        '🚀 Custom integrations',
        '📊 Advanced analytics',
        '👥 Team collaboration'
      ],
      recommended: true,
      icon: Crown,
      gradient: 'from-purple-500 via-pink-500 to-orange-500',
      bgGradient: 'from-purple-50 via-pink-50 to-orange-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get instant responses with our optimized AI infrastructure',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Your data is protected with bank-level encryption',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Priority Response',
      description: 'Faster API handling for Pro users with dedicated resources',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: Database,
      title: 'Chat History',
      description: 'Save and access your conversations and code snippets anytime',
      gradient: 'from-pink-400 to-red-500'
    }
  ];

  const handleUpgrade = (plan) => {
    if (plan.current) return;
    // Simulate Razorpay integration
    alert(`Redirecting to Razorpay for ${plan.name} plan (${plan.price} ${plan.period})...`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Crown size={18} className="animate-bounce" />
            <span>Upgrade Your Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h1>
          
          <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-8 max-w-3xl mx-auto">
            Unlock the full potential of AI with our premium features. 
            <br className="hidden md:block" />
            <span className="text-primary-600 font-semibold">Start your journey to unlimited productivity.</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl w-full">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`group relative p-6 rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up overflow-hidden ${
                plan.recommended 
                  ? 'ring-2 ring-purple-500/50 bg-white/90 dark:bg-secondary-800/90' 
                  : 'bg-white/80 dark:bg-secondary-800/80'
              } backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
              
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center shadow-lg animate-pulse">
                    <Star size={12} className="mr-1 animate-spin-slow" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="relative z-10">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <plan.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                    {plan.name}
                  </h3>
                  
                  {plan.subtitle && (
                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                      {plan.subtitle}
                    </p>
                  )}
                  
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-3">
                    {plan.description}
                  </p>
                  
                  <div className="mb-1">
                    {plan.originalPrice && (
                      <span className="text-base text-secondary-500 line-through mr-2">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className={`text-3xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                  </div>
                  
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">
                    {plan.period}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 group/feature">
                      <div className={`w-5 h-5 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-200`}>
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-secondary-700 dark:text-secondary-300 group-hover/feature:text-secondary-900 dark:group-hover/feature:text-secondary-100 transition-colors duration-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleUpgrade(plan)}
                  disabled={plan.current}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl ${
                    plan.current
                      ? 'bg-secondary-200 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 cursor-not-allowed'
                      : plan.recommended
                      ? `bg-gradient-to-r ${plan.gradient} hover:scale-105 active:scale-95 text-white shadow-purple-500/25`
                      : `bg-gradient-to-r ${plan.gradient} hover:scale-105 active:scale-95 text-white`
                  }`}
                >
                  {plan.current ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Check size={16} />
                      <span>Current Plan</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <Crown size={16} />
                      <span>Upgrade Now</span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Pro Plan?
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-4 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <feature.icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-sm font-bold text-secondary-900 dark:text-secondary-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-secondary-600 dark:text-secondary-400 group-hover:text-secondary-700 dark:group-hover:text-secondary-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center animate-fade-in-up max-w-4xl mx-auto" style={{ animationDelay: '1000ms' }}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-secondary-900 to-secondary-700 dark:from-secondary-100 dark:to-secondary-300 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-sm font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                Yes, you can cancel your subscription at any time. No questions asked.
              </p>
            </div>
            
            <div className="p-4 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-sm font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                Yes! Start with our free plan and upgrade when you're ready for more features.
              </p>
            </div>
            
            <div className="p-4 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-sm font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                What's included in chat history?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                Save all your conversations, code snippets, and AI responses for future reference.
              </p>
            </div>
            
            <div className="p-4 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-sm font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                How fast is priority response?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                Pro users get 3x faster response times with dedicated API resources.
              </p>
            </div>
          </div>
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

export default Subscription;