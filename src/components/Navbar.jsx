import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import logo from '/file.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Navbar() {
    const [isMenueOpen,setIsMenueOpen]=useState(false)
    const onToggle=()=>setIsMenueOpen(!isMenueOpen)
    const navItems = [
      { title: 'Jewelry & Accessories', path: '/' },
      { title: 'Clothing & Shoes', path: '/' },
      { title: 'Home & Living', path: '/' },
      { title: 'Wedding & Party', path: '/' },
      { title: 'Toys & Entertainment', path: '/' },
      { title: 'Art & Collectibles', path: '/' },
      { title: 'Craft Supplies & Tools', path: '/' },
    ];
  return (
    <header className="max-w-screen-4xl xl:px-28 px-4 absolute top-0 left-0 right-0">
      <nav className="flex items-center justify-between container md:py-4 pt-6 pb-3">
        <FaSearch className="text-Black size-5 cursor-pointer hidden md:block" />
        <a href="/">
          <img src={logo} alt="logo" className="size-24" />
        </a>
        <div className="text-lg text-Black sm:flex items-center hidden gap-4">
          <a href="#" className="flex items-center gap-2">
            <FaUser /> Account
          </a>
          <a href="#products" className="flex items-center gap-2">
            <FaShoppingBag /> Shopping
          </a>
        </div>
        <div className='sm:hidden'>
          <button onClick={onToggle}>
            {isMenueOpen ? (
              <FaTimes className="text-Black size-5 cursor-pointer" />
            ) : (
              <FaBars className="text-Black size-5 cursor-pointer" />
            )}
          </button>
        </div>
      </nav>
      <hr />
      <div className="pt-4">
        <ul className="lg:flex justify-between items-center text-Black hidden font-light">
          {navItems.map(({ title, path }) => {
            return (
              <li key={title} className="hover:text-orange-400">
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className={`bg-Black text-white rounded px-4 py-2 ${isMenueOpen ? "" : "hidden"}`}>
          {navItems.map(({ title, path }) => {
            return (
              <li key={title} className="hover:text-orange-400 my-2 cursor-pointer">
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
