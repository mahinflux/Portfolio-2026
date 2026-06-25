"use client";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { id: "01", name: "about", href: "#about" },
    { id: "02", name: "work", href: "#work" },
    { id: "03", name: "services", href: "#services" },
    { id: "04", name: "pricing", href: "#pricing" },
  ];

  return (
    <nav className="w-full bg-white text-black border-b border-black font-main select-none grid grid-cols-1 md:grid-cols-12 sticky top-0 z-50">
      {/* Brand Column (Always snaps 4 columns on desktop) */}
      <div className="p-6 md:p-8 flex items-center md:col-span-4 border-b md:border-b-0 border-black">
        <Link
          href="/"
          className="font-black text-xl md:text-2xl tracking-tighter uppercase leading-none hover:text-brand-main transition-colors duration-200"
        >
          Abdulla Al mahin
        </Link>
      </div>

      {/* Center Grid Fill Block (Spans 4 columns) */}
      <div className="hidden md:block md:col-span-4 border-x border-black bg-brand-white/10"></div>

      {/* Action / Links Sub-Grid (Spans 4 columns) */}
      <div className="col-span-1 md:col-span-4 grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-row justify-stretch w-full">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex-1 flex flex-col justify-between p-4 md:p-6 text-[11px] font-bold uppercase tracking-wider border-r border-b sm:border-b-0 border-black last:border-r-0 group hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
          >
            {/* Index Tracker */}
            <span className="text-[9px] text-brand-dark/50 group-hover:text-brand-main transition-colors mb-4 block font-mono">
              // {link.id}
            </span>

            <span className="tracking-widest">{link.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
