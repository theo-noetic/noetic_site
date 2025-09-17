import React, { useEffect, useMemo, useState } from "react";

/**
 * Learn Page – ported from magicbar.co/learn, styled for staging.magicbar.co
 *
 * ✳️ What stayed the same
 * - Section structure & copy from the old page (Macrodosing / Microdosing)
 * - Slots for ALL Tolstoy shortcodes (paste yours where indicated)
 *
 * ✳️ What’s new
 * - Tailwind-first layout & typography matching the new site vibe
 * - Tolstoy loader (auto-adds widget script if missing)
 * - Lightweight Microdose Scheduler (client-side) + ICS export
 */

// -------------------------
// 🔌 Tolstoy shortcodes — paste the exact tags from your old page
// Keep them as strings; they’ll be injected as-is to preserve the shortcode HTML
// -------------------------

const TOLSTOY_SCREENING_QUIZ = `
  <!-- PASTE your Tolstoy quiz shortcode here, e.g.: -->
  <!-- <tolstoy-widget id="REPLACE_WITH_ID" class="tolstoy-quiz"></tolstoy-widget> -->
`;

const TOLSTOY_MINDSET_SWIPES = `
  <!-- PASTE your Tolstoy swipe/story shortcode for: 1. Preparing your mindset -->
`;

const TOLSTOY_ENVIRONMENT_SWIPES = `
  <!-- PASTE your Tolstoy swipe/story shortcode for: 2. Preparing your environment -->
`;

const TOLSTOY_MICRODOSING_TIPS_SWIPES = `
  <!-- PASTE your Tolstoy swipe/story shortcode for: Tips for better microdosing -->
`;

// Optional: if you also want a Tolstoy carousel anywhere on this page
const OPTIONAL_TOLSTOY_CAROUSEL = `
  <!-- Example from your notes; safe to remove if not needed on Learn page -->
  <tolstoy-carousel id="8jxqj3o7bj5qu" class="tolstoy-carousel" data-product-id="PRODUCT_ID"></tolstoy-carousel>
`;

