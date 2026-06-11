import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Badge, SectionEyebrow, SectionTitle } from "@/components/ui/shared";

const services = [
  {
    title: "Full-Stack Web Development",
    desc: "Production-grade React / Next.js apps with edge performance, type-safety, and beautiful UX.",
    points: ["Next.js 15 • TypeScript", "Design systems", "Performance obsessed"]
  },
  {
    title: "AI Solutions & Integrations",
    desc: "Custom LLM workflows, RAG, agents, and intelligent automation that ship to real users.",
    points: ["OpenAI • LangChain", "RAG & Vector DBs", "AI safety & evals"]
  },
  {
    title: "SaaS Product Development",
    desc: "From 0→1 SaaS: billing, auth, multi-tenancy, analytics, and delightful onboarding.",
    points: ["Stripe • Auth", "Multi-tenant", "Ship weekly"]
  },
  {
    title: "Mobile App Development",
    desc: "Polished React Native / Expo apps with native feel and shared TypeScript backend.",
    points: ["React Native", "Offline-first", "Store-ready"]
  },
  {
    title: "Cloud & DevOps",
    desc: "AWS / Vercel infrastructure, CI/CD, observability, and cost-smart scaling.",
    points: ["AWS • Docker", "GitHub Actions", "Sentry / Grafana"]
  },
  {
    title: "UI/UX Product Design",
    desc: "Investor-ready product design with research, prototyping and a scalable design system.",
    points: ["UX research", "Figma systems", "Usability testing"]
  },
];

const stats = [
  { n: 47, suffix: "+", label: "Products shipped" },
  { n: 92, suffix: "%", label: "Client retention" },
  { n: 12, suffix: "ms", label: "Avg LCP (P75)" },
  { n: 18, suffix: "", label: "Countries served" },
];

function CountingNumber({ n, suffix }: { n: number; suffix: string }) {
  return <span>{n}{suffix}</span>;
}

const testimonials = [
  {
    quote: "Dorapocket TechVerse took our AI resume tool from prototype to paying customers in 6 weeks. Engineering quality is elite.",
    name: "Aarav Mehta",
    role: "Founder, HireSignal"
  },
  {
    quote: "Clear communication, fast cycles, beautiful UI. They feel like an in-house product team, not an agency.",
    name: "Sofia Ramirez",
    role: "CPO, Bloomstack"
  },
  {
    quote: "We migrated to their Next.js + edge stack and cut infra cost 41% while improving speed. Superb.",
    name: "Daniel Choi",
    role: "CTO, Nimbly Labs"
  },
];

const faqs = [
  { q: "What does Dorapocket TechVerse specialize in?", a: "We build venture-grade SaaS, AI products, and full-stack platforms for startups and growth-stage companies. Typical engagements are product builds, AI integrations, and platform modernization." },
  { q: "How fast can we start?", a: "Discovery calls this week. Build sprints usually start within 7–12 days. We run focused 2-week cycles with demos." },
  { q: "Do you work with early-stage startups?", a: "Absolutely. We love 0→1. We help validate, design, ship an MVP, and iterate with users — often acting as your fractional CTO + product team." },
  { q: "Do you handle design too?", a: "Yes. Dorapocket TechVerse is product-first: UX research, UI design, and a full design system ship with engineering." },
  { q: "What’s your pricing model?", a: "Fixed-scope product builds, or monthly product squads. Transparent proposals, no surprises." },
];

const posts = [
  { title: "Building RAG that actually ships", tag: "AI", date: "Nov 12, 2025" },
  { title: "SaaS pricing pages that convert in 2026", tag: "Product", date: "Oct 28, 2025" },
  { title: "Edge rendering with Next.js 15: real gains", tag: "Engineering", date: "Oct 6, 2025" },
];

