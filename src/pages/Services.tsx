import { SectionEyebrow, SectionTitle } from "@/components/ui/shared";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const services = [
  {
    title: "Full Stack Web Development",
    desc: "Production-grade, SEO-optimized web applications built with Next.js 15, TypeScript, and edge rendering. Perfect for SaaS dashboards, marketplaces, and marketing sites that need to be fast and beautiful.",
    benefits: ["90+ Lighthouse scores", "Scalable monorepo architecture", "Design system included"],
    features: ["Next.js / React / TypeScript", "Server Actions & Edge", "Auth, billing, analytics", "Accessibility WCAG 2.2"]
  },
  {
    title: "AI Solutions & Integrations",
    desc: "Custom LLM products, RAG knowledge bases, AI agents, and workflow automation that create real business value. From prompt engineering to eval suites.",
    benefits: ["Faster operations", "Improved conversion", "New product capabilities"],
    features: ["OpenAI / Anthropic", "LangChain / RAG", "Vector databases", "Evaluation & guardrails"]
  },
  {
    title: "Mobile App Development",
    desc: "Premium iOS & Android apps with React Native / Expo. Offline-first, buttery-smooth, and App Store ready with shared backend code.",
    benefits: ["Single TypeScript codebase", "Native performance", "Fast store submission"],
    features: ["React Native / Expo", "Push notifications", "Offline sync", "In-app purchases"]
  },
  {
    title: "SaaS Product Development",
    desc: "Idea to paying customers. We handle product strategy, UX, engineering, billing, and growth instrumentation — the whole 0→1 loop at Dorapocket TechVerse.",
    benefits: ["Launch in 6–10 weeks", "Churn-reducing onboarding", "Built-in analytics"],
    features: ["Stripe / Paddle", "Multi-tenancy", "Role-based access", "Email / CRM integrations"]
  },
  {
    title: "Cloud & DevOps Services",
    desc: "AWS / Vercel infrastructure as code, CI/CD, observability, and cost optimization. Secure, fast deploys with 99.9% uptime targets.",
    benefits: ["Lower infra spend", "Safer releases", "Full observability"],
    features: ["AWS / Vercel / Cloudflare", "Docker / Terraform", "GitHub Actions", "Sentry / Grafana"]
  },
  {
    title: "UI/UX Design",
    desc: "Investor-ready product design: user research, flows, high-fidelity UI, and a complete Figma design system engineers love at Dorapocket TechVerse.",
    benefits: ["Higher activation", "Faster build", "Consistent brand"],
    features: ["UX research & flows", "Figma design systems", "Prototyping", "Usability testing"]
  },
  {
    title: "API Development",
    desc: "Secure, versioned REST / GraphQL APIs with great DX, OpenAPI docs, and bulletproof rate-limiting.",
    benefits: ["Clean contracts", "Fast integrations", "Production hardened"],
    features: ["Node.js / Python", "Postgres / Redis", "OpenAPI / SDKs", "Webhooks"]
  },
  {
    title: "Automation Solutions",
    desc: "Internal tools, n8n / Zapier workflows, and custom agents that remove busywork and reduce errors across sales, ops, and support.",
    benefits: ["Save 12–25 hrs/wk", "Fewer mistakes", "Happier teams"],
    features: ["CRM / sheets sync", "Lead enrichment", "Email automation", "Custom agents"]
  },
  {
    title: "Custom Software Development",
    desc: "Bespoke internal platforms: portals, ERPs, LMS, operations dashboards — built exactly to your workflow.",
    benefits: ["Process fit", "Own your IP", "Long-term maintainable"],
    features: ["Role-based apps", "Reporting", "Imports / ETL", "SSO / audit logs"]
  },
  {
    title: "Technical Consulting",
    desc: "Fractional CTO guidance, architecture reviews, and hiring support from the Dorapocket TechVerse senior team.",
    benefits: ["De-risk delivery", "Higher velocity", "Better hiring"],
    features: ["Architecture audits", "Roadmapping", "Code reviews", "Team mentoring"]
  },
];

export default function Services() {
  return (
    <>
      <SEO 
        title="Services | AI, SaaS & Full-Stack Development — Dorapocket TechVerse"
        description="Premium services: Full Stack Development, AI Solutions, SaaS Product Development, Mobile Apps, Cloud & DevOps, UI/UX Design, and Technical Consulting by Dorapocket TechVerse."
        url="https://dorapocket-techverse.com/services"
      />
    <div className="container-1280 py-20 md:py-28">
      <SectionEyebrow>Services — Dorapocket TechVerse</SectionEyebrow>
      <SectionTitle className="mt-3 max-w-3xl">End-to-end product engineering, AI, and design — under one senior roof.</SectionTitle>
      <p className="mt-4 text-[17px] text-muted max-w-2xl">Fixed-scope product builds or monthly squads. Every engagement includes design, engineering, QA, and launch support.</p>

      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {services.map(s => (
          <div key={s.title} className="glass rounded-[24px] p-7 md:p-8">
            <div className="text-[20.5px] font-[650] text-heading tracking-tight">{s.title}</div>
            <p className="mt-3 text-[15.6px] leading-relaxed text-muted">{s.desc}</p>
            <div className="mt-5 grid sm:grid-cols-2 gap-6 text-[14.1px]">
              <div>
                <div className="text-[12px] uppercase tracking-wider text-zinc-400">Benefits</div>
                <ul className="mt-2 space-y-1.5 text-zinc-300 light:text-zinc-700">
                  {s.benefits.map(b=> <li key={b}>• {b}</li>)}
                </ul>
              </div>
              <div>
                <div className="text-[12px] uppercase tracking-wider text-zinc-400">Features</div>
                <ul className="mt-2 space-y-1.5 text-zinc-300 light:text-zinc-700">
                  {s.features.map(b=> <li key={b}>• {b}</li>)}
                </ul>
              </div>
            </div>
            <Link to="/contact" className="mt-6 inline-flex rounded-full px-4 h-10 items-center text-[13.7px] font-[600] border border-white/[0.18] text-zinc-200 hover:bg-white/[0.055] light:border-zinc-300 light:text-zinc-800">Discuss this service</Link>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[26px] brand-gradient p-[1px]">
        <div className="rounded-[25px] bg-[#0d1021] light:bg-white px-7 md:px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-zinc-200 light:text-zinc-900 text-[22px] font-[650] tracking-tight">Need a custom product squad?</div>
            <div className="text-muted mt-1">Tell Dorapocket TechVerse about your goals — we’ll send a plan in 24 hours.</div>
          </div>
          <Link to="/contact" className="rounded-full px-5 h-11 inline-flex items-center bg-white text-[#111526] font-[650]">Start a project</Link>
        </div>
      </div>
    </div>
    </>
  )
}
