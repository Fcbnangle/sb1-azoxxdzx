import React, { useState } from 'react';
import { Home, ArrowRight, ArrowLeft, Send, CheckCircle, DollarSign, MapPin, User, Calendar, Building, Shield, CreditCard, Briefcase, TrendingUp, Star, Scale, FileText, Wrench, Megaphone, HelpCircle, ChevronDown, ChevronUp, Users, HandHeart, AlertTriangle, Calculator, Clock, Phone, Mail, MessageCircle, Camera, Edit3, Share2, Printer, Bot, Video, Image, PenTool, Globe } from 'lucide-react';

interface FormData {
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  squareFootage: string;
  lotSize: string;
  yearBuilt: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  listingPrice: string;
  propertyDescription: string;
  keyFeatures: string[];
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSection, setShowSection] = useState<string>('home');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedFAQCategory, setSelectedFAQCategory] = useState<string>('all');
  const [selectedMarketingTool, setSelectedMarketingTool] = useState<string>('listing-writer');
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    lotSize: '',
    yearBuilt: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    listingPrice: '',
    propertyDescription: '',
    keyFeatures: [],
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [listingText, setListingText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
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
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const generateListing = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const sampleListing = `Stunning ${formData.bedrooms}-bedroom, ${formData.bathrooms}-bathroom ${formData.propertyType.toLowerCase()} located in the heart of ${formData.city}. This beautiful ${formData.squareFootage} sq ft home sits on a ${formData.lotSize} lot and was built in ${formData.yearBuilt}.

Key Features:
${formData.keyFeatures.map(feature => `• ${feature}`).join('\n')}

${formData.propertyDescription}

This property offers the perfect blend of comfort and convenience. Don't miss this opportunity to own a piece of ${formData.city}!

Priced at $${formData.listingPrice}. Contact ${formData.contactName} at ${formData.contactPhone} or ${formData.contactEmail} for more information or to schedule a showing.`;
      
      setListingText(sampleListing);
      setIsGenerating(false);
    }, 2000);
  };

  const faqData: FAQItem[] = [
    {
      question: "What if a buyer has their own agent?",
      answer: "This is completely normal and happens frequently. When a buyer has their own agent, you'll typically pay the buyer's agent commission (usually 2.5-3% of the sale price). The buyer's agent will handle their client's interests while you handle your own, or you can hire a transaction coordinator to help with paperwork.",
      category: "agents"
    },
    {
      question: "How do I handle multiple offers?",
      answer: "Multiple offers are a great position to be in! Review each offer carefully, considering not just price but also terms, financing, closing timeline, and contingencies. You can counter all offers, accept the best one, or ask for highest and best offers. Consider consulting with a real estate attorney for complex situations.",
      category: "process"
    },
    {
      question: "What legal documents do I need?",
      answer: "You'll need a purchase agreement, property disclosure forms, lead paint disclosure (for homes built before 1978), and any local required forms. Many states have standard forms available. Consider hiring a real estate attorney to review documents and handle the closing process.",
      category: "legal"
    },
    {
      question: "How do I price my home competitively?",
      answer: "Research comparable sales (comps) in your area from the last 3-6 months. Look at homes with similar size, age, condition, and location. Online tools like Zillow can provide estimates, but consider getting a professional appraisal or CMA (Comparative Market Analysis) for accuracy.",
      category: "pricing"
    },
    {
      question: "What are the typical closing costs I'll pay?",
      answer: "Seller closing costs typically range from 6-10% of the sale price, including: buyer's agent commission (2.5-3%), title insurance, attorney fees, transfer taxes, recording fees, and any agreed-upon repairs or credits. Get estimates from your title company early in the process.",
      category: "financial"
    },
    {
      question: "How do I market my home effectively?",
      answer: "Use multiple channels: list on MLS through a flat-fee service, post on Zillow, Realtor.com, Facebook Marketplace, and Craigslist. Take high-quality photos, create virtual tours, use social media, put up yard signs, and consider hosting open houses. Professional photography is worth the investment.",
      category: "marketing"
    },
    {
      question: "Should I allow showings when I'm not home?",
      answer: "For security reasons, it's generally recommended to be present during showings or have a trusted representative there. If you must allow unaccompanied showings, require pre-qualification letters, photo ID, and consider using a lockbox with showing instructions. Remove valuables and personal items.",
      category: "safety"
    },
    {
      question: "How long does the typical sale process take?",
      answer: "From listing to closing typically takes 30-60 days, but this varies by market conditions, price point, and property condition. The process includes: marketing period (days to weeks), negotiation (1-3 days), inspection period (7-10 days), financing approval (20-30 days), and closing preparation (5-7 days).",
      category: "process"
    },
    {
      question: "What if the buyer's inspection reveals problems?",
      answer: "Inspection issues are common and negotiable. Options include: fixing the problems, offering credits for repairs, reducing the sale price, or declining to make changes (buyer can then decide to proceed or cancel). Major issues should be addressed, but minor items are often negotiable.",
      category: "process"
    },
    {
      question: "Do I need to stage my home?",
      answer: "Staging can help your home sell faster and for more money. At minimum, declutter, deep clean, and make minor repairs. Consider renting furniture for empty homes, adding fresh flowers, and creating a welcoming atmosphere. Professional staging typically costs 1-3% of the home's value but can increase sale price by 5-15%.",
      category: "marketing"
    },
    {
      question: "How do I handle negotiations?",
      answer: "Stay objective and focus on your bottom line. Consider all terms, not just price. Common negotiation points include price, closing date, repairs, appliances, and closing costs. Don't take offers personally, and be prepared to counter-offer. Know your walk-away point before negotiations begin.",
      category: "process"
    },
    {
      question: "What happens if the buyer's financing falls through?",
      answer: "If financing falls through due to buyer issues, you typically keep the earnest money and can relist the property. If it's due to appraisal issues, you may need to lower the price or find a cash buyer. Always have backup offers when possible, and consider requiring larger earnest money deposits.",
      category: "financial"
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Questions', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'agents', name: 'Working with Agents', icon: <Users className="w-5 h-5" /> },
    { id: 'legal', name: 'Legal & Documentation', icon: <FileText className="w-5 h-5" /> },
    { id: 'pricing', name: 'Pricing & Market', icon: <Calculator className="w-5 h-5" /> },
    { id: 'process', name: 'Process & Timeline', icon: <Clock className="w-5 h-5" /> },
    { id: 'financial', name: 'Financial & Costs', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'marketing', name: 'Marketing & Exposure', icon: <Megaphone className="w-5 h-5" /> },
    { id: 'safety', name: 'Safety & Security', icon: <Shield className="w-5 h-5" /> }
  ];

  const filteredFAQs = selectedFAQCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedFAQCategory);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const steps = [
    {
      title: "Property Type",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">What type of property are you selling?</h3>
          <div className="grid grid-cols-2 gap-4">
            {['Single Family Home', 'Townhouse', 'Condo', 'Multi-Family'].map((type) => (
              <button
                key={type}
                onClick={() => updateFormData('propertyType', type)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  formData.propertyType === type
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <Building className="w-6 h-6 mx-auto mb-2" />
                <span className="font-medium">{type}</span>
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Property Details",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Tell us about your property</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
              <select
                value={formData.bedrooms}
                onChange={(e) => updateFormData('bedrooms', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select</option>
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
              <select
                value={formData.bathrooms}
                onChange={(e) => updateFormData('bathrooms', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select</option>
                {['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5+'].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Square Footage</label>
              <input
                type="text"
                value={formData.squareFootage}
                onChange={(e) => updateFormData('squareFootage', e.target.value)}
                placeholder="e.g., 2,500"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year Built</label>
              <input
                type="text"
                value={formData.yearBuilt}
                onChange={(e) => updateFormData('yearBuilt', e.target.value)}
                placeholder="e.g., 1995"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Location",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Where is your property located?</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => updateFormData('address', e.target.value)}
                placeholder="123 Main Street"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                  placeholder="City"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => updateFormData('state', e.target.value)}
                  placeholder="State"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => updateFormData('zipCode', e.target.value)}
                  placeholder="12345"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Pricing",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">What's your asking price?</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Listing Price</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={formData.listingPrice}
                onChange={(e) => updateFormData('listingPrice', e.target.value)}
                placeholder="450,000"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Contact Information",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">How can buyers reach you?</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={formData.contactName}
                onChange={(e) => updateFormData('contactName', e.target.value)}
                placeholder="John Smith"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={formData.contactEmail}
                onChange={(e) => updateFormData('contactEmail', e.target.value)}
                placeholder="john@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.contactPhone}
                onChange={(e) => updateFormData('contactPhone', e.target.value)}
                placeholder="(555) 123-4567"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      )
    }
  ];

  const marketingTools = [
    {
      id: 'listing-writer',
      name: 'AI Listing Writer',
      description: 'Generate compelling property descriptions',
      icon: <PenTool className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'photography',
      name: 'Photography Guide',
      description: 'Tips for stunning property photos',
      icon: <Camera className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      id: 'video',
      name: 'Video Marketing',
      description: 'Create virtual tours and walkthroughs',
      icon: <Video className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      id: 'social-media',
      name: 'Social Media Kit',
      description: 'Templates for Facebook, Instagram & more',
      icon: <Share2 className="w-6 h-6" />,
      color: 'bg-pink-500'
    },
    {
      id: 'flyer-builder',
      name: 'Flyer Builder',
      description: 'Create printable marketing materials',
      icon: <Printer className="w-6 h-6" />,
      color: 'bg-orange-500'
    },
    {
      id: 'sample-listings',
      name: 'Sample Listings',
      description: 'Browse successful listing examples',
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-teal-500'
    }
  ];

  const renderNavigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SellMyHome</span>
          </div>
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setShowSection('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                showSection === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setShowSection('questionnaire')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                showSection === 'questionnaire' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              List Your Home
            </button>
            <button
              onClick={() => setShowSection('marketing')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                showSection === 'marketing' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Marketing Hub
            </button>
            <button
              onClick={() => setShowSection('faq')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                showSection === 'faq' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setShowSection('contact')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                showSection === 'contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sell Your Home
              <span className="block text-blue-600">Without an Agent</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Save thousands in commission fees while getting professional marketing tools, 
              expert guidance, and full control over your home sale process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowSection('questionnaire')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Listing Process
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => setShowSection('marketing')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Marketing Tools
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FSBO?</h2>
            <p className="text-xl text-gray-600">Keep more money in your pocket with our comprehensive platform</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Save on Commission</h3>
              <p className="text-gray-600">Keep the 6% commission (typically $18,000 on a $300k home) in your pocket instead of paying agent fees.</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Control</h3>
              <p className="text-gray-600">Make all decisions about pricing, showings, negotiations, and timing without waiting for agent approval.</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Tools</h3>
              <p className="text-gray-600">Access the same marketing tools and resources that real estate professionals use, at a fraction of the cost.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">$18K+</div>
              <div className="text-blue-100">Average Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30 Days</div>
              <div className="text-blue-100">Average Time to Sell</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Homes Sold</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuestionnaire = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isSubmitted ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
              <div className="flex justify-between items-center text-white mb-4">
                <h2 className="text-2xl font-bold">List Your Property</h2>
                <span className="text-blue-100">Step {currentStep + 1} of {steps.length}</span>
              </div>
              <div className="w-full bg-blue-500 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step Content */}
            <div className="p-8">
              {steps[currentStep].content}
            </div>

            {/* Navigation */}
            <div className="bg-gray-50 px-8 py-6 flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Previous
              </button>
              
              {currentStep === steps.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                >
                  Submit Listing
                  <Send className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                >
                  Next
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Listing Submitted Successfully!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Your property listing has been created. We'll review it and get it live within 24 hours.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Next Steps:</h3>
              <ul className="text-left text-blue-800 space-y-2">
                <li>• Check your email for listing confirmation</li>
                <li>• Upload high-quality photos in your dashboard</li>
                <li>• Review our marketing tools to promote your listing</li>
                <li>• Prepare for showings and inquiries</li>
              </ul>
            </div>
            <button
              onClick={() => setShowSection('marketing')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Explore Marketing Tools
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderMarketingHub = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Marketing Hub</h1>
          <p className="text-xl text-gray-600">Professional marketing tools to sell your home faster</p>
        </div>

        {/* Marketing Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {marketingTools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => setSelectedMarketingTool(tool.id)}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-200 hover:shadow-xl hover:-translate-y-1 border-2 ${
                selectedMarketingTool === tool.id ? 'border-blue-500' : 'border-transparent'
              }`}
            >
              <div className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>

        {/* Selected Tool Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {selectedMarketingTool === 'listing-writer' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Bot className="w-8 h-8 text-blue-600 mr-3" />
                AI Listing Writer
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Property Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => updateFormData('propertyType', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select type</option>
                        <option value="Single Family Home">Single Family Home</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Condo">Condo</option>
                        <option value="Multi-Family">Multi-Family</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                        <input
                          type="text"
                          value={formData.bedrooms}
                          onChange={(e) => updateFormData('bedrooms', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                        <input
                          type="text"
                          value={formData.bathrooms}
                          onChange={(e) => updateFormData('bathrooms', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="2.5"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Square Footage</label>
                      <input
                        type="text"
                        value={formData.squareFootage}
                        onChange={(e) => updateFormData('squareFootage', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="2,500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => updateFormData('city', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Austin"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Listing Price</label>
                      <input
                        type="text"
                        value={formData.listingPrice}
                        onChange={(e) => updateFormData('listingPrice', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="450,000"
                      />
                    </div>
                    <button
                      onClick={generateListing}
                      disabled={isGenerating}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                      {isGenerating ? 'Generating...' : 'Generate Listing Description'}
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Generated Listing</h3>
                  <div className="bg-gray-50 rounded-lg p-4 min-h-96">
                    {listingText ? (
                      <div className="whitespace-pre-wrap text-gray-800">{listingText}</div>
                    ) : (
                      <div className="text-gray-500 italic">
                        Fill out the property information and click "Generate Listing Description" to create your professional listing.
                      </div>
                    )}
                  </div>
                  {listingText && (
                    <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                      Copy to Clipboard
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {selectedMarketingTool === 'photography' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Camera className="w-8 h-8 text-green-600 mr-3" />
                Photography Guide
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Essential Tips</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Lighting is Everything</h4>
                      <p className="text-green-700">Shoot during golden hour (1 hour after sunrise or before sunset) for warm, natural lighting. Open all curtains and turn on lights.</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Declutter & Stage</h4>
                      <p className="text-blue-700">Remove personal items, excess furniture, and clutter. Add fresh flowers, fluff pillows, and make beds.</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Wide Angles</h4>
                      <p className="text-purple-700">Use wide-angle shots to make rooms appear larger. Shoot from corners to capture the most space.</p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Multiple Angles</h4>
                      <p className="text-orange-700">Take 3-5 photos per room from different angles. Include detail shots of unique features.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Shot Checklist</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-3">
                      {[
                        'Exterior front view',
                        'Exterior back/side views',
                        'Living room (multiple angles)',
                        'Kitchen (including appliances)',
                        'Master bedroom',
                        'Master bathroom',
                        'Additional bedrooms',
                        'Additional bathrooms',
                        'Dining room',
                        'Unique features (fireplace, built-ins)',
                        'Outdoor spaces (deck, patio, yard)',
                        'Garage/parking'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedMarketingTool === 'social-media' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Share2 className="w-8 h-8 text-pink-600 mr-3" />
                Social Media Marketing
              </h2>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Facebook</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Post in local community groups</li>
                    <li>• Create Facebook Marketplace listing</li>
                    <li>• Share with friends and family</li>
                    <li>• Use local hashtags</li>
                    <li>• Post virtual tour videos</li>
                  </ul>
                </div>
                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-800 mb-4">Instagram</h3>
                  <ul className="space-y-2 text-pink-700">
                    <li>• Create Instagram Stories</li>
                    <li>• Use location tags</li>
                    <li>• Post high-quality photos</li>
                    <li>• Use relevant hashtags</li>
                    <li>• Create Reels for tours</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">Nextdoor</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Post in neighborhood feed</li>
                    <li>• Share in For Sale section</li>
                    <li>• Ask neighbors to share</li>
                    <li>• Highlight local features</li>
                    <li>• Respond to comments quickly</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedMarketingTool === 'flyer-builder' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Printer className="w-8 h-8 text-orange-600 mr-3" />
                Printable Flyer Builder
              </h2>
              <div className="text-center py-12">
                <div className="bg-orange-50 rounded-lg p-8 max-w-md mx-auto">
                  <Printer className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Coming Soon</h3>
                  <p className="text-gray-600">Our interactive flyer builder is currently in development. You'll be able to create professional marketing flyers with your property photos and details.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderFAQ = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Get answers to common FSBO concerns and questions</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFAQCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFAQCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {expandedFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact & Support</h1>
          <p className="text-xl text-gray-600">We're here to help you succeed with your home sale</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Options */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Mail className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Email Support</h3>
              </div>
              <p className="text-gray-600 mb-4">Get help with your listing, marketing questions, or technical issues.</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">General Support:</p>
                <p className="font-semibold text-blue-600">support@sellmyhome.com</p>
                <p className="text-sm text-gray-500">Marketing Help:</p>
                <p className="font-semibold text-blue-600">marketing@sellmyhome.com</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">Response time: Within 24 hours</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Live Chat</h3>
              </div>
              <p className="text-gray-600 mb-4">Chat with our support team for immediate assistance.</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors w-full">
                Start Live Chat
              </button>
              <p className="text-sm text-gray-500 mt-2">Available: Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Phone className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Phone Consultation</h3>
              </div>
              <p className="text-gray-600 mb-4">Schedule a one-on-one consultation with our FSBO experts.</p>
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-purple-800">30-minute consultation</span>
                  <span className="text-2xl font-bold text-purple-600">$49</span>
                </div>
                <p className="text-sm text-purple-700 mt-2">Pricing strategy, marketing advice, legal guidance</p>
              </div>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors w-full">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>General Question</option>
                  <option>Listing Help</option>
                  <option>Marketing Support</option>
                  <option>Technical Issue</option>
                  <option>Pricing Question</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">FSBO Guide</h4>
              <p className="text-gray-600 text-sm">Comprehensive guide to selling your home without an agent</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium mt-2">Download PDF</button>
            </div>
            <div className="text-center">
              <Calculator className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Cost Calculator</h4>
              <p className="text-gray-600 text-sm">Calculate your potential savings by selling FSBO</p>
              <button className="text-green-600 hover:text-green-700 font-medium mt-2">Use Calculator</button>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Community Forum</h4>
              <p className="text-gray-600 text-sm">Connect with other FSBO sellers and share experiences</p>
              <button className="text-purple-600 hover:text-purple-700 font-medium mt-2">Join Forum</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {renderNavigation()}
      
      {showSection === 'home' && renderHome()}
      {showSection === 'questionnaire' && renderQuestionnaire()}
      {showSection === 'marketing' && renderMarketingHub()}
      {showSection === 'faq' && renderFAQ()}
      {showSection === 'contact' && renderContact()}
    </div>
  );
}

export default App;