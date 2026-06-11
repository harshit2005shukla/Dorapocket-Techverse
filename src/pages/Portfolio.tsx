import { SectionEyebrow, SectionTitle } from "@/components/ui/shared";
import SEO from "@/components/SEO";

const projects = [
  {
    name: "AI Resume Analyzer",
    tag: "AI SaaS • B2C",
    desc: "An LLM-powered resume reviewer that scores resumes against job descriptions, rewrites bullet points, and tracks application success. Built end-to-end by Dorapocket TechVerse.",
    stack: ["Next.js", "OpenAI", "PostgreSQL", "Stripe"],
    features: ["RAG job matching", "PDF parsing", "ATS score", "User dashboard"],
  },
  {
    name: "Hostel Management System",
    tag: "Enterprise • EdTech",
    desc: "A full campus residence platform handling room allocation, fees, visitor logs, complaints, and mobile check-in for 6,400+ students.",
    stack: ["React", "Node.js", "MongoDB", "AWS"],
    features: ["Automated allocations", "UPI fee payments", "Biometric check-in", "Admin analytics"],
  },
  {
    name: "Student Placement Portal",
    tag: "EdTech • Careers",
    desc: "University placement automation: company drives, eligible student matching, online testing, and placement analytics in one clean portal.",
    stack: ["Next.js", "Express", "PostgreSQL", "Redis"],
    features: ["Eligibility engine", "Test proctoring", "Offer tracking", "Recruiter portal"],
  },
  {
    name: "Smart Attendance System",
    tag: "AI / Campus",
    desc: "Face-recognition attendance with liveness detection and real-time classroom dashboards. 99.3% accuracy, <1.8s per student.",
    stack: ["Python", "React", "Postgres", "Docker"],
    features: ["Face recognition", "Liveness check", "Mobile app", "Export / LMS sync"],
  },
  {
    name: "E-Commerce Platform",
    tag: "Commerce",
    desc: "Headless commerce storefront with edge rendering, variant-rich catalog, and one-click checkout — built for speed and conversion.",
    stack: ["Next.js", "Stripe", "Postgres", "Vercel"],
    features: ["Edge SSR", "Cart & checkout", "Admin CMS", "Analytics"],
  },
  {
    name: "AI Chatbot System",
    tag: "AI • Support",
    desc: "Brand-trained support bot with RAG over docs, tickets, and order history. Escalates to humans with full context.",
    stack: ["LangChain", "OpenAI", "Vector DB", "Next.js"],
    features: ["RAG knowledge", "Ticket handoff", "Multilingual", "CSAT tracking"],
  },
];

export default function Portfolio() {
  return (
    <>
      <SEO 
        title="Portfolio | Dorapocket TechVerse Case Studies"
        description="Explore premium projects by Dorapocket TechVerse: AI Resume Analyzer, Hostel Management System, Student Placement Portal, Smart Attendance, E-Commerce, and AI Chatbot solutions."
        url="https://dorapocket-techverse.com/portfolio"
      />
    <div className="container-1280 py-20 md:py-28">
      <SectionEyebrow>Portfolio — Dorapocket TechVerse</SectionEyebrow>
      <SectionTitle className="mt-3">Case studies from recent product builds.</SectionTitle>
      <p className="mt-4 text-muted max-w-2xl text-[17px]">Real products, shipped to real users. Security-sensitive client names are anonymized on request.</p>

      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {projects.map(p => (
          <div key={p.name} className="glass rounded-[26px] overflow-hidden">
            <div className="h-[170px] relative bg-[#13172b] light:bg-[#eceaf9] border-b border-white/[0.1] light:border-zinc-200">
              <div className="absolute inset-0" style={{background:"radial-gradient(420px 140px at 20% 20%, rgba(124,95,255,0.20), transparent), radial-gradient(420px 160px at 85% 80%, rgba(79,203,255,0.15), transparent)"}}/>
              <div className="absolute bottom-4 left-5 text-[12.4px] text-zinc-300 light:text-zinc-700">{p.tag}</div>
              <div className="absolute top-4 right-4 text-[11.7px] px-2.5 py-1 rounded-full bg-white/[0.07] border border-white/[0.16] text-zinc-200 light:bg-white light:text-zinc-700 light:border-zinc-300">Live</div>
            </div>
            <div className="p-6 md:p-7">
              <div className="text-[21px] font-[650] text-heading tracking-tight">{p.name}</div>
              <p className="mt-2.5 text-[15.4px] text-muted leading-relaxed">{p.desc}</p>
              <div className="mt-4 text-[13.3px] text-zinc-300 light:text-zinc-700">Stack: {p.stack.join(" • ")}</div>
              <div className="mt-3 flex flex-wrap gap-2 text-[12.6px] text-zinc-400 light:text-zinc-600">
                {p.features.map(f => <span key={f} className="px-2.5 py-1 rounded-full border border-white/[0.13] bg-white/[0.03] light:border-zinc-300 light:bg-zinc-50">{f}</span>)}
              </div>
              <div className="mt-5 flex gap-3 text-[13.7px]">
                <a className="rounded-full px-4 h-9 inline-flex items-center border border-white/[0.18] text-zinc-200 hover:bg-white/[0.05] light:border-zinc-300 light:text-zinc-800" href="#">Live demo</a>
                <a className="rounded-full px-4 h-9 inline-flex items-center text-zinc-300 hover:text-white light:text-zinc-700" href="#">GitHub →</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center text-muted text-[15.2px]">
        Want a detailed PDF case study pack from Dorapocket TechVerse? <a href="/contact" className="underline text-zinc-200 light:text-zinc-800">Request it here</a>.
      </div>
    </div>
    </>
  )
}
