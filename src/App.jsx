import { useState } from "react";

// Single-file React component replicating the structure & vibe of hears.com’s homepage
// Images replaced with royalty-free stock placeholders from Unsplash/Picsum.
// TailwindCSS is assumed to be available.

const products = [
  {
    id: 1,
    name: "Pine Green",
    tag: "-25 dB",
    price: "€42",
    compareAt: "€49",
    image:
      "https://images.unsplash.com/photo-1561213859-418033ad0f54?auto=format&fit=crop&w=1200&q=80",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Jet Black",
    tag: "-20 dB",
    price: "€39",
    compareAt: "€46",
    image:
      "https://images.unsplash.com/photo-1546502203-672f3f00607a?auto=format&fit=crop&w=1200&q=80",
    badge: "Bestseller",
  },
  {
    id: 3,
    name: "Clear Glass",
    tag: "-25 dB",
    price: "€42",
    compareAt: "€49",
    image:
      "https://images.unsplash.com/photo-1518544801976-3e1889f7c7ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "Silver Night",
    tag: "-20 dB",
    price: "€39",
    compareAt: "€46",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80",
  },
];

const testimonials = [
  {
    name: "Alejandra",
    body:
      "Swapping to these earplugs was a clear upgrade—more comfortable fit and much cleaner sound at lower volume.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=60",
  },
  {
    name: "Leonardo D.",
    body:
      "I DJ with them and can still focus on the mix. Great attenuation without killing the vibe.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=60",
  },
  {
    name: "Rick V.",
    body:
      "They fit like a glove and the low end still slaps. Exactly what I needed for gigs.",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=256&q=60",
  },
  {
    name: "Sabine Z.",
    body:
      "Sound stays rich and natural. Comfortable enough for long sessions.",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=256&q=60",
  },
];

