import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Download, ShieldCheck, Zap, Star, Target, Users } from 'lucide-react';
import { useState } from 'react';
import { Button, Container } from '@/src/components/Layout';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 md:py-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="inline-block py-1 px-3 md:py-1.5 md:px-4 rounded-full bg-[#E60023]/10 text-[#E60023] text-xs md:text-sm font-bold uppercase tracking-widest mb-6">
              Free Download • Limited Time
            </span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 leading-[0.95] md:leading-[0.9] text-black">
              PINTEREST GROWTH <br className="hidden sm:block" />
              <span className="text-[#E60023]">STARTER KIT.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed px-2 md:px-0">
              The exact blueprint we used to go from 0 to 100,000+ monthly viewers on Pinterest in less than 90 days. No ads, no fluff.
            </p>

            <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
              {[
                "10 High-Converting Canva Pin Templates",
                "Pinterest SEO Keyword Masterlist",
                "30-Day Content Calendar for Beginners",
                "Monetization Roadmap (₹20k/mo Goal)"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 md:space-x-4">
                  <div className="bg-[#E60023] rounded-full p-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="text-base md:text-lg font-bold text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4 p-5 md:p-6 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-100">
              <div className="flex -space-x-2 md:-space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" alt="User" />
                ))}
              </div>
              <div className="text-xs md:text-sm">
                <div className="flex text-yellow-400 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-current" />)}
                </div>
                <p className="text-gray-500 font-medium">Joined by <span className="text-black font-bold">5,240+</span> students this month</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 text-white shadow-2xl relative mt-8 lg:mt-0"
          >
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-[#E60023] text-white font-black py-3 px-6 md:py-4 md:px-8 rounded-xl md:rounded-2xl rotate-12 shadow-xl text-sm md:text-base">
              FREE!
            </div>

            {submitted ? (
              <div className="text-center py-8 md:py-12">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#E60023] rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                  <Download className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 uppercase tracking-tight">Check Your Inbox!</h2>
                <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">We've sent your Pinterest Growth Starter Kit. It should arrive in the next 2 minutes.</p>
                <Button className="w-full" onClick={() => setSubmitted(false)}>Back to Home</Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 uppercase tracking-tight">Get Instant Access</h2>
                <p className="text-gray-400 mb-8 md:mb-10 text-sm md:text-base">Enter your details below to receive the kit immediately in your inbox.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma" 
                      className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E60023] transition-all text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@email.com" 
                      className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E60023] transition-all text-sm md:text-base"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full py-4 md:py-5 text-sm md:text-base">
                    Download My Free Kit <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
                  </Button>
                  <p className="text-center text-[9px] md:text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                    <ShieldCheck className="inline w-3 h-3 mr-1" /> No Spam. 100% Privacy Guaranteed.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-12 md:py-20 border-t border-gray-100">
          {[
            { icon: <Zap className="text-[#E60023] w-6 h-6 md:w-8 md:h-8" />, title: "Fast Results", desc: "Start seeing traffic in as little as 7 days with our proven pinning schedule." },
            { icon: <Target className="text-[#E60023] w-6 h-6 md:w-8 md:h-8" />, title: "Highly Targeted", desc: "Learn how to find the exact audience that wants to buy what you're offering." },
            { icon: <Users className="text-[#E60023] w-6 h-6 md:w-8 md:h-8" />, title: "Community Support", desc: "Join our private group of 5,000+ students sharing their wins and tips." }
          ].map((feature, i) => (
            <div key={i} className="text-center p-6 md:p-8">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-5 md:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
