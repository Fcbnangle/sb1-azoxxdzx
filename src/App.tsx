import React, { useState } from 'react';
import { Home, ArrowRight, ArrowLeft, Send, CheckCircle, DollarSign, MapPin, User, Calendar, Building, Shield, CreditCard, Briefcase, TrendingUp, Star, Scale, FileText, Wrench, Megaphone, HelpCircle, ChevronDown, ChevronUp, Users, HandHeart, AlertTriangle, Calculator, Clock, Phone, Mail, MessageCircle, Camera, PenTool, Globe, Eye, Calendar as CalendarIcon, FileCheck, Handshake, Award, Target, Zap, BarChart3, Search, Edit, Share2, Lock, Headphones, Video, BookOpen, Download, PlayCircle, CheckSquare, Clipboard, PieChart, TrendingDown } from 'lucide-react';

interface FormData {
  // Property Details
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  squareFootage: string;
  lotSize: string;
  yearBuilt: string;
  propertyCondition: string;
  
  // Location
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  neighborhood: string;
  
  // Pricing
  askingPrice: string;
  priceFlexibility: string;
  
  // Features & Amenities
  interiorFeatures: string[];
  exteriorFeatures: string[];
  appliances: string[];
  
  // Listing Details
  listingTitle: string;
  propertyDescription: string;
  showingInstructions: string;
  
  // Contact Information
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
  
  // Additional Options
  professionalPhotos: string;
  virtualTour: string;
  openHouse: string;
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
  const [savingsCalculatorValue, setSavingsCalculatorValue] = useState<string>('500000');
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    lotSize: '',
    yearBuilt: '',
    propertyCondition: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    neighborhood: '',
    askingPrice: '',
    priceFlexibility: '',
    interiorFeatures: [],
    exteriorFeatures: [],
    appliances: [],
    listingTitle: '',
    propertyDescription: '',
    showingInstructions: '',
    name: '',
    email: '',
    phone: '',
    preferredContact: '',
    professionalPhotos: '',
    virtualTour: '',
    openHouse: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const calculateSavings = (homeValue: number) => {
    const traditionalFee = homeValue * 0.06; // 6% traditional agent fee
    const ourFee = 2999; // Our flat fee
    const savings = traditionalFee - ourFee;
    return { traditionalFee, ourFee, savings };
  };

  const savingsData = calculateSavings(parseInt(savingsCalculatorValue) || 500000);

  const eightStepProcess = [
    {
      step: 1,
      title: "Property Evaluation & Pricing",
      description: "Get a professional market analysis and set the right price for your home",
      icon: <Calculator className="w-8 h-8" />,
      details: "Use our free CMA tool to analyze comparable sales in your area and price your home competitively."
    },
    {
      step: 2,
      title: "Prepare Your Home",
      description: "Stage and prepare your property to attract maximum buyer interest",
      icon: <Home className="w-8 h-8" />,
      details: "Follow our home staging checklist and repair recommendations to showcase your property's best features."
    },
    {
      step: 3,
      title: "Professional Photography",
      description: "Capture stunning photos that make your listing stand out",
      icon: <Camera className="w-8 h-8" />,
      details: "Schedule professional photography or use our DIY photo guide to create compelling visual content."
    },
    {
      step: 4,
      title: "Create Your Listing",
      description: "Build a comprehensive listing with all property details and features",
      icon: <Edit className="w-8 h-8" />,
      details: "Use our listing builder to create detailed property descriptions and highlight key selling points."
    },
    {
      step: 5,
      title: "Market Your Property",
      description: "Distribute your listing across 100+ websites and social media",
      icon: <Megaphone className="w-8 h-8" />,
      details: "Your listing automatically appears on MLS, Zillow, Realtor.com, and other major real estate platforms."
    },
    {
      step: 6,
      title: "Manage Showings",
      description: "Schedule and conduct safe, effective property showings",
      icon: <Calendar className="w-8 h-8" />,
      details: "Use our showing management tools to screen buyers and coordinate visits safely and efficiently."
    },
    {
      step: 7,
      title: "Negotiate & Accept Offers",
      description: "Review offers and negotiate the best deal for your property",
      icon: <Handshake className="w-8 h-8" />,
      details: "Access negotiation templates and expert guidance to evaluate and counter offers effectively."
    },
    {
      step: 8,
      title: "Close the Sale",
      description: "Complete all paperwork and finalize the transaction",
      icon: <FileCheck className="w-8 h-8" />,
      details: "Work with title companies and attorneys to ensure a smooth closing process and successful sale."
    }
  ];

