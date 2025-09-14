import React from "react";
import { Link } from "react-router-dom";

/**
 * HowItWorks.jsx — ZBiotics-style "How It Works" page replica (paraphrased)
 * Framework: React + TailwindCSS
 *
 * Notes
 * - All text is paraphrased from public sources to avoid verbatim copying.
 * - Replace placeholder images (Unsplash) with your own artwork/diagrams.
 * - Links to scientific papers are included where relevant.
 */

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-28 py-16 md:py-24 border-b border-neutral-200">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">{title}</h2>
      <div className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed">{children}</div>
    </div>
  </section>
);

const Card = ({ title, children }) => (
  <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm bg-white">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="text-neutral-700 leading-relaxed">{children}</div>
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-sm text-neutral-700 bg-white shadow-sm">{children}</span>
);

const AnchorNav = () => (
  <div className="sticky top-16 z-20 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
    <nav className="mx-auto max-w-6xl px-4">
      <div className="flex flex-wrap gap-2 py-3 text-sm">
        <a href="#basics" className="hover:underline"><Pill>Basics</Pill></a>
        <a href="#problem" className="hover:underline"><Pill>Problem</Pill></a>
        <a href="#solution" className="hover:underline"><Pill>Solution</Pill></a>
        <a href="#validation" className="hover:underline"><Pill>Data & Validation</Pill></a>
        <a href="#team" className="hover:underline"><Pill>Team</Pill></a>
        <a href="#faqs" className="hover:underline"><Pill>FAQs</Pill></a>
        <div className="ms-auto" />
        <a href="/shop" className="ms-auto inline-flex items-center rounded-full bg-black text-white px-4 py-1.5 hover:bg-neutral-800">Buy Pre‑Alcohol</a>
      </div>
    </nav>
  </div>
);

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white text-neutral-900">
      {/* Header with back navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-semibold text-neutral-900 hover:text-neutral-600">
              ← Back to Home
            </Link>
            <Link to="/" className="text-2xl font-bold text-neutral-900">
              Hears Home
            </Link>
          </div>
        </div>
      </header>
      
      {/* Top bar anchor nav */}
      <AnchorNav />

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-12 md:pt-16 pb-10 md:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-widest text-xs font-medium text-neutral-500 mb-2">The science behind</p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">Pre‑Alcohol</h1>
              <p className="mt-4 text-lg text-neutral-700">A probiotic drink designed with genetic engineering to help your gut break down acetaldehyde — an unwanted byproduct of alcohol — so tomorrow feels more like you.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#basics" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm hover:bg-neutral-800">Learn the science</a>
                <a href="/shop" className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm hover:border-neutral-500">Buy Pre‑Alcohol</a>
              </div>
              <p className="mt-3 text-sm text-neutral-500">~60‑second overview • no medical claims • drink responsibly</p>
            </div>
            <div className="relative">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                {/* Replace this iframe with your own video/animation */}
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                  title="Science overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Basics */}
      <Section id="basics" title="The Basics">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Alcohol creates acetaldehyde">
            When you drink, your body metabolizes alcohol and generates a small reactive molecule called <em>acetaldehyde</em>. It’s one of the reasons the day after can feel rough.
          </Card>
          <Card title="It accumulates in the gut">
            Acetaldehyde can be made both in the liver and in the gut. Your liver has the enzymes to clear it quickly. Your gut microbiome doesn’t — which means acetaldehyde can build up before it filters into the rest of your body.
          </Card>
          <Card title="Pre‑Alcohol helps break it down">
            Pre‑Alcohol adds a probiotic to your gut that can make the same kind of enzyme your liver uses to digest acetaldehyde, helping reduce its buildup where it matters.
          </Card>
          <Card title="Built with genetic engineering">
            The strain we reference here — <em>Bacillus subtilis</em> ZB183™ — was engineered to produce acetaldehyde dehydrogenase (ALDH). The approach is safety‑first and focused on responsible biotech.
          </Card>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6 items-center">
          <img
            src="https://images.unsplash.com/photo-1581594693700-10e2f54f5441?q=80&w=1200&auto=format&fit=crop"
            alt="Microscope / lab aesthetic"
            className="rounded-2xl border border-neutral-200 shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1581091870633-cf668c39f3a9?q=80&w=1200&auto=format&fit=crop"
            alt="Illustrative diagram placeholder"
            className="rounded-2xl border border-neutral-200 shadow-sm"
          />
        </div>
      </Section>

      {/* Problem */}
      <Section id="problem" title="The Problem">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <p>
              Alcohol metabolism triggers a cascade of biological reactions. Among the byproducts, acetaldehyde is notable because it’s highly reactive and can interact with many cellular components. Most alcohol is handled in the liver via a two‑step enzyme pathway: alcohol dehydrogenase (ADH) converts alcohol to acetaldehyde, then acetaldehyde dehydrogenase (ALDH) converts acetaldehyde to acetate (basically vinegar).
            </p>
            <p className="mt-4">
              But not all ethanol makes it to your liver first. Some is processed directly in the gut by microbes. Many gut microbes can perform the first step (ADH) but not enough of the second step (ALDH). That gap is a major source of acetaldehyde accumulation.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 p-5 bg-white shadow-sm">
              <h4 className="font-semibold mb-2">Liver vs. Gut (simplified)</h4>
              <ol className="list-decimal ms-5 space-y-2 text-sm">
                <li><span className="font-medium">Liver:</span> Alcohol <span aria-hidden>→</span> acetaldehyde (ADH) <span aria-hidden>→</span> acetate (ALDH)</li>
                <li><span className="font-medium">Gut:</span> Microbes do step 1 (ADH) but often lack step 2 (ALDH) <span aria-hidden>→</span> acetaldehyde lingers</li>
              </ol>
              <img
                src="https://images.unsplash.com/photo-1631542022967-90f2d6d933ce?q=80&w=1200&auto=format&fit=crop"
                alt="Diagram placeholder"
                className="mt-4 rounded-xl border border-neutral-200"
              />
              <p className="mt-3 text-xs text-neutral-500">Illustration placeholder — swap for your own diagram.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section id="solution" title="The Solution">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Deliver the right enzyme to the right place">
            Instead of swallowing purified enzymes (which would just be digested as protein), deliver a living probiotic that can make ALDH in your gut — the same kind of enzyme your liver uses.
          </Card>
          <Card title="Choose a resilient chassis">
            <em>B. subtilis</em> is a spore‑forming probiotic long used in foods and supplements. Spores survive stomach acid and then “wake up” in the gut to make enzymes.
          </Card>
          <Card title="Engineer with precision">
            Using genetic engineering, scientists inserted instructions for ALDH into the genome of a safe, food‑grade <em>B. subtilis</em> strain to create ZB183™.
          </Card>
          <Card title="Design for transience">
            The intent is not to colonize or alter your microbiome, but to pass through, do the job, and move on — so your baseline microbiome remains unchanged.
          </Card>
        </div>
      </Section>

      {/* Data & Validation */}
      <Section id="validation" title="Data & Validation">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm bg-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm uppercase tracking-wider text-neutral-500">Safety</span>
            </div>
            <p>
              ZB183™ underwent comprehensive safety testing by independent toxicologists, including a 90‑day GLP oral study in rats. Results supported safety under intended use.
            </p>
            <a
              href="https://onlinelibrary.wiley.com/doi/10.1155/2019/3042108"
              className="inline-flex items-center gap-2 mt-3 text-sm font-medium underline"
              target="_blank" rel="noreferrer"
            >Read the 2019 Journal of Toxicology paper</a>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm bg-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm uppercase tracking-wider text-neutral-500">Function</span>
            </div>
            <p>
              Lab work compared the engineered strain to its unedited parent. The engineered probiotic produced ALDH robustly and degraded acetaldehyde in gut‑like conditions.
            </p>
            <a
              href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0312457"
              className="inline-flex items-center gap-2 mt-3 text-sm font-medium underline"
              target="_blank" rel="noreferrer"
            >Read the 2024 PLOS ONE paper</a>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6 items-center">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop"
            alt="ZBiotics lab vibe placeholder"
            className="rounded-2xl border border-neutral-200 shadow-sm"
          />
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm">
            <h4 className="text-lg font-semibold">Quality & consistency</h4>
            <p className="mt-2 text-neutral-700">Each batch is checked from biomass to final bottled product for identity, purity, and performance, with specs published transparently.</p>
            <a href="/quality" className="mt-3 inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm hover:border-neutral-500">See quality standards</a>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section id="team" title="Founded by scientists">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <p>
              The technology behind Pre‑Alcohol was built in‑house by a team of PhD microbiologists. Keeping R&D under one roof lets science and product design move together.
            </p>
            <p className="mt-4">
              The founding CEO, Dr. Zack Abbott, is a microbiologist (PhD in Microbiology & Immunology, University of Michigan) who previously designed clinical trials in biotech and pharma before launching ZBiotics.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/about" className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm hover:border-neutral-500">Founding story</a>
              <a href="/team" className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm hover:border-neutral-500">Meet the team</a>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
            alt="Team photo placeholder"
            className="rounded-2xl border border-neutral-200 shadow-sm"
          />
        </div>
      </Section>

      {/* FAQs */}
      <Section id="faqs" title="You probably have questions">
        <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <details className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h4 className="text-lg font-semibold">When should I drink Pre‑Alcohol?</h4>
              <span className="transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <p className="mt-3 text-neutral-700">Ideally before your first drink. The probiotic needs time to “wake up” in your gut. If you forget, it’s still fine to take later the same day or evening.</p>
          </details>
          <details className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h4 className="text-lg font-semibold">How long does one bottle cover me?</h4>
              <span className="transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <p className="mt-3 text-neutral-700">Typically 18–24 hours, so brunch to late‑night plans are covered.</p>
          </details>
          <details className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h4 className="text-lg font-semibold">Is this FDA‑compliant?</h4>
              <span className="transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <p className="mt-3 text-neutral-700">Yes for safety compliance and manufacturing. It’s a food/beverage product, not an FDA‑approved drug, and it doesn’t change blood alcohol levels.</p>
          </details>
          <details className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h4 className="text-lg font-semibold">Will it alter my microbiome?</h4>
              <span className="transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <p className="mt-3 text-neutral-700">It’s designed to be transient — to pass through without colonizing, so your baseline microbiome should remain unchanged.</p>
          </details>
          <details className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h4 className="text-lg font-semibold">Does it affect intoxication?</h4>
              <span className="transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <p className="mt-3 text-neutral-700">No. It does not lower blood alcohol or make alcohol safer. All normal safety rules still apply — don’t drive, drink responsibly.</p>
          </details>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/faqs" className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm hover:border-neutral-500">See all FAQs</a>
          <a href="/contact" className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm hover:border-neutral-500">Contact us</a>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-black text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Your first drink of the night for a better tomorrow</h3>
              <p className="mt-2 text-neutral-300">Grab a few bottles so you’re always covered when plans pop up.</p>
            </div>
            <a href="/shop" className="inline-flex items-center rounded-full bg-white text-black px-5 py-3 hover:bg-neutral-100">Buy Pre‑Alcohol</a>
          </div>
        </div>
      </section>
    </main>
  );
}
