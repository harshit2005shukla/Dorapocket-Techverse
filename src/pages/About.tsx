import { SectionEyebrow, SectionTitle } from "@/components/ui/shared";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO 
        title="About Dorapocket TechVerse | Our Story, Mission & Founder"
        description="Learn about Dorapocket TechVerse — a premium technology company helping startups and enterprises transform ideas into scalable digital products through innovation and AI."
        url="https://dorapocket-techverse.com/about"
      />
    <div className="container-1280 py-20 md:py-28">
      <SectionEyebrow>About Dorapocket TechVerse</SectionEyebrow>
      <SectionTitle className="mt-3 max-w-3xl">We help ambitious teams turn bold ideas into beautiful, scalable software.</SectionTitle>

      <div className="mt-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 text-[17.5px] leading-relaxed text-muted space-y-5">
          <p>Dorapocket TechVerse is a modern product studio focused on transforming ideas into scalable digital products through innovative software development, AI-powered solutions, and cutting-edge technologies.</p>
          <p>We partner with startups, entrepreneurs, small businesses, growing companies, educational institutions, and enterprise clients to build SaaS platforms, AI tools, mobile apps, and internal systems that actually move the needle.</p>
          <p>Our edge: senior-only talent, founder involvement on every build, and a product mindset. We think in outcomes — activation, retention, revenue — not just tickets.</p>
        </div>
        <div className="lg:col-span-5">
          <div className="glass rounded-[24px] p-7">
            <div className="text-[12.5px] uppercase tracking-wider text-zinc-400">Brand personality</div>
            <div className="mt-3 flex flex-wrap gap-2 text-[13.3px] text-zinc-300">
              {["Innovative","Professional","Trustworthy","Future-Focused","Premium","Modern","Technology-Driven"].map(x=>(
                <span key={x} className="rounded-full border border-white/[0.14] bg-white/[0.03] px-3 py-1.5 light:border-zinc-300 light:bg-zinc-50 light:text-zinc-700">{x}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-6">
        <div className="glass rounded-[22px] p-7">
          <div className="text-[12.4px] uppercase tracking-wider text-zinc-400">Mission</div>
          <p className="mt-3 text-[16.4px] text-zinc-200 light:text-zinc-800 leading-relaxed">Empower businesses and creators worldwide with elegantly engineered, AI-native software that ships fast and scales beautifully.</p>
        </div>
        <div className="glass rounded-[22px] p-7">
          <div className="text-[12.4px] uppercase tracking-wider text-zinc-400">Vision</div>
          <p className="mt-3 text-[16.4px] text-zinc-200 light:text-zinc-800 leading-relaxed">Be the most trusted product partner for startups and growth companies building the next generation of digital experiences.</p>
        </div>
        <div className="glass rounded-[22px] p-7">
          <div className="text-[12.4px] uppercase tracking-wider text-zinc-400">Promise</div>
          <p className="mt-3 text-[16.4px] text-zinc-200 light:text-zinc-800 leading-relaxed">Clear communication, senior execution, and a relentless bias toward shipping meaningful outcomes.</p>
        </div>
      </div>

      {/* Founder */}
      <div className="mt-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="glass rounded-[28px] p-8">
            <img
                src="/harshit.jpg"
                alt="Harshit Shukla"
                className="w-20 h-20 rounded-2xl object-cover"
                           />
            <div className="mt-5 text-[23px] font-[660] text-heading">Harshit Shukla</div>
            <div className="text-[13.8px] text-zinc-400 light:text-zinc-600">CEO & Founder, Dorapocket TechVerse</div>
            <p className="mt-4 text-[15.6px] text-muted leading-relaxed">
              A visionary entrepreneur and technology enthusiast dedicated to building innovative digital solutions that empower businesses, startups, and individuals. Focused on transforming ideas into impactful products through innovation, creativity, and a future-driven approach to technology.
            </p>
            <div className="mt-5 flex gap-3 text-[13.5px] text-zinc-300 light:text-zinc-700">
              <a className="underline underline-offset-4" href="www.linkedin.com/in/harshit-shukla-43a692295">LinkedIn</a>
              <a className="underline underline-offset-4" href="https://x.com/harshit_2530">X</a>
              <a className="underline underline-offset-4" href="harshitks2000j@gmail.com">Email</a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionEyebrow>Values at Dorapocket TechVerse</SectionEyebrow>
          <div className="mt-4 grid sm:grid-cols-2 gap-4 text-[15.2px]">
            {[
              ["Craft matters","We sweat the small stuff — performance, accessibility, copy, motion."],
              ["Own the outcome","We measure success in user adoption and revenue, not hours."],
              ["Radical clarity","Simple proposals, async updates, weekly demos. No surprises."],
              ["Build for scale","Type-safe, tested, observable. Easy to hand off and grow."],
              ["AI, thoughtfully","Automation that respects users, privacy, and reliability."],
              ["Long-term partners","We stay around after launch — because products evolve."],
            ].map(([h,d])=>(
              <div key={h} className="rounded-2xl border border-white/[0.11] bg-white/[0.028] px-5 py-5 light:border-zinc-200 light:bg-white">
                <div className="font-[600] text-zinc-100 light:text-zinc-900">{h}</div>
                <div className="mt-1.5 text-muted leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-24">
        <SectionEyebrow>Growth Vision</SectionEyebrow>
        <SectionTitle className="mt-3">Roadmap</SectionTitle>
        <div className="mt-9 grid md:grid-cols-4 gap-4 text-[14.7px]">
          {[
            ["2024 — Foundation","Dorapocket TechVerse launched. First SaaS and AI builds ship."],
            ["2025 — Scale","45+ products, enterprise clients, AI agent platform practice."],
            ["2026 — Global","US/EU studio partnerships, product accelerators, open-source tools."],
            ["2027+ — Platform","Dorapocket TechVerse Labs: internal ventures and founder studio."],
          ].map(([y,t])=>(
            <div key={y} className="glass rounded-2xl p-5">
              <div className="text-zinc-100 light:text-zinc-900 font-[630]">{y}</div>
              <div className="text-muted mt-1.5">{t}</div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/contact" className="rounded-full px-5 h-11 inline-flex items-center bg-white text-[#11131d] font-[620]">Work with Dorapocket TechVerse</Link>
        </div>
      </div>
    </div>
    </>
  );
}
