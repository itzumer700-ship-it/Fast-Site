import { useState } from 'react';
import './App.css';

const services = [
  { icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", title: "Portfolio", desc: "Showcase your work with stunning portfolio sites", tag: "Budget-friendly" },
  { icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z", title: "Online Stores", desc: "Launch your e-commerce store with secure checkout", tag: "Affordable" },
  { icon: "M12 6.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm6.5 3V19a2 2 0 11-4 0v-4.5m-4.5 0h9m-9 0a2 2 0 00-2 2v4.5a2 2 0 002 2h6a2 2 0 002-2v-4.5a2 2 0 00-2-2h-6z", title: "Restaurant", desc: "Beautiful menus and online reservations", tag: "Customized" },
  { icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 1h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-1", title: "Business", desc: "Professional websites that drive growth", tag: "Tailored" }
];

const demos = [
  { title: "Luxora Photography", cat: "Photography", gradient: "from-violet-500 to-purple-600", url: "https://luxora.edgeone.app/" },
  { title: "Portfolio Website", cat: "Portfolio", gradient: "from-cyan-400 to-blue-500", url: "https://any-website-builder.edgeone.dev/" },
  { title: "Restaurant Website", cat: "Restaurant", gradient: "from-orange-500 to-red-500", url: "https://red-lantern.edgeone.dev/" },
  { title: "Online Clothing Store", cat: "Store", gradient: "from-pink-500 to-rose-600", url: "https://nova-drift.edgeone.dev/" },
  { title: "SkillForge Courses", cat: "Courses", gradient: "from-teal-400 to-emerald-500", url: "https://skillforge-course.edgeone.app/" },
  { title: "Lumina Dental", cat: "Dental", gradient: "from-sky-400 to-blue-500", url: "https://luminadental.edgeone.app/" }
];

const reviews = [
  { name: "Sarah Mitchell", text: "FastSite delivered my portfolio in just 24 hours. The design is absolutely stunning!", role: "Photographer" },
  { name: "Marcus Chen", text: "The online ordering system increased our delivery sales by 40%. Incredible work.", role: "Restaurant Owner" },
  { name: "Elena Rodriguez", text: "Professional, fast, and exactly what I envisioned. My store looks premium.", role: "Fashion Designer" }
];

// Instagram icon SVG
const InstagramIcon = () => (
  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="white" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const openDM = () => window.open('https://ig.me/m/fastsitewebsites', '_blank');

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans antialiased overflow-x-hidden">
      {/* Nav with shadow */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900" style={{ boxShadow: '0 4px 0 #1f2937' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src="/logo.png" alt="Logo" className="h-6 w-auto sm:h-8" />
              <span className="text-base sm:text-lg font-bold tracking-tight">FastSite</span>
            </div>

            <div className="hidden lg:flex items-center gap-6 md:gap-8">
              {['Services', 'Gallery', 'Process', 'Reviews'].map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-sm text-gray-400 hover:text-white font-medium">
                  {item}
                </button>
              ))}
              <button onClick={() => scrollTo('contact')} className="px-4 py-2 sm:px-5 sm:py-2 bg-violet-600 text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-violet-500" style={{ boxShadow: '0 4px 0 #5b21b6' }}>
                Get Started
              </button>
            </div>

            <button className="lg:hidden p-2 text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-gray-900 px-4 py-4 space-y-2 border-t-2 border-gray-800">
            {['Services', 'Gallery', 'Process', 'Reviews'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="block w-full text-left py-3 px-4 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg text-base font-medium">
                {item}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="w-full mt-3 py-3 px-5 bg-violet-600 text-white text-base font-bold rounded-lg">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero with geometric shapes - responsive */}
      <section className="min-h-screen flex items-center justify-center pt-14 sm:pt-16 bg-gray-950 relative overflow-hidden">
        {/* Desktop shapes - hidden on mobile for cleaner look */}
        <div className="hidden lg:block absolute top-20 left-10 w-24 h-24 border-4 border-violet-500/30 rotate-12"></div>
        <div className="hidden lg:block absolute top-32 right-20 w-20 h-20 border-4 border-pink-500/30 rotate-45"></div>
        <div className="hidden md:block absolute top-16 left-1/3 w-16 h-16 bg-cyan-500/10 rotate-12"></div>
        <div className="hidden lg:block absolute bottom-40 left-20 w-12 h-12 bg-violet-500/10 rotate-45"></div>
        <div className="hidden md:block absolute top-48 right-1/4 w-14 h-14 border-4 border-emerald-500/30 rounded-full"></div>
        <div className="hidden lg:block absolute bottom-32 right-16 w-28 h-28 border-4 border-orange-500/20 rotate-12"></div>
        <div className="hidden lg:block absolute bottom-1/4 left-1/3 w-10 h-10 border-4 border-violet-400/20 rounded-full"></div>
        <div className="hidden lg:block absolute top-20 right-1/3 w-6 h-6 bg-emerald-400/20 rotate-12"></div>
        <div className="hidden md:block absolute bottom-48 right-1/4 w-16 h-16 border-4 border-cyan-400/20 rotate-45"></div>
        <div className="hidden lg:block absolute bottom-20 left-10 w-14 h-14 border-4 border-pink-400/20 rotate-45"></div>
        <div className="hidden lg:block absolute top-40 left-1/2 w-10 h-10 bg-violet-500/15 rotate-12"></div>
        <div className="hidden md:block absolute bottom-60 right-1/3 w-12 h-12 border-4 border-orange-400/20 rotate-12"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 border-gray-700 bg-gray-900 mb-6 sm:mb-8 md:mb-10" style={{ boxShadow: '0 4px 0 #111827' }}>
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <span className="text-xs sm:text-sm text-gray-400 font-medium">24-Hour Delivery</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-4 sm:mb-6 md:mb-8 leading-tight">
            <span className="block">Websites That Convert</span>
            <span className="block mt-1 sm:mt-2 text-violet-400">Visitors Into Customers</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg sm:max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            Professional websites for every business. High quality sites designed to help you grow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12 sm:mb-16 md:mb-20">
            <button onClick={() => scrollTo('contact')} className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-white text-black font-bold rounded-xl hover:bg-gray-100 w-full sm:w-auto text-base sm:text-lg" style={{ boxShadow: '4px 4px 0 #000' }}>
              Start Your Project
            </button>
            <button onClick={() => scrollTo('gallery')} className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 border-2 border-gray-600 text-white font-bold rounded-xl hover:border-gray-500 w-full sm:w-auto text-base sm:text-lg" style={{ boxShadow: '4px 4px 0 #374151' }}>
              View Work
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-xs sm:max-w-md mx-auto">
            {[{ value: "500+", label: "Projects" }, { value: "24h", label: "Delivery" }, { value: "100%", label: "Satisfaction" }].map((stat, i) => (
              <div key={i} className="text-center p-3 sm:p-4 bg-gray-900 rounded-xl" style={{ boxShadow: '0 4px 0 #1f2937' }}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">{stat.value}</div>
                <div className="text-xs sm:text-xs text-gray-500 uppercase tracking-widest mt-1 sm:mt-2 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 sm:py-16 md:py-24 bg-gray-950 relative overflow-hidden">
        <div className="hidden md:block absolute top-10 left-10 w-20 h-20 border-4 border-cyan-500/20 rotate-12"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-16 h-16 bg-pink-500/10 rotate-45"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm font-bold text-violet-400 uppercase tracking-widest mb-2 sm:mb-4">Services</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">What We Build</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gray-900 border-2 border-gray-800 hover:border-violet-500 cursor-pointer" style={{ boxShadow: '4px 4px 0 #1f2937' }}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gray-800 flex items-center justify-center mb-4 sm:mb-6" style={{ boxShadow: '3px 3px 0 #111827' }}>
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-violet-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{s.title}</h3>
                <p className="text-gray-500 mb-2 sm:mb-4 text-xs sm:text-sm leading-relaxed hidden sm:block">{s.desc}</p>
                <span className="text-xs sm:text-sm font-bold text-gray-600">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-12 sm:py-16 md:py-24 bg-gray-900 relative overflow-hidden">
        <div className="hidden md:block absolute top-20 right-10 w-24 h-24 border-4 border-violet-500/20 rotate-45"></div>
        <div className="hidden md:block absolute bottom-20 left-10 w-16 h-16 bg-cyan-500/10 rotate-12"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm font-bold text-violet-400 uppercase tracking-widest mb-2 sm:mb-4">Portfolio</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">Our Work</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {demos.map((d, i) => (
              <a key={i} href={d.url} target="_blank" rel="noopener noreferrer" className="block rounded-xl sm:rounded-2xl overflow-hidden bg-gray-800 border-2 border-gray-700 hover:border-cyan-400" style={{ boxShadow: '4px 4px 0 #1f2937' }}>
                <div className={`aspect-video sm:aspect-video bg-gradient-to-br ${d.gradient} p-4 sm:p-6 flex flex-col justify-between relative`}>
                  <span className="text-xs sm:text-sm font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-black/40 text-white w-fit border border-white/20">{d.cat}</span>
                  <div>
                    <div className="flex gap-2 mb-2 sm:mb-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/50"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/50"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/50"></div>
                    </div>
                    <div className="h-8 sm:h-14 bg-white/30 rounded-lg border-2 border-white/20"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-between bg-gray-900 border-t-2 border-gray-700">
                  <span className="text-sm sm:text-base font-bold text-gray-200">{d.title}</span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-800 flex items-center justify-center text-sm sm:text-lg" style={{ boxShadow: '2px 2px 0 #374151' }}>→</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-12 sm:py-16 md:py-24 bg-gray-950 relative overflow-hidden">
        <div className="hidden lg:block absolute top-20 left-20 w-20 h-20 border-4 border-pink-500/15 rotate-12"></div>
        <div className="hidden lg:block absolute bottom-20 right-20 w-14 h-14 bg-violet-500/10 rotate-45"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm font-bold text-violet-400 uppercase tracking-widest mb-2 sm:mb-4">Process</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[{ num: "01", title: "Contact", desc: "DM us on Instagram with your project details" }, { num: "02", title: "Preview", desc: "Get a free website preview within 24 hours" }, { num: "03", title: "Launch", desc: "Approve, pay, and we'll launch your site" }].map((step, i) => (
              <div key={i} className="text-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gray-900 border-2 border-gray-800" style={{ boxShadow: '4px 4px 0 #1f2937' }}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-violet-600 flex items-center justify-center text-sm sm:text-base md:text-lg font-black text-white mx-auto mb-4 sm:mb-6" style={{ boxShadow: '3px 3px 0 #5b21b6' }}>
                  {step.num}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-gray-500 font-medium text-sm sm:text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-12 sm:py-16 md:py-24 bg-gray-900 relative overflow-hidden">
        <div className="hidden md:block absolute top-10 right-10 w-16 h-16 border-4 border-emerald-500/15 rotate-45"></div>
        <div className="hidden md:block absolute bottom-10 left-20 w-12 h-12 bg-pink-500/10 rotate-12"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm font-bold text-violet-400 uppercase tracking-widest mb-2 sm:mb-4">Reviews</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">Client Feedback</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gray-800 border-2 border-gray-700" style={{ boxShadow: '4px 4px 0 #1f2937' }}>
                <div className="flex gap-1 mb-4 sm:mb-5">
                  {[1,2,3,4,5].map(n => (
                    <svg key={n} className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-violet-600 flex items-center justify-center text-sm sm:text-lg font-black text-white" style={{ boxShadow: '3px 3px 0 #5b21b6' }}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-gray-200">{r.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gray-950 relative overflow-hidden">
        <div className="hidden md:block absolute top-20 left-10 w-24 h-24 border-4 border-orange-500/15 rotate-12"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-16 h-16 bg-pink-500/10 rotate-45"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <p className="text-xs sm:text-sm font-bold text-violet-400 uppercase tracking-widest mb-2 sm:mb-4">Contact</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">Let's Build Your Website</h2>
              <p className="text-base sm:text-lg md:text-lg text-gray-500 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                Send us a DM on Instagram and we'll get back to you within 2 hours. Free consultation included!
              </p>

              <div className="space-y-3 sm:space-y-4">
                {["Free preview within 24 hours", "Unlimited revisions", "Money-back guarantee", "24/7 support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-900 border-2 border-gray-800" style={{ boxShadow: '3px 3px 0 #1f2937' }}>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500 flex items-center justify-center text-black text-xs sm:text-sm font-bold">✓</div>
                    <span className="text-sm sm:text-base font-medium text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gray-900 border-2 border-gray-800 text-center" style={{ boxShadow: '6px 6px 0 #1f2937' }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-5 sm:mb-6 md:mb-8" style={{ boxShadow: '4px 4px 0 #000' }}>
                <InstagramIcon />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-2xl font-black mb-3 sm:mb-4">DM Us on Instagram</h3>
              <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
                Send us a direct message and let's discuss your project.
              </p>
              <button onClick={openDM} className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 text-sm sm:text-base md:text-lg" style={{ boxShadow: '4px 4px 0 #000' }}>
                Message Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 md:py-12 border-t-4 border-gray-800 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src="/logo.png" alt="Logo" className="h-8 sm:h-10 w-auto" />
              <span className="text-lg sm:text-xl font-bold">FastSite</span>
            </div>

            <button onClick={openDM} className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white font-medium">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gray-800 flex items-center justify-center" style={{ boxShadow: '2px 2px 0 #374151' }}>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
              </div>
              <span className="text-sm sm:text-base font-medium">DM Us</span>
            </button>

            <p className="text-xs sm:text-base font-medium text-gray-600 text-center sm:text-right">High quality websites for every budget.</p>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 border-t-2 border-gray-800 text-center">
            <p className="text-xs sm:text-sm text-gray-700 font-medium">2024 FastSite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;