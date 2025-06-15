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
    // ... (all FAQ items remain exactly the same)
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
    // ... (all steps remain exactly the same)
  ];

  // ... (rest of the component implementation remains exactly the same)
}

export default App;