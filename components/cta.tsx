export default function CTA() {
  return (
    <section
      id="cta"
      className="w-full bg-brand-main text-black font-main grid grid-cols-1 md:grid-cols-12 border-b border-black"
    >
      {/* Heavy Action Typography Header (Spans 8 columns) */}
      <div className="col-span-1 md:col-span-8 p-6 md:p-12 flex flex-col justify-between border-b md:border-b-0 border-black md:border-r">
        <span className="text-[10px] font-bold uppercase tracking-widest text-black/50 font-mono block mb-12">
          // PIPELINE CALL TO ACTION
        </span>

        <h2 className="text-[8vw] md:text-[6.5vw] font-black leading-[0.85] tracking-tighter uppercase mb-12">
          LET&apos;S ENGINEER
          <br />
          SOMETHING REAL.
        </h2>

        <div className="max-w-md text-xs md:text-sm font-bold uppercase tracking-tight leading-relaxed">
          Currently taking on core architecture engineering, system
          infrastructure refactoring, and performance consulting.
        </div>
      </div>

      {/* Persistent Link Booking Grid Area (Spans 4 columns) */}
      <a
        href="https://cal.com/mahinflux"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-1 md:col-span-4 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 flex flex-col justify-between p-6 md:p-12 group min-h-[300px] md:min-h-full"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-black/40 font-mono block text-right">
          SECURE DISPATCH // 07
        </span>

        <div className="flex justify-between items-end w-full">
          <span className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">
            BOOK A CALL <br />
            NOW →
          </span>

          <div className="text-4xl font-mono leading-none font-bold text-brand-main transform group-hover:-translate-y-2 transition-transform duration-300">
            ⎋
          </div>
        </div>
      </a>
    </section>
  );
}
