import { SectionEyebrow, SectionTitle } from "@/components/ui/shared";
import SEO from "@/components/SEO";

const openings = [
  { title: "Senior Full-Stack Engineer", type: "Remote • Full-time", stack: "Next.js / TypeScript / Postgres" },
  { title: "AI Product Engineer", type: "Remote • Full-time", stack: "Python / LangChain / RAG" },
  { title: "Product Designer", type: "Remote • Contract", stack: "Figma / UX / Design systems" },
  { title: "Founders Associate Intern", type: "Bengaluru / Remote • Internship", stack: "Growth / Ops / Research" },
];

export default function Careers(){
  return (
    <>
      <SEO 
        title="Careers | Join Dorapocket TechVerse"
        description="Join Dorapocket TechVerse — Build premium AI and SaaS products with a senior team. Open roles: Full-Stack Engineer, AI Engineer, Product Designer, and Internships."
        url="https://dorapocket-techverse.com/careers"
      />
    <div className="container-1280 py-20 md:py-28">
      <SectionEyebrow>Careers at Dorapocket TechVerse</SectionEyebrow>
      <SectionTitle className="mt-3 max-w-3xl">Build meaningful products with a sharp, kind team.</SectionTitle>

      <div className="mt-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 text-[17.3px] leading-relaxed text-muted space-y-4">
          <p>Dorapocket TechVerse is a founder-led product studio. We run small, senior squads, ship weekly, and care deeply about craft. If you love building real software that users pay for — come work with us.</p>
          <p>We’re remote-friendly, async-first, with weekly demo days. Compensation is competitive with meaningful upside on select builds.</p>
        </div>
        <div className="lg:col-span-5 glass rounded-[22px] p-6">
          <div className="font-[600] text-zinc-100 light:text-zinc-900">Why join Dorapocket TechVerse</div>
          <ul className="mt-3 text-[14.6px] text-muted space-y-2">
            <li>• Senior-only team, low meetings</li>
            <li>• Ship to production in week 2</li>
            <li>• AI-native product work</li>
            <li>• Flexible remote, India-friendly hours</li>
            <li>• Learning budget & conference support</li>
            <li>• Clear growth path, profit share on ventures</li>
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <div className="text-[12.5px] uppercase tracking-wider text-zinc-400">Open Roles</div>
        <div className="mt-4 grid gap-3">
          {openings.map(o=>(
            <div key={o.title} className="glass rounded-[18px] px-5 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div className="text-[17.6px] font-[600] text-zinc-100 light:text-zinc-900">{o.title}</div>
                <div className="text-[13.6px] text-muted">{o.type} • {o.stack}</div>
              </div>
              <a href="#apply" className="rounded-full px-4 h-10 inline-flex items-center border border-white/[0.2] text-[13.6px] text-zinc-200 hover:bg-white/[0.05] light:border-zinc-300 light:text-zinc-800">Apply</a>
            </div>
          ))}
        </div>
      </div>

      <div id="apply" className="mt-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-[22px] font-[630] text-heading">Apply to Dorapocket TechVerse</div>
          <p className="mt-2 text-muted">Send your portfolio, GitHub, and a short note about a product you’re proud of.</p>
          <div className="mt-5 text-[14.4px] text-zinc-300 light:text-zinc-700 space-y-1">
            <div>careers@dorapocket-techverse.com</div>
            <div>Response time: 3–5 business days</div>
          </div>
        </div>
        <form onSubmit={e=>{e.preventDefault(); alert("Thanks! The Dorapocket TechVerse team will review your application.")}} className="lg:col-span-7 glass rounded-[22px] p-6 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Full name" required className="bg-white/[0.045] border border-white/[0.16] rounded-xl px-4 h-12 outline-none focus:border-violet-400/60 light:bg-white light:border-zinc-300" />
            <input type="email" placeholder="Email" required className="bg-white/[0.045] border border-white/[0.16] rounded-xl px-4 h-12 outline-none focus:border-violet-400/60 light:bg-white light:border-zinc-300" />
          </div>
          <input placeholder="Role applying for" className="bg-white/[0.045] border border-white/[0.16] rounded-xl px-4 h-12 outline-none focus:border-violet-400/60 light:bg-white light:border-zinc-300" />
          <input placeholder="Portfolio / GitHub / LinkedIn URL" className="bg-white/[0.045] border border-white/[0.16] rounded-xl px-4 h-12 outline-none focus:border-violet-400/60 light:bg-white light:border-zinc-300" />
          <textarea placeholder="Tell us about a product you shipped and your role." rows={4} className="bg-white/[0.045] border border-white/[0.16] rounded-xl px-4 py-3 outline-none focus:border-violet-400/60 light:bg-white light:border-zinc-300" />
          <button className="rounded-full px-5 h-12 font-[620] text-white brand-gradient w-fit">Submit application</button>
          <div className="text-[12.8px] text-zinc-400 light:text-zinc-600">By applying you agree to our fair hiring and data policy at Dorapocket TechVerse.</div>
        </form>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-4 text-[14.4px] text-muted">
        {[
          ["Work culture","Calm, focused, async. No crunch. Weekly demos, kind code reviews."],
          ["Internships","Product, engineering, and design internships — 3–6 months, mentor-led."],
          ["Benefits","Competitive pay, flexible PTO, learning stipend, top-tier hardware."],
        ].map(([h,d])=>(
          <div key={h} className="rounded-2xl border border-white/[0.11] bg-white/[0.028] px-5 py-5 light:bg-white light:border-zinc-200">
            <div className="text-zinc-100 light:text-zinc-900 font-[600]">{h}</div>
            <div className="mt-1.5">{d}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
