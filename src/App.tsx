import React, { useState } from 'react';
import { Home, ArrowRight, ArrowLeft, Send, CheckCircle, DollarSign, MapPin, User, Calendar, Building, Shield, CreditCard, Briefcase, TrendingUp, Star, Scale, FileText, Wrench, Megaphone, HelpCircle, ChevronDown, ChevronUp, Users, HandHeart, AlertTriangle, Calculator, Clock, Phone, Camera, PenTool, Share2, MessageSquare, Lightbulb, Target, Award, Zap, BookOpen, Video, Mail, HeadphonesIcon, Search, Filter, Eye, Heart, Bath, Bed, Square, Car, TreePine, Wifi, Dumbbell, Waves, Flame, Snowflake, Dog, Baby, Armchair as Wheelchair, ShoppingCart, Utensils, GraduationCap, Guitar as Hospital, Plane, Train, Bus, Fuel, ShoppingBag, Coffee, Music, Palette, Gamepad2, Book, Tv, Sofa, Shirt, Scissors, Hammer, Paintbrush, Drill, HardDrive as Screwdriver, Ruler, Clipboard, PlusCircle, MinusCircle, Edit3, Trash2, Copy, Download, Upload, Save, Settings, Bell, Lock, Unlock, Key, Globe, Smartphone, Tablet, Laptop, Monitor, Printer, Headphones, Speaker, Microscope as Microphone, Camera as CameraIcon, Video as VideoIcon, Image, Film, Music2, Radio, Disc, PlayCircle, PauseCircle, StopCircle, SkipBack, SkipForward, Volume2, VolumeX, Shuffle, Repeat, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Crop, Maximize, Minimize, MoreHorizontal, MoreVertical, Menu, X, Plus, Minus, Equal, Percent, Hash, AtSign, Ampersand, Asterisk, Slash, Slack as Backslash, Pipette as Pipe, Folder as Tilde, Car as Caret, UnderlineIcon as Underscore, Pen as Hyphen, Quote, Trophy as Apostrophe, GemIcon as Semicolon, Cone as Colon, Command as Comma, Percent as Period, Radiation as ExclamationMark, MailQuestion as QuestionMark, Parentheses as LeftParenthesis, Parentheses as RightParenthesis, Brackets as LeftBracket, Brackets as RightBracket, Braces as LeftBrace, Braces as RightBrace, Shapes as LessThan, Theater as GreaterThan } from 'lucide-react';

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

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface PropertyFormData {
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
  priceStrategy: string;
  interiorFeatures: string[];
  exteriorFeatures: string[];
  appliances: string[];
  listingTitle: string;
  propertyDescription: string;
  neighborhoodDescription: string;
  showingAvailability: string;
  showingInstructions: string;
  ownerFinancing: string;
  propertyDisclosures: string;
  marketingPreferences: string[];
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  preferredContact: string;
}

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSection, setShowSection] = useState<string>('home');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedFAQCategory, setSelectedFAQCategory] = useState<string>('all');
  const [selectedMarketingTool, setSelectedMarketingTool] = useState<string>('ai-writer');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [homeValue, setHomeValue] = useState<string>('500000');
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
  const [propertyFormData, setPropertyFormData] = useState<PropertyFormData>({
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
    priceStrategy: '',
    interiorFeatures: [],
    exteriorFeatures: [],
    appliances: [],
    listingTitle: '',
    propertyDescription: '',
    neighborhoodDescription: '',
    showingAvailability: '',
    showingInstructions: '',
    ownerFinancing: '',
    propertyDisclosures: '',
    marketingPreferences: [],
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    preferredContact: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [propertyCurrentStep, setPropertyCurrentStep] = useState(0);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updatePropertyFormData = (field: keyof PropertyFormData, value: string | string[]) => {
    setPropertyFormData(prev => ({ ...prev, [field]: value }));
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

  const nextPropertyStep = () => {
    if (propertyCurrentStep < propertySteps.length - 1) {
      setPropertyCurrentStep(propertyCurrentStep + 1);
    }
  };

  const prevPropertyStep = () => {
    if (propertyCurrentStep > 0) {
      setPropertyCurrentStep(propertyCurrentStep - 1);
    }
  };

  const handleSubmit = async () => {
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handlePropertySubmit = async () => {
    console.log('Property listing submitted:', propertyFormData);
    setIsSubmitted(true);
  };

  const generateAIContent = async () => {
    setIsGenerating(true);
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Stunning 3-bedroom, 2-bathroom home in the heart of downtown! This beautifully maintained property features an open-concept living space, modern kitchen with granite countertops, and a spacious master suite. The backyard oasis includes a deck perfect for entertaining. Located in a quiet neighborhood with excellent schools nearby. Move-in ready!",
        "Charming family home with character and modern updates throughout. Features include hardwood floors, updated kitchen, and a cozy fireplace in the living room. The large backyard is perfect for kids and pets. Great location with easy access to shopping, dining, and parks. Don't miss this opportunity!",
        "Beautiful home offering the perfect blend of comfort and style. This well-maintained property boasts spacious rooms, plenty of natural light, and a fantastic layout for both daily living and entertaining. The neighborhood is known for its friendly community and convenient location."
      ];
      setAiResponse(responses[Math.floor(Math.random() * responses.length)]);
      setIsGenerating(false);
    }, 2000);
  };

  // Calculate savings based on home value
  const calculateSavings = (value: number) => {
    const agentCommission = value * 0.06; // 6% total commission
    const ourFee = 2999; // Our flat fee
    return agentCommission - ourFee;
  };

  const savingsData = [
    { value: 500000, savings: calculateSavings(500000) },
    { value: 1000000, savings: calculateSavings(1000000) },
    { value: 2000000, savings: calculateSavings(2000000) }
  ];

  const eightSteps = [
    {
      number: 1,
      title: "Property Evaluation",
      description: "Get your home professionally evaluated and determine the right listing price",
      icon: <Calculator className="w-8 h-8" />,
      details: "Use our free CMA tool and pricing calculator to set the optimal price"
    },
    {
      number: 2,
      title: "Prepare Your Home",
      description: "Stage and prepare your property to attract maximum buyer interest",
      icon: <Home className="w-8 h-8" />,
      details: "Follow our staging checklist and home preparation guide"
    },
    {
      number: 3,
      title: "Professional Photography",
      description: "Capture stunning photos that showcase your home's best features",
      icon: <Camera className="w-8 h-8" />,
      details: "Use our photography guide or hire recommended professionals"
    },
    {
      number: 4,
      title: "Create Your Listing",
      description: "Build a compelling listing with our AI-powered description writer",
      icon: <PenTool className="w-8 h-8" />,
      details: "Generate professional descriptions and highlight key features"
    },
    {
      number: 5,
      title: "Market Your Property",
      description: "Distribute your listing across 100+ websites and social platforms",
      icon: <Megaphone className="w-8 h-8" />,
      details: "Automatic syndication to MLS, Zillow, Realtor.com, and more"
    },
    {
      number: 6,
      title: "Manage Showings",
      description: "Schedule and coordinate property viewings with potential buyers",
      icon: <Calendar className="w-8 h-8" />,
      details: "Use our showing scheduler and safety guidelines"
    },
    {
      number: 7,
      title: "Review Offers",
      description: "Evaluate and negotiate offers with our guidance and tools",
      icon: <FileText className="w-8 h-8" />,
      details: "Access contract templates and negotiation strategies"
    },
    {
      number: 8,
      title: "Close the Sale",
      description: "Complete the transaction with legal support and documentation",
      icon: <CheckCircle className="w-8 h-8" />,
      details: "Get help with contracts, inspections, and closing procedures"
    }
  ];

  const faqData: FAQItem[] = [
    {
      question: "What if the buyer has their own agent?",
      answer: "This is very common! When a buyer has their own agent, you'll typically pay a 2.5-3% commission to the buyer's agent at closing. This is still much less than the 6% total commission you'd pay with traditional real estate agents. Our platform helps you handle this situation professionally, including proper documentation and commission agreements.",
      category: "agents"
    },
    {
      question: "How do I determine the right price for my home?",
      answer: "We provide several tools to help you price your home competitively: a free Comparative Market Analysis (CMA) tool, access to recent sales data in your area, and pricing strategy guides. You can also opt for a professional appraisal. Our AI-powered pricing assistant analyzes local market trends to suggest optimal pricing strategies.",
      category: "pricing"
    },
    {
      question: "Is it safe to show my home to strangers?",
      answer: "Safety is our top priority. We provide comprehensive safety guidelines including: requiring pre-qualification of buyers, conducting showings during daylight hours, having a friend present during showings, using our secure showing scheduler that collects buyer information, and providing safety checklists. We also offer virtual tour options to pre-screen serious buyers.",
      category: "safety"
    },
    {
      question: "What legal documents do I need?",
      answer: "We provide access to all necessary legal documents including: purchase agreements, disclosure forms, property condition reports, and closing documents. Our legal resource center includes state-specific forms and requirements. We also offer optional legal review services and can connect you with real estate attorneys in your area.",
      category: "legal"
    },
    {
      question: "How long does it typically take to sell?",
      answer: "The average time to sell varies by market conditions, but FSBO homes typically sell within 30-90 days when priced correctly and marketed effectively. Our platform's wide distribution network and marketing tools help reduce time on market. We provide market timing insights and strategies to optimize your selling timeline.",
      category: "process"
    },
    {
      question: "What costs should I expect besides your fee?",
      answer: "Additional costs may include: buyer's agent commission (if applicable, 2.5-3%), closing costs (1-3% of sale price), any needed repairs or improvements, professional photography ($200-500), and potential legal fees. Our cost calculator helps you estimate total expenses upfront so there are no surprises.",
      category: "financial"
    },
    {
      question: "How do you market my property?",
      answer: "Your listing gets maximum exposure through: MLS syndication to 100+ websites (Zillow, Realtor.com, etc.), social media marketing campaigns, professional photography showcase, virtual tours and 3D walkthroughs, targeted online advertising, email marketing to our buyer network, and local community promotion.",
      category: "marketing"
    },
    {
      question: "Can I still use the MLS without an agent?",
      answer: "Yes! Our service includes MLS listing, which gives you the same exposure as traditional agent listings. Your property will appear on all major real estate websites and be visible to all agents and buyers. This is one of our key advantages - you get MLS access without paying full agent commissions.",
      category: "marketing"
    },
    {
      question: "What if I need help during the process?",
      answer: "We provide comprehensive support including: 24/7 customer service, live chat during business hours, phone consultations with real estate experts, step-by-step guides and video tutorials, legal document assistance, and access to our network of professionals (photographers, inspectors, attorneys) when needed.",
      category: "process"
    },
    {
      question: "How do I handle negotiations?",
      answer: "Our platform includes negotiation tools and guidance: offer evaluation checklists, counteroffer templates, market data to support your position, negotiation strategy guides, and access to experienced negotiators for consultation. We help you understand each offer component and make informed decisions.",
      category: "legal"
    },
    {
      question: "What happens if my home doesn't sell?",
      answer: "We're committed to your success. If your home doesn't sell within 90 days, we offer: free pricing consultation and adjustment recommendations, enhanced marketing package at no extra cost, additional professional photography if needed, and extended listing period. Our success rate is over 85% within the first 90 days.",
      category: "process"
    },
    {
      question: "Do you help with paperwork and contracts?",
      answer: "Absolutely! We provide: state-specific contract templates, guided contract completion, document review checklists, electronic signature capabilities, secure document storage, and optional legal review services. Our document center makes paperwork simple and ensures you don't miss important details.",
      category: "legal"
    },
    {
      question: "How do I prepare my home for showings?",
      answer: "We provide a comprehensive preparation guide including: decluttering and staging tips, minor repair recommendations, curb appeal enhancement ideas, professional cleaning checklists, and showing day preparation. Our staging guide has helped sellers increase their sale price by an average of 8%.",
      category: "process"
    },
    {
      question: "What makes your service different from other FSBO platforms?",
      answer: "Our advantages include: full MLS access and syndication, AI-powered listing optimization, comprehensive legal support, 24/7 customer service, professional marketing tools, safety-first showing protocols, transparent flat-fee pricing, and a 90-day success guarantee. We combine technology with human expertise.",
      category: "process"
    },
    {
      question: "Can I get professional photos taken?",
      answer: "Yes! We offer professional photography services through our network of certified photographers. Packages start at $199 and include: high-resolution photos, virtual staging options, drone photography (where permitted), twilight shots, and 3D virtual tours. Professional photos typically increase showing requests by 40%.",
      category: "marketing"
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
      title: "What type of financing are you looking for?",
      field: "financingType" as keyof FormData,
      options: [
        { value: "purchase", label: "Purchase a Home", icon: <Home className="w-6 h-6" /> },
        { value: "refinance", label: "Refinance", icon: <CreditCard className="w-6 h-6" /> },
        { value: "cashout", label: "Cash-Out Refinance", icon: <DollarSign className="w-6 h-6" /> },
        { value: "heloc", label: "Home Equity Line", icon: <TrendingUp className="w-6 h-6" /> }
      ]
    },
    {
      title: "When are you looking to close?",
      field: "timeline" as keyof FormData,
      options: [
        { value: "asap", label: "ASAP", icon: <Zap className="w-6 h-6" /> },
        { value: "30days", label: "Within 30 days", icon: <Calendar className="w-6 h-6" /> },
        { value: "60days", label: "Within 60 days", icon: <Calendar className="w-6 h-6" /> },
        { value: "90days", label: "Within 90 days", icon: <Calendar className="w-6 h-6" /> }
      ]
    }
  ];

  const propertySteps = [
    {
      title: "Property Details",
      description: "Tell us about your property",
      fields: [
        {
          label: "Property Type",
          field: "propertyType" as keyof PropertyFormData,
          type: "select",
          options: ["Single Family Home", "Townhouse", "Condo", "Multi-Family", "Land", "Commercial"]
        },
        {
          label: "Bedrooms",
          field: "bedrooms" as keyof PropertyFormData,
          type: "select",
          options: ["1", "2", "3", "4", "5", "6+"]
        },
        {
          label: "Bathrooms",
          field: "bathrooms" as keyof PropertyFormData,
          type: "select",
          options: ["1", "1.5", "2", "2.5", "3", "3.5", "4+"]
        },
        {
          label: "Square Footage",
          field: "squareFootage" as keyof PropertyFormData,
          type: "number",
          placeholder: "e.g., 2000"
        },
        {
          label: "Lot Size (acres)",
          field: "lotSize" as keyof PropertyFormData,
          type: "number",
          placeholder: "e.g., 0.25"
        },
        {
          label: "Year Built",
          field: "yearBuilt" as keyof PropertyFormData,
          type: "number",
          placeholder: "e.g., 1995"
        }
      ]
    },
    {
      title: "Location",
      description: "Where is your property located?",
      fields: [
        {
          label: "Street Address",
          field: "address" as keyof PropertyFormData,
          type: "text",
          placeholder: "123 Main Street"
        },
        {
          label: "City",
          field: "city" as keyof PropertyFormData,
          type: "text",
          placeholder: "Your City"
        },
        {
          label: "State",
          field: "state" as keyof PropertyFormData,
          type: "text",
          placeholder: "State"
        },
        {
          label: "ZIP Code",
          field: "zipCode" as keyof PropertyFormData,
          type: "text",
          placeholder: "12345"
        }
      ]
    },
    {
      title: "Pricing",
      description: "Set your listing price",
      fields: [
        {
          label: "Listing Price",
          field: "listingPrice" as keyof PropertyFormData,
          type: "number",
          placeholder: "e.g., 450000"
        },
        {
          label: "Pricing Strategy",
          field: "priceStrategy" as keyof PropertyFormData,
          type: "select",
          options: ["Market Value", "Priced to Sell", "Room for Negotiation", "Firm Price"]
        }
      ]
    },
    {
      title: "Interior Features",
      description: "What features does your home have?",
      fields: [
        {
          label: "Interior Features",
          field: "interiorFeatures" as keyof PropertyFormData,
          type: "checkbox",
          options: ["Hardwood Floors", "Granite Countertops", "Stainless Steel Appliances", "Fireplace", "Walk-in Closets", "Updated Kitchen", "Updated Bathrooms", "Crown Molding", "High Ceilings", "Open Floor Plan"]
        }
      ]
    },
    {
      title: "Exterior Features",
      description: "Tell us about the outside of your property",
      fields: [
        {
          label: "Exterior Features",
          field: "exteriorFeatures" as keyof PropertyFormData,
          type: "checkbox",
          options: ["Swimming Pool", "Hot Tub", "Deck/Patio", "Fenced Yard", "Garage", "Carport", "Garden", "Sprinkler System", "Outdoor Kitchen", "Workshop/Shed"]
        }
      ]
    },
    {
      title: "Appliances",
      description: "What appliances are included?",
      fields: [
        {
          label: "Included Appliances",
          field: "appliances" as keyof PropertyFormData,
          type: "checkbox",
          options: ["Refrigerator", "Dishwasher", "Washer", "Dryer", "Microwave", "Oven/Range", "Garbage Disposal", "Wine Cooler", "Freezer"]
        }
      ]
    },
    {
      title: "Listing Description",
      description: "Create compelling descriptions",
      fields: [
        {
          label: "Listing Title",
          field: "listingTitle" as keyof PropertyFormData,
          type: "text",
          placeholder: "e.g., Beautiful Family Home in Quiet Neighborhood"
        },
        {
          label: "Property Description",
          field: "propertyDescription" as keyof PropertyFormData,
          type: "textarea",
          placeholder: "Describe your property's best features, recent updates, and what makes it special..."
        },
        {
          label: "Neighborhood Description",
          field: "neighborhoodDescription" as keyof PropertyFormData,
          type: "textarea",
          placeholder: "Describe the neighborhood, nearby amenities, schools, shopping, etc..."
        }
      ]
    },
    {
      title: "Showing Information",
      description: "How do you want to handle showings?",
      fields: [
        {
          label: "Showing Availability",
          field: "showingAvailability" as keyof PropertyFormData,
          type: "select",
          options: ["Weekdays Only", "Weekends Only", "Weekdays and Weekends", "By Appointment Only", "Open House Scheduled"]
        },
        {
          label: "Special Showing Instructions",
          field: "showingInstructions" as keyof PropertyFormData,
          type: "textarea",
          placeholder: "Any special instructions for showings (e.g., remove shoes, pets present, etc.)"
        }
      ]
    },
    {
      title: "Financial & Legal",
      description: "Additional property information",
      fields: [
        {
          label: "Owner Financing Available?",
          field: "ownerFinancing" as keyof PropertyFormData,
          type: "select",
          options: ["No", "Yes - Qualified Buyers", "Yes - Flexible Terms"]
        },
        {
          label: "Property Disclosures",
          field: "propertyDisclosures" as keyof PropertyFormData,
          type: "textarea",
          placeholder: "Any known issues, recent repairs, or disclosures required by law..."
        }
      ]
    },
    {
      title: "Contact Information",
      description: "How should buyers contact you?",
      fields: [
        {
          label: "Contact Name",
          field: "contactName" as keyof PropertyFormData,
          type: "text",
          placeholder: "Your Name"
        },
        {
          label: "Email Address",
          field: "contactEmail" as keyof PropertyFormData,
          type: "email",
          placeholder: "your.email@example.com"
        },
        {
          label: "Phone Number",
          field: "contactPhone" as keyof PropertyFormData,
          type: "tel",
          placeholder: "(555) 123-4567"
        },
        {
          label: "Preferred Contact Method",
          field: "preferredContact" as keyof PropertyFormData,
          type: "select",
          options: ["Phone", "Email", "Text Message", "Any Method"]
        }
      ]
    }
  ];

  const renderNavigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
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
              onClick={() => setShowSection('list-property')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                showSection === 'list-property' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              List Your Property
            </button>
            <button
              onClick={() => setShowSection('marketing')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                showSection === 'marketing' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Marketing Tools
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
              onClick={() => setShowSection('contact')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                showSection === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Support
            </button>
          </div>
          <button
            onClick={() => setShowSection('list-property')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Sell Your Home
            <span className="text-blue-600"> Without an Agent</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Save thousands in commission fees while getting full MLS exposure and professional marketing support. 
            Join thousands of homeowners who've successfully sold their homes for more money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setShowSection('list-property')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              List Your Home - $2,999
            </button>
            <button
              onClick={() => setShowSection('how-it-works')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-blue-600"
            >
              See How It Works
            </button>
          </div>
        </div>

        {/* Savings Calculator */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See How Much You'll Save</h2>
            <p className="text-gray-600">Compare our flat fee to traditional agent commissions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {savingsData.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  ${item.value.toLocaleString()} Home
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  Traditional Agent: ${(item.value * 0.06).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  Our Fee: $2,999
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  Save ${item.savings.toLocaleString()}
                </div>
                <div className="text-sm text-green-700 font-medium">
                  {((item.savings / item.value) * 100).toFixed(1)}% savings
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-4 bg-blue-50 px-6 py-3 rounded-lg">
              <Calculator className="w-6 h-6 text-blue-600" />
              <div>
                <input
                  type="number"
                  value={homeValue}
                  onChange={(e) => setHomeValue(e.target.value)}
                  className="bg-white border border-gray-300 rounded px-3 py-1 w-32 text-center"
                  placeholder="Home value"
                />
                <div className="text-sm text-gray-600 mt-1">
                  Your savings: <span className="font-bold text-green-600">
                    ${calculateSavings(parseInt(homeValue) || 0).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Save Thousands</h3>
            <p className="text-gray-600">Pay only $2,999 instead of 6% commission. On a $500k home, that's $27,001 in savings!</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Full MLS Exposure</h3>
            <p className="text-gray-600">Your listing appears on 100+ websites including Zillow, Realtor.com, and all agent searches.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
            <p className="text-gray-600">Get professional guidance, legal documents, and marketing tools throughout the entire process.</p>
          </div>
        </div>

        {/* Success Stats */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Proven Results</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Sell within 90 days</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$27K</div>
              <div className="text-gray-600">Average savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Homes sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.8★</div>
              <div className="text-gray-600">Customer rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHowItWorks = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 8-step process makes selling your home simple, safe, and profitable
          </p>
        </div>

        <div className="space-y-12">
          {eightSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold">{step.number}</span>
                    </div>
                    <div className="text-white text-opacity-90 mb-2">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8">
                  <p className="text-lg text-gray-700 mb-4">{step.description}</p>
                  <p className="text-gray-600">{step.details}</p>
                  <div className="mt-6">
                    <div className="flex items-center text-sm text-blue-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Professional guidance included
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">Join thousands of homeowners who've saved money selling their homes</p>
            <button
              onClick={() => setShowSection('list-property')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              List Your Home Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPropertyListing = () => {
    if (isSubmitted) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Listing Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Your property listing has been submitted successfully. Our team will review it and have it live on the MLS within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setPropertyCurrentStep(0);
                setShowSection('home');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>
      );
    }

    const currentStepData = propertySteps[propertyCurrentStep];

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">List Your Property</h1>
              <span className="text-sm text-gray-500">
                Step {propertyCurrentStep + 1} of {propertySteps.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((propertyCurrentStep + 1) / propertySteps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentStepData.title}</h2>
              <p className="text-gray-600">{currentStepData.description}</p>
            </div>

            <div className="space-y-6">
              {currentStepData.fields.map((field, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  
                  {field.type === 'select' && (
                    <select
                      value={propertyFormData[field.field] as string}
                      onChange={(e) => updatePropertyFormData(field.field, e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select {field.label}</option>
                      {field.options?.map((option, optIndex) => (
                        <option key={optIndex} value={option}>{option}</option>
                      ))}
                    </select>
                  )}

                  {field.type === 'text' && (
                    <input
                      type="text"
                      value={propertyFormData[field.field] as string}
                      onChange={(e) => updatePropertyFormData(field.field, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}

                  {field.type === 'number' && (
                    <input
                      type="number"
                      value={propertyFormData[field.field] as string}
                      onChange={(e) => updatePropertyFormData(field.field, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}

                  {field.type === 'email' && (
                    <input
                      type="email"
                      value={propertyFormData[field.field] as string}
                      onChange={(e) => updatePropertyFormData(field.field, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}

                  {field.type === 'tel' && (
                    <input
                      type="tel"
                      value={propertyFormData[field.field] as string}
                      onChange={(e) => updatePropertyFormData(field.field, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}

                  {field.type === 'textarea' && (
                    <textarea
                      value={propertyFormData[field.field] as string}
                      onChange={(e) => updatePropertyFormData(field.field, e.target.value)}
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}

                  {field.type === 'checkbox' && (
                    <div className="grid grid-cols-2 gap-3">
                      {field.options?.map((option, optIndex) => (
                        <label key={optIndex} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={(propertyFormData[field.field] as string[])?.includes(option) || false}
                            onChange={(e) => {
                              const currentValues = (propertyFormData[field.field] as string[]) || [];
                              if (e.target.checked) {
                                updatePropertyFormData(field.field, [...currentValues, option]);
                              } else {
                                updatePropertyFormData(field.field, currentValues.filter(v => v !== option));
                              }
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
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
                onClick={prevPropertyStep}
                disabled={propertyCurrentStep === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  propertyCurrentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {propertyCurrentStep === propertySteps.length - 1 ? (
                <button
                  onClick={handlePropertySubmit}
                  className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  <span>Submit Listing</span>
                  <Send className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={nextPropertyStep}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMarketingTools = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Marketing Tools</h1>
          <p className="text-xl text-gray-600">Professional marketing tools to help sell your home faster</p>
        </div>

        {/* Tool Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { id: 'ai-writer', name: 'AI Listing Writer', icon: <PenTool className="w-5 h-5" /> },
            { id: 'photography', name: 'Photography Guide', icon: <Camera className="w-5 h-5" /> },
            { id: 'social-media', name: 'Social Media', icon: <Share2 className="w-5 h-5" /> },
            { id: 'flyers', name: 'Flyer Builder', icon: <FileText className="w-5 h-5" /> }
          ].map((tool) => (
            <button
              key={tool.id}
              onClick={() => setSelectedMarketingTool(tool.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedMarketingTool === tool.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tool.icon}
              <span>{tool.name}</span>
            </button>
          ))}
        </div>

        {/* AI Listing Writer */}
        {selectedMarketingTool === 'ai-writer' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <PenTool className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">AI Listing Writer</h2>
                <p className="text-gray-600">Generate compelling property descriptions with AI</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your property
                </label>
                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Tell me about your property: bedrooms, bathrooms, special features, location, recent updates, etc."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={generateAIContent}
                  disabled={isGenerating || !aiPrompt.trim()}
                  className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Lightbulb className="w-4 h-4" />
                      <span>Generate Description</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Generated Description
                </label>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-[200px]">
                  {aiResponse ? (
                    <div>
                      <p className="text-gray-800 leading-relaxed">{aiResponse}</p>
                      <div className="mt-4 flex space-x-2">
                        <button
                          onClick={() => navigator.clipboard.writeText(aiResponse)}
                          className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors flex items-center space-x-1"
                        >
                          <Copy className="w-4 h-4" />
                          <span>Copy</span>
                        </button>
                        <button
                          onClick={generateAIContent}
                          className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center space-x-1"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>Regenerate</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">Your AI-generated description will appear here...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Photography Guide */}
        {selectedMarketingTool === 'photography' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <Camera className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Photography Guide</h2>
                <p className="text-gray-600">Professional tips for stunning property photos</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Essential Shots Checklist</h3>
                <div className="space-y-3">
                  {[
                    'Front exterior with curb appeal',
                    'Back yard and outdoor spaces',
                    'Living room from multiple angles',
                    'Kitchen with all appliances visible',
                    'All bedrooms and bathrooms',
                    'Dining room or eating area',
                    'Special features (fireplace, built-ins)',
                    'Garage and storage areas'
                  ].map((shot, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{shot}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Pro Photography Tips</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Lighting</h4>
                    <p className="text-blue-800 text-sm">Shoot during golden hour or use bright, natural light. Turn on all lights and open curtains.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Staging</h4>
                    <p className="text-green-800 text-sm">Declutter completely, add fresh flowers, and arrange furniture to show space and flow.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Angles</h4>
                    <p className="text-purple-800 text-sm">Shoot from corners to show room size, keep camera level, and capture unique features.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Media Marketing */}
        {selectedMarketingTool === 'social-media' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-pink-100 p-3 rounded-full">
                <Share2 className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Social Media Marketing</h2>
                <p className="text-gray-600">Leverage social platforms to reach more buyers</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Facebook</h3>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>• Post in local community groups</li>
                  <li>• Share in neighborhood pages</li>
                  <li>• Use Facebook Marketplace</li>
                  <li>• Create event for open house</li>
                </ul>
              </div>
              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-pink-900 mb-3">Instagram</h3>
                <ul className="text-sm text-pink-800 space-y-2">
                  <li>• Post high-quality photos</li>
                  <li>• Use local hashtags</li>
                  <li>• Share Instagram Stories</li>
                  <li>• Tag location and features</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Nextdoor</h3>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• Post in neighborhood feed</li>
                  <li>• Share in For Sale section</li>
                  <li>• Ask neighbors to share</li>
                  <li>• Highlight local features</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Sample Social Media Posts</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-800 italic">"🏡 Beautiful 3BR/2BA home for sale in [Neighborhood]! Features updated kitchen, hardwood floors, and large backyard. Perfect for families! $XXX,XXX. DM for details. #ForSale #[YourCity] #DreamHome"</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-800 italic">"Open House this Saturday 1-4pm! Come see this stunning home with [key features]. Located in quiet neighborhood near [local amenities]. See you there! 📍[Address]"</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Flyer Builder */}
        {selectedMarketingTool === 'flyers' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-orange-100 p-3 rounded-full">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Flyer Builder</h2>
                <p className="text-gray-600">Create professional property flyers</p>
              </div>
            </div>

            <div className="text-center py-12">
              <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon!</h3>
              <p className="text-gray-600 mb-6">Our flyer builder tool is currently in development. In the meantime, here are some design tips:</p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Essential Elements</h4>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• High-quality main photo</li>
                    <li>• Property address and price</li>
                    <li>• Key features and room count</li>
                    <li>• Your contact information</li>
                    <li>• QR code for online listing</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-3">Design Tips</h4>
                  <ul className="text-green-800 space-y-1 text-sm">
                    <li>• Use clean, readable fonts</li>
                    <li>• Include 3-4 best photos</li>
                    <li>• Keep text concise and clear</li>
                    <li>• Use consistent colors</li>
                    <li>• Print on quality paper</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderFAQ = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Get answers to common questions about selling your home</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedFAQCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFAQCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
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
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
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

        {/* Contact CTA */}
        <div className="mt-12 bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-blue-100 mb-6">Our expert team is here to help you through every step of the process</p>
          <button
            onClick={() => setShowSection('contact')}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact & Support</h1>
          <p className="text-xl text-gray-600">We're here to help you succeed in selling your home</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Email Support */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Email Support</h3>
            <p className="text-gray-600 mb-4">Get detailed answers to your questions</p>
            <div className="text-sm text-gray-500 mb-4">
              Response time: Within 24 hours
            </div>
            <a
              href="mailto:support@sellmyhome.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
            >
              Email Us
            </a>
          </div>

          {/* Live Chat */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
            <div className="text-sm text-gray-500 mb-4">
              Available: Mon-Fri 9AM-6PM EST
            </div>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Start Chat
            </button>
          </div>

          {/* Phone Consultation */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Phone Consultation</h3>
            <p className="text-gray-600 mb-4">One-on-one guidance from our experts</p>
            <div className="text-sm text-gray-500 mb-2">
              30-minute consultation: $99
            </div>
            <div className="text-xs text-gray-400 mb-4">
              (Refunded if you list with us)
            </div>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Schedule Call
            </button>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Knowledge Base</h3>
              <p className="text-sm text-gray-600">Comprehensive guides and articles</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Video className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Video Tutorials</h3>
              <p className="text-sm text-gray-600">Step-by-step video guides</p>
            </div>
            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Community Forum</h3>
              <p className="text-sm text-gray-600">Connect with other sellers</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Emergency Support</h3>
              <p className="text-sm text-gray-600">Urgent issues during closing</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="How can we help?"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your question or concern..."
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {renderNavigation()}
      
      {showSection === 'home' && renderHome()}
      {showSection === 'how-it-works' && renderHowItWorks()}
      {showSection === 'list-property' && renderPropertyListing()}
      {showSection === 'marketing' && renderMarketingTools()}
      {showSection === 'faq' && renderFAQ()}
      {showSection === 'contact' && renderContact()}
    </div>
  );
}

export default App;