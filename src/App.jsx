import React, { useState } from 'react';
import { 
  Menu, X, ChevronRight, Check, Star, ChevronLeft, 
  LayoutDashboard, FileText, Mail, Bookmark, Briefcase, Calendar,
  Search, Plus, Bold, Italic, Underline, List, Link as LinkIcon,
  RefreshCw, Sparkles, PieChart, ArrowRight, ArrowUpRight
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Reusable Components ---

const Badge = ({ children, className, variant = 'default' }) => {
  const variants = {
    default: "bg-white/10 border border-white/30 text-white backdrop-blur-sm",
    outline: "bg-white border border-gray-200 text-gray-800 shadow-sm",
  };
  return (
    <span className={cn("inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium", variants[variant], className)}>
      {children}
    </span>
  );
};

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-glow px-6 py-3",
    secondary: "bg-white text-gray-900 hover:bg-gray-50 shadow-soft px-6 py-3",
    outline: "border border-gray-200 bg-transparent hover:bg-gray-50 text-gray-700 px-4 py-2",
    ghost: "hover:bg-gray-50 hover:text-gray-900 px-4 py-2",
  };
  
  return (
    <button className={cn(baseStyle, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

// --- Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl bg-white/80 backdrop-blur-md border border-white/40 shadow-sm rounded-full z-50 px-6 py-3 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">CareerCraft</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About Us', 'Pricing', 'Testimoni', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="primary" className="py-2.5 px-6 bg-primary-light hover:bg-primary text-sm shadow-none">
            Sign Up Now
          </Button>
        </div>

        <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-2 md:hidden animate-in slide-in-from-top-2">
          {['Home', 'About Us', 'Pricing', 'Testimoni', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 p-3 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-2 mt-2 border-t border-gray-100">
            <Button variant="primary" className="w-full">Sign Up Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroMockup = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-16 perspective-1000">
      {/* Background Decorative Layers */}
      <div className="absolute -inset-4 bg-white/40 border border-white/50 rounded-3xl transform rotate-1 scale-105 -z-20 shadow-xl backdrop-blur-sm"></div>
      <div className="absolute -inset-2 bg-brand-bg/80 border border-white/60 rounded-2xl transform -rotate-1 scale-102 -z-10 shadow-lg backdrop-blur-md"></div>
      
      {/* Main App Window */}
      <div className="relative bg-white rounded-2xl shadow-float border border-gray-200 overflow-hidden flex h-[600px]">
        
        {/* Sidebar */}
        <div className="w-64 bg-brand-bg border-r border-gray-100 p-6 hidden md:flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shadow-sm">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-sm">CareerCraft</span>
          </div>
          
          <div className="flex flex-col gap-1.5">
            {[
              { icon: LayoutDashboard, label: 'Dashboard' },
              { icon: FileText, label: 'Resume', active: true },
              { icon: Mail, label: 'Cover Letter' },
              { icon: Bookmark, label: 'Saved Job' },
              { icon: Briefcase, label: 'Applied Job' },
              { icon: Calendar, label: 'Interview Scheduled' },
            ].map((item, i) => (
              <div key={i} className={cn("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-colors", item.active ? "bg-brand-sidebar text-brand-sidebarActive" : "text-gray-500 hover:bg-gray-100")}>
                <item.icon className="w-4 h-4" />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Header */}
          <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="hover:text-gray-700 cursor-pointer">Dashboard</span> <span className="text-gray-300">/</span>
              <span className="hover:text-gray-700 cursor-pointer">Resume</span> <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-medium">Resume 001</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search" className="bg-gray-50 border border-gray-200 rounded-md pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow w-48" />
              </div>
              <button className="bg-brand-buttonDark text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-blue-900 transition-colors shadow-sm">
                <Plus className="w-4 h-4" /> <span className="hidden sm:inline">Create New Resume</span>
              </button>
            </div>
          </div>

          {/* Sub Header */}
          <div className="flex items-center gap-8 px-6 pt-4 border-b border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-500 pb-4 cursor-pointer hover:text-gray-700 transition-colors">
              <ChevronLeft className="w-4 h-4" /> Create Resume
            </div>
            <div className="flex gap-8">
              <div className="text-sm font-medium text-brand-sidebarActive border-b-2 border-brand-sidebarActive pb-4 cursor-pointer">Fill the Form</div>
              <div className="text-sm font-medium text-gray-400 pb-4 hover:text-gray-600 cursor-pointer transition-colors">Design</div>
              <div className="text-sm font-medium text-gray-400 pb-4 hover:text-gray-600 cursor-pointer transition-colors">Export</div>
            </div>
          </div>

          {/* Workspace Split */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left Pane: Form */}
            <div className="w-full lg:w-1/2 border-r border-gray-100 p-6 overflow-y-auto">
              {/* Stepper */}
              <div className="flex items-center justify-between mb-8">
                {[
                  { label: 'Personal Information', active: true, step: 1 },
                  { label: 'Experience', step: 2 },
                  { label: 'Education', step: 3 },
                  { label: 'Skills', step: 4 },
                  { label: 'Certificate', step: 5 },
                ].map((s, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center gap-2 relative group cursor-pointer">
                      <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium z-10 transition-colors", s.active ? "bg-brand-sidebarActive text-white shadow-sm" : "bg-white border border-gray-200 text-gray-400 group-hover:border-gray-300")}>
                        {s.step}
                      </div>
                      <span className={cn("text-[10px] absolute top-8 whitespace-nowrap transition-colors", s.active ? "text-gray-900 font-medium" : "text-gray-400 group-hover:text-gray-600")}>{s.label}</span>
                    </div>
                    {i < 4 && <div className="flex-1 h-px bg-gray-100 mx-2"></div>}
                  </React.Fragment>
                ))}
              </div>

              {/* Form Fields */}
              <div className="space-y-6 mt-12">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-600">First name</label>
                    <input type="text" defaultValue="Noah" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-600">Last name</label>
                    <input type="text" defaultValue="Sebastian" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-600">Job Title</label>
                  <input type="text" defaultValue="UI/UX Designer" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-600">Personal Summary</label>
                  <div className="border border-gray-200 rounded-md bg-brand-bg overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 transition-shadow">
                    <div className="flex items-center gap-2 p-2 border-b border-gray-200 bg-white">
                      <button className="p-1 hover:bg-gray-100 rounded text-gray-600 transition-colors"><Bold className="w-4 h-4" /></button>
                      <button className="p-1 hover:bg-gray-100 rounded text-gray-600 transition-colors"><Italic className="w-4 h-4" /></button>
                      <button className="p-1 hover:bg-gray-100 rounded text-gray-600 transition-colors"><Underline className="w-4 h-4" /></button>
                      <div className="w-px h-4 bg-gray-200 mx-1"></div>
                      <button className="p-1 hover:bg-gray-100 rounded text-gray-600 transition-colors"><List className="w-4 h-4" /></button>
                      <button className="p-1 hover:bg-gray-100 rounded text-gray-600 transition-colors"><LinkIcon className="w-4 h-4" /></button>
                    </div>
                    <textarea 
                      className="w-full h-32 p-3 text-sm bg-transparent resize-none focus:outline-none text-gray-700 leading-relaxed"
                      defaultValue="UI/UX Designer with 5+ years of experience creating intuitive, user-focused digital interfaces for web and mobile platforms. Skilled in wireframing, prototyping, and user research to craft seamless experiences."
                    />
                    <div className="flex justify-between items-center p-2 bg-white border-t border-gray-100">
                       <span className="text-xs text-gray-400 font-medium">418/1200</span>
                       <button className="bg-brand-aiPurple text-white text-xs px-3 py-1.5 rounded flex items-center gap-1.5 hover:bg-primary transition-colors shadow-sm">
                         Rewrite with AI <Sparkles className="w-3 h-3" />
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Pane: Preview */}
            <div className="hidden lg:flex w-1/2 bg-gray-50 p-6 flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-900">Preview Resume</span>
                <span className="text-xs font-medium text-brand-aiPurple bg-brand-aiPurple/10 px-3 py-1 rounded-full border border-brand-aiPurple/20">Auto-saved 20 mins ago</span>
              </div>
              
              {/* A4 Document */}
              <div className="flex-1 bg-white border border-gray-200 shadow-sm rounded-sm p-8 mx-auto w-full max-w-md overflow-hidden relative">
                <h1 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-1">Noah Sebastian</h1>
                <h2 className="text-sm text-gray-500 mb-4 font-medium">UI/UX Designer</h2>
                <p className="text-[10px] text-gray-700 leading-relaxed mb-6">
                  UI/UX Designer with 5+ years of experience creating intuitive, user-focused digital interfaces for web and mobile platforms. Skilled in wireframing, prototyping, and user research to craft seamless experiences. Proficient in design tools like Figma, Adobe XD, Sketch, and InVision. Experienced in collaborating with cross-functional teams to translate business requirements into functional, visually appealing designs.
                </p>
                
                {/* Skeletons */}
                <div className="space-y-5">
                  <div className="space-y-2.5">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-2 bg-gray-100 rounded w-full"></div>
                    <div className="h-2 bg-gray-100 rounded w-full"></div>
                    <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  </div>
                </div>
                
                {/* Subtle gradient overlay at bottom to indicate more content */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating AI Cards (Absolute positioned over the mockup) */}
        
        {/* Left Floating Card - AI Suggestion */}
        <div className="absolute top-1/3 -left-12 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-300 hidden xl:block">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2 text-brand-dark font-medium text-sm">
              <Sparkles className="w-4 h-4 text-primary" /> AI Suggestion
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors"><X className="w-4 h-4" /></button>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            I am a passionate and detail-oriented UI/UX Designer with expertise in wireframing, prototyping, and creating seamless user interfaces. My design approach is rooted in user-centered practices...
          </p>
          <div className="text-right text-[10px] text-primary font-bold mb-3">284/1200</div>
          <div className="flex gap-2">
            <button className="flex-1 border border-gray-200 text-gray-600 text-xs py-2 rounded-lg flex justify-center items-center gap-1.5 hover:bg-gray-50 transition-colors font-medium">
              Refresh <RefreshCw className="w-3 h-3" />
            </button>
            <button className="flex-1 bg-brand-aiPurple text-white text-xs py-2 rounded-lg hover:bg-primary transition-colors font-medium shadow-sm">
              Use Suggestion
            </button>
          </div>
        </div>

        {/* Right Floating Card - AI Score */}
        <div className="absolute top-1/4 -right-16 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-20 transform rotate-2 hover:rotate-0 transition-transform duration-300 hidden xl:block">
           <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2 text-brand-dark font-medium text-sm">
              <PieChart className="w-4 h-4 text-primary" /> AI Score Analyzation
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors"><X className="w-4 h-4" /></button>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            {/* Fake Donut Chart */}
            <div className="relative w-20 h-20 rounded-full border-8 border-purple-50 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-8 border-brand-aiPurple border-t-transparent border-l-transparent transform rotate-45"></div>
              <span className="text-brand-dark font-bold text-lg">70%</span>
            </div>
            
            <div className="flex-1">
              <p className="text-[10px] text-gray-500 mb-2 leading-tight">of your text "UI/UX Designer" shows signs of AI Generation</p>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px]">
                  <span className="flex items-center gap-1.5 text-gray-600"><span className="w-2 h-2 rounded-sm bg-brand-aiPurple"></span> AI Generated</span>
                  <span className="font-medium text-gray-900">25%</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="flex items-center gap-1.5 text-gray-600"><span className="w-2 h-2 rounded-sm bg-purple-200"></span> Paraphrased AI</span>
                  <span className="font-medium text-gray-900">25%</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="flex items-center gap-1.5 text-gray-600"><span className="w-2 h-2 rounded-sm bg-gray-200"></span> Human Generated</span>
                  <span className="font-medium text-gray-900">25%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 border border-gray-200 text-gray-600 text-xs py-2 rounded-lg flex justify-center items-center gap-1.5 hover:bg-gray-50 transition-colors font-medium">
              Refresh <RefreshCw className="w-3 h-3" />
            </button>
            <button className="flex-1 bg-brand-aiPurple text-white text-xs py-2 rounded-lg hover:bg-primary transition-colors font-medium shadow-sm">
              Get the Score
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 z-0 bg-blue-50/50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <Badge className="mb-8 border-white/50 bg-white/30 text-gray-800 shadow-sm backdrop-blur-md">
          <span className="text-accent font-bold mr-2 uppercase text-xs">Top #1</span>
          <span className="text-sm font-medium">AI for Resume Builder</span>
        </Badge>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.15] max-w-4xl mb-6">
          Build Resume in One Click <br className="hidden md:block" /> with AI effortlessly
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
          Transform the way you create your resume with AI. In just one click, you can build a polished, professional resume in record time.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button variant="primary" className="w-full sm:w-auto px-8 py-3.5 text-base">Get Started Now</Button>
          <Button variant="secondary" className="w-full sm:w-auto px-8 py-3.5 text-base border border-gray-100">Free Trial Now</Button>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
};

const Partners = () => {
  const partners = ['ChatGPT', 'Google Gemini', 'Deepseek', 'Perplexity', 'Claude', 'Leonardo AI'];
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <Badge variant="outline" className="mb-10 text-gray-900 font-semibold border-gray-200 shadow-sm px-6 py-2">Our Trusted Partner</Badge>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
          {partners.map((partner, i) => (
            <div key={i} className="text-xl md:text-2xl font-bold text-gray-500 grayscale hover:grayscale-0 hover:text-gray-900 transition-all duration-300 cursor-pointer">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about-us" className="py-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">
        <Badge variant="outline" className="mb-8 text-gray-900 font-semibold border-gray-200 shadow-sm px-6 py-2">About Us</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-normal text-gray-900 leading-[1.4]">
          With our AI-powered tool, you can create a professional resume quickly, simply, and stress-free. Whether you're just starting your career, <span className="text-gray-400">exploring new opportunities, or ready to take it to the next level, our platform guides you every step.</span>
        </h2>
      </div>
    </section>
  );
};

const FeatureSplit = ({ badge, title, description, imageContent, reverse = false, bgClass = "bg-brand-bg" }) => {
  return (
    <section className={cn("py-24", bgClass)}>
      <div className="container mx-auto px-4">
        <div className={cn("flex flex-col lg:flex-row items-center gap-16 lg:gap-24", reverse ? "lg:flex-row-reverse" : "")}>
          
          {/* Image/Mockup Side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {imageContent}
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <Badge variant="outline" className="mb-6 text-gray-700 border-gray-200 shadow-sm">{badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 leading-[1.3] whitespace-pre-line">
              {title}
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              {description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const features = [
    { icon: Sparkles, title: "Build Resume in Minutes", desc: "Create an professional resume in few minutes effortlessly", color: "bg-gradient-to-br from-[#8E9AFC] to-[#AEB7FD]" },
    { icon: FileText, title: "Upload Existing Resume", desc: "Upload your current resume to enchance or update it with AI", color: "bg-gradient-to-br from-[#65DF77] to-[#8CEE91]" },
    { icon: Sparkles, title: "AI Suggestion", desc: "Instantly evaluate resume with AI feedback", color: "bg-gradient-to-br from-[#8E9AFC] to-[#AEB7FD]" },
    { icon: LinkIcon, title: "Import from Linkedin", desc: "Upload your current resume performs and what to improve", color: "bg-gradient-to-br from-[#65DF77] to-[#8CEE91]" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <Badge variant="outline" className="mb-8 text-gray-900 font-semibold border-gray-200 shadow-sm px-6 py-2">Services</Badge>
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 text-center mb-6 leading-tight">
          Create Impressive Resumes.<br/>Secure Your Dream Job Sooner
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-2xl mb-16 leading-relaxed">
          Build an AI-powered resume that showcases your strengths, saves you time, and increases your chances of securing your dream job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-24">
          {features.map((f, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-[0_12px_44px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 transform hover:-translate-y-1">
              <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white shadow-sm", f.color)}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Laptop Mockup */}
        <div className="w-full max-w-5xl bg-white rounded-[40px] p-4 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
             <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 rounded-3xl overflow-hidden relative flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" alt="Laptop showing app" className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                {/* Fake UI on screen */}
                <div className="absolute w-[75%] h-[65%] bg-[#111827] rounded-t-xl bottom-[10%] shadow-2xl border border-gray-700/50 overflow-hidden flex">
                    <div className="w-1/4 border-r border-gray-800 p-4 hidden sm:block bg-[#1F2937]">
                      <div className="w-full h-4 bg-gray-700 rounded mb-6"></div>
                      <div className="space-y-3">
                        <div className="w-3/4 h-3 bg-gray-700 rounded"></div>
                        <div className="w-5/6 h-3 bg-gray-700 rounded"></div>
                        <div className="w-2/3 h-3 bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1 p-6 bg-[#111827]">
                      <div className="w-1/3 h-6 bg-gray-800 rounded mb-8"></div>
                      <div className="flex gap-6">
                          <div className="w-2/3 h-40 bg-gray-800 rounded-lg border border-gray-700 p-4">
                            <div className="w-1/2 h-4 bg-gray-700 rounded mb-4"></div>
                            <div className="w-full h-2 bg-gray-700 rounded mb-2"></div>
                            <div className="w-5/6 h-2 bg-gray-700 rounded mb-2"></div>
                            <div className="w-full h-2 bg-gray-700 rounded"></div>
                          </div>
                          <div className="w-1/3 h-48 bg-white rounded-lg shadow-lg p-3 opacity-90">
                            <div className="w-1/2 h-3 bg-gray-200 rounded mb-4"></div>
                            <div className="space-y-2">
                              <div className="w-full h-1.5 bg-gray-100 rounded"></div>
                              <div className="w-full h-1.5 bg-gray-100 rounded"></div>
                              <div className="w-4/5 h-1.5 bg-gray-100 rounded"></div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

const Templates = () => {
  const templates = [
    { name: "ATS Friendly Resume", users: "20,032", color: "bg-[#626BEE]", popular: true },
    { name: "Minimalist Focus Resume", users: "20,032", color: "bg-[#5F7372]" },
    { name: "Creative Profile Resume", users: "20,032", color: "bg-[#FA8C8A]" },
    { name: "Bold Impact Resume", users: "20,032", color: "bg-[#89B172]" },
    { name: "Tech Friendly Resume", users: "20,032", color: "bg-[#4C34E0]" },
  ];

  return (
    <section className="py-24 bg-[#F8F8F8] border-t border-white shadow-[0_4px_4px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <Badge variant="outline" className="mb-8 text-gray-900 font-semibold border-gray-200 bg-white shadow-sm px-6 py-2">Resume Templates</Badge>
        <h2 className="text-4xl md:text-[42px] font-medium text-gray-900 text-center mb-6 max-w-3xl leading-tight">
          Choose a Template and Build Your Resume in Minutes
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-3xl mb-16 leading-relaxed">
          Choose from professional resume templates, fill in your details, and have a polished resume ready in minutes perfect for quick, hassle-free job applications
        </p>

        <div className="w-full bg-white rounded-[24px] p-8 shadow-[0_4px_35px_rgba(0,0,0,0.03)] border border-gray-50 max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-medium text-gray-900">Popular Templates</h3>
            <a href="#" className="text-primary hover:text-primary-dark font-medium flex items-center gap-1 text-sm transition-colors">
              See More Templates <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            {templates.map((t, i) => (
              <div key={i} className={cn("min-w-[260px] rounded-t-2xl p-5 pt-6 flex flex-col relative overflow-hidden group cursor-pointer", t.color)}>
                {t.popular && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full font-medium tracking-wider z-10">
                    Most Popular
                  </div>
                )}
                <h4 className="text-white font-medium text-lg mb-2 w-3/4 leading-tight">{t.name}</h4>
                <p className="text-white/60 text-xs mb-6">Selected by {t.users} user</p>
                
                {/* Fake Document Preview */}
                <div className="mt-auto bg-white rounded-t-lg shadow-sm h-48 w-full p-4 flex flex-col gap-2 opacity-95 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                   <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
                   <div className="w-1/3 h-2 bg-gray-100 rounded mb-2"></div>
                   <div className="w-full h-1.5 bg-gray-100 rounded"></div>
                   <div className="w-full h-1.5 bg-gray-100 rounded"></div>
                   <div className="w-4/5 h-1.5 bg-gray-100 rounded mb-2"></div>
                   <div className="w-1/4 h-2 bg-gray-200 rounded"></div>
                   <div className="w-full h-12 bg-gray-50 border border-gray-100 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section id="testimoni" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <Badge variant="outline" className="mb-8 text-gray-900 font-semibold border-gray-200 bg-white shadow-sm px-6 py-2">Testimonial</Badge>
        <h2 className="text-3xl md:text-[36px] font-medium text-gray-900 mb-16">What they say about us</h2>

        <div className="bg-white rounded-[32px] p-6 shadow-[0_12px_45px_-12px_rgba(0,0,0,0.06)] border border-gray-100 max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center">
          
          {/* Image Side */}
          <div className="w-full md:w-[40%] relative">
            <div className="bg-[#E7E6FC] rounded-3xl aspect-[4/4.5] overflow-hidden relative flex items-end justify-center pb-0">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="User" className="w-full h-[95%] object-cover object-top" />
               
               {/* Floating Badge */}
               <div className="absolute bottom-6 bg-black/40 backdrop-blur-md border border-white/20 rounded-full py-2 px-4 flex items-center gap-3 shadow-lg">
                 <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-blue-100 border-2 border-white z-20 overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="user" /></div>
                    <div className="w-7 h-7 rounded-full bg-pink-100 border-2 border-white z-10 overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="user" /></div>
                    <div className="w-7 h-7 rounded-full bg-green-100 border-2 border-white z-0 overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="user" /></div>
                 </div>
                 <span className="text-white text-xs font-medium">800+ people are joined</span>
               </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-[60%] pr-4 md:pr-8 py-8">
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-xl md:text-[22px] text-gray-800 leading-relaxed mb-8">
              "The Resume AI Builder has made crafting my resume so much easier! The dashboard is super user-friendly, and the AI suggestions really helped me highlight my skills and experience. A must-have tool for anyone looking to stand out!"
            </p>
            <p className="text-gray-500 mb-8 font-medium">- Samantha R., Senior Marketing</p>
            
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "What is Careercraft and how does it work?",
      a: "Careercraft is an AI-based app/website that helps users create resumes quickly and professionally. Users only need to fill in basic information (personal data, education, work experience, skills, etc.), and the system will assist in structuring the resume, suggesting relevant keywords, and generating a ready-to-download resume document.",
      open: true
    },
    { q: "Can I finish my resume in just a few minutes?", a: "Yes, our AI streamlines the process significantly, allowing you to generate a professional resume in minutes by simply filling out key details and letting the AI handle the formatting and phrasing." },
    { q: "What types of templates are available, and can I choose one based on my needs?", a: "We offer a wide variety of templates tailored for different industries and experience levels, from creative designs to strict ATS-friendly formats." },
    { q: "Are the resumes generated compatible with Applicant Tracking Systems (ATS)?", a: "Absolutely. All our templates are designed with ATS best practices in mind to ensure your resume gets parsed correctly by employer systems." },
    { q: "Can I upload an old resume (e.g., PDF or Word) and update it with Careercraft?", a: "Yes, you can import existing resumes. Our AI will extract the information and populate it into our builder, where you can then enhance it." },
    { q: "Can I add photos, portfolio links, or attachments besides text?", a: "Yes, depending on the template you choose, you can easily add professional headshots, links to your portfolio, LinkedIn, and other relevant media." },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-4 flex flex-col items-center max-w-[840px]">
        <Badge variant="outline" className="mb-8 text-gray-700 font-medium border-gray-200 bg-white shadow-sm px-6 py-2">Frequently Ask Question</Badge>
        <h2 className="text-3xl md:text-[36px] font-medium text-gray-900 mb-12 text-center">Get Your Questions Answered Quickly</h2>

        <div className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.03)] border border-gray-50 transition-all duration-300">
              <button 
                className="w-full flex justify-between items-center text-left group"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-gray-300 transition-colors">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-[17px] text-gray-800 font-medium">{faq.q}</span>
                </div>
                <span className="text-gray-400 font-bold ml-4 group-hover:text-gray-600 transition-colors">
                  {openIndex === i ? <X className="w-5 h-5"/> : <Plus className="w-5 h-5"/>}
                </span>
              </button>
              
              {openIndex === i && (
                <div className="mt-4 pl-12 pr-8 text-[15px] text-gray-500 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-blue-400 rounded-[40px] overflow-hidden relative shadow-lg">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
          <div className="relative z-10 py-20 px-4 flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-[38px] font-medium text-white mb-6 leading-tight">
              Get Expertly Crafted Resumes<br className="hidden md:block"/> Delivered Directly to Your Inbox!
            </h2>
            <p className="text-white/90 text-[15px] mb-10 max-w-2xl leading-relaxed">
              Discover cutting-edge AI solutions designed to elevate your business to new heights and drive sustainable growth in today's competitive landscape
            </p>
            
            <div className="w-full max-w-md bg-white rounded-full p-2 flex items-center shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="flex-1 bg-transparent px-6 py-3 text-gray-700 text-[15px] focus:outline-none"
              />
              <button className="w-10 h-10 rounded-full bg-[#9966FF] flex items-center justify-center text-white hover:bg-primary transition-colors shadow-sm">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8 overflow-hidden relative">
      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-8 h-8 bg-[#5F43FC] rounded-lg flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-[17px] font-bold text-gray-900 tracking-tight">CareerCraft</span>
            </div>
            <p className="text-[13px] text-gray-600 leading-relaxed max-w-sm">
              AI-powered resume builder helps you create personalized, professional resumes quickly. Leverage advanced technology to stand out with tailored content and optimized designs for your dream job.
            </p>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-medium text-gray-900 mb-6 text-[15px]">Product</h4>
            <ul className="space-y-4 text-[13px] text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-6 text-[15px]">Company</h4>
            <ul className="space-y-4 text-[13px] text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-6 text-[15px]">Contact</h4>
            <ul className="space-y-4 text-[13px] text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Live Chat</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11.5px] text-gray-500">2025 © CareerCraft Copyright. All Right Reserved</p>
          <div className="flex gap-8 text-[11.5px] text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Services</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
      
      {/* Huge Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-bold text-gray-100/40 leading-none select-none pointer-events-none whitespace-nowrap z-0 bg-gradient-to-b from-gray-200 to-transparent bg-clip-text text-transparent">
        CareerCraft
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <About />
        
        <FeatureSplit 
          badge="Features"
          title="Craft a Winning Resume&#10;with AI-Driven Suggestions"
          description="Professionally rewrites your resume summary to improve clarity, impact, and ATS optimization using refined language and relevant industry keywords."
          bgClass="bg-[#FDFAFA]"
          imageContent={
            // Mockup representation of the AI Suggestion floating card over a dark sky background
            <div className="relative w-full max-w-[534px] aspect-[4/3] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
               
               <div className="relative z-10 w-[85%] max-w-[389px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                 <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-brand-dark font-medium text-sm">
                    <Sparkles className="w-4 h-4 text-primary" /> AI Suggestion
                  </div>
                  <X className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                  I am a passionate and detail-oriented UI/UX Designer with expertise in wireframing, prototyping, and creating seamless user interfaces. My design approach is rooted in user-centered practices, ensuring every product is not only visually appealing but also intuitive and user-friendly.
                </p>
                <div className="text-right text-xs text-primary font-bold mb-4">284/1200</div>
                <div className="flex gap-3">
                  <button className="flex-1 border border-gray-200 text-gray-600 text-sm py-2.5 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-50 font-medium">
                    Refresh <RefreshCw className="w-4 h-4" />
                  </button>
                  <button className="flex-1 bg-brand-aiPurple text-white text-sm py-2.5 rounded-lg hover:bg-primary transition-colors font-medium shadow-sm">
                    Use Suggestion
                  </button>
                </div>
              </div>
            </div>
          }
        />

        <FeatureSplit 
          badge="Features"
          title="Elevate Your Resume with&#10;AI-Powered Scoring & Optimization"
          description="Provides detailed insights into your resume's quality by generating scores for both AI-generated and human-paraphrased content. It evaluates key elements such as language clarity, keyword usage, readability, and ATS compatibility."
          reverse={true}
          bgClass="bg-white"
          imageContent={
            // Mockup representation of the AI Score floating card over a light abstract background
            <div className="relative w-full max-w-[534px] aspect-[4/3] bg-blue-50/50 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center border border-gray-100">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
               
               <div className="relative z-10 w-[90%] max-w-[449px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                 <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-brand-dark font-medium text-sm">
                    <PieChart className="w-4 h-4 text-primary" /> AI Score Analyzation
                  </div>
                  <X className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-24 h-24 rounded-full border-8 border-purple-50 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-8 border-brand-aiPurple border-t-transparent border-l-transparent transform rotate-45"></div>
                    <span className="text-brand-dark font-bold text-xl">70%</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-3 leading-tight">of your text "UI/UX Designer" shows signs of AI Generation</p>
                    <div className="space-y-2.5">
                      <div className="flex justify-between text-xs">
                        <span className="flex items-center gap-2 text-gray-600"><span className="w-2.5 h-2.5 rounded-sm bg-brand-aiPurple"></span> AI Generated</span>
                        <span className="font-medium text-gray-900">25%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="flex items-center gap-2 text-gray-600"><span className="w-2.5 h-2.5 rounded-sm bg-purple-200"></span> Paraphrased AI</span>
                        <span className="font-medium text-gray-900">25%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="flex items-center gap-2 text-gray-600"><span className="w-2.5 h-2.5 rounded-sm bg-gray-100"></span> Human Generated</span>
                        <span className="font-medium text-gray-900">25%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 border border-gray-200 text-gray-600 text-sm py-2.5 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-50 font-medium">
                    Refresh <RefreshCw className="w-4 h-4" />
                  </button>
                  <button className="flex-1 bg-brand-aiPurple text-white text-sm py-2.5 rounded-lg hover:bg-primary transition-colors font-medium shadow-sm">
                    Get the Score
                  </button>
                </div>
              </div>
            </div>
          }
        />

        <Services />
        <Templates />
        <Testimonial />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