const faqs = [
  {
    q: "What makes the filters different?",
    a: "A thin, flexible membrane reduces overall volume while preserving clarity, so music and voices remain detailed.",
  },
  {
    q: "Can I still talk with earplugs in?",
    a: "Yes—speech remains intelligible. The filter is tuned to keep mid‑range frequencies clear.",
  },
  {
    q: "What sizes are included?",
    a: "Multiple ear tip sizes come in the box so you can dial in the perfect seal and comfort.",
  },
  {
    q: "What’s the return policy?",
    a: "Try them risk‑free for 100 days. If they’re not a fit, send them back for a full refund.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HearsStyleHomepage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Announcement bar */}
      <div className="bg-neutral-950 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <p className="truncate">
            Free express shipping on orders over €40 · Easy 30‑day returns
          </p>
          <button
            className="underline decoration-dashed underline-offset-4 hidden sm:block"
            onClick={() => alert("Change region modal goes here")}
          >
            Choose region
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="font-semibold tracking-tight text-lg">
              Hears
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#shop" className="hover:text-neutral-600">Shop</a>
              <a href="#features" className="hover:text-neutral-600">Why Hears</a>
              <a href="#awards" className="hover:text-neutral-600">Awards</a>
              <a href="#journal" className="hover:text-neutral-600">Journal</a>
              <a href="#responsibility" className="hover:text-neutral-600">Responsibility</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">
              Sign in
            </button>
            <button
              className="relative rounded-full border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-50"
              aria-label="Cart"
              onClick={() => alert("Cart panel goes here")}
            >
              <span className="i-lucide-shopping-bag inline-block align-[-2px]" />
              <span className="sr-only">Open cart</span>
            </button>
            <button
              className="md:hidden rounded-full border border-neutral-300 px-3 py-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {/* simple hamburger */}
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-neutral-900"></span>
                <span className="block h-0.5 w-5 bg-neutral-900"></span>
                <span className="block h-0.5 w-5 bg-neutral-900"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-200">
            <nav className="px-4 py-3 grid gap-3 text-sm">
              <a href="#shop" className="py-2">Shop</a>
              <a href="#features" className="py-2">Why Hears</a>
              <a href="#awards" className="py-2">Awards</a>
              <a href="#journal" className="py-2">Journal</a>
              <a href="#responsibility" className="py-2">Responsibility</a>
              <button className="mt-2 rounded-full border border-neutral-300 px-4 py-2 text-left">Sign in</button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=1800&q=80"
          alt="Crowd at a concert"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur">
              New: Limited colours now out
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Hear what matters. Protect your ears.
            </h1>
            <p className="mt-4 max-w-xl text-white/80">
              Premium noise‑reducing earplugs tuned for clarity—so music and voices stay crisp while volume drops.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
              >
                Shop now
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                How it works
              </a>
            </div>
            <p className="mt-6 text-sm text-white/70">Loved by thousands · 100‑day money‑back guarantee</p>
          </div>
        </div>
      </section>

      {/* Bestsellers / grid */}
      <section id="shop" className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Bestsellers</h2>
          <a href="#shop-all" className="text-sm underline underline-offset-4 decoration-dashed">Shop all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-sm transition-shadow">
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-60 w-full object-cover" />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow">
                    {p.badge}
                  </span>
                )}
                <span className="absolute right-3 top-3 rounded-full bg-black/80 px-2 py-1 text-[10px] font-medium text-white">
                  {p.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{p.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <span className="font-semibold">{p.price}</span>
                  <span className="text-neutral-500 line-through">{p.compareAt}</span>
                </div>
                <button className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Feature highlights */}
      <section id="features" className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Upgrade your listening—reduce volume, keep the detail
              </h2>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Premium hearing protection",
                    body:
                      "Second‑eardrum style membrane filters lower loudness without muffling.",
                  },
                  {
                    title: "Music stays clear",
                    body:
                      "Tuned to keep the sparkle of highs and the warmth of lows.",
                  },
                  {
                    title: "Voices sound natural",
                    body:
                      "Mid‑range clarity makes conversations easier in loud places.",
                  },
                  {
                    title: "Comfort first",
                    body:
                      "Soft tips and multiple sizes help you find the perfect seal.",
                  },
                ].map((f) => (
                  <li key={f.title} className="rounded-xl border border-neutral-200 p-4 bg-white">
                    <p className="font-medium">{f.title}</p>
                    <p className="text-sm text-neutral-600 mt-1">{f.body}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80"
                alt="Close up of ear with in‑ear device"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Award band */}
      <section id="awards" className="relative isolate">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">red dot winner 2024</h3>
              <p className="text-sm text-neutral-600 mt-1">Recognized for high design quality.</p>
            </div>
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800">
              Shop now
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
            What customers say
          </h2>
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

      {/* CTA image split */}
      <section id="how" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <img
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80"
              alt="Earplug fit"
              className="rounded-2xl object-cover w-full"
            />
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Designed for everyday loud</h3>
              <p className="mt-3 text-neutral-700">
                Concerts, clubs, festivals, open offices, workshops—wherever it gets loud,
                you’ll still enjoy crisp sound at a safer level.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Concerts & festivals",
                  "DJing & producing",
                  "Commuting & flights",
                  "Open offices",
                  "Workshops & tools",
                ].map((chip) => (
                  <span key={chip} className="rounded-full border border-neutral-300 px-3 py-1 text-xs">
                    {chip}
                  </span>
                ))}
              </div>
              <a
                href="#shop"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Choose your pair
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
            Frequently asked questions
          </h2>
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
            <a href="#" className="font-semibold text-lg">Hears</a>
            <p className="mt-3 text-neutral-600 max-w-sm">
              Premium noise‑reducing earplugs. Designed for clarity. Replace images & text as needed.
            </p>
            <p className="mt-4 text-xs text-neutral-500">© {new Date().getFullYear()} Hears (Replica). All product names & trademarks belong to their owners.</p>
          </div>
          <div>
            <p className="font-medium">Shop</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#shop" className="hover:text-neutral-600">All earplugs</a></li>
              <li><a href="#shop" className="hover:text-neutral-600">Bundles</a></li>
              <li><a href="#shop" className="hover:text-neutral-600">Limited editions</a></li>
              <li><a href="#shop" className="hover:text-neutral-600">Accessories</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Company</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#journal" className="hover:text-neutral-600">Journal</a></li>
              <li><a href="#responsibility" className="hover:text-neutral-600">Responsibility</a></li>
              <li><a href="#" className="hover:text-neutral-600">Careers</a></li>
              <li><a href="#" className="hover:text-neutral-600">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <p className="font-medium">Stay in the loop</p>
            <form className="mt-3 flex max-w-md gap-2">
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-full border border-neutral-300 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
              />
              <button className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
