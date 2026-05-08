import React, { useState } from "react";
import heroImg from "../../assets/hero-section.jpeg";
import {
  ArrowRight,
  Menu,
  Quote,
  Search,
  SquareStar,
  Star,
  X,
} from "lucide-react";

// Images
import img1 from "../../assets/woman1.jpeg";
import img2 from "../../assets/woman2.jpeg";
import img3 from "../../assets/yellowPerfume.jpeg";
import img4 from "../../assets/elegantPerfume.jpeg";
import img5 from "../../assets/fruityPerf.jpeg";
import img6 from "../../assets/man.jpeg";
import img7 from "../../assets/cuteLady.jpeg";
import img8 from "../../assets/blonde.jpeg";

// Card image imports
import cardImg1 from "../../assets/crystalPef.jpeg";
import cardImg2 from "../../assets/crystalPerf.jpeg";
import cardImg3 from "../../assets/goldBottlePerf.jpeg";
import cardImg4 from "../../assets/luxaryPerf.jpeg";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prev) => !prev);
  }

  // object of array for the products cards
  const products = [
    {
      id: 1,
      name: "Starlight Signature Eau de Parfum",
      description:
        "A timeless fragrance that shines with elegance and grace, capturing the essence of sophistication and allure in every note.",
      image: cardImg1,
      price: "$120",
      discount: "40% off",
    },
    {
      id: 2,
      name: "Crystal Eau de Parfum",
      description:
        "A mesmerizing fragrance that embodies the clarity and brilliance of crystal, creating an unforgettable sensory experience.",
      image: cardImg2,
      price: "$150",
      discount: "30% off",
    },
    {
      id: 3,
      name: "Golden Bottle Eau de Parfum",
      description:
        "An opulent fragrance that captures the luxury and sophistication of a golden bottle, perfect for those who appreciate the finer things in life.",
      image: cardImg3,
      price: "$200",
      discount: "25% off",
    },
    {
      id: 4,
      name: "Luxury Eau de Parfum",
      description:
        "A premium fragrance that exudes elegance and refinement, designed for the discerning individual who values quality and uniqueness.",
      image: cardImg4,
      price: "$250",
      discount: "20% off",
    },
  ];

  // object of array for 3 testimonials cards with img, name, title and quote
  const testimonials = [
    {
      id: 1,
      name: "Jane Miller",
      quote:
        "This fragrance is absolutely divine, it has become my signature scent it lasts all day and makes me feel confident and elegant every time i wear it.",
      image: img6,
      star: 5,
      role: "Verified Buyer",
    },
    {
      id: 2,
      name: "Isabella Smith",
      quote:
        "I've tried many perfumes, but this one stands out for its longevity and elegance.",
      image: img7,
      star: 4,
      role: "Verified Buyer",
    },
    {
      id: 3,
      name: "Emily Johnson",
      quote:
        "Elegant, timeless and beautifully craftes. This has become my signature scent for every special occasion.",
      image: img8,
      star: 5,
      role: "Verified Buyer",
    },
  ];

  return (
    <div className="bg-stone-100 ">
      {/* Hero wrapper with small margins on left/right and top */}
      <section className="relative overflow-hidden  shadow-lg">
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
            <a
              href="#"
              className="text-lg font-semibold tracking-tight text-white"
            >
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
        <section id="about" className="mt-6 lg:mt-4">
          <div className="flex justify-between px-8 py-8 lg:px-16 lg:py-10   ">
            <div>
              <h1 className="lg:text-3xl font-semibold text-2xl">
                <span className="block">Here is More</span>
                <span className="block max-w-md text-gray-500">
                  Details for you
                </span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-black/20 bg-transparent hover:bg-white/20 hover:text-gray-900">
                <span className="h-1 w-1 bg-red-500 rounded-full"></span>About
                Us
              </button>
            </div>
          </div>

          {/* Content Container */}
          {/* Responsive content container: row on desktop, column only below 600px */}
          <div className="px-8 flex flex-row max-[600px]:flex-col max-[600px]:items-center lg:flex-row gap-8 lg:items-start justify-center lg:px-16">
            {/* The card - hidden on mobile, shown on lg+ */}
            <div className="hidden lg:block rounded-4xl bg-white shadow-2xl px-4 py-3 lg:px-4 lg:py-6 max-w-xs max-h-96 border border-amber-200">
              <div className="flex justify-between gap-8 items-start mb-4">
                <div className="bg-yellow-50 p-2 rounded-full border border-amber-200">
                  <Star className="text-yellow-400" />
                </div>

                <div className="max-w-sm text-sm text-gray-700">
                  <p>
                    A fragrance that captures the essence of elegance and bloom,
                    <span className="text-gray-500">
                      a pleasant scent that shines brightly like evening petals
                      under moonbeams, where every note feels luminous and
                      alive.
                    </span>
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={img3}
                  alt="yellow golden perfume"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Center and Description container - flex row on lg+, column on mobile */}
            <div className="flex flex-col lg:flex-row gap-8 flex-1 ">
              {/* Center Image - allowed to expand */}
              <div className="flex justify-center flex-1 lg:min-h-96 sm:min-h-0 overflow-hidden rounded-4xl shadow-2xl">
                <img
                  src={img4}
                  alt="another perfume"
                  className="w-full h-full object-cover shadow-xl rounded-2xl"
                />
              </div>

              {/* Description - at top on lg+, below image on mobile */}
              <div className="px-1  lg:px-8 lg:py-0 max-w-xs lg:pt-0">
                <h1 className="text-4xl font-semibold">
                  <span className="block">About</span> Starlight
                </h1>
                <p className="mt-2 text-sm text-gray-700">
                  Starlight is a fragrance that captures the essence of elegance
                  and bloom, a pleasant scent that shines brightly like evening
                  petals under moonbeams, where every note feels luminous and
                  alive. A fragrance is a smell, usually a pleasant or sweet
                  smell.
                </p>
              </div>
            </div>

            {/* The card - shown on mobile, hidden on lg+ */}
            <div className="lg:hidden rounded-4xl bg-white shadow-2xl px-4 py-3 max-w-xs max-h-96 w-full">
              <div className="flex justify-between gap-8 items-start mb-4">
                <div className="bg-yellow-50 p-2 rounded-full border border-amber-200">
                  <Star className="text-yellow-400" />
                </div>

                <div className="max-w-sm text-sm text-gray-700">
                  <p>
                    A fragrance that captures the essence of elegance and bloom,
                    <span className="text-gray-500">
                      a pleasant scent that shines brightly like evening petals
                      under moonbeams, where every note feels luminous and
                      alive.
                    </span>
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={img3}
                  alt="yellow golden perfume"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section container */}
        <section className="bg-zinc-950 mt-6 lg:mt-8 px-8 py-8 lg:px-16 lg:py-10 ">
          <div className="mb-8 lg:mb-8 text-center">
            <h1 className="text-4xl font-bold text-white ">
              Premier Selection
            </h1>
            <p className="text-gray-400 mt-2 max-w-md mx-auto">
              Each sent is crafted for you to lead with confidence, power and
              confidence.
            </p>
          </div>
          {/* Responsive grid: 1 column on mobile, 2 on sm, 4 on lg+ */}
          {/* Reminder: clickable favourite icon to add */}
          <div className=" py-8 lg:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl text-white shadow-lg overflow-hidden relative h-96 flex flex-col"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-x-0 bottom-0 h-1/1 bg-gradient-to-t from-black/95 to-transparent"></div>

                <div className="absolute top-3 left-4">
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                    {product.discount}
                  </span>
                </div>

                <div className="relative mt-auto p-6 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-300 text-sm">{product.description}</p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <button className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all">
                      {/* <span className="text-sm font-semibold">Shop</span> */}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* list of benefits with img */}
        <section className="px-6 py-8 lg:px-16 lg:py-10">
          <div className="bg-neutral-100 shadow-2xl rounded-3xl p-6 lg:p-10 flex flex-col border border-amber-200">
            <div className="mb-6">
              <h1 className="block text-2xl font-bold text-gray-800 lg:text-4xl">
                Fragrance Benefits
              </h1>
              <p className="block text-gray-600 mt-2 max-w-md text-sm">
                Discover the unique advantages of our signature fragrances.
              </p>
            </div>
            <div className="flex flex-row gap-8 max-[1024px]:flex-col  ">
              <div className="w-full lg:max-w-lg rounded-2xl overflow-hidden shadow-lg h-80 lg:h-auto">
                <img
                  src={img5}
                  alt="Fragrance Benefits"
                  className="w-full lg:h-full h-80 object-cover border border-amber-200 rounded-2xl shadow-lg"
                />
              </div>
              <div className=" text-gray-700 flex-1">
                <ul className="space-y-4">
                  <li className="flex flex-col gap-1">
                    <strong className="text-gray-800">
                      Long-lasting scent:
                    </strong>
                    <span className="text-sm">
                      Our fragrances are designed to last all day, keeping you
                      smelling fresh and confident from morning to night.
                    </span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <strong className="text-gray-800">Unique blends:</strong>
                    <span className="text-sm">
                      Each fragrance is crafted with a unique blend of
                      high-quality ingredients, ensuring a distinctive and
                      memorable scent.
                    </span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <strong className="text-gray-800">
                      Versatile for any occasion:
                    </strong>
                    <span className="text-sm">
                      Whether you're heading to work, going out for a special
                      event, or just want to feel good every day, our fragrances
                      are perfect for any occasion.
                    </span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <strong className="text-gray-800">Eco-friendly:</strong>
                    <span className="text-sm">
                      We are committed to using sustainable and environmentally
                      responsible practices in the production of our fragrances.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-200 mt-6 lg:mt-8 px-8 py-8 lg:px-16 lg:py-10 ">
          <div className="mb-8 lg:mb-8">
            <div className="text-center max-w-lg mx-auto">
              <h1 className="text-4xl font-bold">
                Loved by <span className="text-amber-700">our customers</span>
              </h1>
              <p className="max-w-md mx-auto mt-2 text-gray-600 text-sm">
                Real stories from real people who have fallen in love with our
                signature fragrances.
              </p>
            </div>

            <div className="mt-10">
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-200"
                  >
                    <div className="flex flex-col items-center text-center justify-center gap-2">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-40 h-40 rounded-full object-cover mx-auto mb-2 border-2 border-amber-200"
                      />

                      <Quote className="text-amber-500 mb-4" size={24} />

                      <p className="text-gray-600 italic text-sm">
                        "{testimonial.quote}"
                      </p>

                      <hr className="w-full h-0.5 border-0 bg-amber-600 mx-auto my-2" />

                      <p className="font-bold text-gray-800">
                        {testimonial.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>

                      {testimonial.role
                        ?.toLowerCase()
                        .includes("verified buyer") && (
                        <div className="mt-2 flex items-center justify-center gap-1">
                          {[...Array(5)].map((_, index) => (
                            <span
                              key={index}
                              className="text-amber-500 text-sm"
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

//  <p className="text-gray-600 italic">
//                       "{testimonial.quote}"
//                     </p>
//                     <div className="mt-4 flex items-center">
//                       <img
//                         src={testimonial.image}
//                         alt={testimonial.name}
//                         className="w-12 h-12 rounded-full object-cover"
//                       />
//                       <div className="ml-4">
//                         <h3 className="font-bold text-gray-800">
//                           {testimonial.name}
//                         </h3>
//                         <p className="text-sm text-gray-500">
//                           {testimonial.role}
//                         </p>
//                       </div>
//                     </div>
