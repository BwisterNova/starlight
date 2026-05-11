import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-stone-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <div className="text-2xl font-bold text-amber-600">*Logo</div>
            <h2 className="text-2xl font-semibold mt-2 text-gray-800">
              Starlight
            </h2>
            <p className="text-gray-600 mt-2 max-w-md text-sm">
              Discover the essence of elegance with Starlight fragrances.
              Crafted for the discerning individual, our premium scents capture
              the luminous glow of evening petals and moonbeams.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-amber-600 transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-amber-600 transition"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-amber-600 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-amber-600 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-amber-600 transition"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />
        <div className="text-center text-gray-500 text-sm">
          © 2026 Starlight. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
