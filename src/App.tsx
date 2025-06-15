import React, { useState } from 'react';
import { Home, ArrowRight, ArrowLeft, Send, CheckCircle, DollarSign, MapPin, User, Calendar, Building, Shield, CreditCard, Briefcase, TrendingUp, Star, Scale, FileText, Wrench, Megaphone, HelpCircle, ChevronDown, ChevronUp, Users, HandHeart, AlertTriangle, Calculator, Clock, Phone, Mail, MessageCircle, Camera, Share2, Printer, Edit3, Eye, Download, Upload, Copy, Check, X, Menu, Search, Filter, Heart, Bookmark, Globe, Zap, Target, Award, Lightbulb, PieChart, BarChart3, TrendingDown, RefreshCw, PlayCircle, PauseCircle, Volume2, VolumeX, Maximize, Minimize, RotateCcw, Crop, Palette, Type, AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, List, Link, Image, Video, Mic, Headphones, Speaker, Wifi, Signal, Battery, Settings, Lock, Unlock, ShieldCheck, AlertCircle, Info, Plus, Minus, Equal, Percent, Hash, AtSign, DollarSign as Dollar } from 'lucide-react';

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
  marketAnalysis: string;
  
  // Features & Amenities
  interiorFeatures: string[];
  exteriorFeatures: string[];
  appliances: string[];
  utilities: string;
  parking: string;
  
  // Listing Details
  listingTitle: string;
  propertyDescription: string;
  keySellingPoints: string;
  showingInstructions: string;
  availabilitySchedule: string;
  
  // Legal & Financial
  ownershipStatus: string;
  mortgageStatus: string;
  propertyTaxes: string;
  hoaFees: string;
  disclosures: string[];
  
  // Marketing Preferences
  photoCount: string;
  virtualTour: string;
  marketingBudget: string;
  targetBuyers: string;
  urgencyLevel: string;
  
  // Contact Information
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
  availability: string;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSection, setShowSection] = useState<string>('home');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedFAQCategory, setSelectedFAQCategory] = useState<string>('all');
  const [activeMarketingTool, setActiveMarketingTool] = useState<string>('ai-writer');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    // Property Details
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    lotSize: '',
    yearBuilt: '',
    propertyCondition: '',
    
    // Location
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    neighborhood: '',
    
    // Pricing
    askingPrice: '',
    priceFlexibility: '',
    marketAnalysis: '',
    
    // Features & Amenities
    interiorFeatures: [],
    exteriorFeatures: [],
    appliances: [],
    utilities: '',
    parking: '',
    
    // Listing Details
    listingTitle: '',
    propertyDescription: '',
    keySellingPoints: '',
    showingInstructions: '',
    availabilitySchedule: '',
    
    // Legal & Financial
    ownershipStatus: '',
    mortgageStatus: '',
    propertyTaxes: '',
    hoaFees: '',
    disclosures: [],
    
    // Marketing Preferences
    photoCount: '',
    virtualTour: '',
    marketingBudget: '',
    targetBuyers: '',
    urgencyLevel: '',
    
    // Contact Information
    name: '',
    email: '',
    phone: '',
    preferredContact: '',
    availability: ''
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

  const sendChatMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: chatInput,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(chatInput),
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (input: string): string => {
    const responses = [
      "Here's a compelling listing description based on your property details...",
      "I've crafted a professional description that highlights your home's best features...",
      "This listing emphasizes the unique selling points of your property...",
      "Here's an engaging description designed to attract serious buyers..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const faqData: FAQItem[] = [
    {
      question: "What if a buyer has their own agent?",
      answer: "This is completely normal and happens frequently. When a buyer has their own agent, you'll typically pay the buyer's agent commission (usually 2.5-3% of the sale price). The buyer's agent will handle their client's interests, while you represent yourself. Make sure to clarify commission arrangements upfront and consider having a real estate attorney review any agreements.",
      category: "agents"
    },
    {
      question: "How do I determine the right asking price?",
      answer: "Research comparable sales (comps) in your neighborhood from the last 3-6 months. Look at properties with similar size, age, and features. Consider getting a professional appraisal ($300-500) or use online valuation tools as a starting point. Price competitively - overpricing can lead to your home sitting on the market longer.",
      category: "pricing"
    },
    {
      question: "What legal documents do I need?",
      answer: "Essential documents include: property deed, recent survey, property disclosure statement, lead paint disclosure (if built before 1978), HOA documents (if applicable), utility bills, property tax records, and any warranties. Consider hiring a real estate attorney to review contracts and handle the closing process.",
      category: "legal"
    },
    {
      question: "How do I handle showings safely?",
      answer: "Always verify potential buyers' identity and pre-qualify them financially. Require appointments and avoid last-minute showings. Have someone else present during showings when possible. Secure valuables and personal information. Consider using a lockbox system and require proof of funds or pre-approval letters before showing.",
      category: "safety"
    },
    {
      question: "What are the typical closing costs for sellers?",
      answer: "Seller closing costs typically range from 6-10% of the sale price, including: buyer's agent commission (2.5-3%), title insurance, attorney fees, transfer taxes, recording fees, and any agreed-upon repairs or credits. Budget accordingly and factor these costs into your net proceeds calculation.",
      category: "financial"
    },
    {
      question: "How long does it typically take to sell FSBO?",
      answer: "FSBO properties typically take 1-3 months longer to sell than agent-listed properties, depending on market conditions, pricing, and marketing efforts. Success factors include competitive pricing, professional photos, broad marketing reach, and flexibility with showings. Stay patient but be prepared to adjust strategy if needed.",
      category: "process"
    },
    {
      question: "Should I allow buyers to bring their own inspectors?",
      answer: "Yes, professional inspections are standard practice and protect both parties. Buyers typically pay for their own inspections. Be prepared for inspection requests and negotiate repairs reasonably. Consider getting a pre-inspection yourself to identify and address issues beforehand.",
      category: "process"
    },
    {
      question: "How do I market my home effectively?",
      answer: "Use multiple channels: online listings (Zillow, FSBO.com, Craigslist), social media, yard signs, flyers, and word-of-mouth. Professional photos are crucial - they're often the first impression. Consider virtual tours, open houses, and targeted online advertising. Highlight unique features and neighborhood benefits.",
      category: "marketing"
    },
    {
      question: "What if I receive multiple offers?",
      answer: "Review all offers carefully, considering not just price but also terms, financing, contingencies, and closing timeline. You can counter multiple offers simultaneously or choose your preferred offer to negotiate with. Consider the buyer's financial qualification and flexibility. A higher offer isn't always the best offer.",
      category: "legal"
    },
    {
      question: "Do I need to stage my home?",
      answer: "While not required, staging can help your home sell faster and for a higher price. Focus on decluttering, deep cleaning, neutral colors, and maximizing space and light. Even basic staging like removing personal items and rearranging furniture can make a significant difference in buyer perception.",
      category: "marketing"
    },
    {
      question: "How do I handle negotiations?",
      answer: "Stay objective and don't take offers personally. Consider all aspects of an offer, not just price. Be prepared to counter-offer and negotiate terms like closing date, repairs, and contingencies. Set your bottom line beforehand and stick to it. Consider consulting with a real estate attorney for complex negotiations.",
      category: "process"
    },
    {
      question: "What are common FSBO mistakes to avoid?",
      answer: "Common mistakes include: overpricing, poor quality photos, inadequate marketing, being inflexible with showings, not pre-qualifying buyers, inadequate legal preparation, emotional decision-making, and not understanding local market conditions. Research thoroughly and consider professional help for legal and financial aspects.",
      category: "process"
    },
    {
      question: "Should I offer buyer incentives?",
      answer: "Incentives can help attract buyers in competitive markets. Consider offering to pay closing costs, including warranties, or providing credits for updates. However, ensure incentives don't signal desperation. Sometimes lowering the price is more effective than offering incentives.",
      category: "pricing"
    },
    {
      question: "How do I verify a buyer's financial qualification?",
      answer: "Request pre-approval letters from lenders, proof of funds for cash buyers, and employment verification. Be wary of buyers who can't provide financial documentation. For cash offers, verify funds through bank statements or proof of funds letters from financial institutions.",
      category: "financial"
    },
    {
      question: "What happens at closing?",
      answer: "Closing involves signing transfer documents, exchanging funds, and transferring ownership. You'll need to provide clear title, complete any agreed-upon repairs, and pay closing costs. Consider hiring a real estate attorney to represent your interests and ensure all legal requirements are met.",
      category: "legal"
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
      title: "Property Type & Basic Info",
      icon: <Home className="w-6 h-6" />,
      fields: [
        {
          label: "Property Type",
          key: "propertyType" as keyof FormData,
          type: "select",
          options: ["Single Family Home", "Townhouse", "Condo", "Multi-Family", "Mobile Home", "Land", "Commercial"]
        },
        {
          label: "Bedrooms",
          key: "bedrooms" as keyof FormData,
          type: "select",
          options: ["1", "2", "3", "4", "5", "6+"]
        },
        {
          label: "Bathrooms",
          key: "bathrooms" as keyof FormData,
          type: "select",
          options: ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5+"]
        },
        {
          label: "Square Footage",
          key: "squareFootage" as keyof FormData,
          type: "input",
          placeholder: "e.g., 2,500"
        },
        {
          label: "Lot Size",
          key: "lotSize" as keyof FormData,
          type: "input",
          placeholder: "e.g., 0.25 acres or 10,890 sq ft"
        },
        {
          label: "Year Built",
          key: "yearBuilt" as keyof FormData,
          type: "input",
          placeholder: "e.g., 1995"
        },
        {
          label: "Property Condition",
          key: "propertyCondition" as keyof FormData,
          type: "select",
          options: ["Excellent", "Good", "Fair", "Needs Work", "Fixer Upper"]
        }
      ]
    },
    {
      title: "Location Details",
      icon: <MapPin className="w-6 h-6" />,
      fields: [
        {
          label: "Street Address",
          key: "streetAddress" as keyof FormData,
          type: "input",
          placeholder: "123 Main Street"
        },
        {
          label: "City",
          key: "city" as keyof FormData,
          type: "input",
          placeholder: "Your City"
        },
        {
          label: "State",
          key: "state" as keyof FormData,
          type: "select",
          options: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
        },
        {
          label: "ZIP Code",
          key: "zipCode" as keyof FormData,
          type: "input",
          placeholder: "12345"
        },
        {
          label: "Neighborhood/Subdivision",
          key: "neighborhood" as keyof FormData,
          type: "input",
          placeholder: "e.g., Oak Hills, Downtown, etc."
        }
      ]
    },
    {
      title: "Pricing Strategy",
      icon: <DollarSign className="w-6 h-6" />,
      fields: [
        {
          label: "Asking Price",
          key: "askingPrice" as keyof FormData,
          type: "input",
          placeholder: "$000,000"
        },
        {
          label: "Price Flexibility",
          key: "priceFlexibility" as keyof FormData,
          type: "select",
          options: ["Firm on Price", "Somewhat Negotiable", "Very Negotiable", "Open to Best Offer"]
        },
        {
          label: "Market Analysis Completed?",
          key: "marketAnalysis" as keyof FormData,
          type: "select",
          options: ["Yes - Professional Appraisal", "Yes - Online Research", "Yes - Realtor CMA", "No - Need Help"]
        }
      ]
    },
    {
      title: "Interior Features",
      icon: <Building className="w-6 h-6" />,
      fields: [
        {
          label: "Interior Features (Select all that apply)",
          key: "interiorFeatures" as keyof FormData,
          type: "checkbox",
          options: [
            "Hardwood Floors", "Tile Flooring", "Carpet", "Updated Kitchen", "Granite Countertops", 
            "Stainless Steel Appliances", "Walk-in Closets", "Master Suite", "Fireplace", 
            "High Ceilings", "Open Floor Plan", "Formal Dining Room", "Home Office", 
            "Basement", "Finished Basement", "Attic Storage", "Laundry Room", "Pantry"
          ]
        },
        {
          label: "Included Appliances (Select all that apply)",
          key: "appliances" as keyof FormData,
          type: "checkbox",
          options: [
            "Refrigerator", "Dishwasher", "Range/Oven", "Microwave", "Washer", "Dryer", 
            "Garbage Disposal", "Wine Cooler", "Ice Maker"
          ]
        },
        {
          label: "Utilities",
          key: "utilities" as keyof FormData,
          type: "select",
          options: ["All Electric", "Gas & Electric", "Oil Heat", "Solar", "Well Water", "City Water & Sewer"]
        }
      ]
    },
    {
      title: "Exterior Features",
      icon: <Home className="w-6 h-6" />,
      fields: [
        {
          label: "Exterior Features (Select all that apply)",
          key: "exteriorFeatures" as keyof FormData,
          type: "checkbox",
          options: [
            "Deck", "Patio", "Pool", "Hot Tub", "Fenced Yard", "Landscaping", 
            "Sprinkler System", "Shed", "Workshop", "RV Parking", "Boat Dock", 
            "Tennis Court", "Basketball Court", "Playground", "Garden Area"
          ]
        },
        {
          label: "Parking",
          key: "parking" as keyof FormData,
          type: "select",
          options: ["No Garage", "1-Car Garage", "2-Car Garage", "3+ Car Garage", "Carport", "Street Parking Only"]
        }
      ]
    },
    {
      title: "Listing Description",
      icon: <Edit3 className="w-6 h-6" />,
      fields: [
        {
          label: "Listing Title",
          key: "listingTitle" as keyof FormData,
          type: "input",
          placeholder: "e.g., Beautiful 3BR/2BA Home in Quiet Neighborhood"
        },
        {
          label: "Property Description",
          key: "propertyDescription" as keyof FormData,
          type: "textarea",
          placeholder: "Describe your home's best features, recent updates, neighborhood amenities..."
        },
        {
          label: "Key Selling Points",
          key: "keySellingPoints" as keyof FormData,
          type: "textarea",
          placeholder: "What makes your home special? Recent renovations, unique features, location benefits..."
        }
      ]
    },
    {
      title: "Showing & Availability",
      icon: <Calendar className="w-6 h-6" />,
      fields: [
        {
          label: "Showing Instructions",
          key: "showingInstructions" as keyof FormData,
          type: "select",
          options: ["Call First", "Text First", "24 Hour Notice", "Appointment Only", "Lockbox Available"]
        },
        {
          label: "Availability Schedule",
          key: "availabilitySchedule" as keyof FormData,
          type: "textarea",
          placeholder: "When are you available for showings? Any restrictions or preferred times?"
        }
      ]
    },
    {
      title: "Legal & Financial",
      icon: <FileText className="w-6 h-6" />,
      fields: [
        {
          label: "Ownership Status",
          key: "ownershipStatus" as keyof FormData,
          type: "select",
          options: ["Own Free & Clear", "Have Mortgage", "Inherited Property", "Estate Sale", "Divorce Sale"]
        },
        {
          label: "Mortgage Status",
          key: "mortgageStatus" as keyof FormData,
          type: "select",
          options: ["No Mortgage", "Current on Payments", "Behind on Payments", "Short Sale Needed"]
        },
        {
          label: "Annual Property Taxes",
          key: "propertyTaxes" as keyof FormData,
          type: "input",
          placeholder: "$0,000"
        },
        {
          label: "HOA Fees (if applicable)",
          key: "hoaFees" as keyof FormData,
          type: "input",
          placeholder: "$000/month or N/A"
        },
        {
          label: "Required Disclosures (Select all that apply)",
          key: "disclosures" as keyof FormData,
          type: "checkbox",
          options: [
            "Lead Paint (Pre-1978)", "Asbestos", "Previous Flooding", "Foundation Issues", 
            "Roof Problems", "HVAC Issues", "Plumbing Problems", "Electrical Issues", 
            "Pest/Termite History", "Environmental Hazards", "Neighborhood Noise", "None"
          ]
        }
      ]
    },
    {
      title: "Marketing Preferences",
      icon: <Megaphone className="w-6 h-6" />,
      fields: [
        {
          label: "How many photos do you have?",
          key: "photoCount" as keyof FormData,
          type: "select",
          options: ["None - Need Help", "1-5 Photos", "6-15 Photos", "16-25 Photos", "25+ Photos", "Professional Photos"]
        },
        {
          label: "Virtual Tour Available?",
          key: "virtualTour" as keyof FormData,
          type: "select",
          options: ["No", "Yes - Have Video", "Yes - 3D Tour", "Need Help Creating"]
        },
        {
          label: "Marketing Budget",
          key: "marketingBudget" as keyof FormData,
          type: "select",
          options: ["$0 - Free Only", "$1-100", "$101-300", "$301-500", "$500+"]
        },
        {
          label: "Target Buyers",
          key: "targetBuyers" as keyof FormData,
          type: "select",
          options: ["First-Time Buyers", "Families", "Retirees", "Investors", "Any Qualified Buyer"]
        },
        {
          label: "How quickly do you need to sell?",
          key: "urgencyLevel" as keyof FormData,
          type: "select",
          options: ["ASAP - Under 30 Days", "1-3 Months", "3-6 Months", "6+ Months", "No Rush"]
        }
      ]
    },
    {
      title: "Contact Information",
      icon: <User className="w-6 h-6" />,
      fields: [
        {
          label: "Full Name",
          key: "name" as keyof FormData,
          type: "input",
          placeholder: "Your full name"
        },
        {
          label: "Email Address",
          key: "email" as keyof FormData,
          type: "email",
          placeholder: "your.email@example.com"
        },
        {
          label: "Phone Number",
          key: "phone" as keyof FormData,
          type: "tel",
          placeholder: "(555) 123-4567"
        },
        {
          label: "Preferred Contact Method",
          key: "preferredContact" as keyof FormData,
          type: "select",
          options: ["Phone", "Email", "Text", "Any Method"]
        },
        {
          label: "Best Time to Contact",
          key: "availability" as keyof FormData,
          type: "select",
          options: ["Morning (8AM-12PM)", "Afternoon (12PM-5PM)", "Evening (5PM-8PM)", "Anytime", "Weekends Only"]
        }
      ]
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
          <div className="hidden md:flex items-center space-x-8">
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
              Contact & Support
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const renderHomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gradient-to-br from-blue-50 to-indigo-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Sell Your Home</span>{' '}
                  <span className="block text-blue-600 xl:inline">Without an Agent</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Save thousands in commission fees while maintaining full control of your home sale. Our platform provides all the tools and guidance you need to successfully sell your property.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={() => setShowSection('questionnaire')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Start Listing Your Home
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      onClick={() => setShowSection('marketing')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Explore Marketing Tools
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Beautiful home for sale"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Sell Without an Agent?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Take control of your home sale and keep more money in your pocket.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <DollarSign className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Save on Commission</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Keep the 5-6% commission typically paid to agents. On a $300,000 home, that's $15,000-$18,000 in savings.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Full Control</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Make all decisions about pricing, showings, negotiations, and timing without waiting for agent approval.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Flexible Schedule</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Schedule showings and open houses on your terms, when it's convenient for you and your family.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Direct Communication</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Communicate directly with potential buyers and their agents without information getting lost in translation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Platform Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Sell Successfully
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <Edit3 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">AI Listing Writer</h3>
                <p className="mt-2 text-base text-gray-500">
                  Generate compelling property descriptions with our AI-powered listing writer.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <Camera className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Photography Guide</h3>
                <p className="mt-2 text-base text-gray-500">
                  Professional tips and checklists to take stunning photos that sell your home.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <Share2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Marketing Tools</h3>
                <p className="mt-2 text-base text-gray-500">
                  Social media templates, flyers, and marketing strategies to reach more buyers.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Legal Guidance</h3>
                <p className="mt-2 text-base text-gray-500">
                  Access to legal documents, disclosure forms, and expert guidance throughout the process.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Pricing Tools</h3>
                <p className="mt-2 text-base text-gray-500">
                  Market analysis tools and pricing calculators to help you price competitively.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Expert Support</h3>
                <p className="mt-2 text-base text-gray-500">
                  Get help when you need it with email support, live chat, and optional consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">List your home today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Join thousands of homeowners who have successfully sold their properties without paying agent commissions.
          </p>
          <button
            onClick={() => setShowSection('questionnaire')}
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto transition-colors"
          >
            Start Your Listing
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderQuestionnaire = () => {
    if (isSubmitted) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Thank You!
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Your listing information has been submitted successfully. We'll review your details and contact you within 24 hours with next steps.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">What's Next?</h3>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Review and verify your listing details
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Professional photography consultation
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Marketing strategy development
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  List your home on major platforms
                </li>
              </ul>
            </div>
            <button
              onClick={() => setShowSection('home')}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      );
    }

    const currentStepData = steps[currentStep];
    const progress = ((currentStep + 1) / steps.length) * 100;

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                {currentStepData.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{currentStepData.title}</h2>
            </div>

            <div className="space-y-6">
              {currentStepData.fields.map((field, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  
                  {field.type === 'select' && (
                    <select
                      value={formData[field.key] as string}
                      onChange={(e) => updateFormData(field.key, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select an option...</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  )}

                  {field.type === 'input' && (
                    <input
                      type="text"
                      value={formData[field.key] as string}
                      onChange={(e) => updateFormData(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  )}

                  {field.type === 'email' && (
                    <input
                      type="email"
                      value={formData[field.key] as string}
                      onChange={(e) => updateFormData(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  )}

                  {field.type === 'tel' && (
                    <input
                      type="tel"
                      value={formData[field.key] as string}
                      onChange={(e) => updateFormData(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  )}

                  {field.type === 'textarea' && (
                    <textarea
                      value={formData[field.key] as string}
                      onChange={(e) => updateFormData(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  )}

                  {field.type === 'checkbox' && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {field.options?.map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={(formData[field.key] as string[])?.includes(option) || false}
                            onChange={(e) => {
                              const currentValues = (formData[field.key] as string[]) || [];
                              if (e.target.checked) {
                                updateFormData(field.key, [...currentValues, option]);
                              } else {
                                updateFormData(field.key, currentValues.filter(v => v !== option));
                              }
                            }}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentStep === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </button>

              {currentStep === steps.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Submit Listing
                  <Send className="h-4 w-4 ml-2" />
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMarketingHub = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Marketing Hub
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Professional tools to market your home effectively
          </p>
        </div>

        {/* Tool Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveMarketingTool('ai-writer')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeMarketingTool === 'ai-writer'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <Edit3 className="w-5 h-5 inline mr-2" />
            AI Listing Writer
          </button>
          <button
            onClick={() => setActiveMarketingTool('photography')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeMarketingTool === 'photography'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <Camera className="w-5 h-5 inline mr-2" />
            Photography Guide
          </button>
          <button
            onClick={() => setActiveMarketingTool('social-media')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeMarketingTool === 'social-media'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <Share2 className="w-5 h-5 inline mr-2" />
            Social Media
          </button>
          <button
            onClick={() => setActiveMarketingTool('flyers')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeMarketingTool === 'flyers'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <Printer className="w-5 h-5 inline mr-2" />
            Flyer Builder
          </button>
        </div>

        {/* AI Listing Writer */}
        {activeMarketingTool === 'ai-writer' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Listing Writer</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chat Interface */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-y-auto">
                  {chatMessages.length === 0 ? (
                    <div className="text-center text-gray-500 mt-20">
                      <Edit3 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p>Start a conversation to generate your listing description</p>
                      <p className="text-sm mt-2">Try: "Write a description for my 3BR/2BA home with updated kitchen"</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {chatMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.isUser
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-900'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p className="text-xs mt-1 opacity-70">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                    placeholder="Describe your property or ask for help..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={sendChatMessage}
                    disabled={!chatInput.trim() || isTyping}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tips and Examples */}
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Quick Tips</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Include key features like bedrooms, bathrooms, square footage</li>
                    <li>• Mention recent updates or renovations</li>
                    <li>• Highlight neighborhood amenities</li>
                    <li>• Use descriptive words that create emotion</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">Example Prompts</h3>
                  <div className="space-y-2 text-sm">
                    <button className="block w-full text-left p-2 bg-white rounded border hover:bg-gray-50 transition-colors">
                      "Write a description for my 4BR colonial with updated kitchen"
                    </button>
                    <button className="block w-full text-left p-2 bg-white rounded border hover:bg-gray-50 transition-colors">
                      "Create a listing for my downtown condo with city views"
                    </button>
                    <button className="block w-full text-left p-2 bg-white rounded border hover:bg-gray-50 transition-colors">
                      "Help me highlight my home's outdoor features"
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Photography Guide */}
        {activeMarketingTool === 'photography' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Photography Guide</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Essential Tips</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Use Natural Light</h4>
                      <p className="text-gray-600 text-sm">Shoot during golden hour or open all curtains and blinds for bright, natural lighting.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Declutter Every Room</h4>
                      <p className="text-gray-600 text-sm">Remove personal items, excess furniture, and clutter to make spaces look larger.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Shoot from Corners</h4>
                      <p className="text-gray-600 text-sm">Position yourself in room corners to capture the maximum amount of space.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Keep Camera Level</h4>
                      <p className="text-gray-600 text-sm">Use your phone's grid lines to ensure straight, professional-looking photos.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Shot Checklist</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    {[
                      'Front exterior with curb appeal',
                      'Back yard and outdoor spaces',
                      'Living room from multiple angles',
                      'Kitchen with all appliances visible',
                      'Master bedroom',
                      'Master bathroom',
                      'Additional bedrooms',
                      'Dining room or eating area',
                      'Unique features (fireplace, built-ins)',
                      'Garage or parking area'
                    ].map((item, index) => (
                      <label key={index} className="flex items-center space-x-3">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-900">Pro Tip</h4>
                  <p className="text-yellow-800 text-sm">Take 2-3 shots of each room from different angles. You can always delete extras, but you can't recreate the perfect lighting conditions.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Media Marketing */}
        {activeMarketingTool === 'social-media' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Social Media Marketing</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-3">Facebook</h3>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>• Post in local community groups</li>
                  <li>• Share in neighborhood pages</li>
                  <li>• Use Facebook Marketplace</li>
                  <li>• Create event for open house</li>
                  <li>• Boost posts to local audience</li>
                </ul>
              </div>

              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-900 mb-3">Instagram</h3>
                <ul className="text-sm text-pink-800 space-y-2">
                  <li>• Use local hashtags</li>
                  <li>• Post Stories with polls</li>
                  <li>• Share before/after photos</li>
                  <li>• Tag your location</li>
                  <li>• Partner with local influencers</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-3">Nextdoor</h3>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• Post in For Sale section</li>
                  <li>• Share in General discussions</li>
                  <li>• Ask neighbors to share</li>
                  <li>• Highlight neighborhood benefits</li>
                  <li>• Respond to comments quickly</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Sample Posts</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Facebook Post Template</h4>
                  <p className="text-sm text-gray-700 italic">
                    "🏡 OPEN HOUSE THIS WEEKEND! Beautiful 3BR/2BA home in [Neighborhood] featuring updated kitchen, hardwood floors, and large backyard. Perfect for families! Saturday 1-4pm. DM for details. #OpenHouse #[YourCity]RealEstate #FSBO"
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Instagram Caption</h4>
                  <p className="text-sm text-gray-700 italic">
                    "✨ Just listed! This stunning home won't last long. Swipe to see the gorgeous kitchen renovation and that backyard oasis! 📍 [Neighborhood] 💰 $XXX,XXX #JustListed #DreamHome #[YourCity] #FSBO #RealEstate"
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Flyer Builder */}
        {activeMarketingTool === 'flyers' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Flyer Builder</h2>
            
            <div className="text-center py-12">
              <Printer className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon!</h3>
              <p className="text-gray-600 mb-6">
                Our drag-and-drop flyer builder is currently in development. 
                In the meantime, here are some tips for creating effective flyers:
              </p>
              
              <div className="max-w-2xl mx-auto text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Essential Elements</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• High-quality main photo</li>
                      <li>• Property address</li>
                      <li>• Price and key details</li>
                      <li>• Your contact information</li>
                      <li>• QR code for virtual tour</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Design Tips</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Use high contrast colors</li>
                      <li>• Keep text large and readable</li>
                      <li>• Include tear-off tabs with info</li>
                      <li>• Use professional fonts</li>
                      <li>• Leave plenty of white space</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderFAQ = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Get answers to common questions about selling your home without an agent
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFAQCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFAQCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {expandedFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
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

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No questions found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderContactSupport = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact & Support
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Get the help you need to successfully sell your home
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Email Support */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Get detailed answers to your questions via email. We typically respond within 24 hours.
              </p>
              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  <strong>Response Time:</strong> 24 hours
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Best For:</strong> Detailed questions, document reviews
                </p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Send Email
                </button>
              </div>
            </div>
          </div>

          {/* Live Chat */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Chat with our support team in real-time for quick answers and guidance.
              </p>
              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  <strong>Hours:</strong> Mon-Fri 9AM-6PM EST
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Best For:</strong> Quick questions, immediate help
                </p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                  Start Chat
                </button>
              </div>
            </div>
          </div>

          {/* Phone Consultation */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Consultation</h3>
              <p className="text-gray-600 mb-4">
                Schedule a one-on-one consultation with a real estate expert.
              </p>
              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  <strong>Duration:</strong> 30-60 minutes
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Fee:</strong> $99 (credited toward services)
                </p>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Support Topics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">What We Can Help With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Pricing Strategy</h3>
              <p className="text-sm text-gray-600">Market analysis and competitive pricing guidance</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Legal Documents</h3>
              <p className="text-sm text-gray-600">Contract review and legal requirement guidance</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <Megaphone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Marketing Strategy</h3>
              <p className="text-sm text-gray-600">Listing optimization and promotion tactics</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <HandHeart className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Negotiation Help</h3>
              <p className="text-sm text-gray-600">Offer evaluation and negotiation strategies</p>
            </div>
          </div>
        </div>

        {/* Knowledge Base */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Knowledge Base</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Popular Articles</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Complete Guide to FSBO Selling
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    → How to Price Your Home Competitively
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Legal Requirements by State
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Photography Tips for Better Listings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Negotiating with Buyer's Agents
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Video Tutorials</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Setting Up Your First Listing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Conducting Safe Home Showings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Understanding Purchase Contracts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Closing Process Walkthrough
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Marketing Your Home on Social Media
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900">Need Immediate Help?</h3>
              <p className="text-red-800 text-sm mt-1">
                If you're facing an urgent situation with your home sale (contract disputes, closing issues, etc.), 
                call our emergency line: <strong>(555) 123-HELP</strong>
              </p>
              <p className="text-red-700 text-xs mt-2">
                Available 24/7 for active listings with urgent issues
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {renderNavigation()}
      
      {showSection === 'home' && renderHomePage()}
      {showSection === 'questionnaire' && renderQuestionnaire()}
      {showSection === 'marketing' && renderMarketingHub()}
      {showSection === 'faq' && renderFAQ()}
      {showSection === 'contact' && renderContactSupport()}
    </div>
  );
}

export default App;