import { useState, useEffect } from 'react';
import './App.css';

// Icons as SVG components
const GlobeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const StoreIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const UtensilsIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm6.5 3V19a2 2 0 11-4 0v-4.5m-4.5 0h9m-9 0a2 2 0 00-2 2v4.5a2 2 0 002 2h6a2 2 0 002-2v-4.5a2 2 0 00-2-2h-6z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 1h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-1" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className="w-5 h-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const FileTextIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

// Service data - all websites for $99
const services = [
  {
    icon: <GlobeIcon />,
    title: "Portfolio Websites",
    description: "Showcase your work with stunning portfolio sites that impress clients and employers.",
    price: "$99",
    features: ["Responsive design", "SEO optimization", "Contact forms", "Fast delivery"]
  },
  {
    icon: <StoreIcon />,
    title: "Online Stores",
    description: "Launch your e-commerce store with beautiful product pages and secure checkout.",
    price: "$99",
    features: ["Product catalog", "Payment integration", "Order management", "Inventory tracking"]
  },
  {
    icon: <UtensilsIcon />,
    title: "Restaurant Sites",
    description: "Beautiful menus, online reservations, and delivery integration for your restaurant.",
    price: "$99",
    features: ["Menu display", "Online ordering", "Reservation system", "Social integration"]
  },
  {
    icon: <BriefcaseIcon />,
    title: "Business Websites",
    description: "Professional corporate websites that establish credibility and drive growth.",
    price: "$99",
    features: ["Brand identity", "Service pages", "Team profiles", "Lead generation"]
  }
];

const steps = [
  {
    number: "01",
    title: "Fill Out the Form",
    description: "Go to the Google Form and fill in the information about what website you want. Tell us your business type, style preferences, and any special features you need."
  },
  {
    number: "02",
    title: "Free Preview Delivery",
    description: "Within 24 hours, receive a free preview of your website. Review, request changes, and approve your design."
  },
  {
    number: "03",
    title: "Payment & Launch",
    description: "Once you're satisfied, complete your payment and we'll launch your site. Simple as that."
  }
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Photographer",
    content: "FastSite delivered my portfolio in just 24 hours. The design is absolutely stunning and my clients love it!",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Restaurant Owner",
    content: "The online ordering system they built increased our delivery sales by 40%. Incredible work at an unbeatable price.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Fashion Designer",
    content: "Professional, fast, and exactly what I envisioned. My online store looks premium and converts visitors into customers.",
    rating: 5
  }
];

