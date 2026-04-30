import React, { useState } from "react";
import heroImg from "../../assets/hero-section.jpeg";
import { Menu, Search, X } from "lucide-react";

export default function () {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prev) => !prev);
  }

  return (
    <div className="bg-slate-950 text-white">
      {/* Hero wrapper with small margins on left/right and top */}
      {/* <section className="relative overflow-hidden rounded-2xl shadow-2xl sm:mx-6 lg:mx-8 mt-4 mx-4"> */}
      <section className="">
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

          {/* Hero Section */}
          <section></section>
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
