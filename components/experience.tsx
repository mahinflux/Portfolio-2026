export default function Experience() {
  const experiences = [
    {
      id: "01",
      period: "2025 — PRESENT",
      role: "Lead Product Engineer",
      company: "Flux Digital Systems",
      description:
        "Architecting robust interface systems and high-throughput web frontends. Redesigned core component architecture resulting in a significant reduction in layout rendering cycles and improving client-side bundle performance across complex micro-frontends.",
    },
    {
      id: "02",
      period: "2024 — 2025",
      role: "Senior Frontend Engineer",
      company: "Nexus Labs",
      description:
        "Engineered data-dense telemetry dashboards using Next.js and Tailwind CSS v4. Constructed type-safe client-server data synchronization pathways and optimized heavy UI interaction rendering frames to guarantee ultra-fluid performance.",
    },
    {
      id: "03",
      period: "2023 — 2024",
      role: "Full-Stack Developer",
      company: "Core Tech Studio",
      description:
        "Developed full-stack features using TypeScript and modular Node runtimes. Enforced strict pixel-perfect adherence to responsive mathematical layout specs while reducing continuous deployment cycle footprints.",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full bg-white text-black font-main grid grid-cols-1 md:grid-cols-12 border-b border-black"
    >
      {/* LEFT COLUMN: Section Header Tracking (Spans 4 columns) */}
      <div className="col-span-1 md:col-span-4 p-6 md:p-12 bg-white flex flex-col justify-between border-b md:border-b-0 border-black md:border-r">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 font-mono block mb-2">
            // RECORD CHRONOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
            PROFESSIONAL
            <br />
            EXPERIENCE
          </h2>
        </div>

        <div className="hidden md:block text-[8vw] font-black leading-none tracking-tighter text-neutral-200/60 select-none">
          [05]
        </div>
      </div>

      {/* RIGHT COLUMN: The Chronological Timeline Feed (Spans 8 columns) */}
      <div className="col-span-1 md:col-span-8 divide-y divide-black">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="p-6 md:p-12 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start transition-colors duration-200 hover:bg-brand-white/10"
          >
            {/* Timeline Period Stamp (Spans 3 cols) */}
            <div className="sm:col-span-3 text-xs font-mono font-bold text-brand-main tracking-widest">
              // {exp.period}
            </div>

            {/* Corporate Identification & Title (Spans 4 cols) */}
            <div className="sm:col-span-4">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight leading-none mb-1 text-black">
                {exp.role}
              </h3>
              <p className="text-xs uppercase tracking-wider font-bold text-brand-dark/50">
                {exp.company}
              </p>
            </div>

            {/* Substantive Technical Overview (Spans 5 cols) */}
            <div className="sm:col-span-5">
              <p className="text-sm text-brand-dark/80 leading-relaxed font-medium">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
