import { motion } from 'motion/react';
import { ArrowRight, Pin, TrendingUp, DollarSign, CheckCircle2, Play, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, BlogCard, EmailCapture } from '@/src/components/Layout';
import { BLOG_POSTS } from '@/src/content/blog';
import { cn } from '@/src/lib/utils';

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-5">
          <div className="grid grid-cols-6 gap-4 opacity-20">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-black rounded-xl"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#E60023]/10 text-[#E60023] text-sm font-bold uppercase tracking-widest mb-6">
              The Ultimate Pinterest Growth System
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-black">
              TURN CLICKS INTO <br />
              <span className="text-[#E60023]">REAL INCOME.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Stop scrolling, start earning. We show you how to leverage Pinterest's massive traffic to build a sustainable side hustle from India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/blog">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Learning Now <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to="/starter-kit">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get Free Pinterest Kit
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center space-x-2 font-bold text-xl"><CheckCircle2 className="text-[#E60023]" /> <span>No Ads Needed</span></div>
            <div className="flex items-center space-x-2 font-bold text-xl"><CheckCircle2 className="text-[#E60023]" /> <span>Zero Experience</span></div>
            <div className="flex items-center space-x-2 font-bold text-xl"><CheckCircle2 className="text-[#E60023]" /> <span>Proven Systems</span></div>
            <div className="flex items-center space-x-2 font-bold text-xl"><CheckCircle2 className="text-[#E60023]" /> <span>India Focused</span></div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">HOW IT WORKS</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our 3-step system to turn Pinterest into your primary income source.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Pin className="w-10 h-10 text-white" />,
                title: "Pinterest Growth",
                desc: "Master the algorithm and get 100k+ monthly views without spending a rupee on ads.",
                color: "bg-[#E60023]"
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-white" />,
                title: "Traffic Strategy",
                desc: "Learn how to funnel that massive traffic to your blog, affiliate links, or digital products.",
                color: "bg-black"
              },
              {
                icon: <DollarSign className="w-10 h-10 text-white" />,
                title: "Monetization",
                desc: "Implement proven income systems like affiliate marketing and AdSense to get paid daily.",
                color: "bg-[#E60023]"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 text-center"
              >
                <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg", item.color)}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tight">
                WHY CHOOSE <br />
                <span className="text-[#E60023]">CLICKCRAFT?</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Earn Online Without Investment", desc: "You don't need money to make money. Pinterest is free to use." },
                  { title: "Build Income as a Student", desc: "Manage your studies and your side hustle with just 1 hour a day." },
                  { title: "Consistent, Passive Traffic", desc: "Your pins work for you 24/7, even while you sleep." }
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="mt-1 bg-[#E60023] rounded-full p-1">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                      <p className="text-gray-400">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/starter-kit">
                  <Button size="lg">Get Started Free</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/10">
                <img 
                  src="https://picsum.photos/seed/income/800/800" 
                  alt="Income proof" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl text-black">
                <div className="text-4xl font-black mb-1">₹50,000+</div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Monthly Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">Latest Insights</h2>
              <p className="text-xl text-gray-600">Free guides to help you start your Pinterest journey today.</p>
            </div>
            <Link to="/blog">
              <Button variant="outline">View All Posts</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture />
    </div>
  );
}