  const faqData: FAQItem[] = [
    {
      question: "How much can I really save by selling without an agent?",
      answer: "You can save thousands! Traditional real estate agents charge 5-6% commission, which on a $500,000 home equals $25,000-$30,000. Our platform charges just $2,999, saving you over $22,000. The higher your home value, the more you save.",
      category: "financial"
    },
    {
      question: "Is it legal to sell my home without a real estate agent?",
      answer: "Absolutely! For Sale By Owner (FSBO) is completely legal in all 50 states. You have the right to sell your own property. We provide all the legal documents and guidance you need to ensure a smooth, compliant transaction.",
      category: "legal"
    },
    {
      question: "What documents do I need to sell my home?",
      answer: "Key documents include: property deed, disclosure forms, purchase agreement, inspection reports, and closing documents. Our platform provides templates for all required paperwork and connects you with legal professionals when needed.",
      category: "legal"
    },
    {
      question: "How do I price my home correctly?",
      answer: "Our platform includes a free Comparative Market Analysis (CMA) tool that analyzes recent sales of similar homes in your area. We also provide access to professional appraisers and market data to help you set the optimal price.",
      category: "pricing"
    },
    {
      question: "Will my home get enough exposure without an agent?",
      answer: "Yes! We syndicate your listing to over 100 websites including Zillow, Realtor.com, and MLS. Plus, we provide social media marketing tools and professional photography services to maximize your home's visibility.",
      category: "marketing"
    },
    {
      question: "How do I handle showings and open houses safely?",
      answer: "Safety is our priority. We provide showing management tools, visitor screening, and safety guidelines. You can require pre-qualification letters, schedule supervised showings, and use our secure communication platform.",
      category: "safety"
    },
    {
      question: "What if I need help with negotiations?",
      answer: "Our platform includes negotiation support and templates for counteroffers. You can also access our network of real estate attorneys and consultants for complex negotiations, all while maintaining control of your sale.",
      category: "process"
    },
    {
      question: "How long does it typically take to sell FSBO?",
      answer: "FSBO homes typically sell within 30-90 days when priced correctly and marketed effectively. Our tools and guidance help you avoid common mistakes that can delay sales, keeping you on track with market averages.",
      category: "process"
    },
    {
      question: "Do I need professional photos?",
      answer: "Professional photos are highly recommended as they can increase showing requests by up to 118%. We offer professional photography services or provide detailed guides for taking high-quality photos yourself.",
      category: "marketing"
    },
    {
      question: "How do I handle the closing process?",
      answer: "We guide you through every step of closing, from accepting an offer to final paperwork. Our platform connects you with title companies, attorneys, and closing agents to ensure a smooth transaction.",
      category: "process"
    },
    {
      question: "What if buyers want to use their own agent?",
      answer: "That's common and perfectly fine! Buyer's agents are typically paid from the sale proceeds. We help you understand how to work with buyer's agents while protecting your interests and maintaining your savings.",
      category: "agents"
    },
    {
      question: "Can I still get my home on the MLS?",
      answer: "Yes! Our premium packages include MLS listing services. This gives your home maximum exposure alongside agent-listed properties, reaching all potential buyers in your market.",
      category: "marketing"
    },
    {
      question: "What support do you provide during the sale?",
      answer: "We offer 24/7 email support, live chat during business hours, and optional phone consultations. Our resource library includes guides, templates, and video tutorials for every step of the selling process.",
      category: "process"
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees! Our pricing is transparent. The $2,999 fee includes listing creation, marketing tools, document templates, and basic support. Optional services like professional photography or legal consultations are clearly priced separately.",
      category: "financial"
    },
    {
      question: "What happens if my home doesn't sell?",
      answer: "We provide ongoing support and can help you adjust your strategy. This might include pricing adjustments, enhanced marketing, or connecting you with our network of professionals. Your success is our priority.",
      category: "process"
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Questions', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'financial', name: 'Pricing & Savings', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'legal', name: 'Legal & Documentation', icon: <FileText className="w-5 h-5" /> },
    { id: 'marketing', name: 'Marketing & Exposure', icon: <Megaphone className="w-5 h-5" /> },
    { id: 'process', name: 'Process & Timeline', icon: <Clock className="w-5 h-5" /> },
    { id: 'safety', name: 'Safety & Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'agents', name: 'Working with Agents', icon: <Users className="w-5 h-5" /> }
  ];

  const filteredFAQs = selectedFAQCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedFAQCategory);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const steps = [
    {
      title: "Property Details",
      icon: <Home className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <select 
                value={formData.propertyType} 
                onChange={(e) => updateFormData('propertyType', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Property Type</option>
                <option value="single-family">Single Family Home</option>
                <option value="condo">Condominium</option>
                <option value="townhouse">Townhouse</option>
                <option value="multi-family">Multi-Family</option>
                <option value="land">Land/Lot</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Condition</label>
              <select 
                value={formData.propertyCondition} 
                onChange={(e) => updateFormData('propertyCondition', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Condition</option>
                <option value="excellent">Excellent - Move-in Ready</option>
                <option value="good">Good - Minor Updates Needed</option>
                <option value="fair">Fair - Some Repairs Needed</option>
                <option value="needs-work">Needs Work - Major Repairs</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
              <select 
                value={formData.bedrooms} 
                onChange={(e) => updateFormData('bedrooms', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select</option>
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num.toString()}>{num}+ Bedrooms</option>
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
                  <option key={num} value={num}>{num} Bathrooms</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year Built</label>
              <input 
                type="number" 
                value={formData.yearBuilt} 
                onChange={(e) => updateFormData('yearBuilt', e.target.value)}
                placeholder="e.g., 1995"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Square Footage</label>
              <input 
                type="number" 
                value={formData.squareFootage} 
                onChange={(e) => updateFormData('squareFootage', e.target.value)}
                placeholder="e.g., 2500"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Lot Size</label>
              <input 
                type="text" 
                value={formData.lotSize} 
                onChange={(e) => updateFormData('lotSize', e.target.value)}
                placeholder="e.g., 0.25 acres or 10,890 sq ft"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Location Details",
      icon: <MapPin className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
            <input 
              type="text" 
              value={formData.streetAddress} 
              onChange={(e) => updateFormData('streetAddress', e.target.value)}
              placeholder="123 Main Street"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <select 
                value={formData.state} 
                onChange={(e) => updateFormData('state', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Neighborhood</label>
            <input 
              type="text" 
              value={formData.neighborhood} 
              onChange={(e) => updateFormData('neighborhood', e.target.value)}
              placeholder="e.g., Downtown, Westside, Oak Hills"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      )
    },
    {
      title: "Pricing Information",
      icon: <DollarSign className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Asking Price</label>
            <input 
              type="number" 
              value={formData.askingPrice} 
              onChange={(e) => updateFormData('askingPrice', e.target.value)}
              placeholder="500000"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-sm text-gray-500 mt-1">Enter the amount without commas or dollar signs</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Flexibility</label>
            <select 
              value={formData.priceFlexibility} 
              onChange={(e) => updateFormData('priceFlexibility', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Flexibility</option>
              <option value="firm">Price is Firm</option>
              <option value="somewhat-negotiable">Somewhat Negotiable</option>
              <option value="very-negotiable">Very Negotiable</option>
              <option value="open-to-offers">Open to All Offers</option>
            </select>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Pricing Tips</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Research comparable sales in your area</li>
              <li>• Consider recent market trends</li>
              <li>• Factor in your home's unique features</li>
              <li>• Leave room for negotiation</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Property Features",
      icon: <Star className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Interior Features</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Hardwood Floors', 'Carpet', 'Tile Flooring', 'Granite Countertops', 
                'Stainless Steel Appliances', 'Updated Kitchen', 'Master Suite', 
                'Walk-in Closets', 'Fireplace', 'High Ceilings', 'Crown Molding', 
                'Built-in Storage'
              ].map(feature => (
                <label key={feature} className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    checked={formData.interiorFeatures.includes(feature)}
                    onChange={(e) => {
                      const current = formData.interiorFeatures;
                      if (e.target.checked) {
                        updateFormData('interiorFeatures', [...current, feature]);
                      } else {
                        updateFormData('interiorFeatures', current.filter(f => f !== feature));
                      }
                    }}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Exterior Features</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Swimming Pool', 'Hot Tub', 'Deck/Patio', 'Fenced Yard', 
                'Landscaping', 'Sprinkler System', 'Garage', 'Carport', 
                'Shed/Storage', 'Garden Area', 'Outdoor Kitchen', 'Fire Pit'
              ].map(feature => (
                <label key={feature} className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    checked={formData.exteriorFeatures.includes(feature)}
                    onChange={(e) => {
                      const current = formData.exteriorFeatures;
                      if (e.target.checked) {
                        updateFormData('exteriorFeatures', [...current, feature]);
                      } else {
                        updateFormData('exteriorFeatures', current.filter(f => f !== feature));
                      }
                    }}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Included Appliances</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Refrigerator', 'Dishwasher', 'Oven/Range', 'Microwave', 
                'Washer', 'Dryer', 'Garbage Disposal', 'Wine Cooler'
              ].map(appliance => (
                <label key={appliance} className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    checked={formData.appliances.includes(appliance)}
                    onChange={(e) => {
                      const current = formData.appliances;
                      if (e.target.checked) {
                        updateFormData('appliances', [...current, appliance]);
                      } else {
                        updateFormData('appliances', current.filter(f => f !== appliance));
                      }
                    }}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm">{appliance}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Listing Details",
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Listing Title</label>
            <input 
              type="text" 
              value={formData.listingTitle} 
              onChange={(e) => updateFormData('listingTitle', e.target.value)}
              placeholder="e.g., Beautiful 4BR Home in Quiet Neighborhood"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Property Description</label>
            <textarea 
              value={formData.propertyDescription} 
              onChange={(e) => updateFormData('propertyDescription', e.target.value)}
              placeholder="Describe your property's best features, recent updates, neighborhood amenities, and what makes it special..."
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-sm text-gray-500 mt-1">Tip: Highlight unique features, recent improvements, and neighborhood benefits</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Showing Instructions</label>
            <textarea 
              value={formData.showingInstructions} 
              onChange={(e) => updateFormData('showingInstructions', e.target.value)}
              placeholder="e.g., Please call 24 hours in advance. Remove shoes when entering. Dog in backyard - please keep gate closed."
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      )
    },
    {
      title: "Contact Information",
      icon: <User className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                value={formData.name} 
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="John Smith"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                value={formData.email} 
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="john@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                value={formData.phone} 
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="(555) 123-4567"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
              <select 
                value={formData.preferredContact} 
                onChange={(e) => updateFormData('preferredContact', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Preference</option>
                <option value="phone">Phone Call</option>
                <option value="text">Text Message</option>
                <option value="email">Email</option>
                <option value="any">Any Method</option>
              </select>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Additional Services",
      icon: <Wrench className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Professional Photography</label>
            <select 
              value={formData.professionalPhotos} 
              onChange={(e) => updateFormData('professionalPhotos', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Option</option>
              <option value="yes">Yes - Schedule Professional Photos ($299)</option>
              <option value="no">No - I'll Take My Own Photos</option>
              <option value="maybe">Maybe - Contact Me Later</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Virtual Tour</label>
            <select 
              value={formData.virtualTour} 
              onChange={(e) => updateFormData('virtualTour', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Option</option>
              <option value="yes">Yes - Create Virtual Tour ($199)</option>
              <option value="no">No - Photos Only</option>
              <option value="maybe">Maybe - Contact Me Later</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Open House Support</label>
            <select 
              value={formData.openHouse} 
              onChange={(e) => updateFormData('openHouse', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Option</option>
              <option value="yes">Yes - Help Me Plan Open Houses</option>
              <option value="no">No - I'll Handle Showings Privately</option>
              <option value="maybe">Maybe - Contact Me Later</option>
            </select>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">📈 Maximize Your Success</h4>
            <p className="text-sm text-green-800">
              Professional photos can increase showing requests by up to 118% and help your home sell faster. 
              Virtual tours are especially popular with out-of-town buyers and can reduce unnecessary showings.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Review & Submit",
      icon: <CheckCircle className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Review Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Property:</strong> {formData.propertyType || 'Not specified'} 
                {formData.bedrooms && `, ${formData.bedrooms} bed`}
                {formData.bathrooms && `, ${formData.bathrooms} bath`}
              </div>
              <div>
                <strong>Location:</strong> {formData.city || 'Not specified'}, {formData.state || 'Not specified'}
              </div>
              <div>
                <strong>Price:</strong> {formData.askingPrice ? `$${parseInt(formData.askingPrice).toLocaleString()}` : 'Not specified'}
              </div>
              <div>
                <strong>Contact:</strong> {formData.name || 'Not specified'}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">What Happens Next?</h4>
            <ul className="text-sm text-blue-800 space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
                <span>Your listing will be created and reviewed within 24 hours</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
                <span>We'll syndicate your listing to 100+ websites including MLS</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
                <span>You'll receive a dashboard to manage showings and inquiries</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
                <span>Our support team will contact you to schedule any additional services</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit My Listing
            </button>
          </div>
        </div>
      )
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Listing Submitted Successfully!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for choosing our For Sale By Owner platform. Your listing is being processed and will be live within 24 hours.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-900 mb-3">What's Next?</h3>
            <ul className="text-left text-blue-800 space-y-2">
              <li>✅ You'll receive a confirmation email with your listing details</li>
              <li>✅ Our team will review and optimize your listing</li>
              <li>✅ Your property will appear on 100+ websites within 24-48 hours</li>
              <li>✅ You'll get access to your seller dashboard to manage inquiries</li>
            </ul>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(0);
              setShowSection('home');
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Home className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SellMyHome</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setShowSection('home')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  showSection === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setShowSection('how-it-works')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  showSection === 'how-it-works' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                How It Works
              </button>
              <button
                onClick={() => setShowSection('savings')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  showSection === 'savings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Savings Calculator
              </button>
              <button
                onClick={() => setShowSection('faq')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  showSection === 'faq' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => setShowSection('questionnaire')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                List Your Home
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      {showSection === 'home' && (
        <div>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Sell Your Home Without an Agent
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Save thousands in commission fees with our comprehensive FSBO platform
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowSection('questionnaire')}
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Start Listing Your Home</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setShowSection('savings')}
                    className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Calculate Your Savings
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Savings Preview */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">See How Much You Can Save</h2>
                <p className="text-xl text-gray-600">Traditional agent fees vs. our flat-rate service</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: 500000, label: '$500K Home' },
                  { value: 1000000, label: '$1M Home' },
                  { value: 2000000, label: '$2M Home' }
                ].map(({ value, label }) => {
                  const savings = calculateSavings(value);
                  return (
                    <div key={value} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{label}</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Traditional Agent Fee (6%):</span>
                          <span className="font-semibold text-red-600">-${savings.traditionalFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Our Flat Fee:</span>
                          <span className="font-semibold text-blue-600">-${savings.ourFee.toLocaleString()}</span>
                        </div>
                        <div className="border-t pt-3">
                          <div className="flex justify-between">
                            <span className="font-bold text-gray-900">You Save:</span>
                            <span className="font-bold text-green-600 text-xl">${savings.savings.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Sell Successfully</h2>
                <p className="text-xl text-gray-600">Professional tools and support without the hefty commission</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Globe className="w-8 h-8" />,
                    title: "MLS & 100+ Websites",
                    description: "Maximum exposure across all major real estate platforms"
                  },
                  {
                    icon: <Camera className="w-8 h-8" />,
                    title: "Professional Photography",
                    description: "High-quality photos that showcase your home's best features"
                  },
                  {
                    icon: <FileText className="w-8 h-8" />,
                    title: "Legal Documents",
                    description: "All necessary contracts and forms provided by legal experts"
                  },
                  {
                    icon: <Headphones className="w-8 h-8" />,
                    title: "24/7 Support",
                    description: "Expert guidance throughout your entire selling process"
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Secure Showings",
                    description: "Safe showing management with buyer pre-screening"
                  },
                  {
                    icon: <BarChart3 className="w-8 h-8" />,
                    title: "Market Analysis",
                    description: "Free CMA to help you price your home competitively"
                  },
                  {
                    icon: <Handshake className="w-8 h-8" />,
                    title: "Negotiation Support",
                    description: "Templates and guidance for handling offers and counteroffers"
                  },
                  {
                    icon: <CheckCircle className="w-8 h-8" />,
                    title: "Closing Assistance",
                    description: "Step-by-step support through the entire closing process"
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-blue-600 mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
                <p className="text-xl text-gray-600">Real homeowners who saved thousands</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Johnson",
                    location: "Austin, TX",
                    savings: "$18,000",
                    quote: "I was skeptical about selling without an agent, but this platform made it so easy. The support team guided me through everything, and I saved almost $18,000!"
                  },
                  {
                    name: "Mike Chen",
                    location: "Denver, CO",
                    savings: "$24,000",
                    quote: "The professional photos and MLS listing got my home sold in just 3 weeks. I couldn't believe how much money I saved compared to using a traditional agent."
                  },
                  {
                    name: "Lisa Rodriguez",
                    location: "Phoenix, AZ",
                    savings: "$31,000",
                    quote: "Best decision ever! The legal documents and negotiation support gave me confidence throughout the process. I saved over $30,000 on my home sale."
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Saved</p>
                        <p className="font-bold text-green-600">{testimonial.savings}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Save Thousands on Your Home Sale?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Join thousands of homeowners who have successfully sold their homes without paying hefty agent commissions
              </p>
              <button
                onClick={() => setShowSection('questionnaire')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </section>
        </div>
      )}

      {/* How It Works Section */}
      {showSection === 'how-it-works' && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
              <p className="text-xl text-gray-600">Our proven 8-step process to sell your home successfully</p>
            </div>

            <div className="space-y-12">
              {eightStepProcess.map((step, index) => (
                <div key={step.step} className="flex flex-col lg:flex-row items-center gap-8">
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {step.step}
                        </div>
                        <div className="text-blue-600">{step.icon}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                      <p className="text-gray-700">{step.details}</p>
                    </div>
                  </div>
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl h-64 flex items-center justify-center">
                      <div className="text-blue-600 opacity-20">
                        {React.cloneElement(step.icon, { className: "w-32 h-32" })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button
                onClick={() => setShowSection('questionnaire')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>Start Your Home Sale Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Savings Calculator Section */}
      {showSection === 'savings' && (
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Savings Calculator</h1>
              <p className="text-xl text-gray-600">See exactly how much you'll save by selling without an agent</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <label className="block text-lg font-medium text-gray-700 mb-4">Enter Your Home's Value</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500 text-lg">$</span>
                  <input
                    type="number"
                    value={savingsCalculatorValue}
                    onChange={(e) => setSavingsCalculatorValue(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="500000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h3 className="text-xl font-bold text-red-800 mb-4">Traditional Agent Route</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-red-700">Home Value:</span>
                      <span className="font-semibold">${parseInt(savingsCalculatorValue || '0').toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Agent Commission (6%):</span>
                      <span className="font-semibold text-red-600">-${savingsData.traditionalFee.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-red-200 pt-3">
                      <div className="flex justify-between">
                        <span className="font-bold text-red-800">You Receive:</span>
                        <span className="font-bold text-red-800">${(parseInt(savingsCalculatorValue || '0') - savingsData.traditionalFee).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Our FSBO Platform</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-green-700">Home Value:</span>
                      <span className="font-semibold">${parseInt(savingsCalculatorValue || '0').toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Our Flat Fee:</span>
                      <span className="font-semibold text-green-600">-${savingsData.ourFee.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-green-200 pt-3">
                      <div className="flex justify-between">
                        <span className="font-bold text-green-800">You Receive:</span>
                        <span className="font-bold text-green-800">${(parseInt(savingsCalculatorValue || '0') - savingsData.ourFee).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl border-2 border-blue-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Total Savings</h3>
                  <p className="text-4xl font-bold text-green-600 mb-4">${savingsData.savings.toLocaleString()}</p>
                  <p className="text-lg text-gray-700">
                    That's {((savingsData.savings / parseInt(savingsCalculatorValue || '1')) * 100).toFixed(1)}% more money in your pocket!
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowSection('questionnaire')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Start Saving Today</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Comparison Table */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Home Values Comparison</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Home Value</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Traditional Agent Fee</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Our Flat Fee</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Your Savings</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[300000, 500000, 750000, 1000000, 1500000, 2000000].map((value) => {
                      const savings = calculateSavings(value);
                      return (
                        <tr key={value} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ${value.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">
                            ${savings.traditionalFee.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">
                            ${savings.ourFee.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold">
                            ${savings.savings.toLocaleString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      {showSection === 'faq' && (
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-600">Everything you need to know about selling your home without an agent</p>
            </div>

            {/* FAQ Categories */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFAQCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedFAQCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
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

            <div className="mt-12 text-center">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Still Have Questions?</h3>
                <p className="text-blue-800 mb-6">Our expert support team is here to help you every step of the way.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:1-800-555-0123" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call (800) 555-0123</span>
                  </a>
                  <a href="mailto:support@sellmyhome.com" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Email Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Questionnaire Section */}
      {showSection === 'questionnaire' && (
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Progress Bar */}
              <div className="bg-gray-50 px-8 py-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">List Your Home</h2>
                  <span className="text-sm text-gray-600">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Step Content */}
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-blue-600">{steps[currentStep].icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{steps[currentStep].title}</h3>
                </div>
                
                {steps[currentStep].content}
              </div>

              {/* Navigation */}
              <div className="bg-gray-50 px-8 py-6 flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    currentStep === 0
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>

                {currentStep === steps.length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Listing</span>
                  </button>
                ) : (
                  <button
                    onClick={nextStep}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;