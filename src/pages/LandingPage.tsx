import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Download, ShieldCheck, Zap, Star, Target, Users } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/src/components/Layout';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 md:py-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#E60023]/10 text-[#E60023] text-sm font-bold uppercase tracking-widest mb-6">
              Free Download • Limited Time
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] text-black">
              PINTEREST GROWTH <br />
              <span className="text-[#E60023]">STARTER KIT.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              The exact blueprint we used to go from 0 to 100,000+ monthly viewers on Pinterest in less than 90 days. No ads, no fluff.
            </p>

            <div className="space-y-6 mb-12">
              {[
                "10 High-Converting Canva Pin Templates",
                "Pinterest SEO Keyword Masterlist",
                "30-Day Content Calendar for Beginners",
                "Monetization Roadmap (₹20k/mo Goal)"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="bg-[#E60023] rounded-full p-1">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-400 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-gray-500 font-medium">Joined by <span className="text-black font-bold">5,240+</span> students this month</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 bg-[#E60023] text-white font-black py-4 px-8 rounded-2xl rotate-12 shadow-xl">
              FREE!
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-[#E60023] rounded-full flex items-center justify-center mx-auto mb-8">
                  <Download className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Check Your Inbox!</h2>
                <p className="text-gray-400 mb-8">We've sent your Pinterest Growth Starter Kit. It should arrive in the next 2 minutes.</p>
                <Button className="w-full" onClick={() => setSubmitted(false)}>Back to Home</Button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Get Instant Access</h2>
                <p className="text-gray-400 mb-10">Enter your details below to receive the kit immediately in your inbox.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma" 
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E60023] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@email.com" 
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E60023] transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full py-5">
                    Download My Free Kit <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                  <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                    <ShieldCheck className="inline w-3 h-3 mr-1" /> No Spam. 100% Privacy Guaranteed.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 border-t border-gray-100">
          {[
            { icon: <Zap className="text-[#E60023]" />, title: "Fast Results", desc: "Start seeing traffic in as little as 7 days with our proven pinning schedule." },
            { icon: <Target className="text-[#E60023]" />, title: "Highly Targeted", desc: "Learn how to find the exact audience that wants to buy what you're offering." },
            { icon: <Users className="text-[#E60023]" />, title: "Community Support", desc: "Join our private group of 5,000+ students sharing their wins and tips." }
          ].map((feature, i) => (
            <div key={i} className="text-center p-8">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black mb-3 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