const demoSites = [
  {
    title: "Portfolio Website",
    description: "Creative portfolio showcasing design work with smooth animations and modern layout",
    url: "https://any-website-builder.edgeone.dev/",
    category: "Portfolio"
  },
  {
    title: "Restaurant Website",
    description: "Elegant restaurant site with menu, ambiance photos, and reservation system",
    url: "https://red-lantern.edgeone.dev/",
    category: "Restaurant"
  },
  {
    title: "Online Clothing Store",
    description: "A premium clothing website offering the latest Gen-Z fashion trends and styles",
    url: "https://nova-drift.edgeone.dev/",
    category: "Store"
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const openGoogleForm = () => {
    window.open('https://forms.gle/JzqY3Ly7dzEPgdWf6', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'gallery', 'process', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(225,35%,5%)] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="FastSite Logo"
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl tracking-tight">FastSite</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className={`text-sm transition-colors ${activeSection === 'services' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`text-sm transition-colors ${activeSection === 'gallery' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className={`text-sm transition-colors ${activeSection === 'process' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`text-sm transition-colors ${activeSection === 'testimonials' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 grid-bg overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm text-gray-300">24-Hour Delivery Available</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block">Websites That</span>
            <span className="gradient-text">Convert Visitors</span>
            <span className="block">Into Customers</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Professional websites for any business — portfolios, stores, restaurants, and small businesses.
            <span className="text-white font-semibold"> All websites just $99.</span> Free preview before payment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="group w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-semibold text-lg transition-all hover:scale-105 glow"
            >
              Start Your Project
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="group w-full sm:w-auto px-8 py-4 border border-white/30 hover:border-white hover:bg-white/10 rounded-xl font-semibold text-lg transition-all"
            >
              View Demo Sites
              <ArrowUpRightIcon />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-500">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">24h</div>
              <div className="text-sm text-gray-500">Avg. Delivery</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">$99</div>
              <div className="text-sm text-gray-500">Any Website</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gray-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-white text-sm font-semibold tracking-wider uppercase mb-4 block">Our Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              All Websites Just <span className="gradient-text">$99</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From portfolios to online stores, we create websites that help your business grow. All packages include free preview before payment.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-[hsl(225,30%,8%)] border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 card-hover"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-black transition-colors">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                {/* Price */}
                <div className="text-3xl font-bold text-white mb-4">{service.price}</div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircleIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none glow-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Gallery Section */}
      <section id="gallery" className="py-20 sm:py-32 bg-[hsl(225,30%,3%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-white text-sm font-semibold tracking-wider uppercase mb-4 block">Live Demos</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              See Our <span className="gradient-text">Work in Action</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Click on any demo below to explore real websites we've created for our clients.
            </p>
          </div>

          {/* Demo Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {demoSites.map((site, index) => (
              <a
                key={index}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[hsl(225,30%,8%)] border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 card-hover">
                  {/* Preview Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-[hsl(225,30%,12%)] to-[hsl(225,30%,6%)] flex items-center justify-center overflow-hidden">
                    <img
                      src="/demo-preview.png"
                      alt={site.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 text-white text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">{site.category}</span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-white transition-colors">{site.title}</h3>
                      <ArrowUpRightIcon />
                    </div>
                    <p className="text-sm text-gray-400">{site.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-white hover:bg-white/10 rounded-xl font-medium transition-all"
            >
              Get Your Custom Website
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-white text-sm font-semibold tracking-wider uppercase mb-4 block">How It Works</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Three Simple <span className="gradient-text">Steps</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Getting your website is easier than you think. We handle the complexity so you can focus on your business.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-white/30 via-white to-white/30"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Number */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-[hsl(225,35%,5%)] border-2 border-white mb-6 z-10">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 mt-20">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-[hsl(225,30%,8%)] border border-white/10">
              <div className="p-3 rounded-lg bg-white/10 text-white">
                <ZapIcon />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Lightning Fast</h4>
                <p className="text-sm text-gray-400">Most projects delivered within 24 hours. We work fast without compromising quality.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-xl bg-[hsl(225,30%,8%)] border border-white/10">
              <div className="p-3 rounded-lg bg-white/10 text-white">
                <EyeIcon />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Free Preview</h4>
                <p className="text-sm text-gray-400">See your website before you pay. Request changes until you're 100% satisfied.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-xl bg-[hsl(225,30%,8%)] border border-white/10">
              <div className="p-3 rounded-lg bg-white/10 text-white">
                <CheckCircleIcon />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Money Back Guarantee</h4>
                <p className="text-sm text-gray-400">Not happy with your website? We'll make it right or refund your payment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 sm:py-32 bg-[hsl(225,30%,3%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-white text-sm font-semibold tracking-wider uppercase mb-4 block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Loved by <span className="gradient-text">Our Clients</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with FastSite.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[hsl(225,30%,8%)] border border-white/10 hover:border-white/20 transition-all"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-white">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < testimonial.rating} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center text-black font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Content */}
            <div>
              <span className="text-white text-sm font-semibold tracking-wider uppercase mb-4 block">Get Started</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Your <span className="gradient-text">Website?</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out the form and we'll get back to you within 2 hours. Free consultation included!
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircleIcon />
                  </div>
                  <span className="text-gray-300">Free website preview within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircleIcon />
                  </div>
                  <span className="text-gray-300">Unlimited revisions until you're satisfied</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircleIcon />
                  </div>
                  <span className="text-gray-300">Money-back guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircleIcon />
                  </div>
                  <span className="text-gray-300">24/7 support after launch</span>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl"></div>
              <div className="relative p-8 rounded-3xl bg-[hsl(225,30%,8%)] border border-white/10 flex flex-col items-center justify-center min-h-[300px]">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <FileTextIcon />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Fill Out the Form</h3>
                <p className="text-gray-400 text-center mb-8 max-w-md">
                  Tell us about your website needs and we'll get back to you within 2 hours.
                </p>
                <button
                  onClick={openGoogleForm}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-semibold text-lg transition-all hover:scale-105 glow"
                >
                  <FileTextIcon />
                  Fill the Form
                  <ArrowUpRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="FastSite Logo"
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl tracking-tight">FastSite</span>
            </div>

            <p className="text-sm text-gray-500">
              Fast, professional websites starting at $99.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>2024 FastSite. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
