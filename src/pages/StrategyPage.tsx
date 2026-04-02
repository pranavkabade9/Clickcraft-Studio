import { motion } from 'motion/react';
import { Pin, Calendar, ArrowRight, CheckCircle2, Map, Layout, Lightbulb } from 'lucide-react';
import { Button, Container } from '@/src/components/Layout';

export default function StrategyPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block py-1 px-3 md:py-1.5 md:px-4 rounded-full bg-black text-white text-[10px] md:text-sm font-bold uppercase tracking-widest mb-6">
            The ClickCraft Blueprint
          </span>
          <h1 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter uppercase leading-[0.95] md:leading-[0.9]">
            OUR GROWTH <br className="hidden sm:block" />
            <span className="text-[#E60023]">STRATEGY.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            We don't guess. We use a data-driven system to convert Pinterest curiosity into bank account reality.
          </p>
        </div>

        {/* Funnel Logic */}
        <section className="py-12 md:py-20 bg-gray-50 rounded-[2rem] md:rounded-[3rem] px-6 md:px-16 mb-16 md:mb-24">
          <h2 className="text-2xl md:text-5xl font-black mb-10 md:mb-12 text-center uppercase tracking-tight">The Conversion Funnel</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 lg:gap-8">
            {[
              { step: "01", title: "Pinterest Pin", desc: "Curiosity-driven visual that stops the scroll.", icon: <Pin className="w-6 h-6 md:w-8 md:h-8" /> },
              { step: "02", title: "Blog Post", desc: "Valuable content that builds trust and authority.", icon: <Layout className="w-6 h-6 md:w-8 md:h-8" /> },
              { step: "03", title: "Email/CTA", desc: "Capture lead or direct to affiliate offer.", icon: <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8" /> },
              { step: "04", title: "Income", desc: "Commission or product sale deposited.", icon: <ArrowRight className="w-6 h-6 md:w-8 md:h-8" /> }
            ].map((item, i) => (
              <div key={i} className="flex-1 text-center relative w-full">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg md:shadow-xl text-[#E60023]">
                  {item.icon}
                </div>
                <div className="text-[#E60023] font-black text-xs mb-1 md:mb-2">{item.step}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
                {i < 3 && <ArrowRight className="hidden md:block absolute top-8 md:top-10 -right-2 md:-right-4 text-gray-200 w-6 h-6 md:w-8 md:h-8" />}
              </div>
            ))}
          </div>
        </section>

        {/* Content Plan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start mb-16 md:mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 uppercase tracking-tight">30-Day Content Plan</h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { week: "Week 1: Foundation", task: "Niche research, SEO profile setup, and first 10 boards." },
                { week: "Week 2: Content Creation", task: "Design 30 fresh pins in Canva and write 3 pillar blog posts." },
                { week: "Week 3: Scheduling", task: "Set up Tailwind or manual pinning (3x daily) and keyword optimization." },
                { week: "Week 4: Monetization", task: "Apply for affiliate programs and insert CTAs into existing content." }
              ].map((plan, i) => (
                <div key={i} className="p-5 md:p-6 bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-black text-[#E60023] uppercase tracking-widest text-[10px] md:text-xs mb-1 md:mb-2">{plan.week}</h4>
                  <p className="font-bold text-gray-800 text-sm md:text-base">{plan.task}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 uppercase tracking-tight">10 High-Click Pin Titles</h2>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
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
                <div key={i} className="flex items-center space-x-3 md:space-x-4 p-3.5 md:p-4 bg-gray-50 rounded-xl border-l-4 border-[#E60023]">
                  <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-[#E60023] flex-shrink-0" />
                  <span className="font-bold text-gray-700 text-sm md:text-base">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center text-white">
          <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 tracking-tight uppercase leading-tight">Ready to Implement?</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto">
            Don't let another month go by without building your income system. Get the full kit and start today.
          </p>
          <Button size="lg" className="w-full sm:w-auto">Get the Starter Kit Now</Button>
        </div>
      </Container>
    </div>
  );
}
