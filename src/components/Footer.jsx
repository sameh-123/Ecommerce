import {
  FaArrowAltCircleUp,
  FaCopyright,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import logo from '/file.png';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className="max-w-screen-4xl mx-auto sm:pt-20">
      <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-center px-10">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <img src={logo} alt="logo" className="size-28" />
          <p className="text-Black font-light leading-7 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex items-center gap-6 text-Black text-2xl">
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
            <Link to="/">
              <FaLinkedinIn />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h2 className="font-semibold text-lg">CATALOG</h2>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            Necklaces
          </a>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            Hoodies
          </a>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            Jewelry Box
          </a>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            T-Shirt
          </a>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            Jacket
          </a>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h2 className="font-semibold text-lg">ABOUT US</h2>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            Our Producers
          </a>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            Sitemap
          </a>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            FAQ
          </a>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            About Us
          </a>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            Terms & Conditions
          </a>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h2 className="font-semibold text-lg">CUSTOMER SERVICES</h2>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            Contact Us
          </a>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            Track Your Order
          </a>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            Product Care & Repair
          </a>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            Book an Appointment
          </a>
          <a href="/" className="font-light text-lg hover:text-orange-400">
            Shipping & Returns
          </a>
        </div>
      </div>
      <div className="bg-[#1E2832] w-full mx-auto flex flex-col sm:flex-row gap-2 justify-around items-center py-3 px-4 mt-20">
        <div className="flex items-center gap-2 font-light text-white text-lg">
          <FaCopyright />
          2024 sam07a , Inc.
        </div>
        <img src="/images/pay.png" alt="pay" />
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 font-light text-white text-lg"
        >
          Scroll to top
          <FaArrowAltCircleUp />
        </button>
      </div>
    </div>
  );
}
