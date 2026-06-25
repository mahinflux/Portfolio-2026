import Link from "next/link";

export default function Work() {
  const projects = [
    {
      id: "01",
      title: "Synthetix Core",
      category: "Interface Architecture",
      year: "2026",
      tech: "Next.js // Rust // WASM",
    },
    {
      id: "02",
      title: "Vecto Analytics",
      category: "Data Engine UI",
      year: "2025",
      tech: "TypeScript // D3.js // Tailwind",
    },
    {
      id: "03",
      title: "Apex Engine",
      category: "Product Performance Optimization",
      year: "2025",
      tech: "React Server Components",
    },
  ];

  return (
    <section
      id="work"
      className="w-full bg-white text-black font-main grid grid-cols-1 md:grid-cols-12 border-b border-black"
    >
      {/* LEFT COLUMN: Section Title Indicator (Spans 4 columns) */}
      <div className="col-span-1 md:col-span-4 p-6 md:p-12 bg-white flex flex-col justify-between border-b md:border-b-0 border-black md:border-r">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 font-mono block mb-2">
            // INDEX FILTERS
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
            SELECTED
            <br />
            PROJECTS
          </h2>
        </div>

        <div className="hidden md:block text-[8vw] font-black leading-none tracking-tighter text-neutral-200/60 select-none">
          [03]
        </div>
      </div>

      {/* RIGHT COLUMN: Project Records Feed (Spans 8 columns) */}
      <div className="col-span-1 md:col-span-8 flex flex-col justify-between">
        {/* Project List Group */}
        <div className="w-full divide-y divide-black">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-6 md:p-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center transition-all duration-300 hover:bg-black hover:text-white"
            >
              {/* ID & Year */}
              <div className="sm:col-span-2 flex sm:flex-col justify-between sm:justify-start gap-2 text-xs font-mono font-bold text-brand-dark/40 group-hover:text-brand-main">
                <span>[ {project.id} ]</span>
                <span className="sm:mt-1">{project.year}</span>
              </div>

              {/* Title & Category Info */}
              <div className="sm:col-span-6">
                <h3 className="text-lg md:text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-brand-dark/60 group-hover:text-white/70 mt-1">
                  {project.category}
                </p>
              </div>

              {/* Stack Framework Details */}
              <div className="sm:col-span-4 text-left sm:text-right text-[11px] font-bold uppercase tracking-widest text-brand-dark/70 group-hover:text-white/80">
                {project.tech}
              </div>
            </div>
          ))}
        </div>

        {/* LINK OUT ZONE: "See More" Call to Action Element */}
        <Link
          href="/work"
          className="w-full bg-brand-dark text-white hover:bg-brand-main hover:text-black transition-colors duration-300 border-t border-black p-8 flex justify-between items-center group font-bold uppercase tracking-wider text-xs md:text-sm"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-mono tracking-widest text-white/50 group-hover:text-black/50">
              // DEEP INDEX CATALOGUE
            </span>
            <span>View All Engineering Documentation</span>
          </div>

          <div className="text-lg md:text-xl transform group-hover:translate-x-3 transition-transform duration-300">
            See More Case Studies ↗
          </div>
        </Link>
      </div>
    </section>
  );
}