// Small helper to inject raw HTML (so shortcodes render exactly)
function Shortcode({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// -------------------------
// 🧠 Utilities for the scheduler
// -------------------------

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

function formatDate(d) {
  return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
}

// Generate ~6 weeks of dates based on a start and dosing pattern
function generateSchedule(startDate, pattern) {
  const out = [];
  const start = new Date(startDate);
  if (Number.isNaN(start.getTime())) return out;

  const SIX_WEEKS_DAYS = 42;

  if (pattern === "every_other_day") {
    for (let i = 0; i <= SIX_WEEKS_DAYS; i += 2) out.push(addDays(start, i));
  } else if (pattern === "two_per_week") {
    // 2x per week for 6 weeks = 12 sessions, alternating +3/+4 days
    let d = new Date(start);
    while (out.length < 12) {
      out.push(new Date(d));
      d = addDays(d, out.length % 2 === 1 ? 3 : 4);
    }
  }
  return out;
}

// -------------------------
// 📅 ICS builder (pure function for testability)
// -------------------------
function buildICSFromDates(dates) {
  if (!Array.isArray(dates) || dates.length === 0) return "";
  const pad = (n) => String(n).padStart(2, "0");
  const yyyymmdd = (d) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;

  const now = new Date();
  const dtstamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Magic Bar//Microdose Scheduler//EN",
    "CALSCALE:GREGORIAN",
  ];

  dates.forEach((d, idx) => {
    const start = yyyymmdd(d);
    const end = yyyymmdd(addDays(d, 1)); // all-day event
    const uid = `${start}-${idx}@magicbar.co`;
    lines.push(
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${dtstamp}`,
      "SUMMARY:Microdose (Magic Bar)",
      `DTSTART;VALUE=DATE:${start}`,
      `DTEND;VALUE=DATE:${end}`,
      "END:VEVENT"
    );
  });

  lines.push("END:VCALENDAR");
  // Join with a newline (the earlier bug used an unterminated string)
  return lines.join("\n");
}

export default function Learn() {
  // Tolstoy script loader
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasModule = document.querySelector('script[src*="widget.gotolstoy.com/we/widget.js"]');
    const hasNoModule = document.querySelector('script[src*="widget.gotolstoy.com/widget/widget.js"]');

    if (!window.tolstoyAppKey) {
      // Prefer env var; fall back to placeholder so devs see it
      window.tolstoyAppKey = import.meta?.env?.VITE_TOLSTOY_APP_KEY || "REPLACE_WITH_APP_KEY";
    }

    if (!hasModule) {
      const s = document.createElement("script");
      s.type = "module";
      s.async = true;
      s.src = "https://widget.gotolstoy.com/we/widget.js";
      document.head.appendChild(s);
    }

    if (!hasNoModule) {
      const s2 = document.createElement("script");
      s2.noModule = true;
      s2.async = true;
      s2.src = "https://widget.gotolstoy.com/widget/widget.js";
      document.head.appendChild(s2);
    }
  }, []);

  // Tabs
  const [tab, setTab] = useState("macrodosing");

  // Deep-link support via hash
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (hash === "microdosing" || hash === "macrodosing") setTab(hash);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const newHash = `#${tab}`;
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, "", newHash);
    }
  }, [tab]);

  // Microdose tools
  const [startDate, setStartDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [pattern, setPattern] = useState("two_per_week");
  const schedule = useMemo(() => generateSchedule(startDate, pattern), [startDate, pattern]);

  const [taken, setTaken] = useState(() => new Set());
  const toggleTaken = (dStr) => {
    setTaken((prev) => {
      const next = new Set(prev);
      if (next.has(dStr)) next.delete(dStr); else next.add(dStr);
      return next;
    });
  };

  // Build & download .ics for 6 weeks (uses marked dates if any, otherwise all scheduled)
  function downloadICS() {
    const dates = schedule.filter((d) => {
      const iso = d.toISOString().slice(0, 10);
      return taken.size > 0 ? taken.has(iso) : true;
    });

    if (dates.length === 0) return;

    const ics = buildICSFromDates(dates);
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `microdosing-${startDate}-${pattern}.ics`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  // -------------------------
  // ✅ Dev-only tests (won't run in production builds)
  // -------------------------
  try {
    const isDev = typeof import.meta !== "undefined" && import.meta.env && import.meta.env.DEV;
    if (isDev) {
      // Test 1: two_per_week yields exactly 12 dates over ~6 weeks
      const t1 = generateSchedule("2025-01-01", "two_per_week");
      console.assert(t1.length === 12, `Expected 12 dates for two_per_week, got ${t1.length}`);

      // Test 2: every_other_day yields 22 dates from day 0..42 inclusive stepped by 2
      const t2 = generateSchedule("2025-01-01", "every_other_day");
      console.assert(t2.length === 22, `Expected 22 dates for every_other_day, got ${t2.length}`);

      // Test 3: ICS content basic markers
      const ics = buildICSFromDates(t1);
      console.assert(ics.startsWith("BEGIN:VCALENDAR"), "ICS should start with BEGIN:VCALENDAR");
      console.assert(ics.includes("BEGIN:VEVENT"), "ICS should contain at least one VEVENT");
      console.assert(ics.includes("END:VCALENDAR"), "ICS should end with END:VCALENDAR");
    }
  } catch (_) {
    // no-op; tests are best-effort in dev
  }

  return (
    <main className="min-h-screen bg-[#fdf9ec] text-neutral-900">
      {/* Header */}
      <section className="border-b border-neutral-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-gooper leading-none">Instructions</h1>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-neutral-600">
            Preparation, safety, and tools for macrodosing and microdosing.
          </p>
          <nav className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white p-1 text-sm">
            <button
              role="tab"
              aria-selected={tab === "macrodosing"}
              onClick={() => setTab("macrodosing")}
              className={`rounded-full px-4 py-2 ${tab === "macrodosing" ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-100"}`}
            >
              Macrodosing
            </button>
            <button
              role="tab"
              aria-selected={tab === "microdosing"}
              onClick={() => setTab("microdosing")}
              className={`rounded-full px-4 py-2 ${tab === "microdosing" ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-100"}`}
            >
              Microdosing
            </button>
          </nav>
        </div>
      </section>

      {/* Macrodosing */}
      {tab === "macrodosing" && (
      <section id="macrodosing" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold font-gooper">Macrodosing</h2>
        </header>
        {/* Screening Quiz (Tolstoy) */}
        <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-neutral-200/60">
          {/* Safety Checklist */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-gooper">Safety checklist</h2>
            <p className="mt-2 text-neutral-600">Please use the following checklist before consuming the Magic Bar. If your answer to any of these questions is 'no', then please do not take psychedelics without professional supervision.</p>
            <ol className="mt-4 grid gap-2 text-sm md:text-base list-decimal pl-5">
              <li>I do not have any medical condition(s) that may be aggravated by psilocybin.</li>
              <li>I'm not taking any medicines that may interact with psilocybin.</li>
              <li>I will start with 4-5 squares of the Magic Bar if this is my first psychedelic trip.</li>
              <li>I have a trusted, experienced, sober guide who can be with me for ~7 hours.</li>
              <li>I'll take the Magic Bar in a safe, pleasant, familiar environment.</li>
              <li>I'm in a good mindset and have been for a few days.</li>
              <li>I've watched all of the preparation videos on this website.</li>
              <li>I have access to calm music.</li>
              <li>I understand psychedelics should be treated with respect.</li>
              <li>I won't trip again until I'm fully re-adjusted to regular life after my previous trip.</li>
            </ol>
          </div>

          {/* Box Breathing */}
          <div className="mt-8 md:mt-10">
            <h4 className="text-lg md:text-xl font-semibold font-gooper">Box breathing</h4>
            <p className="mt-2 text-neutral-600">Below is a simple breathing exercise that can help you to relax during your trip.</p>
            <div className="mt-3 aspect-video overflow-hidden rounded-2xl ring-1 ring-neutral-200">
              <video className="h-full w-full" preload="metadata" controls src="https://noetic.bio/wp-content/uploads/2024/04/Box-Breathing.mp4" />
            </div>
          </div>
        </div>

        {/* Mindset & Environment swipes (Tolstoy) */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-neutral-200/60">
            <h3 className="text-xl md:text-2xl font-semibold font-gooper">1. Preparing your mindset</h3>
            <p className="mt-2 text-neutral-600">Swipe through these videos to prepare for a great trip.</p>
            <div className="mt-6">
              
      <tolstoy-carousel
        id="8jxqj3o7bj5qu"
        class="tolstoy-carousel"
        data-product-id="PRODUCT_ID">
      </tolstoy-carousel>
    
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-neutral-200/60">
            <h3 className="text-xl md:text-2xl font-semibold font-gooper">2. Preparing your environment</h3>
            <p className="mt-2 text-neutral-600">Swipe through the setup tips.</p>
            <div className="mt-6">
              
      <tolstoy-carousel
        id="graal3o1ptmnz"
        class="tolstoy-carousel"
        data-product-id="PRODUCT_ID">
      </tolstoy-carousel>
    
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Microdosing */}
      {tab === "microdosing" && (
      <section id="microdosing" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold font-gooper">Microdosing</h2>
        </header>

        {/* Tips for better microdosing (Tolstoy) */}
        <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-neutral-200/60">
          <h3 className="text-xl md:text-2xl font-semibold font-gooper">Tips for better microdosing</h3>
          <p className="mt-2 text-neutral-600">Swipe through the tips.</p>
          <div className="mt-6">
            
      <tolstoy-carousel
        id="hw51fnhy89ozv"
        class="tolstoy-carousel"
        data-product-id="PRODUCT_ID">
      </tolstoy-carousel>
    
          </div>
        </div>

        {/* Tools */}
        <div className="mt-8 grid gap-6 md:grid-cols-1">
          {/* Scheduler */}
          <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-neutral-200/60">
            <h3 className="text-xl md:text-2xl font-semibold font-gooper">Microdose scheduler</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm md:text-base">
                <span className="text-neutral-600">Start date</span>
                <input
                  type="date"
                  className="rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm md:text-base">
                <span className="text-neutral-600">Dosing frequency</span>
                <select
                  className="rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2"
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                >
                  <option value="two_per_week">2× per week</option>
                  <option value="every_other_day">Every other day</option>
                </select>
                <span className="mt-1 text-xs text-neutral-500">6 weeks is the recommended length for a microdosing protocol.</span>
              </label>
            </div>
            <ul className="mt-5 space-y-2 max-h-80 overflow-auto pr-2">
              {schedule.map((d) => {
                const iso = d.toISOString().slice(0, 10);
                return (
                  <li key={iso} className="flex items-center justify-between rounded-xl border border-neutral-200 px-3 py-2">
                    <span className="text-sm md:text-base">{formatDate(d)}</span>
                    <button
                      onClick={() => toggleTaken(iso)}
                      className={`rounded-full px-3 py-1 text-sm font-medium ${taken.has(iso) ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`}
                    >
                      {taken.has(iso) ? "Marked" : "Mark"}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button onClick={downloadICS} className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90">
                Add to calendar (.ics, 6 weeks)
              </button>
              <span className="text-xs text-neutral-500">If you marked specific dates above, only those will be included. Otherwise, all scheduled dates for 6 weeks are added.</span>
            </div>
          </div>
        </div>

        {/* Optional carousel slot (remove if not needed) */}
        <div className="mt-8 hidden">
          <Shortcode html={OPTIONAL_TOLSTOY_CAROUSEL} />
        </div>
      </section>
      )}
    </main>
  );
}
