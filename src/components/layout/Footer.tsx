import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.09] light:border-zinc-200 bg-[#080917] light:bg-[#faf9ff]">
      <div className="container-1280 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-[12px] brand-gradient flex items-center justify-center text-white font-bold" style={{fontFamily:"Space Grotesk, Inter, sans-serif"}}>D</div>
              <div>
                <div className="text-[18px] font-[650] text-zinc-100 light:text-zinc-900 tracking-tight" style={{fontFamily:"Space Grotesk, Inter, sans-serif"}}>Dorapocket TechVerse</div>
                <div className="text-[12.5px] text-zinc-400 light:text-zinc-600">Building Digital Futures</div>
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-zinc-400 max-w-sm light:text-zinc-600">
              A product-first technology studio crafting AI-powered SaaS, enterprise platforms, and delightful customer experiences for ambitious teams worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3 text-zinc-400 light:text-zinc-600">
              <a href="#" aria-label="X" className="h-9 w-9 rounded-full flex items-center justify-center border border-white/[0.13] hover:border-white/[0.32] transition light:border-zinc-300">𝕏</a>
              <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full flex items-center justify-center border border-white/[0.13] hover:border-white/[0.32] transition light:border-zinc-300">in</a>
              <a href="#" aria-label="GitHub" className="h-9 w-9 rounded-full flex items-center justify-center border border-white/[0.13] hover:border-white/[0.32] transition light:border-zinc-300">GH</a>
              <a href="#" aria-label="Dribbble" className="h-9 w-9 rounded-full flex items-center justify-center border border-white/[0.13] hover:border-white/[0.32] transition light:border-zinc-300">◌</a>
            </div>
          </div>

          <div>
            <div className="text-[12.5px] uppercase tracking-widest text-zinc-500 light:text-zinc-500 mb-4">Company</div>
            <ul className="space-y-3 text-[14.6px] text-zinc-300 light:text-zinc-700">
              <li><Link to="/about" className="hover:text-white light:hover:text-zinc-900">About Dorapocket TechVerse</Link></li>
              <li><Link to="/careers" className="hover:text-white light:hover:text-zinc-900">Careers</Link></li>
              <li><Link to="/portfolio" className="hover:text-white light:hover:text-zinc-900">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-white light:hover:text-zinc-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[12.5px] uppercase tracking-widest text-zinc-500 light:text-zinc-500 mb-4">Services</div>
            <ul className="space-y-3 text-[14.6px] text-zinc-300 light:text-zinc-700">
              <li><Link to="/services">Full-Stack Product</Link></li>
              <li><Link to="/services">AI & Automation</Link></li>
              <li><Link to="/services">SaaS Development</Link></li>
              <li><Link to="/services">Cloud & DevOps</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[12.5px] uppercase tracking-widest text-zinc-500 light:text-zinc-500 mb-4">Reach us</div>
            <ul className="space-y-3 text-[14.6px] text-zinc-300 light:text-zinc-700">
              <li>hello@dorapocket-techverse.com</li>
              <li>+91 90000 28471</li>
              <li>Bengaluru • Remote Global</li>
              <li className="pt-1 text-zinc-400 light:text-zinc-600">Mon–Fri, 10am – 7pm IST</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/[0.08] light:border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 text-[13.5px] text-zinc-500 light:text-zinc-600">
          <div>© {new Date().getFullYear()} Dorapocket TechVerse. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="#">Privacy</Link>
            <Link to="#">Terms</Link>
            <Link to="#">Security</Link>
            <Link to="#">Status</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
