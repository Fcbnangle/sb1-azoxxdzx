import React, { useState } from 'react';
import { Home, ArrowRight, ArrowLeft, Send, CheckCircle, DollarSign, MapPin, User, Calendar, Building, Shield, CreditCard, Briefcase, TrendingUp, Star } from 'lucide-react';

interface FormData {
  financingType: string;
  timeline: string;
  propertyType: string;
  occupancyType: string;
  priceRange: string;
  city: string;
  ficoScore: string;
  employment: string;
  downPayment: string;
  veteran: string;
  name: string;
  email: string;
  phone: string;
}

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    financingType: '',
    timeline: '',
    propertyType: '',
    occupancyType: '',
    priceRange: '',
    city: '',
    ficoScore: '',
    employment: '',
    downPayment: '',
    veteran: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // In a real application, you would send this data to your backend
    // For now, we'll simulate the submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const steps = [
    {
      title: "Financing Type",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-emerald-400 to-teal-500",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mb-4">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">What financing are you looking for?</h3>
            <p className="text-gray-600">Choose the option that best fits your needs</p>
          </div>
          <div className="space-y-4">
            {[
              { value: 'Purchasing', emoji: '🏠', desc: 'Buy your dream home' },
              { value: 'Refinancing', emoji: '🔄', desc: 'Refinance existing loan' }
            ].map((option) => (
              <label key={option.value} className="flex items-center p-6 border-2 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:border-emerald-300 transition-all duration-300 transform hover:scale-105">
                <input
                  type="radio"
                  name="financingType"
                  value={option.value}
                  checked={formData.financingType === option.value}
                  onChange={(e) => updateFormData('financingType', e.target.value)}
                  className="w-6 h-6 text-emerald-600 mr-4"
                />
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{option.emoji}</span>
                  <div>
                    <span className="text-xl font-semibold text-gray-800">{option.value}</span>
                    <p className="text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Timeline",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-purple-400 to-pink-500",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-4">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">How soon are you looking to take this step?</h3>
            <p className="text-gray-600">Let us know your timeline</p>
          </div>
          <div className="space-y-4">
            {[
              { value: 'Next 6 months', emoji: '⚡', desc: 'Ready to move fast' },
              { value: '6 months - 1 year', emoji: '📅', desc: 'Planning ahead' },
              { value: 'After 12 months', emoji: '🔮', desc: 'Future planning' }
            ].map((option) => (
              <label key={option.value} className="flex items-center p-6 border-2 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-300 transition-all duration-300 transform hover:scale-105">
                <input
                  type="radio"
                  name="timeline"
                  value={option.value}
                  checked={formData.timeline === option.value}
                  onChange={(e) => updateFormData('timeline', e.target.value)}
                  className="w-6 h-6 text-purple-600 mr-4"
                />
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{option.emoji}</span>
                  <div>
                    <span className="text-xl font-semibold text-gray-800">{option.value}</span>
                    <p className="text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Property Type",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-500",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mb-4">
              <Building className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Type of Property?</h3>
            <p className="text-gray-600">What type of property interests you?</p>
          </div>
          <div className="space-y-4">
            {[
              { value: 'Single Family Home', emoji: '🏡', desc: 'Standalone house with yard' },
              { value: 'Condo', emoji: '🏢', desc: 'Condominium unit' }
            ].map((option) => (
              <label key={option.value} className="flex items-center p-6 border-2 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105">
                <input
                  type="radio"
                  name="propertyType"
                  value={option.value}
                  checked={formData.propertyType === option.value}
                  onChange={(e) => updateFormData('propertyType', e.target.value)}
                  className="w-6 h-6 text-blue-600 mr-4"
                />
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{option.emoji}</span>
                  <div>
                    <span className="text-xl font-semibold text-gray-800">{option.value}</span>
                    <p className="text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Occupancy Type",
      icon: <Home className="w-8 h-8" />,
      color: "from-orange-400 to-red-500",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-4">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Occupancy Type?</h3>
            <p className="text-gray-600">How will you use this property?</p>
          </div>
          <div className="space-y-4">
            {[
              { value: 'Primary residence', emoji: '🏠', desc: 'Your main home' },
              { value: 'Investment property', emoji: '💰', desc: 'Using estimated rent income as only income calculation to qualify' }
            ].map((option) => (
              <label key={option.value} className="flex items-center p-6 border-2 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:border-orange-300 transition-all duration-300 transform hover:scale-105">
                <input
                  type="radio"
                  name="occupancyType"
                  value={option.value}
                  checked={formData.occupancyType === option.value}
                  onChange={(e) => updateFormData('occupancyType', e.target.value)}
                  className="w-6 h-6 text-orange-600 mr-4"
                />
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{option.emoji}</span>
                  <div>
                    <span className="text-xl font-semibold text-gray-800">{option.value}</span>
                    <p className="text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Price Range",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-4">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">What Price Range?</h3>
            <p className="text-gray-600">Select your budget range</p>
          </div>
          <div className="space-y-4">
            {[
              { value: 'Below $500,000', emoji: '💵', desc: 'Starter range' },
              { value: '$500,001 - $750,000', emoji: '💰', desc: 'Mid-range' },
              { value: '$750,001 - $1,000,000', emoji: '💎', desc: 'Premium range' },
              { value: '$1,000,001 - $1,500,000', emoji: '🏆', desc: 'Luxury range' },
              { value: '$1,500,001+', emoji: '👑', desc: 'Ultra-luxury' }
            ].map((option) => (
              <label key={option.value} className="flex items-center p-6 border-2 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:border-green-300 transition-all duration-300 transform hover:scale-105">
                <input
                  type="radio"
                  name="priceRange"
                  value={option.value}
                  checked={formData.priceRange === option.value}
                  onChange={(e) => updateFormData('priceRange', e.target.value)}
                  className="w-6 h-6 text-green-600 mr-4"
                />
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{option.emoji}</span>
                  <div>
                    <span className="text-xl font-semibold text-gray-800">{option.value}</span>
                    <p className="text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Location",
      icon: <MapPin className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-500",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">What City in California?</h3>
            <p className="text-gray-600">Tell us where you're looking</p>
          </div>
          <div className="relative">
            <input
              type="text"
              value={formData.city}
              onChange={(e) => updateFormData('city', e.target.value)}
              placeholder="Enter city name (e.g., Los Angeles, San Francisco)"
              className="w-full p-6 border-2 border-gray-300 rounded-xl text-lg focus:border-cyan-500 focus:outline-none transition-all duration-300 pl-14 bg-gradient-to-r from-cyan-50 to-blue-50"
            />
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-cyan-500" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
            {['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose', 'Fresno'].map((city) => (
              <button
                key={city}
                onClick={() => updateFormData('city', city)}
                className="p-3 bg-white border-2 border-gray-200 rounded-lg hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-300 text-gray-700 font-medium"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Credit Score",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
              <CreditCard className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Estimated FICO (credit) score?</h3>
            <p className="text-gray-600">Your credit score helps determine your rate</p>
          </div>
          <div className="space-y-4">
            {[
              { value: '580-620', emoji: '📈', desc: 'Building credit', color: 'text-red-600' },
              { value: '620-660', emoji: '📊', desc: 'Fair credit', color: 'text-orange-600' },
              { value: '660-700', emoji: '⭐', desc: 'Good credit', color: 'text-yellow-600' },
              { value: '701-740', emoji: '🌟', desc: 'Very good credit', color: 'text-green-600' },
              { value: '741+', emoji: '💫', desc: 'Excellent credit', color: 'text-emerald-600' }
            ].map((option) => (
              <label key={option.value} className="flex items-center p-6 border-2 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 hover:border-yellow-300 transition-all duration-300 transform hover:scale-105">
                <input
                  type="radio"
                  name="ficoScore"
                  value={option.value}
                  checked={formData.ficoScore === option.value}
                  onChange={(e) => updateFormData('ficoScore', e.target.value)}
                  className="w-6 h-6 text-yellow-600 mr-4"
                />
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{option.emoji}</span>
                  <div>
                    <span className="text-xl font-semibold text-gray-800">{option.value}</span>
                    <p className={`${option.color} font-medium`}>{option.desc}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Employment",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-indigo-400 to-purple-500",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mb-4">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Employment Type?</h3>
            <p className="text-gray-600">How do you earn your income?</p>
          </div>
          <div className="space-y-4">
            {[
              { value: 'Self Employed (includes if incorporated)', emoji: '💼', desc: 'Own business or freelance' },
              { value: 'Salary', emoji: '💰', desc: 'Fixed annual salary' },
              { value: 'Hourly', emoji: '⏰', desc: 'Hourly wages' }
            ].map((option) => (
              <label key={option.value} className="flex items-center p-6 border-2 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:border-indigo-300 transition-all duration-300 transform hover:scale-105">
                <input
                  type="radio"
                  name="employment"
                  value={option.value}
                  checked={formData.employment === option.value}
                  onChange={(e) => updateFormData('employment', e.target.value)}
                  className="w-6 h-6 text-indigo-600 mr-4"
                />
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{option.emoji}</span>
                  <div>
                    <span className="text-xl font-semibold text-gray-800">{option.value}</span>
                    <p className="text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Down Payment",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-teal-400 to-green-500",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-400 to-green-500 rounded-full mb-4">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Down Payment Amount?</h3>
            <p className="text-gray-600">How much can you put down?</p>
          </div>
          <div className="space-y-4">
            {[
              { value: '3-5%', emoji: '💵', desc: 'Minimal down payment' },
              { value: '10-15%', emoji: '💰', desc: 'Standard down payment' },
              { value: '20% or more', emoji: '💎', desc: 'Substantial down payment' }
            ].map((option) => (
              <label key={option.value} className="flex items-center p-6 border-2 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-green-50 hover:border-teal-300 transition-all duration-300 transform hover:scale-105">
                <input
                  type="radio"
                  name="downPayment"
                  value={option.value}
                  checked={formData.downPayment === option.value}
                  onChange={(e) => updateFormData('downPayment', e.target.value)}
                  className="w-6 h-6 text-teal-600 mr-4"
                />
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{option.emoji}</span>
                  <div>
                    <span className="text-xl font-semibold text-gray-800">{option.value}</span>
                    <p className="text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Veteran Status",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-400 to-pink-500",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Are you a Veteran?</h3>
            <p className="text-gray-600">Veterans may qualify for special loan programs</p>
          </div>
          <div className="space-y-4">
            {[
              { value: 'Yes', emoji: '🇺🇸', desc: 'Thank you for your service!' },
              { value: 'No', emoji: '👤', desc: 'Civilian status' }
            ].map((option) => (
              <label key={option.value} className="flex items-center p-6 border-2 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:border-red-300 transition-all duration-300 transform hover:scale-105">
                <input
                  type="radio"
                  name="veteran"
                  value={option.value}
                  checked={formData.veteran === option.value}
                  onChange={(e) => updateFormData('veteran', e.target.value)}
                  className="w-6 h-6 text-red-600 mr-4"
                />
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{option.emoji}</span>
                  <div>
                    <span className="text-xl font-semibold text-gray-800">{option.value}</span>
                    <p className="text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Contact Information",
      icon: <User className="w-8 h-8" />,
      color: "from-violet-400 to-purple-500",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Contact Information</h3>
            <p className="text-gray-600">We'll use this to get in touch with you</p>
          </div>
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Full Name"
                className="w-full p-6 border-2 border-gray-300 rounded-xl text-lg focus:border-violet-500 focus:outline-none transition-all duration-300 pl-14 bg-gradient-to-r from-violet-50 to-purple-50"
                required
              />
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-violet-500" />
            </div>
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="Email Address"
                className="w-full p-6 border-2 border-gray-300 rounded-xl text-lg focus:border-violet-500 focus:outline-none transition-all duration-300 pl-14 bg-gradient-to-r from-violet-50 to-purple-50"
                required
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">📧</span>
            </div>
            <div className="relative">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="Phone Number"
                className="w-full p-6 border-2 border-gray-300 rounded-xl text-lg focus:border-violet-500 focus:outline-none transition-all duration-300 pl-14 bg-gradient-to-r from-violet-50 to-purple-50"
                required
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">📱</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6 animate-pulse">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🎉 Thank You!</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Your information has been submitted successfully. We'll contact you soon to discuss your home financing options and help make your dream home a reality!
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(0);
                setFormData({
                  financingType: '',
                  timeline: '',
                  propertyType: '',
                  occupancyType: '',
                  priceRange: '',
                  city: '',
                  ficoScore: '',
                  employment: '',
                  downPayment: '',
                  veteran: '',
                  name: '',
                  email: '',
                  phone: ''
                });
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start New Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Header with Beautiful Family in Front of Home Banner */}
      <div className="bg-white shadow-lg border-b-4 border-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Main Header Section with Background Image */}
          <div className="relative overflow-hidden rounded-2xl mb-6">
            {/* Background Image - Family in Front of Home Playing */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                backgroundPosition: 'center 30%'
              }}
            ></div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-purple-900/40"></div>
            
            <div className="relative flex items-center gap-4 p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-navy-900 mb-2 drop-shadow-lg" style={{ color: '#1e3a8a' }}>
                  FIND YOUR PERFECT HOME FINANCING SOLUTION
                </h2>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Home Financing Questionnaire
                </h1>
              </div>
            </div>
          </div>
          
          {/* Enhanced Progress Bar with Step Counter */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-600">Progress</div>
              <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentStep + 1} / {steps.length}
              </div>
            </div>
            <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Step indicators */}
          <div className="flex justify-between mt-4 px-2">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center mx-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  index <= currentStep 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {index < currentStep ? '✓' : index + 1}
                </div>
                <div className={`text-xs mt-1 font-medium max-w-16 ${
                  index <= currentStep ? 'text-blue-600' : 'text-gray-400'
                } ${
                  // Center text for steps 3, 4, 5, 7, 9, 10, 11 (indices 2, 3, 4, 6, 8, 9, 10)
                  [2, 3, 4, 6, 8, 9, 10].includes(index) ? 'text-center' : ''
                }`}>
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction */}
      {currentStep === 0 && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Star className="w-12 h-12 text-yellow-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  🏠 Do you know what options are available and work best when financing a home?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">📋</span>
                      <span className="font-semibold">Full Documentation</span>
                    </div>
                    <p className="text-blue-100">Taxes, pay stubs, etc.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🏦</span>
                      <span className="font-semibold">Bank Statement Loan</span>
                    </div>
                    <p className="text-blue-100">12 month business bank statements used as income verification</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">📊</span>
                      <span className="font-semibold">1099 or P&L</span>
                    </div>
                    <p className="text-blue-100">For income verification</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">💰</span>
                      <span className="font-semibold">Investment Property</span>
                    </div>
                    <p className="text-blue-100">Using estimated rent income as only income calculation</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🏡</span>
                      <span className="font-semibold">Reverse Mortgage</span>
                    </div>
                    <p className="text-blue-100">For homeowners 62+ to access home equity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className={`h-2 bg-gradient-to-r ${steps[currentStep].color}`}></div>
          <div className="p-8 md:p-12">
            {steps[currentStep].content}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  currentStep === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 shadow-lg'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>

              {currentStep === steps.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.email || !formData.phone}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    !formData.name || !formData.email || !formData.phone
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 shadow-lg'
                  }`}
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl">📧</span>
              <h3 className="text-xl font-semibold">Questions will be sent to</h3>
            </div>
            <a 
              href="mailto:bruce.nangle@grarate.com" 
              className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              bruce.nangle@grarate.com
            </a>
            
            {/* Professional Information */}
            <div className="mt-6 space-y-2">
              <div className="text-xl font-bold text-white">Bruce Nangle</div>
              <div className="text-lg text-gray-300">NMLS #267122</div>
              <div className="text-lg text-gray-300">VP of loan origination at Guaranteed Rate Affinity</div>
              <div className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Operating in the state of New York as GR Affinity, LLC in lieu of the legal name Guaranteed Rate Affinity, LLC.
              </div>
              <div className="text-sm text-gray-400">
                Guaranteed rate Affinity, LLC.: NMLS # 1598647; For licensing information visit{' '}
                <a 
                  href="https://nmlsconsumeraccess.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  nmlsconsumeraccess.org
                </a>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white/10 backdrop-blur rounded-xl inline-block">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-lg font-semibold">Our Specialization</span>
              </div>
              <p className="text-gray-300">
                We specialize in loans <span className="text-green-400 font-bold">$500K+</span> with 
                <span className="text-blue-400 font-bold"> FICO scores 660+</span> and 
                <span className="text-purple-400 font-bold"> 5%+ down payment</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;