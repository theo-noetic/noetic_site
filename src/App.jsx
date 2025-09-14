import React, { useEffect, useMemo, useRef, useState } from "react";
import HowItWorks from "./howitworks.jsx";
import { Link, Routes, Route } from "react-router-dom";

/**
 * ZBiotics — Homepage (April 5, 2024 snapshot) replica
 * React + Tailwind single-file build with dynamic behaviors
 *
 * Focus of this pass:
 * - Match color interactions: orange CTAs → grey on hover
 * - Add header "VIEW PRODUCTS" orange rectangle
 * - Add central section with images on both sides of copy
 * - Add desktop testimonial carousel with arrow controls + side thumbnails
 */

export default function ZbioticsReplica() {
  // Cart state
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useLocalStorage("zb_cart", []);
  const cartCount = useMemo(() => cart.reduce((n, i) => n + i.qty, 0), [cart]);

  // Smooth anchor scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => en.isIntersecting && en.target.classList.add("reveal-in"));
    }, { threshold: 0.14 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const addToCart = (item) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.sku === item.sku);
      if (idx >= 0) {
        const clone = [...prev];
        clone[idx] = { ...clone[idx], qty: clone[idx].qty + item.qty };
        return clone;
      }
      return [...prev, item];
    });
    setCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <StyleTag />
      <TopNotice />
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <PressBar />
            <PreAlcoholSection />
            <BetterMornings />
            <TomorrowSection />
            <LabNotes />
            <Faq />
            <Newsletter />
          </main>
        } />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} setCart={setCart} />
    </div>
  );
}

