import { motion } from 'motion/react';
import { Pin, Calendar, ArrowRight, CheckCircle2, Map, Layout, Lightbulb } from 'lucide-react';
import { Button } from '@/src/components/Layout';

export default function StrategyPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-black text-white text-sm font-bold uppercase tracking-widest mb-6">
            The ClickCraft Blueprint
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
            OUR GROWTH <br />
            <span className="text-[#E60023]">STRATEGY.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't guess. We use a data-driven system to convert Pinterest curiosity into bank account reality.
          </p>
        </div>

        {/* Funnel Logic */}
        <section className="py-20 bg-gray-50 rounded-[3rem] px-8 md:px-16 mb-24">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase tracking-tight">The Conversion Funnel</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {[
              { step: "01", title: "Pinterest Pin", desc: "Curiosity-driven visual that stops the scroll.", icon: <Pin /> },
              { step: "02", title: "Blog Post", desc: "Valuable content that builds trust and authority.", icon: <Layout /> },
              { step: "03", title: "Email/CTA", desc: "Capture lead or direct to affiliate offer.", icon: <CheckCircle2 /> },
              { step: "04", title: "Income", desc: "Commission or product sale deposited.", icon: <ArrowRight /> }
            ].map((item, i) => (
              <div key={i} className="flex-1 text-center relative">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl text-[#E60023]">
                  {item.icon}
                </div>
                <div className="text-[#E60023] font-black text-sm mb-2">{item.step}</div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && <ArrowRight className="hidden md:block absolute top-10 -right-4 text-gray-200 w-8 h-8" />}
              </div>
            ))}
          </div>
        </section>

        {/* Content Plan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tight">30-Day Content Plan</h2>
            <div className="space-y-6">
              {[
                { week: "Week 1: Foundation", task: "Niche research, SEO profile setup, and first 10 boards." },
                { week: "Week 2: Content Creation", task: "Design 30 fresh pins in Canva and write 3 pillar blog posts." },
                { week: "Week 3: Scheduling", task: "Set up Tailwind or manual pinning (3x daily) and keyword optimization." },
                { week: "Week 4: Monetization", task: "Apply for affiliate programs and insert CTAs into existing content." }
              ].map((plan, i) => (
                <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-black text-[#E60023] uppercase tracking-widest text-xs mb-2">{plan.week}</h4>
                  <p className="font-bold text-gray-800">{plan.task}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tight">10 High-Click Pin Titles</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                "How I Earned ₹10,000 in 7 Days (No Ads)",
                "10 Side Hustles for Indian Students in 2026",
                "The Lazy Girl's Guide to Pinterest Income",
                "Stop Working 9-5: Start This Pinterest Hustle",
                "How to Get 100k Views on Pinterest (Fast)",
                "My Secret System for Passive Income in India",
                "Canva + Pinterest = ₹50,000/Month?",
                "5 Affiliate Programs That Pay Daily",
                "How to Start a Blog with Zero Experience",
                "Pinterest SEO: The Only Guide You Need"
              ].map((title, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border-l-4 border-[#E60023]">
                  <Lightbulb className="w-5 h-5 text-[#E60023] flex-shrink-0" />
                  <span className="font-bold text-gray-700">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-black rounded-[3rem] p-12 md:p-20 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase">Ready to Implement?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Don't let another month go by without building your income system. Get the full kit and start today.
          </p>
          <Button size="lg">Get the Starter Kit Now</Button>
        </div>
      </div>
    </div>
  );
}
