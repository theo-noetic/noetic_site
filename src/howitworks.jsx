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
  <div className="sticky top-28 z-20 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
    <nav className="mx-auto max-w-6xl px-4">
      <div className="flex flex-wrap gap-2 py-3 text-sm">
        <a href="#basics" className="hover:underline"><Pill>Basics</Pill></a>
        <a href="#problem" className="hover:underline"><Pill>Problem</Pill></a>
        <a href="#solution" className="hover:underline"><Pill>Solution</Pill></a>
        <a href="#validation" className="hover:underline"><Pill>Data & Validation</Pill></a>
        <a href="#team" className="hover:underline"><Pill>Team</Pill></a>
        <div className="ms-auto" />
      </div>
    </nav>
  </div>
);

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white text-neutral-900">
      {/* Back navigation bar */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-12">
            <Link to="/" className="text-lg font-medium text-neutral-900 hover:text-neutral-600 flex items-center gap-2">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      
      {/* Top bar anchor nav */}
      <AnchorNav />

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-12 md:pt-16 pb-10 md:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-widest text-xs font-medium text-neutral-500 mb-2">The science behind</p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">Mycelium</h1>
              <p className="mt-4 text-lg text-neutral-700">The part of the mushroom that no one talks about.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#basics" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm hover:bg-neutral-800">Learn the science</a>
              </div>
              <p className="mt-3 text-sm text-neutral-500">Here's a quick explainer video by Paul Stamets, from Host Defense Mushrooms.</p>
            </div>
            <div className="relative">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                {/* Replace this iframe with your own video/animation */}
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/vnRDzotcQ9U?si=2zxVOHWX6nL-65JX"
                  title="Science overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </header>
 {/* Problem */}
      {/* Basics */}
      <Section id="basics" title="The Basics">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <p>
            <b>All mushrooms contain mycelium:</b> The mycelium is the root system of the mushroom. It absorbs nutrients from the soil to fuel the growth of the mushroom above the ground.</p>
            <p className="mt-4">
            <b>In psychedelic mushrooms, the mycelium contains psilocybin:</b> The mycelium contains 10-20x less psilocybin than the mushroom itself. That may not sound like much, but if the species is very potent, that's still enough to produce a trip!
            </p>
            <p className="mt-4">
            <b>In the Netherlands, psychedelic mycelium is legal:</b> Just like 'magic truffles'! But until now, it hasn't been used to produce an edible product.
            </p>
            <p className="mt-4">
            <b>We used psychedelic mycelium to make the first legal alternative to truffles:</b> Mycelium has many advantages over truffles; less nausea, more consistent potency, longer shelf-life, and more. It took 18 months of R&amp;D to figure out how to make it look and taste good enough to eat.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 p-2 bg-white shadow-sm w-fit mx-auto">
              <img
                src="https://6htrntmt012y8ehd.public.blob.vercel-storage.com/mycelium_growth.webp"
                alt="Diagram placeholder"
                className="rounded-xl border border-neutral-200"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Problem */}
      <section id="problem" className="scroll-mt-28 py-16 md:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-neutral-200 p-2 bg-white shadow-sm w-fit mx-auto">
                <img
                  src="https://6htrntmt012y8ehd.public.blob.vercel-storage.com/eating_truffles.webp"
                  alt="Diagram placeholder"
                  className="rounded-xl border border-neutral-200"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">The Problem</h2>
              <div className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed">
                <p>
                Magic truffles are the legal form of psilocybin in the Netherlands. But they have a few issues. <br /> <br /><b>1. Nausea.</b> Truffles are difficult to digest! This can make people vomit, or otherwise feel very uncomfortable, as their psychedelic trip begins.</p>
                <p className="mt-4">
                <b>2. Inconsistent potency.</b> Truffles vary widely in their strength, which can lead to unpredictable experiences. We've found that truffles marked for 'beginners' are sometimes stronger than the truffles marked for 'experienced users'!
                </p>
                <p className="mt-4">
                <b>3. Bad taste.</b> It's not just the nausea that makes consuming truffles unpleasant. People can struggle to chew enough of them to produce a psychedelic experience! 
                </p>
                <p className="mt-4">
                <b>4. Poor shelf-life.</b> Truffles expire within a few days of opening, which can make them difficult to microdose. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="scroll-mt-28 py-16 md:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-neutral-200 p-2 bg-white shadow-sm w-fit mx-auto">
                <img
                  src="https://6htrntmt012y8ehd.public.blob.vercel-storage.com/mycelium_bar_nobg_nohand.png"
                  alt="Magic Bar product"
                  className="rounded-xl border border-neutral-200"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">The Solution</h2>
              <div className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed">
                <p>
                The magic bar is the world's first psychedelic mycelium bar. It contains the same psychedelic compounds as magic truffles. But it has the following advantages: <br /> <br /><b>1. No nausea.</b> This is because the magic bar is grown on easy-to-digest pasta flour.</p>
                <p className="mt-4">
                <b>2. Neutral taste.</b> The Magic Bar tastes much better than truffles.
                </p>
                <p className="mt-4">
                <b>3. Long shelf life.</b> Up to 6 months if kept frozen, so you can wait until you're ready to trip.
                </p>
                <p className="mt-4">
                <b>4. Ideal for microdosing.</b> Resealable packaging, so you can microdose it for as long as you like.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Validation */}
      <Section id="validation" title="Data & Validation">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm bg-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm uppercase tracking-wider text-neutral-500">Food Safety</span>
            </div>
            <p>
