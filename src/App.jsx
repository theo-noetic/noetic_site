import { useState } from "react";
// Logo: place the provided file into your Vite project's /public folder as
// /public/magic-bar-logo.png so <img src="/magic-bar-logo.png" /> resolves at runtime.

// Single-file React component replicating the structure & vibe of hears.com’s homepage
// Images replaced with royalty-free stock placeholders from Unsplash/Picsum.
// TailwindCSS v4 assumed.

const products = [
  { id: 1, name: "Pine Green", tag: "-25 dB", price: "€42", compareAt: "€49", image: "https://images.unsplash.com/photo-1561213859-418033ad0f54?auto=format&fit=crop&w=1200&q=80", badge: "Bestseller" },
  { id: 2, name: "Jet Black", tag: "-20 dB", price: "€39", compareAt: "€46", image: "https://images.unsplash.com/photo-1546502203-672f3f00607a?auto=format&fit=crop&w=1200&q=80", badge: "Bestseller" },
  { id: 3, name: "Clear Glass", tag: "-25 dB", price: "€42", compareAt: "€49", image: "https://images.unsplash.com/photo-1518544801976-3e1889f7c7ea?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, name: "Silver Night", tag: "-20 dB", price: "€39", compareAt: "€46", image: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80" }
];

const testimonials = [
  { name: "Alejandra", body: "Swapping to these earplugs was a clear upgrade—more comfortable fit and much cleaner sound at lower volume.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=60" },
  { name: "Leonardo D.", body: "I DJ with them and can still focus on the mix. Great attenuation without killing the vibe.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=60" },
  { name: "Rick V.", body: "They fit like a glove and the low end still slaps. Exactly what I needed for gigs.", avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=256&q=60" },
  { name: "Sabine Z.", body: "Sound stays rich and natural. Comfortable enough for long sessions.", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=256&q=60" }
];

// User-generated content reviews (UGC-style cards)
const ugcReviews = [
  {
    name: "James E.",
    avatar: "https://6htrntmt012y8ehd.public.blob.vercel-storage.com/UGC_photo_4_small.png",
    rating: 5,
    shout: "Smooth, mild, and euphoric",
    body: "Much more preferable than [ordinary magic mushrooms]",
    image: "https://6htrntmt012y8ehd.public.blob.vercel-storage.com/magic_bar_on_table.JPG"
  },
  {
    name: "Kate O.",
    avatar: "https://6htrntmt012y8ehd.public.blob.vercel-storage.com/kate_2.png",
    rating: 5,
    shout: "They're a 5/5 for me",
    body: "It was such a clean feeling trip too. Minimal nausea. No come up!",
    image: "https://6htrntmt012y8ehd.public.blob.vercel-storage.com/kate_UGC_photo.JPG"
  },
  {
    name: "Mickey B.",
    avatar: "https://6htrntmt012y8ehd.public.blob.vercel-storage.com/UGC_photo_1_mickey%20small.png",
    rating: 5,
    shout: "A delightfully mellow experience.",
    body: "I felt no heavy body high whatsoever, no nausea, and wanted to go out on a bike ride. A really different trip that I would love to take with friends! Light and playful",
    image: "https://6htrntmt012y8ehd.public.blob.vercel-storage.com/magic_bar_UGC_3_small.JPG"
  }
];

const faqs = [
  { q: "What makes the filters different?", a: "A thin, flexible membrane reduces overall volume while preserving clarity, so music and voices remain detailed." },
  { q: "Can I still talk with earplugs in?", a: "Yes—speech remains intelligible. The filter is tuned to keep mid‑range frequencies clear." },
  { q: "What sizes are included?", a: "Multiple ear tip sizes come in the box so you can dial in the perfect seal and comfort." },
  { q: "What’s the return policy?", a: "Try them risk‑free for 100 days. If they’re not a fit, send them back for a full refund." }
];

// Use-cases section (the attached "Hears will upgrade your…")
const useCases = {
  clubbing: {
    key: "clubbing",
    label: "Beginners",
    items: [
      {
        title: "Better taste",
        body: "92% of testers found that the Magic Bar tastes better than truffles.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Ideal for microdosing",
        body: "Resealable packaging, so you can microdose the bar in small pieces.",
        image: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Long shelf-life",
        body: "Up to 6 months if kept frozen, so you can wait until you’re ready to trip.",
        image: "https://images.unsplash.com/photo-1506157776980-c8d55d07a26c?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HearsStyleHomepage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeUse, setActiveUse] = useState("clubbing");

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Announcement bar */}
      <div className="bg-neutral-950 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <p className="truncate">Available in smart shops from 24th October! · Be one of the first to experience the magic bar.</p>
          <button className="underline decoration-dashed underline-offset-4 hidden sm:block" onClick={() => alert("Change region modal goes here")}>Find a smart shop</button>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" aria-label="Magic Bar home" className="flex items-center">
              <img src="https://6htrntmt012y8ehd.public.blob.vercel-storage.com/magic%20bar%20logo%20horizontal.png" alt="Magic Bar" className="h-8 sm:h-9 w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#usecases" className="hover:text-neutral-600">Why Hears</a>
              <a href="#testimonials" className="hover:text-neutral-600">Testimonials</a>
              <a href="#faq" className="hover:text-neutral-600">FAQ</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">Sign in</button>
            <button className="md:hidden rounded-full border border-neutral-300 px-3 py-2" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu">
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-neutral-900"></span>
                <span className="block h-0.5 w-5 bg-neutral-900"></span>
                <span className="block h-0.5 w-5 bg-neutral-900"></span>
              </div>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-200">
            <nav className="px-4 py-3 grid gap-3 text-sm">
              <a href="#usecases" className="py-2">Why Hears</a>
              <a href="#testimonials" className="py-2">Testimonials</a>
              <a href="#faq" className="py-2">FAQ</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero (restored image header) */}
      <section className="relative isolate overflow-hidden">
        <img
          src="https://6htrntmt012y8ehd.public.blob.vercel-storage.com/mycelium%20bar%20-%20hero.jpg"
          alt="Crowd at a concert"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur">
              Launching in October 2025
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              No nausea. Better trips.
            </h1>
            <p className="mt-4 max-w-xl text-white/80">
              The first legal alternative to magic truffles. Fresh mycelium, grown on easy-to-digest pasta flour.
            </p>
            <div className="mt-8 flex gap-3">
              {/* Removed "Shop now" per request */}
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                How it works
              </a>
            </div>
            <p className="mt-6 text-sm text-white/70">Significantly improved taste · 6 month shelf life</p>
          </div>
        </div>
      </section>

      {/* UGC (User-Generated Content) */}
      <section id="ugc" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">What our customers say</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ugcReviews.map((r, idx) => (
            <article key={idx} className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
              <img src={r.image} alt="" className="h-52 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
                  <div className="font-medium">{r.name}</div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-pink-500" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`h-4 w-4 ${i < r.rating ? '' : 'opacity-20'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.802-2.035a1 1 0 00-1.176 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="mt-3 text-xl font-semibold tracking-tight">{r.shout}</p>
                <p className="mt-2 text-neutral-700">{r.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">What the industry says</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                  <figcaption className="font-medium">{t.name}</figcaption>
                </div>
                <p className="mt-3 text-sm text-neutral-700">{t.body}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA image split (no buy button) */}
      <section id="how" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <img src="https://6htrntmt012y8ehd.public.blob.vercel-storage.com/Magic%20Bar%20-%20Dosing%20Guide.jpeg" alt="Dosing guide" className="rounded-2xl object-cover w-full" />
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Easy to dose.</h3>
              <p className="mt-3 text-neutral-700">The Magic Bar has 10 squares. Each square is 1/10 of a high dose. Find your perfect dose somewhere in between.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Microdose = up to 1 square", "Light dose = 3-5 squares", "Medium dose = 6-8 squares", "Strong dose = 9-10 squares"].map(chip => (
                  <span key={chip} className="rounded-full border border-neutral-300 px-3 py-1 text-xs">{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      {/* Use cases (attached section) */}
      <section id="usecases" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="overflow-visible">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Perfect for</h2>
            <p id="usecases-word" className="mt-3 text-[min(12vw,64px)] font-semibold leading-[1.25] pb-2 whitespace-nowrap bg-gradient-to-r from-blue-400 to-white-300 bg-clip-text text-transparent">{useCases[activeUse].label}</p>
            {Object.keys(useCases).length > 1 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {Object.values(useCases).map(c => (
                  <button key={c.key} onClick={() => setActiveUse(c.key)} className={`rounded-full border px-4 py-2 text-sm ${activeUse === c.key ? 'bg-neutral-900 text-white' : 'border-neutral-300 hover:bg-neutral-50'}`}>
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-10">
            {useCases[activeUse].items.map((it, idx) => (
              <article key={idx} className="flex items-center gap-6">
                <div className="self-stretch w-1.5 bg-blue-400 rounded-full" />
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold leading-tight">{it.title}</h3>
                  <p className="mt-2 text-neutral-600 max-w-prose">{it.body}</p>
                </div>
                <img src={it.image} alt="" className="h-20 w-32 rounded-2xl object-cover" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-neutral-50">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-neutral-200 border rounded-2xl bg-white">
            {faqs.map((f, idx) => (
              <details key={f.q} className="group open:bg-neutral-50">
                <summary className="list-none cursor-pointer select-none px-5 py-4 flex items-center justify-between">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-neutral-500 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <div className={classNames("px-5 pb-5 text-sm text-neutral-700", idx === faqs.length - 1 ? "" : "border-b border-neutral-200")}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
          <div className="col-span-2">
            <a href="#" aria-label="Magic Bar home" className="inline-flex items-center">
            <img src="https://6htrntmt012y8ehd.public.blob.vercel-storage.com/magic%20bar%20logo%20horizontal.png" alt="Magic Bar" className="h-8 w-auto" />
            <span className="sr-only">Magic Bar</span>
            </a>
            <p className="mt-3 text-neutral-600 max-w-sm">The first psychedelic mycelium bar. No nausea. Better trips. </p>
            <p className="mt-4 text-xs text-neutral-500">Magic Bar is a registered trademark of Noetic BV.</p>
          </div>
          <div>
            <p className="font-medium">Shop</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#usecases" className="hover:text-neutral-600">All earplugs</a></li>
              <li><a href="#usecases" className="hover:text-neutral-600">Bundles</a></li>
              <li><a href="#usecases" className="hover:text-neutral-600">Limited editions</a></li>
              <li><a href="#usecases" className="hover:text-neutral-600">Accessories</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Company</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-neutral-600">Journal</a></li>
              <li><a href="#" className="hover:text-neutral-600">Responsibility</a></li>
              <li><a href="#" className="hover:text-neutral-600">Careers</a></li>
              <li><a href="#" className="hover:text-neutral-600">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <p className="font-medium">Stay in the loop</p>
            <form className="mt-3 flex max-w-md gap-2">
              <input type="email" required placeholder="Email address" className="w-full rounded-full border border-neutral-300 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10" />
              <button className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Dev-time smoke tests (run once, only in dev) ---
if (typeof window !== "undefined" && import.meta?.env?.DEV && !window.__HEARS_TESTS_RAN__) {
  window.__HEARS_TESTS_RAN__ = true;
  window.addEventListener('load', () => {
    const logoImg = document.querySelector('img[alt="Magic Bar"]');
    assert(!!logoImg && /vercel-storage/.test(logoImg.src), 'Logo should use the provided Vercel Storage URL');
    const word = document.getElementById('usecases-word');
    if (word) {
      const lh = parseFloat(getComputedStyle(word).lineHeight);
      const fs = parseFloat(getComputedStyle(word).fontSize);
      assert(lh >= fs * 1.1, 'Use-cases word should have sufficient line-height to avoid clipping');
    }
  });
  const assert = (cond, msg) => { if (!cond) console.error("[TEST FAIL]", msg); };

  // Test: classNames joins truthy values
  assert(classNames("a", null, false, "b") === "a b", "classNames should join only truthy classes");

  // Test: useCases has clubbing with 3 items and required fields
  assert(!!useCases.clubbing, "useCases.clubbing must exist");
  assert(Array.isArray(useCases.clubbing.items) && useCases.clubbing.items.length === 3, "useCases.clubbing.items should have 3 entries");
  useCases.clubbing.items.forEach((it, i) => {
    assert(typeof it.title === "string" && it.title.length > 0, `item ${i} needs a title`);
    assert(typeof it.body === "string" && it.body.length > 0, `item ${i} needs a body`);
    assert(typeof it.image === "string" && it.image.startsWith("http"), `item ${i} needs an image URL`);
  });

  // Test: testimonials have at least 3 entries
  assert(Array.isArray(testimonials) && testimonials.length >= 3, "Need at least 3 testimonials");

  // Test: when only one use case exists, no selector button should render
  if (Object.keys(useCases).length === 1) {
    const btns = document.querySelectorAll('#usecases button');
    assert(btns.length === 0, 'No use-case selector button should render when only one use case exists');
  }

  // Test: ugcReviews present and valid
  assert(Array.isArray(ugcReviews) && ugcReviews.length >= 1, 'ugcReviews should contain at least one review');
  ugcReviews.forEach((r,i) => {
    assert(typeof r.name === 'string' && r.name, `ugcReviews[${i}] name required`);
    assert(typeof r.image === 'string' && r.image.startsWith('http'), `ugcReviews[${i}] image URL required`);
    assert(typeof r.rating === 'number' && r.rating >= 0 && r.rating <= 5, `ugcReviews[${i}] rating must be 0..5`);
  });
}
