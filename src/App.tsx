import { useState } from "react";

type Tab = "explore" | "twins" | "assistant" | "localhub";
type Lang = "en" | "hi";

const t = (en: string, hi: string, lang: Lang) => lang === "en" ? en : hi;

// ── Icons ──────────────────────────────────────────────────────────────────

function IconMic({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function IconSearch({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconMap({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

function IconAlert({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconWhatsapp({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.535 5.847L.057 23.215a.75.75 0 0 0 .917.921l5.43-1.474A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.518-5.178-1.42l-.371-.22-3.845 1.043 1.059-3.773-.238-.386A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function IconChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function IconPhone({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconStar({ className = "", filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconArrowUp({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

function IconCalendar({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconSend({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function IconGlobe({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconShield({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconUsers({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconMapPin({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconX({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Top Bar ────────────────────────────────────────────────────────────────

function TopBar({ lang, setLang, onBack }: { lang: Lang; setLang: (l: Lang) => void; onBack?: () => void }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        {onBack && (
          <button onClick={onBack} className="mr-1 p-1 rounded-full hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
        )}
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">B</span>
          </div>
          <div>
            <div className="font-bold text-sm text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>
              Bharat Sathi
            </div>
            {!onBack && <div className="text-xs text-gray-500 -mt-0.5">De-congestion & Trust Layer</div>}
          </div>
        </div>
        <span className="ml-1 text-xs font-semibold bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">ASI 1363</span>
      </div>
      <button
        onClick={() => setLang(lang === "en" ? "hi" : "en")}
        className="text-xs font-medium text-gray-600 border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-50 transition-colors"
      >
        {lang === "en" ? "EN | हिंदी" : "EN | हिंदी"}
      </button>
    </div>
  );
}

// ── Bottom Nav ─────────────────────────────────────────────────────────────

function BottomNav({ active, setTab }: { active: Tab; setTab: (t: Tab) => void }) {
  const tabs: { id: Tab; en: string; hi: string; icon: JSX.Element }[] = [
    { id: "explore", en: "Explore", hi: "खोजें", icon: <IconGlobe className="w-5 h-5" /> },
    { id: "twins", en: "Twins", hi: "ट्विन्स", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /><path d="M15 5l4 4" /></svg> },
    { id: "assistant", en: "Assistant", hi: "सहायक", icon: <IconMic className="w-5 h-5" /> },
    { id: "localhub", en: "Local Hub", hi: "लोकल हब", icon: <IconMapPin className="w-5 h-5" /> },
  ];

  return (
    <div className="flex border-t border-gray-100 bg-white sticky bottom-0 z-50">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setTab(tab.id)}
            className={`flex-1 flex flex-col items-center py-2.5 gap-0.5 transition-colors ${isActive ? "text-green-700" : "text-gray-400"}`}
          >
            <div className={`${isActive ? "bg-green-50 rounded-xl px-3 py-1" : "px-3 py-1"} transition-all`}>
              {tab.icon}
            </div>
            <span className="text-[10px] font-medium">{tab.en}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── Screen 1: Explore ─────────────────────────────────────────────────────

function ExploreScreen({ lang, setTab }: { lang: Lang; setTab: (t: Tab) => void }) {
  const [filter, setFilter] = useState("Monuments");
  const filters = ["Monuments", "Craft Villages", "Homestays", "Cuisine"];

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      {/* Audio Banner */}
      <div className="mx-4 mt-4 mb-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
          <IconMic className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm text-gray-900">Ask in Hindi / English</div>
          <div className="text-xs text-gray-500">Sarvam / Bhashini Audio Assistant</div>
        </div>
        <button
          onClick={() => setTab("assistant")}
          className="bg-orange-500 text-white text-xs font-semibold px-4 py-2 rounded-xl flex-shrink-0 hover:bg-orange-600 transition-colors"
        >
          Speak
        </button>
      </div>

      {/* Hero */}
      <div className="px-4 pb-4">
        <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200 mb-3">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-dot"></span>
          Verified Sustainable Tourism Pilot
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
          See India deeply,{" "}
          <span className="text-orange-600 italic">not just crowdedly.</span>
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          For every overcrowded monument you search, we find you a verified, peaceful alternative nearby—while keeping you safe and putting money directly into local hands.
        </p>
      </div>

      {/* Search */}
      <div className="px-4 mb-3">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
          <IconSearch className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search Indian city, monument, or region…"
            className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
          />
          <IconMic className="w-4 h-4 text-orange-500 flex-shrink-0" />
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex gap-2 px-4 mb-4 overflow-x-auto pb-1">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
              filter === f
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Trust Metrics */}
      <div className="mx-4 mb-4 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="grid grid-cols-3 divide-x divide-gray-100">
          {[
            { val: "15+", label: "Curated Twin\nPairs" },
            { val: "Direct", label: "Operator\nContacts" },
            { val: "100%", label: "ASI Verified\nData" },
          ].map((m, i) => (
            <div key={i} className="p-3 text-center">
              <div className={`font-extrabold text-lg ${i === 2 ? "text-blue-600" : i === 1 ? "text-green-700" : "text-orange-600"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                {m.val}
              </div>
              <div className="text-[10px] text-gray-500 leading-tight whitespace-pre-line">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Card */}
      <div className="mx-4 mb-4 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-4 pt-3 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconMap className="w-4 h-4 text-gray-600" />
            <span className="font-semibold text-sm text-gray-900">Golden Triangle Pilot Pins</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span>Crowded</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-600"></span>Quiet Twin</span>
          </div>
        </div>
        {/* Map SVG */}
        <div className="relative bg-green-50 mx-4 mb-3 rounded-xl overflow-hidden" style={{ height: 160 }}>
          <svg viewBox="0 0 320 160" className="w-full h-full">
            {/* Roads */}
            <path d="M 40 140 Q 120 100 160 80 Q 200 60 280 30" stroke="#d4d4d4" strokeWidth="2" fill="none" />
            <path d="M 30 80 Q 90 90 160 80 Q 230 70 290 90" stroke="#d4d4d4" strokeWidth="1.5" fill="none" />
            <path d="M 160 10 Q 150 50 160 80 Q 170 110 155 150" stroke="#d4d4d4" strokeWidth="1.5" fill="none" />
            {/* City dots */}
            <circle cx="160" cy="80" r="4" fill="#9CA3AF" />
            <text x="165" y="84" fontSize="8" fill="#6B7280">AGRA</text>
            <circle cx="90" cy="50" r="4" fill="#9CA3AF" />
            <text x="95" y="54" fontSize="8" fill="#6B7280">JAIPUR</text>
            <circle cx="230" cy="35" r="4" fill="#9CA3AF" />
            <text x="235" y="39" fontSize="8" fill="#6B7280">DELHI</text>
            {/* Red pin - Taj Mahal */}
            <circle cx="148" cy="72" r="8" fill="#EF4444" opacity="0.15" />
            <circle cx="148" cy="72" r="5" fill="#EF4444" />
            <rect x="108" y="58" width="80" height="18" rx="9" fill="#EF4444" />
            <text x="148" y="70" fontSize="7.5" fill="white" textAnchor="middle" fontWeight="bold">Taj Mahal: 2.5h Wait</text>
            {/* Green pin - Baby Taj */}
            <circle cx="175" cy="100" r="8" fill="#16A34A" opacity="0.15" />
            <circle cx="175" cy="100" r="5" fill="#16A34A" />
            <rect x="135" y="86" width="78" height="18" rx="9" fill="#16A34A" />
            <text x="174" y="98" fontSize="7.5" fill="white" textAnchor="middle" fontWeight="bold">Baby Taj: 0 Wait</text>
          </svg>
          <div className="absolute bottom-2 left-2 text-[10px] text-gray-400">Live ASI Sensor Feed: Agra Corridor</div>
        </div>
      </div>

      {/* Trending Swaps */}
      <div className="px-4 mb-2">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h2 className="font-bold text-base text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>Trending De-congested Swaps</h2>
            <p className="text-xs text-gray-500">Real-time alternative routes verified today</p>
          </div>
          <button className="text-xs font-semibold text-orange-600">View All</button>
        </div>
      </div>

      {/* Swap Card 1 */}
      <div className="mx-4 mb-3">
        <SwapCard
          crowded={{ name: "Taj Mahal", label: "High Footfall (2.5hr wait)", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=80&h=80&fit=crop&auto=format" }}
          twin={{ name: "Tomb of I'timād-ud-Daulah", desc: '"Baby Taj" • 85% Less Crowds', detail: "20 min detour • Riverside serene garden", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop&auto=format" }}
          verified="Verified by Uttar Pradesh Tourism Board"
          save="Save 110 mins"
          onReroute={() => setTab("twins")}
        />
      </div>

      {/* Swap Card 2 */}
      <div className="mx-4 mb-4">
        <SwapCard
          crowded={{ name: "Amber Palace, Jaipur", label: "Peak Bottleneck (Surge)", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=80&h=80&fit=crop&auto=format" }}
          twin={{ name: "Panna Meena Ka Kund", desc: "Geometric Stepwell • Artisan Weavers", detail: "8 min walk from fort • ₹0 surge", img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=80&h=80&fit=crop&auto=format" }}
          verified="Supports 4 Local Block-Print Families"
          save="Zero Line"
          onReroute={() => setTab("twins")}
        />
      </div>

      {/* Helpline */}
      <div className="mx-4 mb-6 bg-red-50 border border-red-100 rounded-2xl p-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
          <IconPhone className="w-4 h-4 text-red-600" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-sm text-gray-900">24x7 Multi-lingual Tourist Helpline</div>
          <div className="text-xs text-gray-500">Govt of India Public Service 1363</div>
        </div>
        <button className="bg-red-600 text-white text-xs font-bold px-3 py-2 rounded-xl hover:bg-red-700 transition-colors">
          Call 1363
        </button>
      </div>
    </div>
  );
}

function SwapCard({ crowded, twin, verified, save, onReroute }: {
  crowded: { name: string; label: string; img: string };
  twin: { name: string; desc: string; detail: string; img: string };
  verified: string; save: string; onReroute: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Crowded row */}
      <div className="p-3 flex items-center gap-3">
        <img src={crowded.img} alt={crowded.name} className="w-12 h-12 rounded-xl object-cover flex-shrink-0 bg-gray-100" />
        <div className="flex-1">
          <div className="font-semibold text-sm text-gray-900">{crowded.name}</div>
          <div className="flex items-center gap-1 text-xs text-red-600 font-medium mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            {crowded.label}
          </div>
        </div>
        <IconAlert className="w-5 h-5 text-orange-400 flex-shrink-0" />
      </div>

      {/* Twin row */}
      <div className="mx-3 mb-3 bg-green-50 border border-green-100 rounded-xl p-3 flex items-center gap-3">
        <div className="relative flex-shrink-0">
          <img src={twin.img} alt={twin.name} className="w-12 h-12 rounded-xl object-cover bg-gray-100" />
          <div className="absolute -bottom-1 -right-1 bg-green-600 text-white text-[8px] font-bold px-1 rounded">TWIN</div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm text-gray-900 truncate">{twin.name}</div>
          <div className="text-xs text-green-700 font-medium">{twin.desc}</div>
          <div className="text-xs text-gray-500 mt-0.5">{twin.detail}</div>
        </div>
        <button onClick={onReroute} className="bg-green-700 text-white text-xs font-bold px-3 py-2 rounded-xl flex-shrink-0 hover:bg-green-800 transition-colors">
          Reroute
        </button>
      </div>

      <div className="px-3 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <IconCheck className="w-3 h-3 text-green-600" />
          {verified}
        </div>
        <span className="text-xs font-semibold text-green-700">{save}</span>
      </div>
    </div>
  );
}

// ── Screen 2: Twins / Place Detail ────────────────────────────────────────

function TwinsScreen({ lang }: { lang: Lang }) {
  const [showTips, setShowTips] = useState(true);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      {/* ASI Badge Bar */}
      <div className="bg-blue-600 text-white text-xs px-4 py-2 flex items-center gap-2">
        <span className="font-semibold">✦ ASI Monument · UNESCO World Heritage</span>
      </div>
      <div className="bg-red-500 text-white text-xs px-4 py-1.5 flex items-center gap-1.5 font-semibold">
        <span className="w-1.5 h-1.5 bg-white rounded-full pulse-dot"></span>
        High Footfall
      </div>

      {/* Place Header */}
      <div className="px-4 py-4 bg-white border-b border-gray-100">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>Taj Mahal, Agra</h1>
            <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
              <IconMapPin className="w-3 h-3" />
              Dharmapuri, Forest Colony, Agra, Uttar Pradesh
            </div>
          </div>
          <button className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50">
            <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
          </button>
        </div>

        {/* Official Portal */}
        <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
            <span className="text-sm">🏛️</span>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-xs text-gray-900">Official ASI Portal ↗</div>
            <div className="text-[10px] text-gray-500">Verified Govt Price · Zero Middleman Fees</div>
          </div>
          <a href="#" className="bg-amber-600 text-white text-xs font-bold px-3 py-2 rounded-lg">Book ₹50 ↗</a>
        </div>

        {/* Photo strip */}
        <div className="flex gap-2 mt-3 -mx-0">
          <div className="flex-1 h-28 rounded-xl overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=200&h=112&fit=crop&auto=format" alt="Taj Mahal central vista" className="w-full h-full object-cover" />
            <div className="text-[9px] text-gray-400 mt-0.5">Central Vista Reflection</div>
          </div>
          <div className="w-24 h-28 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=96&h=112&fit=crop&auto=format" alt="Pietra dura inlay detail" className="w-full h-full object-cover" />
            <div className="text-[9px] text-gray-400 mt-0.5">Pietra Dura Inlay</div>
          </div>
        </div>
        <div className="flex justify-end mt-1">
          <span className="text-xs text-gray-400">Source: Wikimedia Commons / Local Contributor &nbsp;·&nbsp; 4 Curated Views</span>
        </div>
      </div>

      {/* Overcrowding Alert */}
      <div className="mx-4 mt-4 bg-red-50 border border-red-200 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <IconAlert className="w-4 h-4 text-red-600" />
            <span className="font-bold text-sm text-red-700">Overcrowding Alert: High Footfall Site</span>
          </div>
          <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">CRITICAL</span>
        </div>
        <p className="text-xs text-red-600">Current queue delay: 2.5 hrs to security clearance</p>
      </div>

      {/* Twin Recommendation Card */}
      <div className="mx-4 mt-3 mb-4 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <div>
            <div className="font-bold text-sm text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>Smart Travel Twin Recommendation</div>
            <div className="text-xs text-green-700 font-medium mt-0.5">AI Civic Engine</div>
          </div>
        </div>

        <div className="px-4 pb-3 border-b border-gray-100">
          <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-medium">Current Selected</div>
          <div className="flex items-center gap-2 bg-red-50 rounded-xl p-2.5">
            <span className="text-xs text-red-600 font-semibold">Peak: 35,000+ visitors today</span>
          </div>
          <div className="mt-2 font-semibold text-gray-900">Taj Mahal Main Complex</div>
          <div className="flex gap-4 mt-1 text-xs text-gray-500">
            <span>🔥 Crowd Index: 9.4/10</span>
            <span>⚠️ Touring pressure high at gates</span>
          </div>
        </div>

        <div className="px-4 py-3">
          <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl text-sm mb-4 hover:bg-orange-600 transition-colors">
            ✦ TRY THIS INSTEAD
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Recommended Cultural Twin</span>
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200">✓ Verified Twin</span>
          </div>

          <h3 className="text-lg font-extrabold text-gray-900 mb-0.5" style={{ fontFamily: "Poppins, sans-serif" }}>Tomb of I'timād-ud-Daulah</h3>
          <p className="text-xs text-gray-500 mb-3">(Affectionately known as "Baby Taj")</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-green-50 border border-green-100 rounded-xl p-3">
              <div className="text-xs text-gray-500 mb-0.5">Footfall Delta</div>
              <div className="text-xl font-extrabold text-green-700" style={{ fontFamily: "Poppins, sans-serif" }}>82% Fewer</div>
              <div className="text-xs font-semibold text-green-700">Crowds</div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
              <div className="text-xs text-gray-500 mb-0.5">Transit Distance</div>
              <div className="text-xl font-extrabold text-blue-700" style={{ fontFamily: "Poppins, sans-serif" }}>≈ 40 mins</div>
              <div className="text-xs font-semibold text-blue-700">away</div>
            </div>
          </div>

          {/* Historical grounding */}
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 mb-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-sm">💡</span>
              <span className="text-xs font-semibold text-amber-800">Why this twin? Historical Grounding</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Commissioned by Empress Nur Jahan, this was the very first Mughal monument built entirely from white Makrana marble and fine pietra dura. Witness identical architectural precision with zero queues, permitting contemplative photography and respectful exploration.
            </p>
            <div className="mt-2 text-xs text-gray-500 space-y-1">
              <div className="flex items-start gap-1.5"><IconCheck className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />Precursor to Taj: identical Mughal marble inlay era (1628 CE)</div>
              <div className="flex items-start gap-1.5"><IconCheck className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />Serene riverside gardens on the peaceful Yamuna bank</div>
            </div>
          </div>

          {/* Local Contact */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">SJ</div>
            <div className="flex-1">
              <div className="font-semibold text-sm text-gray-900">Suresh Ji (Heritage Guide)</div>
              <div className="text-xs text-gray-500">Govt Reg: AAGR-4391 · Local Homestay Host</div>
            </div>
            <button className="flex items-center gap-1.5 bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-xl hover:bg-green-700 transition-colors">
              <IconWhatsapp className="w-3.5 h-3.5" />
              WhatsApp
            </button>
          </div>

          <button className="w-full border-2 border-green-600 text-green-700 font-bold py-3 rounded-xl text-sm hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="22 8 22 16.5 12 22 2 16.5 2 8 12 2 22 8" /><polyline points="2 8 12 13.5 22 8" /></svg>
            Swap to this Twin in Itinerary
          </button>
        </div>
      </div>

      {/* Safety Snapshot */}
      <div className="mx-4 mb-4 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconShield className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-sm text-gray-900">Safety Snapshot</span>
          </div>
          <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">HUMAN VERIFIED</span>
        </div>
        <div className="divide-y divide-gray-50">
          {[
            { icon: "👥", label: "Crowd Footfall: Peak Congestion", desc: "Extreme surges during early sunrise (05:30–08:30) and sunset slots. Pre-book express turnstile clearance.", color: "red" },
            { icon: "✅", label: "Verified Local Contact Present", desc: "Badge-carrying Ministry of Tourism guides stationed officially at Gates 1 & 2. Do not accept guides without physical photo lanyards.", color: "green" },
            { icon: "👩", label: "Solo & Women Travelers Guidance", desc: "Women-first security queue operational until 7:30 PM. Always utilize the official government prepaid auto kiosk located 30m outside Gate 2.", color: "purple" },
            { icon: "🚑", label: "Emergency & Assistance Hubs", desc: "UP Tourist Police Kiosk situated 120m from East Gate.", color: "blue" },
          ].map((item, i) => (
            <div key={i} className="px-4 py-3 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <div className="flex-1">
                <div className="text-xs font-semibold text-gray-900">{item.label}</div>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 pb-4 pt-2">
          <button className="w-full bg-red-600 text-white font-bold py-3 rounded-xl text-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
            <IconPhone className="w-4 h-4" />
            National Tourist Helpline: 1363 (24×7 Multilingual)
          </button>
        </div>
      </div>

      {/* Know Before You Go */}
      <div className="mx-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-base text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>Know Before You Go</h2>
          <button className="text-xs font-semibold text-green-700 border border-green-200 px-3 py-1.5 rounded-xl bg-green-50">Submit Tip +</button>
        </div>
        <div className="space-y-3">
          {[
            { tag: "Scam Warning", tagColor: "bg-red-100 text-red-700", icon: "⚠️", tip: '"Unofficial \'shoe keepers\' charging ₹100 outside East Gate; official shoe checks are included in your ASI ticket. Do not hand over footwear to unauthorized vendors."', verified: "Verified by 3 moderators", upvotes: 42, etiquette: false },
            { tag: "Unspoken Rule", tagColor: "bg-blue-100 text-blue-700", icon: "📋", tip: '"Photography prohibited inside the inner crypt containing the cenotaphs. Strict silence must be maintained inside; security guards will escort loud visitors outside."', verified: "Enforced by CISF personnel", upvotes: 28, etiquette: true },
            { tag: "Fair Price Guide", tagColor: "bg-green-100 text-green-700", icon: "💰", tip: '"Govt battery rickshaw from the parking hub to the main ticket gate is fixed at ₹10 per seat. Reject private cart pullers asking for ₹150+."', verified: "Fare meter chart posted at stand", upvotes: 56, etiquette: false },
          ].map((tip, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tip.tagColor}`}>{tip.tag}</span>
                {tip.etiquette && <span className="text-xs text-gray-400">Etiquette Guide</span>}
              </div>
              <p className="text-xs text-gray-700 leading-relaxed mb-2 italic">{tip.tip}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>✓ {tip.verified}</span>
                <button className="flex items-center gap-1 text-green-700 font-semibold hover:text-green-800">
                  <IconArrowUp className="w-3 h-3" />
                  {tip.upvotes} upvotes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Screen 3: AI Assistant ────────────────────────────────────────────────

function AssistantScreen({ lang }: { lang: Lang }) {
  const [input, setInput] = useState("");

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
      {/* Drawer Header */}
      <div className="bg-white px-4 pt-4 pb-3 border-b border-gray-100">
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-3"></div>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-extrabold text-lg text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>Bharat Sathi AI Assistant</h2>
            <p className="text-xs text-gray-500 mt-0.5">Voice-first, hallucination-free de-congested travel planning</p>
          </div>
          <button className="p-1.5 rounded-xl hover:bg-gray-100 transition-colors">
            <IconX className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            { label: "Sarvam 2B", icon: "⚡", color: "bg-purple-100 text-purple-700 border-purple-200" },
            { label: "Bhashini N-L", icon: "🌐", color: "bg-blue-100 text-blue-700 border-blue-200" },
            { label: "ASI RAG", icon: "✓", color: "bg-green-100 text-green-700 border-green-200" },
          ].map((b) => (
            <span key={b.label} className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${b.color}`}>
              {b.icon} {b.label}
            </span>
          ))}
        </div>
        {/* Lang toggle */}
        <div className="flex gap-2 mt-2">
          {["EN", "हिंदी", "Hinglish"].map((l) => (
            <button key={l} className={`text-xs font-medium px-3 py-1 rounded-full border transition-colors ${l === "हिंदी" ? "bg-orange-500 text-white border-orange-500" : "bg-white text-gray-600 border-gray-200"}`}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {/* Voice active */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
            <IconMic className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-sm text-orange-800">Voice Stream Active</div>
            <div className="text-xs text-orange-600">Indic ASR 44.1kHz • Low Latency</div>
          </div>
          {/* Voice bars */}
          <div className="flex items-center gap-0.5 h-6">
            {[1,2,3,4,5].map((b) => (
              <div key={b} className={`w-1 bg-orange-400 rounded-full voice-bar`} style={{ animationDelay: `${b * 0.1}s` }}></div>
            ))}
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[85%] bg-gray-800 text-white rounded-2xl rounded-br-md px-4 py-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <IconUsers className="w-3 h-3 text-gray-400" />
              <span className="text-[10px] text-gray-400 font-medium">User:</span>
            </div>
            <p className="text-sm leading-relaxed">"3 din ka Agra-Jaipur trip, bina bheed ke heritage aur shaant jagah chahiye."</p>
          </div>
        </div>

        {/* System reasoning */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">✓</span>
            </div>
            <span className="text-xs font-bold text-green-800">Grounded in ASI Database</span>
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-dot ml-auto"></span>
          </div>
          <div className="text-xs text-gray-500 mb-1.5">Live Footfall Stream #UP-RAJ-89</div>
          <p className="text-xs text-gray-700 leading-relaxed">
            Generating an itinerary with minimal queues, serene alternatives, and high artisan community impact…
          </p>
        </div>

        {/* Itinerary */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 pt-4 pb-3 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-2">
              <IconCalendar className="w-4 h-4 text-gray-600" />
              <span className="font-bold text-sm text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>Curated De-congested Plan (3 Days)</span>
            </div>
            <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">94% Less Wait</span>
          </div>

          {/* Day 1 */}
          <div className="p-4 border-b border-gray-50">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="bg-orange-100 text-orange-700 text-xs font-extrabold px-2 py-0.5 rounded">DAY 1</span>
                <span className="font-bold text-sm text-gray-900">Agra Off-beat Heritage</span>
              </div>
              <span className="text-xs text-green-700 font-semibold">Queue: ~15m total</span>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-1.5"></span>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Morning: Mehtab Bagh Dawn View <span className="text-gray-400 font-normal">06:00 AM</span></div>
                  <p className="text-xs text-gray-500 mt-0.5">Riverbank sunrise perspective of Taj Mahal; bypasses the 2.5-hour main gate queue.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-green-600 flex-shrink-0 mt-1.5"></span>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Mid-morning: Tomb of I'timād-ud-Daulah <span className="text-gray-400 font-normal">09:00 AM</span></div>
                  <p className="text-xs text-gray-500 mt-0.5">First Mughal marble monument · typically ≤50 visitors at this hour.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1.5"></span>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Afternoon: Kachhpura Village Walk <span className="text-gray-400 font-normal">02:00 PM</span></div>
                  <p className="text-xs text-gray-500 mt-0.5">Yamuna bank artisan village · direct-to-weaver purchases · 0% commission.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 preview */}
          <div className="px-4 py-3 flex items-center gap-3 bg-gray-50">
            <span className="bg-blue-100 text-blue-700 text-xs font-extrabold px-2 py-0.5 rounded">DAY 2</span>
            <span className="text-xs text-gray-600 font-medium">Jaipur Hidden Stepwells + Block Print Quarter</span>
            <IconChevronRight className="w-3 h-3 text-gray-400 ml-auto" />
          </div>
          <div className="px-4 py-3 flex items-center gap-3 bg-gray-50 border-t border-gray-100">
            <span className="bg-purple-100 text-purple-700 text-xs font-extrabold px-2 py-0.5 rounded">DAY 3</span>
            <span className="text-xs text-gray-600 font-medium">Fatehpur Sikri at Dusk · Zero wait entry</span>
            <IconChevronRight className="w-3 h-3 text-gray-400 ml-auto" />
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <div className="bg-white border-t border-gray-100 px-4 py-3">
        <div className="flex items-center gap-2 bg-gray-50 rounded-2xl border border-gray-200 px-4 py-2.5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Day 2 me budget add karo"
            className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
          />
          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>
          </button>
        </div>
        <div className="flex items-center justify-between mt-2 px-1">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-dot"></span>
            <span className="text-[10px] text-gray-400">Indic-NLP Engine Live</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-gray-400">Tap mic for Hindi/English speech</span>
            <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-md hover:bg-orange-600 transition-colors">
              <IconMic className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Screen 4: Local Hub ────────────────────────────────────────────────────

function LocalHubScreen({ lang }: { lang: Lang }) {
  const [location, setLocation] = useState("Agra, Uttar Pradesh");
  const [wrong, setWrong] = useState("");
  const [gem, setGem] = useState("");
  const [food, setFood] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center bg-gray-50">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <IconCheck className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="font-extrabold text-xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Published to Bharat Sathi!</h2>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">Your tip has been submitted with an [Unverified Community Tip] badge. It will be promoted after 5 upvotes.</p>
        <button onClick={() => setSubmitted(false)} className="bg-green-700 text-white font-bold px-8 py-3 rounded-2xl hover:bg-green-800 transition-colors">
          Submit Another Tip
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="px-4 pt-4 pb-2">
        <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200 mb-3">
          <IconShield className="w-3 h-3" />
          Community Trust Network · I Live Here
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900 leading-tight mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>Share Your Local Knowledge</h1>
        <p className="text-sm text-gray-500 leading-relaxed">Help travelers bypass tourist traps, travel safely, and direct spending to genuine local artisans and homestays.</p>
      </div>

      <div className="px-4 pb-6 space-y-5">
        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1.5">
            Your Home City, Town, or Village <span className="text-red-500">*</span>
            <button className="float-right text-xs font-medium text-green-700 flex items-center gap-1">
              <IconMapPin className="w-3 h-3" />Auto-detect
            </button>
          </label>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-3 focus-within:border-green-500 transition-colors">
            <IconMapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 text-sm outline-none text-gray-900"
            />
            <IconSearch className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </div>
          <p className="text-xs text-green-700 mt-1 flex items-center gap-1">
            <IconCheck className="w-3 h-3" />Verified geo-fenced local anchor
          </p>
        </div>

        {/* What tourists get wrong */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1.5">
            One thing tourists always get wrong or overpay for
            <span className="float-right text-xs text-gray-400 font-normal">*{wrong.length}/300</span>
          </label>
          <textarea
            rows={4}
            value={wrong}
            onChange={(e) => setWrong(e.target.value.slice(0, 300))}
            placeholder="e.g. Never buy 'marble' souvenirs near the main Western Gate—it is cheap soapstone coated with chalk. Visit the hereditary artisan cooperative in Taj Ganj for authentic inlay…"
            className="w-full bg-white border border-gray-200 rounded-xl px-3 py-3 text-sm outline-none resize-none focus:border-green-500 transition-colors placeholder-gray-400 text-gray-900"
          />
          <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">
            <span>♻️</span>Direct impact tip for fair-trade preservation
          </p>
        </div>

        {/* Quiet alternative */}
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              <span className="text-sm font-semibold text-gray-900">A quiet alternative or hidden gem within 40 km</span>
            </div>
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded">TWIN DETOUR</span>
          </div>
          <div className="p-3 space-y-2">
            <input
              value={gem}
              onChange={(e) => setGem(e.target.value)}
              placeholder="Chini Ka Rauza & Kachhpura village walk"
              className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-green-400 transition-colors placeholder-gray-400 text-gray-900"
            />
            <textarea
              rows={3}
              placeholder="Peaceful Yamuna river bank vantage point with zero bus tour crowds. Overlooks the backside of monument corridors with active craft…"
              className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-sm outline-none resize-none focus:border-green-400 transition-colors placeholder-gray-400 text-gray-900"
            />
          </div>
        </div>

        {/* Food / Artisan */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
            <span>🍽️</span>Best authentic local food or artisan spot
          </label>
          <input
            value={food}
            onChange={(e) => setFood(e.target.value)}
            placeholder="Master Weaver Abdul's loom & Bhimsen Baati…"
            className="w-full bg-white border border-gray-200 rounded-xl px-3 py-3 text-sm outline-none focus:border-green-500 transition-colors placeholder-gray-400 text-gray-900"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-semibold text-gray-900">Local Host or Guide WhatsApp Number</label>
            <div className="flex items-center gap-1 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200">
              0% Middleman Cut
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl overflow-hidden focus-within:border-green-500 transition-colors">
            <div className="bg-gray-100 px-3 py-3 text-sm font-semibold text-gray-600 border-r border-gray-200">+91</div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="98765 43210"
              className="flex-1 px-3 py-3 text-sm outline-none text-gray-900 placeholder-gray-400"
            />
          </div>
          <div className="flex items-center gap-1.5 mt-1.5">
            <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            <span className="text-xs text-gray-400">Enables travelers to contact you directly without commission cut. Encrypted and strictly opt-in.</span>
          </div>
        </div>

        {/* Transparency Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <div className="flex items-start gap-2">
            <span className="text-base flex-shrink-0">⚠️</span>
            <div>
              <span className="text-xs font-bold text-amber-800">Transparency Guarantee: </span>
              <span className="text-xs text-gray-700">Entries appear immediately with an </span>
              <span className="text-xs font-bold bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded">[Unverified Community Tip]</span>
              <span className="text-xs text-gray-700"> badge until verified by 5 traveler upvotes or local civic moderator.</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => setSubmitted(true)}
          className="w-full bg-gradient-to-r from-red-700 to-orange-600 text-white font-bold py-4 rounded-2xl text-sm hover:from-red-800 hover:to-orange-700 transition-all flex items-center justify-center gap-2 shadow-md"
        >
          <IconSend className="w-4 h-4" />
          Publish to Bharat Sathi
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-2xl text-sm hover:bg-gray-50 transition-colors">Save Draft</button>
          <button className="bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-2xl text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
            Guidelines
          </button>
        </div>
      </div>
    </div>
  );
}

// ── App Root ───────────────────────────────────────────────────────────────

export default function App() {
  const [tab, setTab] = useState<Tab>("explore");
  const [lang, setLang] = useState<Lang>("en");

  const showBackOnTwins = tab === "twins";

  return (
    <div className="h-full flex flex-col bg-gray-50 max-w-md mx-auto overflow-hidden" style={{ fontFamily: "Inter, 'Noto Sans Devanagari', sans-serif" }}>
      <TopBar lang={lang} setLang={setLang} onBack={showBackOnTwins ? () => setTab("explore") : undefined} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {tab === "explore" && <ExploreScreen lang={lang} setTab={setTab} />}
        {tab === "twins" && <TwinsScreen lang={lang} />}
        {tab === "assistant" && <AssistantScreen lang={lang} />}
        {tab === "localhub" && <LocalHubScreen lang={lang} />}
      </div>

      <BottomNav active={tab} setTab={setTab} />
    </div>
  );
}
