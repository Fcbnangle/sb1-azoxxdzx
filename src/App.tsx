import React, { useState } from 'react';
import { Home, ArrowRight, ArrowLeft, Send, CheckCircle } from 'lucide-react';

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
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">What financing are you looking for?</h3>
          <div className="space-y-3">
            {['Purchasing', 'Refinancing'].map((option) => (
              <label key={option} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  name="financingType"
                  value={option}
                  checked={formData.financingType === option}
                  onChange={(e) => updateFormData('financingType', e.target.value)}
                  className="w-5 h-5 text-blue-600 mr-4"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Timeline",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">How soon are you looking to take this step?</h3>
          <div className="space-y-3">
            {['Next 6 months', '6 months - 1 year', 'After 12 months'].map((option) => (
              <label key={option} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  name="timeline"
                  value={option}
                  checked={formData.timeline === option}
                  onChange={(e) => updateFormData('timeline', e.target.value)}
                  className="w-5 h-5 text-blue-600 mr-4"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Property Type",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Type of Property?</h3>
          <div className="space-y-3">
            {['Single Family Home', 'Condo'].map((option) => (
              <label key={option} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  name="propertyType"
                  value={option}
                  checked={formData.propertyType === option}
                  onChange={(e) => updateFormData('propertyType', e.target.value)}
                  className="w-5 h-5 text-blue-600 mr-4"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Occupancy Type",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Occupancy Type?</h3>
          <div className="space-y-3">
            {['Primary residence', 'Investment property'].map((option) => (
              <label key={option} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  name="occupancyType"
                  value={option}
                  checked={formData.occupancyType === option}
                  onChange={(e) => updateFormData('occupancyType', e.target.value)}
                  className="w-5 h-5 text-blue-600 mr-4"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Price Range",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">What Price Range?</h3>
          <div className="space-y-3">
            {['Below $500,000', '$500,001 - $750,000', '$750,001 - $1,000,000', '$1,000,001 - $1,500,000', '$1,500,001+'].map((option) => (
              <label key={option} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  name="priceRange"
                  value={option}
                  checked={formData.priceRange === option}
                  onChange={(e) => updateFormData('priceRange', e.target.value)}
                  className="w-5 h-5 text-blue-600 mr-4"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Location",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">What City in California?</h3>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateFormData('city', e.target.value)}
            placeholder="Enter city name"
            className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
      )
    },
    {
      title: "Credit Score",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Estimated FICO (credit) score?</h3>
          <div className="space-y-3">
            {['580-620', '620-660', '660-700', '701-740', '741+'].map((option) => (
              <label key={option} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  name="ficoScore"
                  value={option}
                  checked={formData.ficoScore === option}
                  onChange={(e) => updateFormData('ficoScore', e.target.value)}
                  className="w-5 h-5 text-blue-600 mr-4"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Employment",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Employment Type?</h3>
          <div className="space-y-3">
            {['Self Employed (includes if incorporated)', 'Salary', 'Hourly'].map((option) => (
              <label key={option} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  name="employment"
                  value={option}
                  checked={formData.employment === option}
                  onChange={(e) => updateFormData('employment', e.target.value)}
                  className="w-5 h-5 text-blue-600 mr-4"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Down Payment",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Down Payment Amount?</h3>
          <div className="space-y-3">
            {['3-5%', '10-15%', '20% or more'].map((option) => (
              <label key={option} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  name="downPayment"
                  value={option}
                  checked={formData.downPayment === option}
                  onChange={(e) => updateFormData('downPayment', e.target.value)}
                  className="w-5 h-5 text-blue-600 mr-4"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Veteran Status",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Are you a Veteran?</h3>
          <div className="space-y-3">
            {['Yes', 'No'].map((option) => (
              <label key={option} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  name="veteran"
                  value={option}
                  checked={formData.veteran === option}
                  onChange={(e) => updateFormData('veteran', e.target.value)}
                  className="w-5 h-5 text-blue-600 mr-4"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Contact Information",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Your Contact Information</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              placeholder="Full Name"
              className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:outline-none transition-colors"
              required
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              placeholder="Email Address"
              className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:outline-none transition-colors"
              required
            />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              placeholder="Phone Number"
              className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:outline-none transition-colors"
              required
            />
          </div>
        </div>
      )
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your information has been submitted successfully. We'll contact you soon to discuss your home financing options.
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
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start New Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Home className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Home Financing Questionnaire</h1>
            </div>
            <div className="text-sm text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      {currentStep === 0 && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-blue-800 mb-3">
              Do you know what options are available and work best when financing a home?
            </h2>
            <ul className="text-blue-700 space-y-2">
              <li>• Full documentation - Taxes, pay stubs etc</li>
              <li>• 12 month Business bank statement loan for income verification</li>
              <li>• 1099 or P&L for income verification</li>
              <li>• Investment property - using estimated rent income as only income documentation needed</li>
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{steps[currentStep].title}</h2>
          </div>

          {steps[currentStep].content}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Previous
            </button>

            {currentStep === steps.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.phone}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  !formData.name || !formData.email || !formData.phone
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                <Send className="w-5 h-5" />
                Submit Application
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Next
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            Questions will be sent to{' '}
            <a href="mailto:bruce.nangle@grarate.com" className="text-blue-400 hover:text-blue-300">
              bruce.nangle@grarate.com
            </a>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            We specialize in loans $500K+ with FICO scores 660+ and 10%+ down payment
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;