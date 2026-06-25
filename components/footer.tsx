import Link from "next/link";

export default function Footer() {
  const directory = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
  ];

  const social = [
    { name: "GitHub", href: "https://github.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Cal.com", href: "https://cal.com/mahinflux" },
  ];

  return (
    <footer className="w-full bg-white text-black font-main font-medium select-none grid grid-cols-1 md:grid-cols-12 text-xs uppercase tracking-wider">
      {/* Brand & Rights Stamp Cell (Spans 4 columns) */}
      <div className="col-span-1 md:col-span-4 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 border-black md:border-r gap-8">
        <div>
          <span className="font-black text-lg tracking-tighter block mb-2">
            ABDULLA AL MAHIN
          </span>
          <span className="text-[10px] font-mono text-brand-dark/50">
            // PRODUCT ENGINEER SPECIFICATION
          </span>
        </div>

        <div className="text-[10px] font-mono tracking-normal text-brand-dark/40">
          © 2026 GENERAL LAYOUT FRAMEWORK. ALL CODE PRIVILEGES RECORDED.
        </div>
      </div>

      {/* Directory Routing Columns Block (Spans 4 columns) */}
      <div className="col-span-1 sm:col-cols-2 md:col-span-4 grid grid-cols-2 divide-x divide-black border-b md:border-b-0 border-black">
        {/* Local Links Array */}
        <div className="p-6 md:p-8 flex flex-col gap-3">
          <span className="text-[9px] font-mono text-brand-dark/40 mb-2 block">
            // SITE INDEX
          </span>
          {directory.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="hover:text-brand-main transition-colors duration-150 max-w-max"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Network Handshakes Array */}
        <div className="p-6 md:p-8 flex flex-col gap-3">
          <span className="text-[9px] font-mono text-brand-dark/40 mb-2 block">
            // CONNECTIONS
          </span>
          {social.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-main transition-colors duration-150 max-w-max"
            >
              {item.name} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Structural Data Metas Block (Spans 4 columns) */}
      <div className="col-span-1 md:col-span-4 p-6 md:p-8 flex flex-col justify-between items-start md:items-end gap-8 bg-brand-white/10">
        <div className="w-full md:text-right">
          <span className="text-[9px] font-mono text-brand-dark/40 mb-2 block">
            // RUNTIME METRIC
          </span>
          <div className="font-mono text-[11px] font-bold text-brand-dark/80 bg-white border border-black/10 inline-block px-3 py-1">
            STATUS: ACTIVE // UTC+6
          </div>
        </div>

        <div className="w-full md:text-right text-[9px] font-mono text-brand-dark/50">
          LATENCY CALCULATED OBJECTIVELY BY THE BROWSER INSTANCE.
        </div>
      </div>
    </footer>
  );
}
