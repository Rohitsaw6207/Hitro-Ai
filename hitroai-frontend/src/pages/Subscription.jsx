import { Check, Star, Zap, Crown, Sparkles, TrendingUp, Shield, Headphones, Clock, Database } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

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
      name: 'Pro Plan',
      subtitle: 'Most Popular',
      price: '₹199',
      originalPrice: null,
      period: 'per month',
      description: 'For power users and professionals',
      features: [
        'Unlimited access to all tools',
        'Priority response time',
        'Save chat/code history',
        'Advanced AI models',
        'Enhanced security',
        'Priority support (24/7)',
        'Custom integrations',
        'Advanced analytics',
        'Team collaboration'
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
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl w-full">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up overflow-hidden ${
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
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg animate-pulse">
                    <Star size={10} className="mr-1 animate-spin-slow" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="relative z-10">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
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
                  
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="mb-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-secondary-500 line-through mr-2">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                  </div>
                  
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">
                    {plan.period}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 group/feature">
                      <div className={`w-4 h-4 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-200`}>
                        <Check size={10} className="text-white" />
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
                      <Check size={18} />
                      <span>Current Plan</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <Crown size={18} />
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
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <h2 className="text-2xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Pro Plan?
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-3 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <feature.icon size={20} className="text-white" />
                </div>
                
                <h3 className="text-xs font-bold text-secondary-900 dark:text-secondary-100 mb-1.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-xs text-secondary-600 dark:text-secondary-400 group-hover:text-secondary-700 dark:group-hover:text-secondary-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: '1000ms' }}>
          <h2 className="text-xl font-bold bg-gradient-to-r from-secondary-900 to-secondary-700 dark:from-secondary-100 dark:to-secondary-300 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xs font-bold text-secondary-900 dark:text-secondary-100 mb-1.5">
                Can I cancel anytime?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-xs">
                Yes, you can cancel your subscription at any time. No questions asked.
              </p>
            </div>
            
            <div className="p-3 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xs font-bold text-secondary-900 dark:text-secondary-100 mb-1.5">
                Is there a free trial?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-xs">
                Yes! Start with our free plan and upgrade when you're ready for more features.
              </p>
            </div>
            
            <div className="p-3 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xs font-bold text-secondary-900 dark:text-secondary-100 mb-1.5">
                What's included in chat history?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-xs">
                Save all your conversations, code snippets, and AI responses for future reference.
              </p>
            </div>
            
            <div className="p-3 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xs font-bold text-secondary-900 dark:text-secondary-100 mb-1.5">
                How fast is priority response?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-xs">
                Pro users get 3x faster response times with dedicated API resources.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Subscription;