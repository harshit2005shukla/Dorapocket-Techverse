import { SectionEyebrow, SectionTitle } from "@/components/ui/shared";
import SEO from "@/components/SEO";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "React", note: "UI library" },
      { name: "Next.js", note: "Full-stack React" },
      { name: "TypeScript", note: "Type-safe" },
      { name: "Tailwind CSS", note: "Design system" },
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", note: "Runtime" },
      { name: "Express.js", note: "API framework" },
      { name: "Python", note: "AI / services" },
    ]
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", note: "Document DB" },
      { name: "PostgreSQL", note: "Relational" },
      { name: "MySQL", note: "Relational" },
    ]
  },
  {
    title: "Cloud",
    items: [
      { name: "AWS", note: "Infra" },
      { name: "Docker", note: "Containers" },
      { name: "Vercel", note: "Edge hosting" },
    ]
  },
  {
    title: "AI",
    items: [
      { name: "OpenAI", note: "LLMs" },
      { name: "LangChain", note: "RAG / agents" },
      { name: "Vector Databases", note: "Pinecone / pgvector" },
    ]
  }
];

export default function Technologies(){
  return (
    <>
      <SEO 
        title="Technologies | Dorapocket TechVerse Tech Stack"
        description="Modern production stack: React, Next.js, TypeScript, Tailwind, Node.js, Python, PostgreSQL, MongoDB, AWS, Docker, Vercel, OpenAI, LangChain, and Vector Databases."
        url="https://dorapocket-techverse.com/technologies"
      />
    <div className="container-1280 py-20 md:py-28">
      <SectionEyebrow>Technology Stack — Dorapocket TechVerse</SectionEyebrow>
      <SectionTitle className="mt-3">Modern. Reliable. Fast.</SectionTitle>
      <p className="mt-4 text-muted max-w-2xl text-[17px]">We pick boring, proven tools — then push them to their best. Every Dorapocket TechVerse build is type-safe, observable, and easy to hire for.</p>

      <div className="mt-12 space-y-12">
        {groups.map(g => (
          <div key={g.title}>
            <div className="text-[12.6px] uppercase tracking-[0.16em] text-zinc-400 light:text-zinc-600">{g.title}</div>
            <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {g.items.map(it => (
                <div key={it.name} className="glass rounded-[18px] px-5 py-5 hover:bg-white/[0.055] transition light:hover:bg-white">
                  <div className="text-[17.3px] font-[610] text-zinc-100 light:text-zinc-900">{it.name}</div>
                  <div className="text-[13.6px] text-muted mt-1">{it.note}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 glass rounded-[24px] p-7 md:p-9">
        <div className="text-[20px] font-[620] text-heading">Why this stack?</div>
        <p className="mt-3 text-[15.6px] text-muted max-w-3xl leading-relaxed">
          TypeScript across the stack reduces bugs. Next.js gives us edge speed and great SEO. Postgres keeps data solid. OpenAI + vector search unlocks real AI features — not demos. At Dorapocket TechVerse we ship with CI/CD, tests, and monitoring from day one, so your product stays fast as it grows.
        </p>
      </div>
    </div>
    </>
  )
}
