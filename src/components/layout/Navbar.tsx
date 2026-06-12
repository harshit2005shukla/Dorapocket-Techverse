import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/technologies", label: "Technologies" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark"|"light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("dptv-theme") as "dark"|"light"|null;
    const initial = saved || "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("dptv-theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="h-10 w-10 rounded-full flex items-center justify-center border border-white/[0.14] hover:border-white/[0.28] transition-colors cursor-pointer bg-white/[0.03] text-zinc-300 hover:text-white light:border-zinc-300 light:bg-white light:text-zinc-700"
    >
      {theme === "dark" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth"}); }, [location.pathname]);

  return (
    <header className="sticky top-0 z-[60] frosted-nav">
      <div className="container-1280 h-[78px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
         <img
                src="/favicon.png"
                alt="Dorapocket TechVerse"
                className="h-10 w-10 rounded-xl object-cover"
                        />
          <div className="leading-tight">
            <div className="text-[16.8px] font-[650] tracking-[-0.011em] text-zinc-100 light:text-zinc-900" style={{fontFamily:"Space Grotesk, Inter, sans-serif"}}>Dorapocket TechVerse</div>
            <div className="text-[11px] text-zinc-400 -mt-[1px] tracking-wide light:text-zinc-500">Turning Ideas Into Digital Reality</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[14.5px]">
          {navItems.map(n => (
            <NavLink key={n.to} to={n.to} className={({isActive}) =>
              cn("transition-colors", isActive ? "text-white light:text-zinc-900 font-medium" : "text-zinc-400 hover:text-zinc-200 light:text-zinc-600 light:hover:text-zinc-900")
            }>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/contact" className="hidden sm:inline-flex items-center rounded-full px-4 h-10 text-[13.8px] font-[600] text-white brand-gradient shadow-lift transition-transform hover:translate-y-[-1px]">
            Start a project
          </Link>
          <button onClick={()=>setOpen(v=>!v)} className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full border border-white/[0.15] text-zinc-200 light:border-zinc-300 light:text-zinc-800">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden border-t border-white/[0.08] light:border-zinc-200 bg-[#0a0c1a]/95 light:bg-white/95 backdrop-blur-xl"
          >
            <div className="container-1280 py-5 grid gap-2">
              {navItems.map(n=>(
                <NavLink key={n.to} to={n.to}
                  className={({isActive}) => cn("py-3 px-3 rounded-xl text-[15px]", isActive ? "bg-white/[0.065] text-white light:bg-zinc-100 light:text-zinc-900" : "text-zinc-300 light:text-zinc-700")}
                >{n.label}</NavLink>
              ))}
              <Link to="/contact" className="mt-2 rounded-xl brand-gradient text-white text-center py-3 font-semibold">Start a project</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
