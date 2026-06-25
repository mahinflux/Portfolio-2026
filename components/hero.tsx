import Image from "next/image";
import pfp from "../app/assets/pfpalt.png";

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] bg-white text-black font-main grid grid-cols-1 md:grid-cols-12 border-b border-black">
      {/* LEFT BLOCK: Descriptive & Typographic Layout Data (Spans 8 cols) */}
      <div className="col-span-1 md:col-span-8 flex flex-col justify-between p-6 md:p-12">
        {/* Subheader Index Grid */}
        <div className="grid grid-cols-3 gap-4 border-b border-black pb-6 text-xs md:text-sm font-bold tracking-widest uppercase text-brand-dark/80">
          <p>[ 01 ]</p>
          <p>SERIOUSLY GOOD</p>
          <p className="text-right">BASED IN — GLOBAL</p>
        </div>

        {/* Hero Title Focus */}
        <div className="my-16 md:my-20">
          <h1 className="text-[12vw] md:text-[9.5vw] font-black leading-[0.85] tracking-tighter uppercase text-left selection:bg-brand-main">
            PRODUCT
            <br />
            ENGINEER
          </h1>
        </div>

        {/* Layout Footer / CTA Row */}
        <div className="border-t border-black pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="max-w-xs text-xs md:text-sm uppercase tracking-tight text-brand-dark/70 leading-relaxed">
            Building objective, high-performance digital interfaces with
            mathematical precision.
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://cal.com/mahinflux"
            className="w-full sm:w-auto text-center bg-brand-dark text-white hover:bg-brand-main hover:text-black transition-colors duration-300 px-8 py-4 font-bold tracking-wider uppercase text-xs md:text-sm whitespace-nowrap"
          >
            Book A Call →
          </a>
        </div>
      </div>

      {/* RIGHT BLOCK: Image Canvas Box (Spans 4 cols - lines up with nav links exactly) */}
      <div className="col-span-1 md:col-span-4 relative bg-brand-white/30 min-h-[60vh] md:min-h-full flex flex-col justify-between border-t md:border-t-0 border-l border-black">
        {/* Technical Label Tag */}
        <div className="p-6 text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 border-b border-black/10 font-mono">
          DATA VIEW // FIG. 01
        </div>

        {/* Profile Element Graphic Asset */}
        <div className="relative w-full h-full flex items-end justify-center overflow-hidden pt-12 px-6">
          <Image
            src={pfp}
            alt="Abdulla Al Mahin Profile Portrait"
            priority
            className="object-contain w-auto h-[50vh] md:h-[70vh] grayscale contrast-115 mix-blend-multiply transition-all duration-500 hover:grayscale-0"
          />
        </div>
      </div>
    </section>
  );
}
