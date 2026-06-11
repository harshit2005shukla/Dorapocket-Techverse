import { SectionEyebrow, SectionTitle } from "@/components/ui/shared";
import { useState } from "react";
import SEO from "@/components/SEO";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <SEO 
        title="Contact Dorapocket TechVerse | Get in Touch"
        description="Start your next project with Dorapocket TechVerse. Reach out for AI solutions, SaaS development, or full-stack product builds. We reply within 24 hours."
        url="https://dorapocket-techverse.com/contact"
      />
    <div className="container-1280 py-20 md:py-28">
      <SectionEyebrow>Contact Dorapocket TechVerse</SectionEyebrow>
      <SectionTitle className="mt-3">Let’s build something excellent.</SectionTitle>
      <p className="mt-4 text-muted text-[17px] max-w-2xl">Tell us about your product, timeline, and budget. We usually reply within 24 hours with next steps.</p>

      <div className="mt-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <form 
            onSubmit={(e)=>{ e.preventDefault(); setSent(true); }}
            className="glass rounded-[24px] p-6 md:p-8 grid gap-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-[12.6px] text-zinc-400 light:text-zinc-600">Full name</label>
                <input required placeholder="Aarav Mehta" className="mt-1.5 w-full bg-white/[0.045] border border-white/[0.16] rounded-xl px-4 h-12 outline-none focus:border-violet-400/60 light:bg-white light:border-zinc-300" />
              </div>
              <div>
                <label className="text-[12.6px] text-zinc-400 light:text-zinc-600">Work email</label>
                <input type="email" required placeholder="you@company.com" className="mt-1.5 w-full bg-white/[0.045] border border-white/[0.16] rounded-xl px-4 h-12 outline-none focus:border-violet-400/60 light:bg-white light:border-zinc-300" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-[12.6px] text-zinc-400 light:text-zinc-600">Company</label>
                <input placeholder="Your company" className="mt-1.5 w-full bg-white/[0.045] border border-white/[0.16] rounded-xl px-4 h-12 outline-none focus:border-violet-400/60 light:bg-white light:border-zinc-300" />
              </div>
              <div>
                <label className="text-[12.6px] text-zinc-400 light:text-zinc-600">Budget</label>
                <select className="mt-1.5 w-full bg-white/[0.045] border border-white/[0.16] rounded-xl px-4 h-12 outline-none focus:border-violet-400/60 light:bg-white light:border-zinc-300 text-zinc-300 light:text-zinc-700">
                  <option>$15k – $40k</option>
                  <option>$40k – $120k</option>
                  <option>$120k+</option>
                  <option>Monthly squad</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-[12.6px] text-zinc-400 light:text-zinc-600">Project details</label>
              <textarea required rows={5} placeholder="What are you building? Goals, timeline, users…" className="mt-1.5 w-full bg-white/[0.045] border border-white/[0.16] rounded-xl px-4 py-3 outline-none focus:border-violet-400/60 light:bg-white light:border-zinc-300" />
            </div>
            <button className="rounded-full px-5 h-12 font-[620] text-white brand-gradient w-fit">Send message</button>
            {sent && <div className="text-emerald-400 text-[14px]">Thanks! Dorapocket TechVerse will get back to you within 24 hours.</div>}
            <div className="text-[12.8px] text-zinc-400 light:text-zinc-600">We respect your privacy. Your data stays with Dorapocket TechVerse only.</div>
          </form>
        </div>

        <div className="lg:col-span-5 space-y-5">
          <div className="glass rounded-[22px] p-6">
            <div className="text-[13.5px] text-zinc-300 light:text-zinc-700 font-[600]">Business inquiry</div>
            <div className="mt-2 text-[15px] text-muted">
              hello@dorapocket-techverse.com<br/>
              partnerships@dorapocket-techverse.com
            </div>
            <div className="mt-4 text-[13.7px] text-zinc-400 light:text-zinc-600">
              Prefer a call? Book via email and we’ll share a Calendly link.
            </div>
          </div>

          <div className="glass rounded-[22px] p-6">
            <div className="text-[13.5px] text-zinc-300 light:text-zinc-700 font-[600]">Phone & Location</div>
            <div className="mt-2 text-[15px] text-muted">
              +91 90000 28471<br/>
              Bengaluru, Karnataka — Remote Global<br/>
              Mon–Fri, 10:00 – 19:00 IST
            </div>
          </div>

          <div className="glass rounded-[22px] p-6">
            <div className="text-[13.5px] text-zinc-300 light:text-zinc-700 font-[600]">Social</div>
            <div className="mt-2 text-[14.6px] text-muted space-y-1">
              <div>X / Twitter: @dorapockettech</div>
              <div>LinkedIn: /company/dorapocket-techverse</div>
              <div>GitHub: /dorapocket-techverse</div>
            </div>
          </div>

          <div className="rounded-[20px] border border-white/[0.12] bg-white/[0.025] p-5 text-[13.8px] text-zinc-400 light:bg-white light:border-zinc-200 light:text-zinc-600">
            Google Maps<br/>
            <div className="mt-2 h-[148px] rounded-xl bg-[linear-gradient(135deg,rgba(120,100,248,0.18),rgba(73,199,255,0.13))] border border-white/[0.12] light:border-zinc-200 flex items-center justify-center text-zinc-300 light:text-zinc-700">
              Bengaluru • Map placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
