import React from "react";
import { motion } from "framer-motion";

export default function Deck() {
  const slides = [
    {
      id: 1,
      title: "The AI Handyman",
      text: (
        <div className="space-y-6 leading-relaxed max-w-3xl mx-auto text-center">
          <h3 className="text-4xl sm:text-5xl font-semibold text-yellow-400 mb-6">A Real Guy with Smart Tools.</h3>
          <p className="font-bold mb-4">Hello! My name is Tim and I am a Generative AI instructor, engineer, and founder of The AI Handyman LLC. I provide a wide range of services to help keep your business or personal needs up to date with the growing field of Artificial Intelligence. Services include:</p>
          <div className="flex items-start gap-3 justify-center text-left">
            <span>🧠</span>
            <p><strong>On-Demand AI Consulting</strong><br />Like a local handyman — I can come in and out of your business at an hourly rate whenever you need help.</p>
          </div>
          <div className="flex items-start gap-3 justify-center text-left">
            <span>📱</span>
            <p><strong>Media + Marketing Support</strong><br />Generate social media content, headshots, and short-form videos for your brand.</p>
          </div>
          <div className="flex items-start gap-3 justify-center text-left">
            <span>💡</span>
            <p><strong>AI Education + Strategy</strong><br />Help you understand new AI products, pitches, or strategies your company is evaluating. I can even attend meetings to guide your AI decision-making.</p>
          </div>
          <div className="flex items-start gap-3 justify-center text-left">
            <span>⚙️</span>
            <p><strong>Custom Builds + Automation</strong><br />Design and build full visions for websites, internal tools, or chatbots. I also create automations for email, calendars, and lead tracking.</p>
          </div>
          <div className="flex items-start gap-3 justify-center text-left">
            <span>🚀</span>
            <p><strong>Always Up-To-Date</strong><br />I stay on top of emerging trends and tools to keep both my consulting and my builds current and cutting-edge.</p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "What I Do",
      text: (
        <div className="space-y-6 leading-relaxed max-w-3xl mx-auto text-center">
          <p className="font-bold mb-4">From AI education & consulting to custom-built automations. I provide practical AI solutions that work for you.</p>
          <div className="flex items-start gap-3 justify-center text-left">
            <span>💡</span>
            <p><strong>AI Education & Consultation</strong><br />Personalized guidance and training to understand and apply AI effectively in your workflow.</p>
          </div>
          <div className="flex items-start gap-3 justify-center text-left">
            <span>💻</span>
            <p><strong>Custom Website + Tool Design</strong><br />Build tailored digital tools and websites that integrate intelligent automation.</p>
          </div>
          <div className="flex items-start gap-3 justify-center text-left">
            <span>⚙️</span>
            <p><strong>Automation & Maintenance</strong><br />Ongoing support to keep your AI systems efficient, adaptive, and up-to-date.</p>
          </div>
          <p>Whether you need one-hour strategy sessions or full AI integration, I bring hands-on experience to make AI approachable and useful — not hype.</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Two Core Pathways",
      text: (
        <div className="grid grid-cols-2 h-full w-full text-left text-stone-200 rounded-md overflow-hidden bg-gradient-to-r from-amber-900 to-orange-900">
          <div className="p-8 bg-amber-900/90">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">AI Education & Consultation</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
              <li>Hourly sessions — learn, test, and integrate AI at your own pace</li>
              <li>Ideal for: Educators, founders, small teams, those looking for personal guidance to get ahead in their current role, and businesses with established websites</li>
            </ul>
            <p className="mt-4 text-yellow-400 font-semibold">$60/hour for individuals</p>
            <p className="text-yellow-400 font-semibold">$100/hour for teams of 2–5</p>
          </div>
          <div className="p-8 bg-orange-900/90">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Website & Tool Design</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
              <li>Custom-built websites, chatbots, and automations — plus monthly maintenance plans</li>
              <li>Ideal for: Individuals and businesses ready to scale and streamline and who need help with website builds and maintanence</li>
            </ul>
            <p className="mt-4 text-yellow-400 font-semibold">Pricing starts at $1,000 for a basic AI Website-Lite or AI tool (e.g. Business specific chatbot)</p>
            <p className="text-yellow-400 font-semibold">Pricing starts at $2,500 for full websites (AI Website Business Plus with CRM)</p>
            <p className="text-yellow-400 italic text-sm mt-2">E-commerce available as an add-on or included with Business Plus website builds.</p>
            <p className="text-yellow-400 italic text-sm">Monthly maintenance plans are required for ongoing support of custom-built solutions.</p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Flexible Tiers for Monthly Maintenance Plans",
      text: (
        <div className="overflow-x-auto w-full max-w-6xl mx-auto">
          <table className="w-full table-auto border-collapse border border-stone-600 rounded-xl bg-gradient-to-r from-amber-950/70 to-orange-950/70 text-stone-200 text-lg text-balance">
            <thead>
              <tr className="border-b border-stone-600">
                <th className="p-5 text-center font-semibold min-w-[250px]">Tier</th>
                <th className="p-5 text-center font-semibold min-w-[150px]">Pricing</th>
                <th className="p-5 text-center font-semibold min-w-[250px]">Focus</th>
                <th className="p-5 text-center font-semibold min-w-[400px]">Highlights</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-600">
                <td className="p-5 align-top font-semibold">Basic Plan – “Just Make It Work”</td>
                <td className="p-5 align-top text-center font-semibold text-yellow-400">$100/mo</td>
                <td className="p-5 align-top">Starter AI setup with a custom chatbot</td>
                <td className="p-5">Website or automation built to function cleanly and efficiently</td>
              </tr>
              <tr className="border-b border-stone-600">
                <td className="p-5 align-top font-semibold">Pro Plan – “I want more support and analytics”</td>
                <td className="p-5 align-top text-center font-semibold text-yellow-400">$200/mo</td>
                <td className="p-5 align-top">E-commerce + Performance</td>
                <td className="p-5">E-commerce support, analytics, more frequent updates, and chatbot tokens</td>
              </tr>
              <tr>
                <td className="p-5 align-top font-semibold">Premium Plan – “I want an AI partner”</td>
                <td className="p-5 align-top text-center font-semibold text-yellow-400">$300/mo</td>
                <td className="p-5 align-top">Custom CRM (Customer Relationship Management)</td>
                <td className="p-5">AI-powered communication, client tracking, and advanced automation</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6 text-center">
            <a
              href="/TheAIHandymanLLC_ServicesV2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 font-semibold hover:underline"
            >
              📄 View Detailed Service Breakdown (PDF)
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Teaching & Trust",
      text: (
        <div className="space-y-6 leading-relaxed max-w-3xl mx-auto text-center">
          <div className="relative mb-6">
            <video
              src="/videos/teaching-intro.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg mx-auto max-h-[320px] border border-stone-700"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = document.getElementById("video-fallback");
                if (fallback) fallback.style.display = "block";
              }}
            />
            <div
              id="video-fallback"
              style={{ display: "none" }}
              className="flex flex-col items-center justify-center text-stone-400 p-6 border border-stone-700 rounded-xl bg-stone-800/40"
            >
              <span className="text-4xl mb-2">🎥</span>
              <p>Teaching preview video unavailable.</p>
            </div>
          </div>

          <p className="font-bold text-yellow-400 text-xl">
            Educator. Engineer. Consultant.
          </p>
          <p>
            Trusted by Fortune 500 teams and small business owners alike, I teach
            real-world AI applications — from RAG pipelines to prompt strategy.
            Every project I take on blends education and implementation, so clients
            don’t just get results — they understand them.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "Let's Build Your Vision",
      text: (
        <div className="space-y-6 leading-relaxed max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-4 animate-pulse">👷‍♂️</div>
          <p className="font-bold text-xl text-yellow-400">
            Human touch. Smart tools. Real results.
          </p>
          <p>
            Whether you’re exploring how AI fits into your workflow or ready to
            design a full solution — I’m here to help you build it.
          </p>

          <div className="space-y-4">
            <a
              href="https://calendar.app.google/VBVxhDDppoxH2mhL8"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-yellow-400 font-semibold hover:underline"
            >
              📅 Schedule a FREE 45 minute Discovery Call
            </a>
            <a
              href="mailto:timothy@theaihandyman.ai"
              className="block text-yellow-400 font-semibold hover:underline"
            >
              ✉️ timothy@theaihandyman.ai
            </a>
            <p className="italic text-stone-300">
              💬 Need AI, but not sure where to start? Let’s talk.
            </p>
          </div>

          <p className="text-stone-400 text-sm">
            *All projects and consulting agreements start with a free 45 minute discovery call to discuss goals
            and possibilities.*
          </p>
          <div className="mt-6 text-center">
            <a
              href="/TheAIHandymanLLC_FullDeck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 font-semibold hover:underline"
            >
              📘 Download Full Slide Deck (PDF)
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-stone-900 text-white">
      {slides.map((slide) => (
        <section
          key={slide.id}
          className="h-screen flex flex-col items-center justify-center text-center snap-start px-6 bg-gradient-to-b from-amber-900 to-orange-900 transition-all duration-700"
        >
          <motion.h2
            className="text-4xl sm:text-6xl font-bold mb-4 text-yellow-400"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {slide.title}
          </motion.h2>

          <motion.div
            className="max-w-2xl text-lg whitespace-pre-line text-stone-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {slide.text}
          </motion.div>
        </section>
      ))}
    </div>
  );
}