function StyleTag() {
  const BLOB_BASE = "https://6htrntmt012y8ehd.public.blob.vercel-storage.com/Gooper/";
  return (
    <style>
      {`
/* ------------------------
   Gooper — Vercel Blob hosted
   ------------------------ */
@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-Thin.woff2") format("woff2"),url("${BLOB_BASE}Gooper-Thin.woff") format("woff"),url("${BLOB_BASE}Gooper-Thin.ttf") format("truetype");font-weight:100;font-style:normal;font-display:swap}
@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-ThinItalic.woff2") format("woff2"),url("${BLOB_BASE}Gooper-ThinItalic.woff") format("woff"),url("${BLOB_BASE}Gooper-ThinItalic.ttf") format("truetype");font-weight:100;font-style:italic;font-display:swap}

@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-ExtraLight.woff2") format("woff2"),url("${BLOB_BASE}Gooper-ExtraLight.woff") format("woff"),url("${BLOB_BASE}Gooper-ExtraLight.ttf") format("truetype");font-weight:200;font-style:normal;font-display:swap}
@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-ExtraLightItalic.woff2") format("woff2"),url("${BLOB_BASE}Gooper-ExtraLightItalic.woff") format("woff"),url("${BLOB_BASE}Gooper-ExtraLightItalic.ttf") format("truetype");font-weight:200;font-style:italic;font-display:swap}

@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-Light.woff2") format("woff2"),url("${BLOB_BASE}Gooper-Light.woff") format("woff"),url("${BLOB_BASE}Gooper-Light.ttf") format("truetype");font-weight:300;font-style:normal;font-display:swap}
@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-LightItalic.woff2") format("woff2"),url("${BLOB_BASE}Gooper-LightItalic.woff") format("woff"),url("${BLOB_BASE}Gooper-LightItalic.ttf") format("truetype");font-weight:300;font-style:italic;font-display:swap}

@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-Regular.woff2") format("woff2"),url("${BLOB_BASE}Gooper-Regular.woff") format("woff"),url("${BLOB_BASE}Gooper-Regular.ttf") format("truetype");font-weight:400;font-style:normal;font-display:swap}
@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-RegularItalic.woff2") format("woff2"),url("${BLOB_BASE}Gooper-RegularItalic.woff") format("woff"),url("${BLOB_BASE}Gooper-RegularItalic.ttf") format("truetype");font-weight:400;font-style:italic;font-display:swap}

@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-Medium.woff2") format("woff2"),url("${BLOB_BASE}Gooper-Medium.woff") format("woff"),url("${BLOB_BASE}Gooper-Medium.ttf") format("truetype");font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-MediumItalic.woff2") format("woff2"),url("${BLOB_BASE}Gooper-MediumItalic.woff") format("woff"),url("${BLOB_BASE}Gooper-MediumItalic.ttf") format("truetype");font-weight:500;font-style:italic;font-display:swap}

@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-SemiBold.woff2") format("woff2"),url("${BLOB_BASE}Gooper-SemiBold.woff") format("woff"),url("${BLOB_BASE}Gooper-SemiBold.ttf") format("truetype");font-weight:600;font-style:normal;font-display:swap}
@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-SemiBoldItalic.woff2") format("woff2"),url("${BLOB_BASE}Gooper-SemiBoldItalic.woff") format("woff"),url("${BLOB_BASE}Gooper-SemiBoldItalic.ttf") format("truetype");font-weight:600;font-style:italic;font-display:swap}

@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-Bold.woff2") format("woff2"),url("${BLOB_BASE}Gooper-Bold.woff") format("woff"),url("${BLOB_BASE}Gooper-Bold.ttf") format("truetype");font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-BoldItalic.woff2") format("woff2"),url("${BLOB_BASE}Gooper-BoldItalic.woff") format("woff"),url("${BLOB_BASE}Gooper-BoldItalic.ttf") format("truetype");font-weight:700;font-style:italic;font-display:swap}

@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-ExtraBold.woff2") format("woff2"),url("${BLOB_BASE}Gooper-ExtraBold.woff") format("woff"),url("${BLOB_BASE}Gooper-ExtraBold.ttf") format("truetype");font-weight:800;font-style:normal;font-display:swap}
@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-ExtraBoldItalic.woff2") format("woff2"),url("${BLOB_BASE}Gooper-ExtraBoldItalic.woff") format("woff"),url("${BLOB_BASE}Gooper-ExtraBoldItalic.ttf") format("truetype");font-weight:800;font-style:italic;font-display:swap}

@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-Black.woff2") format("woff2"),url("${BLOB_BASE}Gooper-Black.woff") format("woff"),url("${BLOB_BASE}Gooper-Black.ttf") format("truetype");font-weight:900;font-style:normal;font-display:swap}
@font-face{font-family:"Gooper";src:url("${BLOB_BASE}Gooper-BlackItalic.woff2") format("woff2"),url("${BLOB_BASE}Gooper-BlackItalic.woff") format("woff"),url("${BLOB_BASE}Gooper-BlackItalic.ttf") format("truetype");font-weight:900;font-style:italic;font-display:swap}

/* Set Gooper as the site default */
html{
  font-family:"Gooper", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-synthesis-weight:none;
  font-synthesis-style:none;
}

/* --- existing styles from your app --- */
:root{ --zb-orange:#DE7F3E; --zb-orange-dark:#D77333; --zb-grey:#6B6B6B; }
@keyframes marquee {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
[data-reveal]{opacity:0;transform:translateY(16px);transition:opacity .6s ease,transform .6s ease}
.reveal-in{opacity:1!important;transform:translateY(0)!important}
.marquee-track{display:flex;width:200%;animation:marquee 28s linear infinite}
.btn-orange{background:var(--zb-orange);color:#fff}
.btn-orange:hover{background:var(--zb-grey)}
.badge-orange{background:var(--zb-orange);color:#fff}
.no-scrollbar::-webkit-scrollbar{display:none}
.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
      `}
    </style>
  );
}



function useLocalStorage(key, initial) {
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") return initial;
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : initial; } catch { return initial; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(state)); } catch {} }, [key, state]);
  return [state, setState];
}

function TopNotice() {
  const [visible, setVisible] = useState(true);
  useEffect(() => { const t = setTimeout(() => setVisible(false), 6000); return () => clearTimeout(t); }, []);
  if (!visible) return null;
  return (
    <div className="w-full bg-neutral-900 text-white text-center text-[13px] tracking-wide py-2 px-3 flex items-center justify-center gap-4">
      <span>NO SHIPPING FEES — COMPLIMENTARY DELIVERY ON EVERY PURCHASE!</span>
      <button className="absolute right-3 text-white/80 hover:text-white" onClick={() => setVisible(false)} aria-label="Dismiss notice">×</button>
    </div>
  );
}

