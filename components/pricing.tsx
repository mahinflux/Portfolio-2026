export default function Pricing() {
  const tiers = [
    {
      id: "01",
      name: "Retainer Commit",
      price: "$2,500",
      period: "PER MONTH",
      deliverable: "Dedicated Interface Architecture",
      features: [
        "20 Hours structural development / week",
        "Next.js optimization audits",
        "Direct Slack technical integration",
        "24-Hour emergency patch response",
      ],
      premium: false,
    },
    {
      id: "02",
      name: "Fixed Scope Sprint",
      price: "$6,000",
      period: "PER PROJECT",
      deliverable: "Full MVP System Production",
      features: [
        "Complete 0-to-1 code engineering",
        "Custom design system token translation",
        "End-to-end component layout profiling",
        "1 Month direct launch oversight",
      ],
      premium: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full bg-white text-black font-main grid grid-cols-1 md:grid-cols-12 border-b border-black"
    >
      {/* LEFT COLUMN: Section Title Alignment (Spans 4 columns) */}
      <div className="col-span-1 md:col-span-4 p-6 md:p-12 bg-white flex flex-col justify-between border-b md:border-b-0 border-black md:border-r">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 font-mono block mb-2">
            // INVESTMENT MATRIX
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
            PRICING
            <br />
            MODELS
          </h2>
        </div>

        <div className="hidden md:block text-[8vw] font-black leading-none tracking-tighter text-neutral-200/60 select-none">
          [06]
        </div>
      </div>

      {/* RIGHT COLUMN: Two Tier Pricing Record Blocks (Spans 8 columns) */}
      <div className="col-span-1 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`p-6 md:p-10 flex flex-col justify-between transition-colors duration-200 ${
              tier.premium ? "bg-brand-dark text-white" : "bg-white text-black"
            }`}
          >
            {/* Tier Top Meta Structure */}
            <div>
              <div className="flex justify-between items-center border-b border-current pb-4 mb-6 font-mono text-[10px] font-bold">
                <span>// MODEL 0{tier.id}</span>
                <span
                  className={
                    tier.premium ? "text-brand-main" : "text-brand-dark/50"
                  }
                >
                  {tier.premium ? "[ RECOM_ ]" : "[ STND_ ]"}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-1">
                {tier.name}
              </h3>
              <p
                className={`text-xs uppercase font-bold tracking-wider mb-8 ${
                  tier.premium ? "text-white/60" : "text-brand-dark/60"
                }`}
              >
                {tier.deliverable}
              </p>

              {/* Precise Pricing Metric Display */}
              <div className="mb-10 flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
                  {tier.price}
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-60">
                  / {tier.period}
                </span>
              </div>

              {/* Feature Specifications Grid List */}
              <ul className="space-y-4 border-t border-current/20 pt-6">
                {tier.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-xs font-medium uppercase tracking-tight"
                  >
                    <span
                      className={
                        tier.premium ? "text-brand-main" : "text-black"
                      }
                    >
                      →
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Transactional Footer Cell */}
            <a
              href="https://cal.com/mahinflux"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-12 block w-full text-center p-4 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                tier.premium
                  ? "bg-brand-main text-black hover:bg-white hover:text-black"
                  : "bg-black text-white hover:bg-brand-main hover:text-black"
              }`}
            >
              Initiate Engagement
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
