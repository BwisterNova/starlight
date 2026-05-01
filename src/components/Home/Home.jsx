import React, { useState } from "react";
import heroImg from "../../assets/hero-section.jpeg";
import { Menu, Search, X } from "lucide-react";

// Images
import img1 from "../../assets/woman1.jpeg";
import img2 from "../../assets/woman2.jpeg";
export default function () {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prev) => !prev);
  }

  return (
    <div className="bg-grey-50 text-white">
      {/* Hero wrapper with small margins on left/right and top */}
      <section className="relative overflow-hidden rounded-2xl shadow-2xl sm:mx-6 lg:mx-8 mt-4 mx-4">
        {/* <section className=""> */}
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        {/* Dark overlay so the text and nav stay readable */}
        <div className="absolute inset-0 bg-slate-950/40" />

        {/* Navigation */}
        <div className="relative z-10 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <header className="flex justify-between items-center border rounded-4xl border-white/20 bg-white/10 px-6 py-3 shadow-xl backdrop-blur-lg ">
            {/* Logo */}
            <a href="#" className="text-lg font-semibold tracking-tight">
              *Logo
            </a>

            {/* right  */}
            <div className="flex items-center gap-3">
              {/* Desktop nav items */}
              <nav className="items-center gap-6 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white shadow-md hidden md:flex">
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
                className="flex items-center border border-white/20 bg-white/10 px-3 py-2 rounded-full text-slate-100 shadow-md md:hidden cursor-pointer"
                onClick={toggleNav}
                aria-expanded={navOpen}
                aria-label="Toggle navigation menu"
              >
                {navOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* Search Icon /Label */}
              <div className="flex items-center rounded-full  border border-white/20 bg-white/10 px-3 py-2 text-slate-100 shadow-md cursor-pointer">
                <Search className="md:mr-2" size={16} />
                <span className="text-sm md:inline hidden">Search</span>
              </div>
            </div>
          </header>

          {/* mobile menu */}
          {navOpen && (
            <div className="mt-1 rounded-3xl  p-4   md:hidden">
              <a
                href="/"
                className="block shadow-2xl border border-white/20 backdrop-blur-lg rounded-2xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Home
              </a>
              <a
                href="#about"
                className="mt-2 block shadow-2xl border border-white/20 backdrop-blur-lg rounded-2xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                About
              </a>
            </div>
          )}

          {/* Hero text content */}
          <div className="flex justify-between items-center mt-12 gap-8 px-4 sm:px-6 lg:px-15">
            <div className="block ">
              <h1 className="font-bold font-sans text-5xl max-w-lg leading-tight w-60">
                Elegance in Bloom
              </h1>
            </div>
            <div className="block ">
              <p className="text-sm pt-2 max-w-sm">
                Shine brightly with starlight as you explore the gentle glow of
                evening petals and the calm of a garden lit by moonbeams, where
                every detail feels luminous and alive.
              </p>
            </div>
          </div>

          <div className="mt-40 px-4 sm:px-6 lg:px-15">
            <div className="block max-w-2xl w-full tight leading-snug">
              <button className="mr-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 cursor-pointer">
                Shop Now
              </button>
              <button className="mr-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 cursor-pointer">
                Discover Notes
              </button>
              <button className="mr-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 cursor-pointer">
                Best Sellers
              </button>
              <button className="mr-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 cursor-pointer">
                New Arrivals
              </button>
              <button className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
                Fragrance Guide
              </button>
            </div>
            {/* Small glass cars, with a single image below */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {/* Small glass card */}
              <div className="rounded border border-white bg-white/10 p-4 shadow-lg backdrop-blur-lg">
                <div>
                  <h3></h3>
                  <p></p>
                </div>
              </div>
              {/* Small images */}
              <div></div>
              <div></div>
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