export default function Home() {
  return (
    <>
      <SEO 
        title="Dorapocket TechVerse — Turning Ideas Into Digital Reality"
        description="Premium technology company delivering AI solutions, SaaS products, full-stack development, and digital transformation for startups, enterprises, and institutions worldwide."
        url="https://dorapocket-techverse.com"
      />
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-fade" />
        <div className="absolute inset-0 aurora-bg opacity-[1]" />
        <div className="container-1280 relative pt-24 md:pt-28 pb-20 md:pb-28">
          <div className="max-w-4xl">
            <Badge>Now booking Q1 / Q2 2026 product sprints</Badge>
            <h1 className="mt-8 text-[46px] sm:text-[68px] md:text-[86px] leading-[0.94] tracking-[-0.032em] text-heading">
              <span className="display-xl">We build</span><br/>
              <span className="gradient-text display-xl">exceptional</span><br/>
              <span className="display-xl">digital products.</span>
            </h1>
            <p className="mt-7 text-[18.5px] md:text-[20.5px] leading-relaxed text-zinc-300 light:text-zinc-700 max-w-2xl">
              Dorapocket TechVerse is a premium product studio for ambitious teams. Full-stack engineering, AI, and product design — united to ship fast, look incredible, and scale cleanly.
          <p>
            Dorapocket TechVerse is a technology company specializing in software development, AI solutions, SaaS platforms, and digital transformation services.
            </p>
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full px-6 h-[50px] inline-flex items-center font-semibold text-white brand-gradient shadow-lift">Book a strategy call</Link>
              <Link to="/portfolio" className="rounded-full px-6 h-[50px] inline-flex items-center font-semibold bg-white/[0.065] border border-white/[0.18] text-zinc-100 hover:bg-white/[0.10] transition light:bg-white light:border-zinc-300 light:text-zinc-800">View case studies →</Link>
            </div>
            <div className="mt-7 text-[13.5px] text-zinc-400 light:text-zinc-600 flex flex-wrap gap-x-7 gap-y-2">
              <span>✓ ISO-aligned security</span>
              <span>✓ 2-week build sprints</span>
              <span>✓ Founder-led team</span>
            </div>
          </div>

          {/* floating product preview */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .9, delay: .12 }}
            className="relative mt-16 md:mt-20"
          >
            <div className="glass rounded-[28px] p-[18px] md:p-7 soft-ring">
              <div className="rounded-[18px] border border-white/[0.13] bg-gradient-to-b from-[#181c31] to-[#0f1326] light:from-white light:to-zinc-50 light:border-zinc-200 px-5 md:px-9 py-8 md:py-11">
                <div className="flex flex-wrap items-center justify-between gap-4 text-[13.5px] text-zinc-400 light:text-zinc-600">
                  <div className="flex items-center gap-5">
                    <span>Live • SaaS dashboard</span>
                    <span className="opacity-70">Next.js • Postgres • Edge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" /> 99.99% uptime
                  </div>
                </div>
                <div className="mt-7 grid md:grid-cols-3 gap-4">
                  {["$248.6k MRR", "12.4k MAU", "3.1s time-to-value"].map((m,i)=>(
                    <div key={i} className="rounded-2xl bg-white/[0.035] border border-white/[0.11] px-5 py-5 light:bg-zinc-50 light:border-zinc-200">
                      <div className="text-[12px] text-zinc-400 light:text-zinc-600">Metric</div>
                      <div className="text-[22px] font-[650] text-zinc-50 light:text-zinc-900 mt-1 tracking-tight" style={{fontFamily:"Space Grotesk, Inter, sans-serif"}}>{m}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 h-[180px] rounded-xl bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:36px_36px] light:bg-[linear-gradient(90deg,rgba(20,20,40,0.07)_1px,transparent_1px),linear-gradient(rgba(20,20,40,0.05)_1px,transparent_1px)] relative overflow-hidden">
                  <div className="absolute inset-0" style={{background:"radial-gradient(700px 220px at 20% 90%, rgba(120,100,248,0.18), transparent), radial-gradient(600px 220px at 80% 20%, rgba(72,199,255,0.14), transparent)"}}/>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-10 text-[12.8px] text-zinc-400 light:text-zinc-600 flex flex-wrap items-center gap-x-8 gap-y-2 opacity-90">
            <span className="uppercase tracking-widest text-[11.2px]">Trusted by builders at</span>
            <span>HireSignal</span>
            <span>Bloomstack</span>
            <span>Nimbly</span>
            <span>Northpeak</span>
            <span>Lumen Ed</span>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="container-1280 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionEyebrow>About Dorapocket TechVerse</SectionEyebrow>
            <SectionTitle className="mt-3">Product minds.<br/>Engineering rigor.</SectionTitle>
            <p className="mt-5 text-[17.5px] leading-relaxed text-muted max-w-xl">
              We’re a tight, senior team building revenue-generating software for startups, SMBs, schools, and enterprise teams. Less ceremony, more shipping. Every project at Dorapocket TechVerse gets founder oversight, type-safe architecture, and gorgeous UI.
            </p>
            <div className="mt-7 flex flex-wrap gap-6 text-[14.2px] text-zinc-300 light:text-zinc-700">
              <div><div className="text-[26px] text-heading font-[660]" style={{fontFamily:"Space Grotesk, Inter, sans-serif"}}>14-day</div>First demo</div>
              <div><div className="text-[26px] text-heading font-[660]" style={{fontFamily:"Space Grotesk, Inter, sans-serif"}}>99.9%</div>Uptime SLO</div>
              <div><div className="text-[26px] text-heading font-[660]" style={{fontFamily:"Space Grotesk, Inter, sans-serif"}}>Senior</div>Only team</div>
            </div>
            <div className="mt-7">
              <Link to="/about" className="text-[14.8px] text-zinc-200 underline decoration-zinc-500 underline-offset-4 hover:text-white light:text-zinc-800">Meet the founder →</Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="glass rounded-[28px] p-7 md:p-9">
              <div className="text-[12.5px] text-zinc-400 light:text-zinc-600">How we work at Dorapocket TechVerse</div>
              <div className="mt-5 space-y-4 text-[15.6px] text-zinc-300 light:text-zinc-700">
                {[
                  ["01 — Discover", "1-week product sprint. Goals, UX flows, technical plan."],
                  ["02 — Build", "Two-week cycles, real demos, continuous deployment."],
                  ["03 — Launch", "Analytics, growth loops, and AI automation from day one."],
                  ["04 — Scale", "Observability, cost control, and a clean handoff."],
                ].map(([t,d])=>(
                  <div key={t} className="flex gap-4">
                    <div className="text-zinc-100 light:text-zinc-900 font-[600] w-[120px] shrink-0" style={{fontFamily:"Space Grotesk, Inter, sans-serif"}}>{t}</div>
                    <div className="text-muted">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-white/[0.08] light:border-zinc-200 bg-[#0a0b18]/50 light:bg-[#f3f1fa]">
        <div className="container-1280 py-20 md:py-28">
          <SectionEyebrow>Services</SectionEyebrow>
          <div className="mt-3 flex items-end justify-between flex-wrap gap-6">
            <SectionTitle>Everything to<br/>launch and grow.</SectionTitle>
            <Link to="/services" className="text-[14.5px] text-zinc-300 hover:text-white light:text-zinc-700 light:hover:text-zinc-900">View all 10 services →</Link>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(s=>(
              <div key={s.title} className="glass rounded-[22px] p-6 md:p-7 hover:bg-white/[0.055] transition light:hover:bg-white">
                <div className="text-[17.8px] font-[650] text-zinc-100 light:text-zinc-900 tracking-tight">{s.title}</div>
                <p className="mt-3 text-[14.8px] leading-relaxed text-muted">{s.desc}</p>
                <ul className="mt-4 text-[13.5px] text-zinc-400 light:text-zinc-600 space-y-1.5">
                  {s.points.map(p=> <li key={p}>• {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="container-1280 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionEyebrow>Why Dorapocket TechVerse</SectionEyebrow>
            <SectionTitle className="mt-3">Built like a<br/>top-tier product team.</SectionTitle>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              ["Founder-led delivery", "Every build is reviewed by our CEO & Founder, Harshit Shukla."],
              ["Design x Engineering", "No handoff gap. We design in systems and build in TypeScript."],
              ["AI-native", "LLMs, RAG, agents — embedded the right way, not bolted on."],
              ["Speed with taste", "Sprint fast, but never ship ugly. Every pixel considered."],
              ["Security-first", "Auth best-practices, data encryption, and auditability by default."],
              ["Real partnership", "We think about revenue, retention, and runway — not just tickets."],
            ].map(([h,d])=>(
              <div key={h} className="glass rounded-[20px] p-5">
                <div className="font-[620] text-zinc-100 light:text-zinc-900">{h}</div>
                <div className="mt-2 text-[14.3px] text-muted leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-y border-white/[0.08] light:border-zinc-200 bg-[#0b0d1d]/60 light:bg-[#f2f1fa]">
        <div className="container-1280 py-20 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <SectionEyebrow>Technology</SectionEyebrow>
              <SectionTitle className="mt-3">Modern, proven stack.</SectionTitle>
            </div>
            <Link to="/technologies" className="text-[14.4px] text-zinc-300 light:text-zinc-700 hover:text-white">Explore stack →</Link>
          </div>
          <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-[13.6px] text-zinc-300 light:text-zinc-700">
            {["React / Next.js", "TypeScript", "Tailwind CSS", "Node / Express", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Vercel", "OpenAI", "LangChain"].map(t=>(
              <div key={t} className="rounded-2xl border border-white/[0.12] bg-white/[0.028] px-4 py-4 text-center light:border-zinc-300 light:bg-white">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-1280 py-20 md:py-28">
        <SectionEyebrow>Portfolio</SectionEyebrow>
        <div className="mt-3 flex items-end justify-between flex-wrap gap-4">
          <SectionTitle>Selected work from<br/>Dorapocket TechVerse</SectionTitle>
          <Link to="/portfolio" className="text-[14.4px] text-zinc-300 hover:text-white light:text-zinc-700">All case studies →</Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { name: "AI Resume Analyzer", tag: "AI / SaaS", blurb: "LLM resume scoring with structured feedback, Stripe billing, and recruiter dashboard." },
            { name: "Hostel Management System", tag: "Enterprise", blurb: "Room allocations, fee automation, and mobile check-ins for 6,400+ students." },
            { name: "Student Placement Portal", tag: "EdTech", blurb: "Company drives, test automation, and placement analytics for universities." },
          ].map(p=>(
            <div key={p.name} className="glass rounded-[22px] p-6">
              <div className="text-[11.7px] uppercase tracking-wider text-zinc-400 light:text-zinc-600">{p.tag}</div>
              <div className="mt-2 text-[19.5px] font-[650] text-zinc-50 light:text-zinc-900">{p.name}</div>
              <div className="mt-2 text-[14.5px] text-muted leading-relaxed">{p.blurb}</div>
              <div className="mt-4 text-[13.6px] text-zinc-300 light:text-zinc-700">Next.js • Postgres • OpenAI</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/[0.08] light:border-zinc-200 bg-[#0a0b17] light:bg-[#eeecf8]">
        <div className="container-1280 py-14 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s=>(
            <div key={s.label}>
              <div className="text-[42px] md:text-[52px] leading-none tracking-[-0.025em] text-heading" style={{fontFamily:"Space Grotesk, Inter, sans-serif"}}>
                <CountingNumber n={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-zinc-400 light:text-zinc-600 text-[13.7px]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-1280 py-20 md:py-28">
        <SectionEyebrow>Testimonials</SectionEyebrow>
        <SectionTitle className="mt-3">Loved by founders<br/>and product teams.</SectionTitle>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {testimonials.map(t=>(
            <div key={t.name} className="glass rounded-[22px] p-7">
              <div className="text-[16.8px] leading-relaxed text-zinc-200 light:text-zinc-800">“{t.quote}”</div>
              <div className="mt-5 text-[14px] text-zinc-300 light:text-zinc-700">
                <span className="font-semibold text-zinc-100 light:text-zinc-900">{t.name}</span><br/>{t.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.08] light:border-zinc-200">
        <div className="container-1280 py-20 md:py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <SectionTitle className="mt-3">Common questions<br/>about working with us.</SectionTitle>
            <p className="mt-4 text-muted">Didn’t find an answer? <Link to="/contact" className="underline">Talk to Dorapocket TechVerse</Link>.</p>
          </div>
          <div className="lg:col-span-7 space-y-3">
            {faqs.map(f=>(
              <details key={f.q} className="glass rounded-[18px] px-5 py-4 open:bg-white/[0.055] light:open:bg-zinc-50">
                <summary className="cursor-pointer list-none text-[16.2px] text-zinc-100 light:text-zinc-900 font-[560] flex justify-between items-center">{f.q}<span className="text-zinc-500">+</span></summary>
                <div className="pt-3 text-[14.8px] text-muted leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="container-1280 py-20 md:py-24">
        <div className="flex items-end justify-between">
          <div>
            <SectionEyebrow>From the Dorapocket TechVerse blog</SectionEyebrow>
            <SectionTitle className="mt-3">Engineering notes.</SectionTitle>
          </div>
          <Link to="#" className="hidden md:block text-[14.4px] text-zinc-300 light:text-zinc-700">All posts →</Link>
        </div>
        <div className="mt-9 grid md:grid-cols-3 gap-5">
          {posts.map(p=>(
            <article key={p.title} className="glass rounded-[20px] p-6">
              <div className="text-[11.5px] uppercase tracking-wider text-zinc-400 light:text-zinc-600">{p.tag} • {p.date}</div>
              <div className="mt-3 text-[18.5px] font-[620] text-zinc-100 light:text-zinc-900">{p.title}</div>
              <div className="mt-3 text-[14px] text-zinc-400 light:text-zinc-600">Read →</div>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-1280 pb-8">
        <div className="rounded-[30px] brand-gradient p-[1px]">
          <div className="rounded-[29px] bg-[#0c0e1c] light:bg-[#f9f8ff] px-7 md:px-12 py-14 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.55]" style={{background:"radial-gradient(600px 280px at 80% -10%, rgba(255,255,255,0.11), transparent)"}}/>
            <div className="relative max-w-2xl">
              <div className="text-[14px] text-zinc-300 light:text-zinc-700">Have an idea worth building?</div>
              <h3 className="mt-3 text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.022em] text-heading">Let’s build your next product with Dorapocket TechVerse.</h3>
              <p className="mt-4 text-[17.2px] text-muted">Share your goals. We’ll reply in 24 hours with a clear plan, timeline, and estimate.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-full px-6 h-[50px] inline-flex items-center font-semibold text-white brand-gradient shadow-lift">Start a project</Link>
                <Link to="/services" className="rounded-full px-6 h-[50px] inline-flex items-center font-semibold border border-white/[0.18] text-zinc-100 light:border-zinc-300 light:text-zinc-800">See services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