The Magic Bar has been tested by an indepedent laboratory (along with hundreds of early customers) and shown to be completely safe for consumption, with extremely low bacteria counts.            </p>
            <a
              href="https://drive.google.com/file/d/1eqySAseKpWY7yz2PdBSgzm4XB5SGLoRv/view?usp=sharing"
              className="inline-flex items-center gap-2 mt-3 text-sm font-medium underline"
              target="_blank" rel="noreferrer"
            >Read the lab report</a>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm bg-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm uppercase tracking-wider text-neutral-500">Nutrition</span>
            </div>
            <p>
In the Netherlands, psychedelic truffles and mycelium are regulated as food products. So here are the nutritional facts. The bar isn't just psychedelic - it's pretty healthy, too.      </p>
            <a
              href="https://drive.google.com/file/d/13SWun58-2gIz_nSfXM4cwYOM6M0zN6Zn/view?usp=sharing"
              className="inline-flex items-center gap-2 mt-3 text-sm font-medium underline"
              target="_blank" rel="noreferrer"
            >Read the nutritional analysis report</a>
          </div>
        </div>
        <div className="mt-8">
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm">
            <h4 className="text-sm uppercase tracking-wider text-neutral-500">Quality & consistency</h4>
            <p className="mt-2 text-neutral-700">We frequently test the Magic Bar to ensure that our promises of better taste, less nausea, and more consistent potency remain true.</p>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section id="team" title="Founded by scientists">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <p>
              The Magic Bar was developed by a team of 2 Oxford and Cambridge scientists in a lab in Utrecht.
            </p>
            <p className="mt-4">
              Theo previously built the UK's top-rated mushroom grow kit, and Francesco worked as a food scientist at a leading alternative meat company. 
            </p>
          </div>
          <div className="flex gap-4">
            <div className="rounded-2xl border border-neutral-200 p-2 bg-white shadow-sm w-32 overflow-hidden">
              <img
                src="https://6htrntmt012y8ehd.public.blob.vercel-storage.com/francesco%20square.png"
                alt="Francesco"
                className="rounded-xl w-full object-cover scale-120"
              />
            </div>
            <div className="rounded-2xl border border-neutral-200 p-2 bg-white shadow-sm w-32 overflow-hidden">
              <img
                src="https://6htrntmt012y8ehd.public.blob.vercel-storage.com/theo%20square.png"
                alt="Theo"
                className="rounded-xl w-full object-cover scale-120"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-black text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">The first psychedelic mycelium bar</h3>
              <p className="mt-2 text-neutral-300">No nausea. Easy dosing. Better trips.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
