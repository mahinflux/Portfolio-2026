export default function About() {
  const stats = [
    { label: "Core Focus", value: "Interface Architecture & Systems Design" },
    {
      label: "Stack Performance",
      value: "Next.js, TypeScript, Tailwind, Rust",
    },
    { label: "Philosophy", value: "Form follows function. Absolute clarity." },
  ];

  return (
    <section
      id="about"
      className="w-full bg-white text-black font-main grid grid-cols-1 md:grid-cols-12 border-b border-black"
    >
      {/* LEFT BLOCK: Accent Meta Column (Spans 4 columns — lines up with Brand/Logo above) */}
      <div className="col-span-1 md:col-span-4 p-6 md:p-12 bg-brand-white/10 flex flex-col justify-between border-b md:border-b-0 border-black">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 font-mono block mb-2">
            // INDEX INFO
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
            BIOGRAPHY
          </h2>
        </div>

        {/* Large Technical Label at the bottom of the left column */}
        <div className="hidden md:block text-[8vw] font-black leading-none tracking-tighter text-neutral-200/60 select-none">
          [02]
        </div>
      </div>

      {/* RIGHT BLOCK: The Main Content & Data Grid (Spans 8 columns) */}
      <div className="col-span-1 md:col-span-8 flex flex-col justify-between border-l-0 md:border-l border-black">
        {/* Top Half: Narrative Copy */}
        <div className="p-6 md:p-12 max-w-3xl">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-main mb-6">
            Structural Integrity x High Performance
          </p>
          <h3 className="text-xl md:text-3xl font-bold tracking-tight uppercase leading-snug mb-8">
            I engineer elite digital solutions that sit at the intersection of
            raw performance, bulletproof code design, and objective minimalism.
          </h3>
          <p className="text-sm md:text-base text-brand-dark/80 leading-relaxed font-medium">
            I don&apos;t just build layouts; I build structured data engines.
            Approaching front-end design with mathematical strictness, I strip
            away unnecessary friction to optimize layout calculations, runtime
            paint performance, and user experiences.
          </p>
        </div>

        {/* Bottom Half: Systematic Data Table (Pure Swiss Presentation) */}
        <div className="border-t border-black grid grid-cols-1 sm:grid-cols-3 w-full">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 border-b sm:border-b-0 border-black sm:border-r last:border-r-0 flex flex-col justify-between min-h-[140px]"
            >
              <span className="text-[9px] font-bold tracking-widest text-brand-dark/50 uppercase font-mono mb-6">
                SPEC. 0{i + 1} // {stat.label}
              </span>
              <p className="text-sm font-bold uppercase tracking-tight leading-tight text-brand-dark">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
