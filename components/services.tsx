export default function Services() {
  const servicesList = [
    {
      id: "01",
      title: "Interface Architecture",
      deliverable: "Design Engineering Systems",
      metric: "Sub-100ms Page Loads // 100% Core Web Vitals",
      details:
        "Translating complex design systems into rigid, reusable component primitives. Specializing in highly mathematical layouts, fluid typography pipelines, and performance-tuned asset rendering.",
    },
    {
      id: "02",
      title: "Full-Stack System Engineering",
      deliverable: "Next.js & API Integration",
      metric: "Type-Safe Network Boundaries",
      details:
        "Architecting end-to-end applications with structural integrity. Connecting Next.js Server Components with blazing-fast backend runtimes, using bulletproof type safety.",
    },
    {
      id: "03",
      title: "Runtime Optimization",
      deliverable: "Performance Refactoring",
      metric: "Zero Unnecessary Rerenders",
      details:
        "Profiling and stripping runtime bloat out of existing codebases. Eliminating heavy layout calculations, optimizing JavaScript bundle trees, and maximizing frame rates.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-white text-black font-main grid grid-cols-1 md:grid-cols-12 border-b border-black"
    >
      {/* LEFT COLUMN: Section Header Tracking (Spans 4 columns) */}
      <div className="col-span-1 md:col-span-4 p-6 md:p-12 bg-brand-white/10 flex flex-col justify-between border-b md:border-b-0 border-black md:border-r">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 font-mono block mb-2">
            // CAPABILITIES MAPPING
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
            ENGINEERING
            <br />
            SERVICES
          </h2>
        </div>

        <div className="hidden md:block text-[8vw] font-black leading-none tracking-tighter text-neutral-200/60 select-none">
          [04]
        </div>
      </div>

      {/* RIGHT COLUMN: The Capabilities Matrix (Spans 8 columns) */}
      <div className="col-span-1 md:col-span-8 divide-y divide-black">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start transition-colors duration-200 hover:bg-brand-white/10"
          >
            {/* Cell Index Number (Mono-spaced grid anchor) */}
            <div className="lg:col-span-1 text-xs font-mono font-bold text-brand-main">
              // {service.id}
            </div>

            {/* Core Capability Identification */}
            <div className="lg:col-span-5">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-none mb-2">
                {service.title}
              </h3>
              <p className="text-xs uppercase tracking-wider font-bold text-brand-dark/50">
                {service.deliverable}
              </p>
            </div>

            {/* Description & Structural Metric Data */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <p className="text-sm text-brand-dark/80 leading-relaxed font-medium mb-6">
                {service.details}
              </p>

              {/* Objective Metric Label */}
              <div className="border-t border-black/20 pt-3 text-[10px] font-mono font-bold uppercase tracking-widest text-brand-dark/60">
                <span className="text-black">TARGET:</span> {service.metric}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
