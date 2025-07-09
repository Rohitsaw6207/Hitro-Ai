import { Check, Star, Zap, Crown, Sparkles, TrendingUp, Shield, Headphones } from 'lucide-react';
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
      name: 'Premium',
      price: isAnnual ? '₹20,000' : '₹2,000',
      originalPrice: isAnnual ? '₹24,000' : null,
      period: isAnnual ? 'per year' : 'per month',
      description: 'For power users and professionals',
      features: [
        'Unlimited messages',
        'All AI tools & features',
        'Priority support (24/7)',
        'Advanced AI models',
        'Custom integrations',
        'API access',
        'Export conversations',
        'Team collaboration',
        'Advanced analytics'
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
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get help whenever you need it from our expert team',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Track your productivity and optimize your workflow',
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

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200 dark:border-secondary-700 rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg' 
                  : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                isAnnual 
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg' 
                  : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-200'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up overflow-hidden ${
                plan.recommended 
                  ? 'ring-4 ring-purple-500/50 bg-white/90 dark:bg-secondary-800/90' 
                  : 'bg-white/80 dark:bg-secondary-800/80'
              } backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
              
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg animate-pulse">
                    <Star size={16} className="mr-2 animate-spin-slow" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="relative z-10">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${plan.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    <plan.icon size={40} className="text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="mb-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-secondary-500 line-through mr-2">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                  </div>
                  
                  <div className="text-secondary-600 dark:text-secondary-400">
                    {plan.period}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 group/feature">
                      <div className={`w-6 h-6 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-200`}>
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-secondary-700 dark:text-secondary-300 group-hover/feature:text-secondary-900 dark:group-hover/feature:text-secondary-100 transition-colors duration-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleUpgrade(plan)}
                  disabled={plan.current}
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl ${
                    plan.current
                      ? 'bg-secondary-200 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 cursor-not-allowed'
                      : plan.recommended
                      ? `bg-gradient-to-r ${plan.gradient} hover:scale-105 active:scale-95 text-white shadow-purple-500/25`
                      : `bg-gradient-to-r ${plan.gradient} hover:scale-105 active:scale-95 text-white`
                  }`}
                >
                  {plan.current ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Check size={20} />
                      <span>Current Plan</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <Crown size={20} />
                      <span>Upgrade Now</span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Premium?
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                
                <h3 className="font-bold text-secondary-900 dark:text-secondary-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
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
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-secondary-900 to-secondary-700 dark:from-secondary-100 dark:to-secondary-300 bg-clip-text text-transparent mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                Yes, you can cancel your subscription at any time. No questions asked.
              </p>
            </div>
            
            <div className="p-6 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-xl border border-secondary-200/50 dark:border-secondary-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                Yes! Start with our free plan and upgrade when you're ready for more features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;