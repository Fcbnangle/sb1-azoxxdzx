import React, { useState } from 'react';
import { Home, ArrowRight, ArrowLeft, Send, CheckCircle, DollarSign, MapPin, User, Calendar, Building, Shield, CreditCard, Briefcase, TrendingUp, Star, Scale, FileText, Wrench, Megaphone, HelpCircle, ChevronDown, ChevronUp, Users, HandHeart, AlertTriangle, Calculator, Clock, Phone } from 'lucide-react';

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

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSection, setShowSection] = useState<string>('questionnaire');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedFAQCategory, setSelectedFAQCategory] = useState<string>('all');
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
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const faqData: FAQItem[] = [
    // Buyer Agent Concerns
    {
      question: "What if a buyer contacts me but they already have their own real estate agent?",
      answer: "This is completely normal and happens frequently! When a buyer has their own agent, you'll work with both the buyer and their agent in what's called a 'dual agency' or 'cooperative' transaction. The buyer's agent represents their interests, while you focus on getting the best deal for your property. Both agents typically split the commission (usually 2.5-3% each from the total 5-6% commission). You'll still save money compared to hiring a listing agent, and the transaction proceeds smoothly with professional representation on both sides.",
      category: "agents"
    },
    {
      question: "Do I have to pay the buyer's agent commission?",
      answer: "Yes, as the seller, you typically pay both the listing agent commission (if you have one) and the buyer's agent commission. This is standard practice and is usually built into your asking price. The total commission is typically 5-6% of the sale price, split between both agents. However, since you're selling FSBO, you only pay the buyer's agent (usually 2.5-3%), saving you the listing agent's portion.",
      category: "agents"
    },
    {
      question: "What if multiple buyers want my property and they all have different agents?",
      answer: "This is a great problem to have! When you receive multiple offers, you can choose the best one based on price, terms, financing strength, and closing timeline - regardless of which agents are involved. Each buyer's agent will submit their client's offer independently. You evaluate all offers and accept the one that works best for you. The winning buyer's agent gets the commission, and the others don't.",
      category: "agents"
    },
    {
      question: "Can I refuse to work with certain real estate agents?",
      answer: "While you have the right to choose who you work with, refusing to work with licensed agents without valid reasons could limit your buyer pool and potentially raise fair housing concerns. It's generally better to focus on the quality of the offer rather than the agent. However, if you've had negative experiences with a specific agent or they've been unprofessional, you can decline to work with them.",
      category: "agents"
    },
    {
      question: "What if an agent brings me a buyer but wants a higher commission?",
      answer: "Commission rates are negotiable, but be consistent with what you advertise. If you've stated 2.5% buyer's agent commission, stick to it unless the agent brings exceptional value (like a cash buyer or quick close). Some agents may try to negotiate higher rates, but you're not obligated to pay more than market rate. Having a clear commission policy upfront prevents these situations.",
      category: "agents"
    },

    // Legal & Documentation
    {
      question: "What legal documents do I need to sell my home myself?",
      answer: "Key documents include: Purchase Agreement/Contract, Property Disclosure Statement, Lead Paint Disclosure (for homes built before 1978), Title Documents, Deed, Settlement Statement (HUD-1), and any local/state required disclosures. Many of these can be obtained from your state's real estate commission website or through legal document services. Consider having a real estate attorney review important documents.",
      category: "legal"
    },
    {
      question: "Do I need a lawyer to sell FSBO?",
      answer: "While not always legally required, it's highly recommended to have a real estate attorney review your contracts and handle the closing process. Legal requirements vary by state - some states require attorney involvement while others don't. An attorney can help ensure all documents are properly prepared, review offers, and handle the closing process, typically costing $500-$1,500 but potentially saving you thousands in mistakes.",
      category: "legal"
    },
    {
      question: "What disclosures am I required to make to buyers?",
      answer: "Disclosure requirements vary by state but typically include: known structural issues, water damage, pest problems, environmental hazards, neighborhood nuisances, recent repairs or renovations, and any material facts that could affect the property's value. Always err on the side of over-disclosure to protect yourself legally. Check your state's specific requirements as failure to disclose can result in lawsuits.",
      category: "legal"
    },
    {
      question: "What happens if the buyer wants to back out after signing a contract?",
      answer: "Buyers can typically back out during contingency periods (inspection, financing, appraisal) without penalty. If they back out after contingencies are removed without valid reason, they may forfeit their earnest money deposit. Your contract should clearly outline contingency periods, deadlines, and consequences for backing out. Having a well-written contract with proper contingencies protects both parties.",
      category: "legal"
    },
    {
      question: "What if I'm sued after the sale for not disclosing something?",
      answer: "This is why proper disclosure is crucial. If you're sued for non-disclosure, having documentation that you disclosed all known issues is your best defense. Keep records of all disclosures, communications, and any repairs or inspections. Consider purchasing seller's insurance or having an attorney review your disclosures before listing. Most issues can be avoided with thorough, honest disclosure upfront.",
      category: "legal"
    },

    // Pricing & Market
    {
      question: "How do I price my home competitively without an agent's market analysis?",
      answer: "Research comparable sales (comps) in your area from the last 3-6 months using online tools like Zillow, Realtor.com, or your county assessor's website. Look for homes with similar square footage, bedrooms/bathrooms, lot size, and condition within a 1-mile radius. Consider getting a professional appraisal ($300-$500) or hiring a real estate agent for a one-time consultation ($200-$500) to provide a Comparative Market Analysis (CMA).",
      category: "pricing"
    },
    {
      question: "Should I price my home higher to leave room for negotiation?",
      answer: "Pricing slightly above market value (5-10%) can work in a seller's market, but overpricing can backfire by deterring buyers and causing your home to sit on the market longer. Homes that sit too long often sell for less than properly priced homes. In today's market with online price transparency, buyers are well-informed about values. Price competitively from the start to generate interest and potentially multiple offers.",
      category: "pricing"
    },
    {
      question: "What if my home doesn't appraise for the sale price?",
      answer: "If the appraisal comes in low, you have several options: 1) Lower the sale price to match the appraisal, 2) Meet the buyer halfway, 3) Ask the buyer to pay the difference in cash, 4) Challenge the appraisal with additional comps, or 5) Cancel the sale if terms can't be agreed upon. Most purchase contracts include an appraisal contingency that allows buyers to back out or renegotiate if the home doesn't appraise.",
      category: "pricing"
    },
    {
      question: "How do I handle multiple offers on my property?",
      answer: "Multiple offers are great! Review each offer carefully considering: purchase price, down payment amount, financing type (cash is strongest), closing timeline, contingencies, and buyer qualifications. You can accept the best offer, counter multiple offers, or ask for 'highest and best' final offers. Don't just go with the highest price - consider the overall strength and likelihood of closing.",
      category: "pricing"
    },

    // Process & Timeline
    {
      question: "How long does the FSBO selling process typically take?",
      answer: "The timeline varies but typically: Preparation and marketing (1-2 weeks), Finding a buyer (30-90 days depending on market conditions), Contract to closing (30-45 days). Total process usually takes 2-4 months. Factors affecting timeline include pricing, market conditions, home condition, financing type, and how quickly you respond to inquiries and showings.",
      category: "process"
    },
    {
      question: "What happens during the home inspection, and what if issues are found?",
      answer: "The buyer typically has 7-10 days to complete inspections after contract acceptance. If issues are found, buyers can: 1) Request repairs, 2) Ask for credits toward closing costs, 3) Renegotiate the price, or 4) Cancel the contract. You can agree to requests, counter-offer, or refuse and risk the buyer walking away. Major issues should be addressed, but don't feel obligated to fix every minor item.",
      category: "process"
    },
    {
      question: "Do I need to be present for showings and open houses?",
      answer: "It's generally better if you're not present during showings, as buyers feel more comfortable discussing the property freely. You can step out during scheduled showings or have a trusted friend/family member handle them. For open houses, consider having someone else host while you're away. If you must be present, stay in the background and let visitors explore freely.",
      category: "process"
    },
    {
      question: "What if no one is interested in my home after several weeks?",
      answer: "If your home isn't getting interest after 2-4 weeks, consider: 1) Reducing the price (most common issue), 2) Improving marketing photos and descriptions, 3) Increasing marketing efforts, 4) Making minor improvements or staging changes, 5) Reviewing feedback from showings, or 6) Consulting with a real estate professional. Price is usually the primary factor in lack of interest.",
      category: "process"
    },

    // Financial & Costs
    {
      question: "What costs should I expect when selling FSBO?",
      answer: "Typical FSBO costs include: Buyer's agent commission (2.5-3%), Title insurance and escrow fees (1-2%), Transfer taxes and recording fees (varies by location), Attorney fees ($500-$1,500), Home inspection repairs (varies), Staging and marketing costs ($500-$2,000), and Closing costs ($1,000-$3,000). Total costs typically range from 6-10% of sale price, compared to 8-12% with a listing agent.",
      category: "financial"
    },
    {
      question: "Can I negotiate the buyer's agent commission?",
      answer: "Yes, commission rates are negotiable, but be careful not to set them too low as it might discourage agents from showing your property to their clients. Standard buyer's agent commission is 2.5-3%. Offering slightly below market rate might work in a hot seller's market, but in a balanced or buyer's market, competitive commission rates help ensure maximum exposure to potential buyers.",
      category: "financial"
    },
    {
      question: "What if the buyer's financing falls through?",
      answer: "If financing falls through during the contingency period, the buyer can typically cancel without penalty and get their earnest money back. To minimize this risk: 1) Require pre-approval letters, 2) Ask about down payment source, 3) Consider backup offers, 4) Include strong financing contingency language, and 5) Stay in communication with the buyer's lender. Having a backup offer can help if the primary deal falls through.",
      category: "financial"
    },
    {
      question: "Should I accept a cash offer over a financed offer?",
      answer: "Cash offers are generally stronger because they: close faster (2-3 weeks vs 30-45 days), have no financing contingency risk, often waive appraisal contingencies, and provide more certainty. However, don't automatically accept a lower cash offer - evaluate the total package. A well-qualified financed buyer with a strong pre-approval might be worth considering if their offer is significantly higher.",
      category: "financial"
    },

    // Marketing & Exposure
    {
      question: "How do I get maximum exposure for my FSBO listing?",
      answer: "Maximize exposure through: Online listings on FSBO websites, Social media marketing, Yard signs and directional signs, Flyers and brochures, Word-of-mouth networking, Local newspaper ads, Craigslist and Facebook Marketplace, Open houses, and Consider paying for MLS access through flat-fee services. Professional photos and virtual tours significantly increase online engagement and showing requests.",
      category: "marketing"
    },
    {
      question: "Should I consider paying for MLS access?",
      answer: "Yes, MLS access can significantly increase your exposure since most buyers' agents search the MLS first. Flat-fee MLS services typically cost $100-$500 and get your listing on major real estate websites like Realtor.com and Zillow. This gives you the same online exposure as agent-listed properties while maintaining control of the sale process and saving on listing agent commission.",
      category: "marketing"
    },
    {
      question: "How important are professional photos for my listing?",
      answer: "Professional photos are crucial - listings with professional photos receive 118% more online views than those with amateur photos. Good photos are often the difference between getting showings or being ignored online. Invest $200-$500 in professional photography, including exterior shots, all rooms, and key features. Consider virtual tours or video walkthroughs for additional engagement.",
      category: "marketing"
    },
    {
      question: "What should I include in my listing description?",
      answer: "Include: Key features and upgrades, Room counts and square footage, Lot size and special features, Recent improvements, Neighborhood highlights, School information, Nearby amenities, and Unique selling points. Be honest and descriptive but avoid subjective terms like 'beautiful' or 'perfect.' Focus on facts and features that buyers search for online.",
      category: "marketing"
    },

    // Safety & Security
    {
      question: "How do I stay safe when showing my home to strangers?",
      answer: "Safety tips include: Always ask for buyer pre-qualification before showings, Require photo ID from all visitors, Have someone else present during showings, Meet buyers at the property (don't let them follow you), Keep personal valuables secured, Trust your instincts about visitors, Consider installing temporary security cameras, and Schedule showings during daylight hours when possible. Never show the property alone to unverified buyers.",
      category: "safety"
    },
    {
      question: "What personal information should I remove before showings?",
      answer: "Remove or secure: Personal photos, Mail and documents with personal information, Prescription medications, Jewelry and valuables, Computer passwords and financial documents, Children's information and schedules, Spare keys, and Personal calendars. Consider renting a storage unit for valuable items during the selling process. The goal is to depersonalize while maintaining security.",
      category: "safety"
    },
    {
      question: "How do I verify that potential buyers are legitimate?",
      answer: "Verify buyers by: Requiring pre-qualification letters from lenders, Asking for photo ID before showings, Getting contact information and verifying it, Having them sign a visitor log, Asking about their timeline and motivation, Checking references if they seem suspicious, and Trusting your instincts. Legitimate buyers understand these precautions and won't be offended by reasonable security measures.",
      category: "safety"
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

  // Navigation Menu
  const navigationMenu = (
    <div className="bg-white shadow-lg border-b-4 border-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {[
            { id: 'questionnaire', name: 'Home Financing', icon: <Home className="w-5 h-5" />, color: 'from-blue-500 to-purple-600' },
            { id: 'legal', name: 'Legal Forms', icon: <Scale className="w-5 h-5" />, color: 'from-green-500 to-teal-600' },
            { id: 'tools', name: 'Tools & Services', icon: <Wrench className="w-5 h-5" />, color: 'from-orange-500 to-red-600' },
            { id: 'marketing', name: 'Marketing Hub', icon: <Megaphone className="w-5 h-5" />, color: 'from-purple-500 to-pink-600' },
            { id: 'faqs', name: 'FAQs', icon: <HelpCircle className="w-5 h-5" />, color: 'from-indigo-500 to-blue-600' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setShowSection(section.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                showSection === section.id
                  ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {section.icon}
              <span className="hidden sm:inline">{section.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // FAQ Section
  if (showSection === 'faqs') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
        {navigationMenu}
        
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* FAQ Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common concerns about selling your home, working with agents, legal requirements, and more.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFAQCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedFAQCategory === category.id
                      ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Phone className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Still Have Questions?</h3>
            </div>
            <p className="text-blue-100 mb-6 text-lg">
              Can't find the answer you're looking for? We're here to help with personalized guidance.
            </p>
            <a 
              href="mailto:bruce.nangle@grarate.com" 
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="text-2xl">📧</span>
              Contact Bruce Nangle
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Other sections (Legal, Tools, Marketing) would go here
  if (showSection === 'legal') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
        {navigationMenu}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mb-6">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Legal Forms & Resources</h1>
            <p className="text-xl text-gray-600">Free/paid downloadable forms by state, contract templates, and legal guidance</p>
          </div>
          {/* Legal content would go here */}
        </div>
      </div>
    );
  }

  if (showSection === 'tools') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
        {navigationMenu}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6">
              <Wrench className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Tools & Services</h1>
            <p className="text-xl text-gray-600">Home evaluation, FSBO marketing kits, and professional services</p>
          </div>
          {/* Tools content would go here */}
        </div>
      </div>
    );
  }

  if (showSection === 'marketing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
        {navigationMenu}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6">
              <Megaphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Marketing Hub</h1>
            <p className="text-xl text-gray-600">Listing tools, photography tips, and marketing strategies</p>
          </div>
          {/* Marketing content would go here */}
        </div>
      </div>
    );
  }

  // Default: Home Financing Questionnaire
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {navigationMenu}
      
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