import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Mail, Pin, TrendingUp, DollarSign, Search, Filter, Menu, X, ChevronRight, Instagram, Twitter, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

// --- Components ---

export const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost', size?: 'sm' | 'md' | 'lg' }) => {
  const variants = {
    primary: 'bg-[#E60023] text-white hover:bg-[#ad001a]',
    secondary: 'bg-black text-white hover:bg-gray-900',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
    ghost: 'text-black hover:bg-gray-100'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base font-semibold',
    lg: 'px-8 py-4 text-lg font-bold'
  };

  return (
    <button 
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Starter Kit', path: '/starter-kit' },
    { name: 'Strategy', path: '/strategy' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      scrolled ? 'bg-white/90 backdrop-blur-md py-3 border-gray-200' : 'bg-transparent py-5 border-transparent'
    )}>
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-[#E60023] p-1.5 rounded-lg">
              <Pin className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter uppercase">ClickCraft<span className="text-[#E60023]">Studio</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "text-sm font-medium hover:text-[#E60023] transition-colors",
                  location.pathname === link.path ? "text-[#E60023]" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/starter-kit">
              <Button size="sm">Get Free Kit</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-gray-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
        >
          <div className="px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-bold transition-colors",
                  location.pathname === link.path ? "text-[#E60023]" : "text-gray-800"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/starter-kit" onClick={() => setIsOpen(false)}>
              <Button className="w-full py-4">Get Free Kit</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 md:pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-6">
              <div className="bg-[#E60023] p-1.5 rounded-lg">
                <Pin className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">ClickCraft Studio</span>
            </Link>
            <p className="text-gray-400 max-w-md mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              We help students and side hustlers turn Pinterest traffic into a sustainable online income system. No ads, no experience, just proven strategies.
            </p>
            <div className="flex space-x-4 mb-8 md:mb-0">
              <a href="#" className="bg-white/10 p-2 md:p-2.5 rounded-full hover:bg-[#E60023] transition-colors"><Twitter className="w-4 h-4 md:w-5 md:h-5" /></a>
              <a href="#" className="bg-white/10 p-2 md:p-2.5 rounded-full hover:bg-[#E60023] transition-colors"><Instagram className="w-4 h-4 md:w-5 md:h-5" /></a>
              <a href="#" className="bg-white/10 p-2 md:p-2.5 rounded-full hover:bg-[#E60023] transition-colors"><Github className="w-4 h-4 md:w-5 md:h-5" /></a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-2">
            <div>
              <h4 className="text-sm md:text-base font-bold mb-4 md:mb-6 uppercase tracking-wider text-gray-300">Quick Links</h4>
              <ul className="space-y-2.5 md:space-y-3 text-gray-400 text-xs md:text-sm">
                <li><Link to="/blog" className="hover:text-white transition-colors">Latest Blog Posts</Link></li>
                <li><Link to="/starter-kit" className="hover:text-white transition-colors">Free Starter Kit</Link></li>
                <li><Link to="/strategy" className="hover:text-white transition-colors">Growth Strategy</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm md:text-base font-bold mb-4 md:mb-6 uppercase tracking-wider text-gray-300">Categories</h4>
              <ul className="space-y-2.5 md:space-y-3 text-gray-400 text-xs md:text-sm">
                <li><Link to="/blog?cat=Pinterest Marketing" className="hover:text-white transition-colors">Pinterest Marketing</Link></li>
                <li><Link to="/blog?cat=Make Money Online" className="hover:text-white transition-colors">Make Money Online</Link></li>
                <li><Link to="/blog?cat=Side Hustles" className="hover:text-white transition-colors">Side Hustles</Link></li>
                <li><Link to="/blog?cat=Affiliate Marketing" className="hover:text-white transition-colors">Affiliate Marketing</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs md:text-sm">
          <p>© 2026 ClickCraft Studio. All rights reserved. Built for conversion.</p>
        </div>
      </Container>
    </footer>
  );
};

export const EmailCapture = ({ title = "Get the Free Pinterest Growth Starter Kit", subtitle = "Join 5,000+ students earning online using our proven Pinterest systems." }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white" id="newsletter">
      <Container>
        <div className="bg-black rounded-[2rem] p-6 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#E60023] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-[#E60023] rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
              {subtitle}
            </p>

            {submitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 text-white"
              >
                <CheckCircle2 className="w-10 h-10 text-[#E60023] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Check your inbox!</h3>
                <p className="text-gray-300 text-sm">We've sent the starter kit to your email. Get ready to grow!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your best email" 
                  className="flex-1 px-5 py-3.5 md:px-6 md:py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E60023] transition-all text-sm md:text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" className="whitespace-nowrap py-3.5 md:py-4">
                  Send Me The Kit <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </form>
            )}
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-gray-500 text-[10px] md:text-sm uppercase tracking-widest font-bold">
              <div className="flex items-center"><CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 mr-2 text-[#E60023]" /> 10+ Pin Templates</div>
              <div className="flex items-center"><CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 mr-2 text-[#E60023]" /> SEO Checklist</div>
              <div className="flex items-center"><CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 mr-2 text-[#E60023]" /> Monetization Guide</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const BlogCard = ({ post }: { post: any }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/blog/${post.slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <img 
          src={post.thumbnail} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </Link>
      <div className="p-5 md:p-8">
        <div className="text-gray-400 text-[10px] md:text-xs font-medium mb-2 md:mb-3 uppercase tracking-widest">{post.date}</div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-[#E60023] transition-colors leading-tight">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-5 md:mb-6 line-clamp-2 text-xs md:text-base leading-relaxed">
          {post.excerpt}
        </p>
        <Link to={`/blog/${post.slug}`} className="inline-flex items-center font-bold text-xs md:text-sm uppercase tracking-wider text-black group-hover:text-[#E60023] transition-colors">
          Read Full Post <ChevronRight className="ml-1 w-3 h-3 md:w-4 md:h-4" />
        </Link>
      </div>
    </motion.div>
  );
};