function Header({ cartCount, onOpenCart }) {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  useEffect(() => { document.documentElement.style.overflow = open ? "hidden" : ""; return () => (document.documentElement.style.overflow = ""); }, [open]);
  useEffect(() => { const onScroll = () => setCondensed(window.scrollY > 10); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200 ${condensed ? "shadow-sm" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${condensed ? "h-14" : "h-16"} transition-[height]`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-8 w-8 grid place-items-center rounded bg-neutral-900 text-white font-bold">Z</div>
            <span className="font-semibold tracking-tight text-lg group-hover:opacity-80">ZBiotics®</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[15px]">
            <a className="inline-flex items-center justify-center px-4 py-2 font-medium rounded btn-orange" href="#how-it-works">VIEW PRODUCTS</a>
            <Dropdown label="Science" items={[{label:"How it Works",href:"/how-it-works"},{label:"Technology",href:"#technology"}]} />
            <Dropdown label="About" items={[{label:"Mission",href:"#mission"},{label:"Team",href:"#team"},{label:"Reviews",href:"#reviews"}]} />
            <Link className="hover:text-neutral-600" to="/how-it-works">Science</Link>       
            <Dropdown label="About" items={[{label:"Mission",href:"#mission"},{label:"Team",href:"#team"},{label:"Reviews",href:"#reviews"}]} />
            <a className="hover:text-neutral-600" href="#faq">Support</a>
            <button onClick={onOpenCart} className="relative inline-flex items-center gap-2 hover:text-neutral-700">
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center text-xs font-medium rounded-full min-w-[22px] h-[22px] badge-orange">{cartCount}</span>
              )}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={onOpenCart} aria-label="Open cart" className="p-2 rounded hover:bg-neutral-100 relative">
              <CartIcon />
              {cartCount > 0 && <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full badge-orange">{cartCount}</span>}
            </button>
            <button className="p-2 rounded hover:bg-neutral-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-4 space-y-3 text-sm">
            <a className="inline-flex items-center justify-center px-4 py-2 font-medium rounded btn-orange" href="#how-it-works" onClick={() => setOpen(false)}>VIEW PRODUCTS</a>
            <Disclosure label="Science" items={[{label:"How it Works", href: "#how-it-works"},{label:"Technology", href: "#technology"}]} onNavigate={()=>setOpen(false)} />
            <Disclosure label="About" items={[{label:"Mission", href: "#mission"},{label:"Team", href: "#team"},{label:"Reviews", href: "#reviews"}]} onNavigate={()=>setOpen(false)} />
            <a className="block" href="#lab-notes" onClick={() => setOpen(false)}>Blog</a>
            <a className="block" href="#faq" onClick={() => setOpen(false)}>Support</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Dropdown({ label, items }) {
  return (
    <div className="relative group">
      <button className="inline-flex items-center gap-1 hover:text-neutral-600">{label}<ChevronDown /></button>
      <div className="pointer-events-none opacity-0 translate-y-1 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition absolute left-1/2 -translate-x-1/2 mt-2 w-52 rounded-xl border border-neutral-200 bg-white shadow-xl p-2">
        {items.map((it) => (
          it.href.startsWith('/') ? (
            <Link key={it.label} to={it.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-50">{it.label}</Link>
          ) : (
            <a key={it.label} href={it.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-50">{it.label}</a>
          )
        ))}
      </div>
    </div>
  );
}
function Disclosure({ label, items, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="w-full flex items-center justify-between py-2" onClick={() => setOpen(!open)}>
        <span>{label}</span>
        <ChevronDown className={`${open ? "rotate-180" : ""} transition`} />
      </button>
      {open && (
        <div className="pl-3 space-y-2">
          {items.map((it) => (
            <a key={it.label} href={it.href} className="block py-1 text-neutral-700" onClick={onNavigate}>{it.label}</a>
          ))}
        </div>
      )}
    </div>
  );
}

function MenuIcon(){return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>)}
function ChevronDown({className=""}){return(<svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className} aria-hidden><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
function ArrowLeft(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
function ArrowRight(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
function CartIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 3h1.5l2.4 12.3a2 2 0 0 0 2 1.7h7.8a2 2 0 0 0 2-1.6l1.3-6.4H7.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="20" r="1.5" fill="currentColor"/><circle cx="17" cy="20" r="1.5" fill="currentColor"/></svg>)}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">Your first drink of the night for a better tomorrow</h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-700 max-w-xl">Genetically engineered by a team of PhD microbiologists, ZBiotics® is a probiotic drink that breaks down the byproduct of alcohol responsible for rough mornings after drinking.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded px-6 py-3 font-medium btn-orange">SHOP HERE</a>
          </div>
        </div>
        <div className="relative">
          <img src="https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/Zbiotics_Product_10_5_21-399-Edit-750x1125-30-prog.jpg?v=1647200915" alt="Two cocktails beside mini ZBiotics bottles on a marble table" className="w-full h-[480px] object-cover rounded-3xl shadow-xl" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function PressBar() {
  const logos = [
    { alt: "Forbes", src: "https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/logo-forbes_1_160x160%402x.png?v=1634776854" },
    { alt: "CNET", src: "https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/logo-cnet2_160x160%402x.png?v=1634777126" },
    { alt: "Business Insider", src: "https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/logo-bi_160x160%402x.png?v=1634777031" },
    { alt: "Cheddar", src: "https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/logo-cheddar_1_160x160%402x.png?v=1634777031" },
    { alt: "TechCrunch", src: "https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/logo-tc_160x160%402x.png?v=1634777031" },
    { alt: "C&EN", src: "https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/logo-cen_1_160x160%402x.png?v=1634777031" },
  ];
  return (
    <section className="border-y border-neutral-200 select-none" aria-label="As seen in">
      <div className="md:hidden overflow-hidden">
        <div className="marquee-track">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="w-1/6 min-w-[160px] flex items-center justify-center py-4">
              <img src={logo.src} alt={logo.alt} className="max-h-8 object-contain opacity-70" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-6 gap-6 items-center">
            {logos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="max-h-8 object-contain mx-auto opacity-70" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CartDrawer({ open, onClose, cart, setCart }) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const updateQty = (sku, delta) => setCart((prev) => prev.map((p) => (p.sku === sku ? { ...p, qty: Math.max(1, p.qty + delta) } : p)));
  const removeItem = (sku) => setCart((prev) => prev.filter((p) => p.sku !== sku));

  return (
    <div className={`fixed inset-0 z-[60] ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`} role="dialog" aria-label="Cart">
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="p-2 rounded hover:bg-neutral-100" aria-label="Close cart">×</button>
        </div>
        <div className="p-4 divide-y divide-neutral-200 max-h-[calc(100vh-190px)] overflow-auto">
          {cart.length === 0 ? (
            <p className="text-neutral-600 mt-2">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.sku} className="py-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium leading-snug">{item.title}</p>
                  <p className="text-sm text-neutral-600">${(item.price * item.qty).toFixed(2)}</p>
                  <div className="mt-2 inline-flex items-center rounded-full border border-neutral-300">
                    <button className="px-3 py-1" onClick={() => updateQty(item.sku, -1)} aria-label="Decrease quantity">−</button>
                    <span className="px-3 select-none">{item.qty}</span>
                    <button className="px-3 py-1" onClick={() => updateQty(item.sku, 1)} aria-label="Increase quantity">+</button>
                  </div>
                </div>
                <button className="text-sm text-neutral-600 hover:text-neutral-900" onClick={() => removeItem(item.sku)} aria-label="Remove">Remove</button>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-neutral-200">
          <div className="flex items-center justify-between text-sm"><span>Subtotal</span><span className="font-medium">${subtotal.toFixed(2)}</span></div>
          <button className="mt-4 w-full inline-flex items-center justify-center rounded px-6 py-3 font-medium btn-orange disabled:opacity-60" disabled={cart.length===0}>Checkout</button>
          <p className="mt-3 text-xs text-neutral-500">Demo only — no payment processing.</p>
        </div>
      </aside>
    </div>
  );
}

// Images on both sides + copy centered
function PreAlcoholSection() {
  return (
    <section id="how-it-works" className="py-24" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* MOBILE: two images side-by-side above copy, then left-aligned text */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-5 mb-10">
            <div className="relative h-[260px] sm:h-[300px] rounded-3xl overflow-hidden">
              <img
                src="https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/Zbiotics_Product_10_5_21-399-Edit-750x1125-30-prog.jpg?v=1647200915"
                alt="Cocktails on marble with ZBiotics bottles"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative h-[260px] sm:h-[300px] rounded-3xl overflow-hidden">
              <img
                src="https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/Home---woman-tying-sneaker.jpg?v=1634772105"
                alt="Athlete tying a sneaker"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">A Pre-Alcohol <span className="block">Probiotic</span></h2>
            <p className="mt-6 text-neutral-700 leading-relaxed">Drink ZBiotics before drinking alcohol. Alcohol produces acetaldehyde, a byproduct that wreaks havoc on your next day. ZBiotics is the first and only product engineered to break down acetaldehyde.</p>
            <p className="mt-4 text-neutral-700 leading-relaxed">Now you can confidently enjoy drinking, because ZBiotics was invented with science — not just supplements.</p>
            <a href="#lab-notes" className="mt-8 inline-flex items-center justify-center rounded px-6 py-3 font-medium btn-orange">LEARN MORE</a>
          </div>
        </div>

        {/* DESKTOP: centered copy with both images INSIDE the container (no transforms, no horizontal scroll) */}
        <div className="hidden lg:grid grid-cols-[minmax(340px,1fr)_minmax(520px,620px)_minmax(340px,1fr)] items-center">
          {/* Left image (higher) */}
          <div className="justify-self-start">
            <div className="w-full max-w-[520px] h-[560px] rounded-3xl overflow-hidden shadow-xl -mt-8">
              <img
                src="https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/Zbiotics_Product_10_5_21-399-Edit-750x1125-30-prog.jpg?v=1647200915"
                alt="Cocktails on marble with ZBiotics bottles"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Center copy */}
          <div className="text-center px-6 py-10">
            <h2 className="text-4xl font-semibold tracking-tight">A Pre-Alcohol <span className="block">Probiotic</span></h2>
            <p className="mt-6 text-neutral-700 leading-relaxed max-w-2xl mx-auto">Drink ZBiotics before drinking alcohol. Alcohol produces acetaldehyde, a byproduct that wreaks havoc on your next day. ZBiotics is the first and only product engineered to break down acetaldehyde.</p>
            <p className="mt-4 text-neutral-700 leading-relaxed max-w-2xl mx-auto">Now you can confidently enjoy drinking, because ZBiotics was invented with science — not just supplements.</p>
            <a href="#lab-notes" className="mt-10 inline-flex items-center justify-center rounded px-6 py-3 font-medium btn-orange">LEARN MORE</a>
          </div>

          {/* Right image (lower) */}
          <div className="justify-self-end">
            <div className="w-full max-w-[520px] h-[560px] rounded-3xl overflow-hidden shadow-xl mt-20">
              <img
                src="https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/Home---woman-tying-sneaker.jpg?v=1634772105"
                alt="Athlete tying a sneaker"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Counter bar (unchanged) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-6 sm:p-8 md:p-10 flex items-center justify-between gap-6">
          <div><p className="text-2xl sm:text-3xl font-semibold">2,000,000+ <span className="font-normal">Better Mornings</span></p></div>
          <div className="text-sm text-neutral-600">Trusted by customers since launch — and counting.</div>
        </div>
      </div>
    </section>
  );
}

// Desktop carousel with arrows + side thumbnails; mobile falls back to scroll cards
function BetterMornings() {
  const items = [
    { name: "Max V.", role: "LEADERSHIP AND CAREER COACH", quote: "Nothing else like it.", body: `Spending the past four years in the events and hospitality industry, I learned quickly that alcohol is an occupational hazard. Peak season meetups with caterers, bartenders, and event planners frequently involved midweek drinks, with showcases and networking events sometimes two or three nights in a row.

Not only did ZBiotics make these meetings far less detrimental to energy levels the following morning, keeping a few extras made for a great talking point for those that would join me….`, src: "https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/Testimonial-Max.jpg?v=1634774468" },
    { name: "Sophina T.", role: "FIELD APPLICATION SCIENTIST", quote: "No more roulette.", body: "I've never been able to find that sweet spot in terms of how many drinks before future me pays for it. With ZBiotics, I'm no longer playing roulette with my productivity the next day.", src: "https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/Testimonial-Sophina-2.jpg?v=1634773733" },
    { name: "Kofi O.", role: "ENGINEER & SINGER/SONGWRITER", quote: "Stress-free nights.", body: "ZBiotics has been such a huge help for me in reducing my anxiety around having a drink or two with friends during the week.", src: "https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/Testimonial-Kofi-2.jpg?v=1634774243" },
    { name: "Sierra M.", role: "RESEARCHER & STUDENT", quote: "Truly transformative.", body: "I used to wake up debilitated after only a glass or two of wine. Nothing was truly transformative until I tried ZBiotics.", src: "https://web.archive.org/web/20240405210321im_/https://zbiotics.com/cdn/shop/files/Testimonial-Sierra.jpg?v=1634773733" },
  ];
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);
  const cur = items[idx];

  return (
    <section id="reviews" className="py-24 bg-white border-t border-neutral-200" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[40px] sm:text-[48px] font-semibold tracking-tight mb-6">Better Mornings</h2>

        {/* Mobile: horizontal cards */}
        <div className="lg:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory space-x-5 flex">
          {items.map((t) => (
            <article key={t.name} className="snap-center shrink-0 w-80 rounded-3xl border border-neutral-200 overflow-hidden shadow-sm">
              <img src={t.src} alt={t.name} className="h-64 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{t.quote}</h3>
                <p className="mt-3 text-neutral-700 whitespace-pre-line">{t.body}</p>
                <div className="mt-4 text-sm text-neutral-600">
                  <p className="font-medium">{t.name}</p>
                  <p className="uppercase tracking-wide text-xs">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: big image + copy + thumbnails */}
        <div className="hidden lg:grid grid-cols-[minmax(380px,1fr)_1.2fr_420px] gap-8 items-start">
          <img src={cur.src} alt={cur.name} className="w-full h-[520px] object-cover rounded-3xl border border-neutral-200"/>
          <div>
            <div className="text-[40px] leading-none text-[var(--zb-orange)]">“</div>
            <h3 className="text-3xl font-semibold -mt-2">{cur.quote}</h3>
            <p className="mt-4 text-neutral-700 whitespace-pre-line">{cur.body}</p>
            <div className="mt-5 text-sm text-neutral-600">
              <p className="font-medium">{cur.name}</p>
              <p className="uppercase tracking-wide text-xs">{cur.role}</p>
            </div>
            <div className="mt-8 flex gap-4">
              <button onClick={prev} className="w-12 h-12 rounded-full border border-neutral-300 grid place-items-center hover:bg-neutral-50" aria-label="Previous"><ArrowLeft/></button>
              <button onClick={next} className="w-12 h-12 rounded-full border border-neutral-300 grid place-items-center hover:bg-neutral-50" aria-label="Next"><ArrowRight/></button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 content-start">
            {[1,2,3].map((n) => {
              const i = (idx + n) % items.length; const t = items[i];
              return (
                <button key={i} onClick={() => setIdx(i)} className="group relative">
                  <img src={t.src} alt={t.name} className="w-full h-[160px] object-cover rounded-2xl border border-neutral-200"/>
                  <span className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-neutral-900/20"/>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function useModelViewerReady() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const markReady = () => setReady(true);

    // If already registered, we're good
    if (customElements.get("model-viewer")) {
      markReady();
      return;
    }

    // Reuse an existing script tag if present
    let script = document.querySelector('script[data-model-viewer]');
    if (!script) {
      script = document.createElement("script");
      script.type = "module";
      script.src = "https://cdn.jsdelivr.net/npm/@google/model-viewer@4.1.0/dist/model-viewer.min.js";
      script.crossOrigin = "anonymous";
      script.setAttribute("data-model-viewer", "");
      document.head.appendChild(script);
    }

    const onLoad = async () => {
      try {
        await customElements.whenDefined("model-viewer");
        markReady();
      } catch (e) {
        console.error("model-viewer failed to initialize", e);
      }
    };

    script.addEventListener("load", onLoad);
    // If script was cached & already loaded:
    if (script.readyState === "complete") onLoad();

    return () => script.removeEventListener("load", onLoad);
  }, []);

  return ready;
}

function TomorrowSection() {
  // Official demo models hosted by modelviewer.dev (CORS-ready)
  const GLB_SRC  = "https://6htrntmt012y8ehd.public.blob.vercel-storage.com/Bar%20only.glb";
  const USDZ_SRC = "https://modelviewer.dev/shared-assets/models/Astronaut.usdz";

  const ready = useModelViewerReady();

  return (
    <section id="mission" className="py-24 bg-neutral-50" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Tomorrow Morning is <span className="block">Only the Beginning</span>
            </h2>
            <p className="mt-6 text-neutral-700 leading-relaxed max-w-3xl lg:max-w-prose mx-auto lg:mx-0">
              ZBiotics’ Pre-Alcohol Probiotic is the first of its kind, but it won’t be the last.
              We believe that genetic engineering – applied transparently and responsibly – has the
              capacity to directly improve people’s lives in ways previously unachievable. We’re
              working to build that future.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed max-w-3xl lg:max-w-prose mx-auto lg:mx-0">
              Every probiotic we engineer serves a different function and purpose for daily living.
              We can’t wait to introduce them all.
            </p>
            <a href="#lab-notes" className="mt-8 inline-flex items-center justify-center rounded px-5 py-2.5 font-medium btn-orange">
              SEE THE POSSIBILITIES
            </a>
          </div>

          {/* Rotating 3D viewer */}
          <div className="relative">
            <div className="relative rounded-3xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
              {/* Subtle radial glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(80% 60% at 50% 40%, rgba(222,127,62,0.12) 0%, rgba(222,127,62,0.06) 35%, transparent 70%)",
                }}
              />
              {/* Responsive aspect box */}
              <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
                {!ready ? (
                  // Lightweight skeleton while the web component loads
                  <div className="absolute inset-0 animate-pulse bg-neutral-100" />
                ) : (
                  <model-viewer
                    src={GLB_SRC}
                    ios-src={USDZ_SRC}
                    alt="Rotating astronaut"
                    auto-rotate
                    auto-rotate-delay="0"
                    rotation-per-second="15deg"
                    camera-controls
                    touch-action="pan-y"
                    disable-zoom
                    shadow-intensity="1"
                    exposure="1"
                    reveal="auto"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function LabNotes() {
  const posts = [
    { title: "Beyond the Buzzwords: Unpacking What Food Labels Really Mean", excerpt: "Why are the food labels in grocery stores so confusing? What do they really mean? And why do we care so deeply about this at ZBiotics?", href: "#" },
    { title: "Does ZBiotics Pre-Alcohol Probiotic Work for Every Body?", excerpt: "Learn why ZBiotics Pre-Alcohol Probiotic works (or seems to not work for some people) before drinking alcohol.", href: "#" },
    { title: "ZBiotics 2023 Year in Review", excerpt: "As we mark and reflect on the year, we look back at what we've accomplished and learned.", href: "#" },
    { title: "Citizenship and Giving Tuesday at ZBiotics", excerpt: "How we approach community, giving, and responsibility as a company.", href: "#" },
    { title: "Are There “Good” or “Bad” Bacteria?", excerpt: "A closer look at how we talk about bacteria — and why the truth is more nuanced.", href: "#" },
  ];

  const listRef = useRef(null);
  const scrollByDir = (dir) => {
    const el = listRef.current; if (!el) return;
    const card = el.querySelector('[data-post-card]');
    const w = card ? card.getBoundingClientRect().width : 360;
    el.scrollBy({ left: dir * (w + 64), behavior: 'smooth' });
  };

  return (
    <section id="lab-notes" className="py-20" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[420px_1fr] gap-10 items-start">
          {/* Left info + CTA */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Lab Notes</h2>
            <p className="mt-2 text-neutral-600">Read our blog to learn more about the science of alcohol, genetic engineering, our company, and more.</p>
            <a href="#" className="mt-6 inline-flex items-center justify-center rounded px-5 py-3 font-medium btn-orange">START LEARNING</a>
            <div className="mt-10 flex gap-6">
              <button onClick={() => scrollByDir(-1)} className="w-16 h-16 rounded-full border border-neutral-400 grid place-items-center hover:bg-neutral-50" aria-label="Previous posts"><ArrowLeft/></button>
              <button onClick={() => scrollByDir(1)} className="w-16 h-16 rounded-full border border-neutral-400 grid place-items-center hover:bg-neutral-50" aria-label="Next posts"><ArrowRight/></button>
            </div>
          </div>

          {/* Right scroller: text-only cards (no images) */}
          <div ref={listRef} className="overflow-x-auto no-scrollbar">
            <div className="flex gap-16 pr-8">
              {posts.map((p, i) => (
                <article key={i} data-post-card className="min-w-[360px] max-w-[440px]">
                  <h3 className="text-2xl font-semibold leading-tight">{p.title}</h3>
                  {p.excerpt && <p className="mt-3 text-neutral-600 leading-relaxed">{p.excerpt}</p>}
                  <a href={p.href} className="mt-6 inline-flex items-center gap-4 text-sm tracking-wider text-neutral-800 hover:text-neutral-950">READ <span className="opacity-60">MORE</span> <span aria-hidden>→</span></a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    { q: "What is ZBiotics® Pre-Alcohol Probiotic?", a: "ZBiotics® Pre-Alcohol Probiotic is a patented, genetically engineered probiotic that helps you land on your feet the day after drinking alcohol. It’s engineered to break down an unwanted byproduct of alcohol called acetaldehyde – the main culprit in those rough mornings after drinking." },
    { q: "How does ZBiotics work?", a: "ZBiotics is designed to replicate the natural process of your liver, but do it in your gut. We took a normal probiotic bacteria you already eat every day, and we bioengineered it to produce the same type of enzyme your liver already produces. That enzyme breaks down acetaldehyde – an unwanted byproduct of alcohol that forms in your gut when you drink. Your liver does not have access to your gut. But by putting ZBiotics directly in your gut, the goal is to augment your body’s natural ability to digest acetaldehyde while you drink and while you sleep – helping you make the most of the next day. Just remember that ZBiotics does not affect intoxication or make alcohol safer to drink, so always drink responsibly." },
    { q: "When do I drink ZBiotics?", a: "When you're drinking. The earlier the better. ZBiotics’ probiotics need time to “wake up” in your gut, so we say the earlier the better if you can remember it. We drink ZBiotics just before going out – right before our first drink. But ZBiotics should be active if you drink it any time during the day or evening, so a few hours before drinking, right with your first drink, or even if you’ve already enjoyed a round or two, go for it." },
    { q: "How long does 1 bottle of ZBiotics last after I drink it?", a: "One ZBiotics taken before drinking will cover you for at least 18 hours. One bottle is good for a whole day, even if you're starting with brunch mimosas and have nighttime plans after as well! Drinking more than one bottle likely won't provide additional benefit." },
    { q: "Does ZBiotics expire?", a: "ZBiotics expires 18 months after bottling. Store ZBiotics at room temperature with the cap on. Do not refrigerate." },
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-50" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Have Questions?</h2>
            <p className="mt-4 text-neutral-700 max-w-prose">ZBiotics is the first of its kind, and that’s bound to raise some questions. As scientists, curiosity is in our DNA, so we encourage you to ask your own and read our FAQ.</p>
            <img src="https://6htrntmt012y8ehd.public.blob.vercel-storage.com/Dosing%20Guide%20-%20No%20Border%20-%20Expanded.png" alt="Bottle illustration with usage tips" className="mt-10 w-full rounded-3xl border border-neutral-200" loading="lazy" />
          </div>
          <div className="space-y-4">{faqs.map((f, i) => (<FaqItem key={i} q={f.q} a={f.a} />))}</div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
      <button className="w-full px-5 py-4 flex items-center justify-between text-left" onClick={() => setOpen(!open)}>
        <span className="font-medium pr-6">{q}</span>
        <svg className={`shrink-0 transition ${open ? "rotate-180" : ""}`} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {open && <div className="px-5 pb-5 text-neutral-700 leading-relaxed">{a}</div>}
    </div>
  );
}

function Newsletter() {
  return (
    <section className="py-20" data-reveal>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Never miss a drop</h2>
        <p className="mt-2 text-neutral-600">Exclusive deals for subscribers • Stay up to date on ZBiotics</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 max-w-xl mx-auto" onSubmit={(e)=>e.preventDefault()}>
          <input type="email" required placeholder="Enter your email" className="w-full rounded-full border border-neutral-300 px-5 py-3 outline-none focus:ring-2 focus:ring-neutral-900"/>
          <button className="inline-flex items-center justify-center rounded px-6 py-3 font-medium btn-orange">Subscribe</button>
        </form>
        <p className="mt-3 text-xs text-neutral-500">Unsubscribe anytime • <a className="underline" href="#">Privacy Policy</a></p>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Explore", links: [ { label: "Product", href: "#how-it-works" }, { label: "Bulk Packs", href: "#how-it-works" }, { label: "FAQs & Support", href: "#faq" }, { label: "Blog", href: "#lab-notes" }, { label: "Team", href: "#team" }, { label: "Mission", href: "#mission" } ] },
    { title: "More", links: [ { label: "Careers", href: "#" }, { label: "Contact Us", href: "#" }, { label: "Diversity & Inclusion", href: "#" }, { label: "Affiliates", href: "#" }, { label: "Corporate Gifting & Events", href: "#" }, { label: "Retail Locations", href: "#" } ] },
    { title: "Account", links: [ { label: "Subscriptions & Login", href: "#" }, { label: "Refund Policy", href: "#" }, { label: "Refer a Friend", href: "#" } ] },
  ];

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3"><div className="h-9 w-9 grid place-items-center rounded bg-neutral-900 text-white font-bold">Z</div><span className="font-semibold">ZBiotics®</span></div>
            <address className="not-italic mt-6 text-sm text-neutral-600">info@zbiotics.com<br/>44 Montgomery St, 3rd floor<br/>San Francisco, CA 94104</address>
            <div className="mt-6 flex gap-4 text-neutral-600"><a href="#" aria-label="Facebook" className="hover:text-neutral-800">FB</a><a href="#" aria-label="Twitter" className="hover:text-neutral-800">TW</a><a href="#" aria-label="Instagram" className="hover:text-neutral-800">IG</a></div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-semibold mb-4">{c.title}</h4>
              <ul className="space-y-2 text-sm text-neutral-700">{c.links.map((l) => (<li key={l.label}><a className="hover:text-neutral-900" href={l.href}>{l.label}</a></li>))}</ul>
            </div>
          ))}
        </div>
        <div className="mt-14 text-xs text-neutral-500">© ZBiotics — demo replica. Payment methods and policies omitted.</div>
      </div>
    </footer>
  );
}
