import React, { useState } from "react";
import heroImg from "../../assets/hero-section.jpeg";
import { Menu, Search, X } from "lucide-react";

// Images
import img1 from "../../assets/woman1.jpeg";
import img2 from "../../assets/woman2.jpeg";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prev) => !prev);
  }

  return (
    <div className="bg-grey-100 text-white">
      {/* Hero wrapper with small margins on left/right and top */}
      <section className="relative overflow-hidden rounded-b-2xl shadow-2xl">
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        {/* Dark overlay so the text and nav stay readable */}
        <div className="absolute inset-0 bg-slate-950/40" />

        {/* Navigation */}
        <div className="relative z-10 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <header className="relative flex flex-wrap items-center justify-between gap-4 rounded-4xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-lg sm:px-6">
            {/* Logo */}
            <a href="#" className="text-lg font-semibold tracking-tight">
              *Logo
            </a>

            {/* right */}
            <div className="flex items-center gap-3">
              {/* Desktop nav items only visible on md+ */}
              <nav className="hidden items-center gap-6 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white shadow-md md:flex">
                <a href="/" className="transition hover:text-slate-100">
                  Home
                </a>
                <a href="#about" className="transition hover:text-slate-100">
                  About
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="cursor-pointer flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 text-slate-100 shadow-md transition hover:bg-white/20 md:hidden"
                onClick={toggleNav}
                aria-expanded={navOpen}
                aria-label="Toggle navigation menu"
              >
                {navOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* Search Icon / Label */}
              <div className="flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-slate-100 shadow-md cursor-pointer">
                <Search className="md:mr-2" size={16} />
                <span className="hidden text-sm md:inline">Search</span>
              </div>
            </div>

            {/* Mobile menu panel moved inside header to avoid layout shift */}
            <div
              className={`absolute left-0 right-0 top-full z-20 mt-3 rounded-3xl border border-white/20 bg-slate-950/90 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
                navOpen
                  ? "opacity-100 scale-100 visible"
                  : "pointer-events-none opacity-0 scale-95 invisible"
              }`}
              aria-hidden={!navOpen}
            >
              <a
                href="/"
                className="block rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Home
              </a>
              <a
                href="#about"
                className="mt-2 block rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/20"
              >
                About
              </a>
            </div>
          </header>

          {/* Hero text content */}
          <div className="mt-10 lg:mt-20 flex flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-5">
            <div className=" max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <h1
                className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Elegance in Bloom
              </h1>
            </div>
            <div className="max-w-sm text-sm leading-7 text-slate-200 sm:text-base">
              <p>
                Shine brightly with starlight as you explore the gentle glow of
                evening petals and the calm of a garden lit by moonbeams, where
                every detail feels luminous and alive.
              </p>
            </div>
          </div>

          {/* Buttons and cards section */}
          <div className="mt-10 lg:mt-20 px-4 sm:px-6 lg:px-5">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                  Shop Now
                </button>
                <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                  Discover Notes
                </button>
                <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                  Best Sellers
                </button>
                <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                  New Arrivals
                </button>
                <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                  Fragrance Guide
                </button>
              </div>

              {/* Small glass card + images */}
              <div className="grid w-full lg:w-2/3 gap-4  sm:grid-cols-3 ">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
                  <h3 className="font-semibold text-lg text-white">
                    Signature Collection
                  </h3>
                  <p className="mt-1 text-xs text-white/80">
                    Timeless fragrances that shines with elegance and grace,
                    capturing the essence of sophistication and allure in every
                    note.
                  </p>
                </div>
                <div className="hidden overflow-hidden rounded-3xl sm:block">
                  <img
                    src={img1}
                    alt="Image 1"
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="hidden overflow-hidden rounded-3xl sm:block">
                  <img
                    src={img2}
                    alt="Image 2"
                    className="h-48 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Features Section */}
        <section></section>
      </main>
    </div>
  );
}
