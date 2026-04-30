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
      <section className="">
        {/* Background image layer */}
        <div
          className="w-full min-h-[60vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        {/* Navigation */}
        <div className="absolute top-0 left-0 w-full p-4">
          <header className="flex justify-between items-center border rounded-4xl border-white/20 bg-white/10 px-6 py-3 shadow-xl backdrop-blur-1xl ">
            {/* Logo */}
            <a href="#" className="text-lg font-semibold tracking-tight">
              *Logo
            </a>
            {/* right  */}
            <div className="flex items-center gap-6">
              <nav className="flex items-center gap-4 bg-white text-black/80 px-4 py-2 rounded-full shadow-md">
                <ul className="flex items-center gap-6">
                  <li className="text-sm font-medium cursor-pointer transition hover:text-black/70">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-sm font-medium cursor-pointer transition hover:text-black/70">
                    <a href="#">About</a>
                  </li>
                </ul>

                <div className="md:hidden cursor-pointer" onClick={toggleNav}>
                  {navOpen ? <X /> : <Menu />}
                </div>
              </nav>
              {/* Search Icon */}
              <div className="bg-white/20 p-2 rounded-full cursor-pointer">
                <Search />
              </div>
            </div>
          </header>
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
