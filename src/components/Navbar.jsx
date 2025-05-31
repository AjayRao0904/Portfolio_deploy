import React, { useEffect, useState } from 'react';
import { FaHome } from "react-icons/fa";

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    setVisible(true);
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollY = window.scrollY + 80; // offset for navbar height
      let current = 'home';
      for (const section of sections) {
        if (section && section.offsetTop <= scrollY) {
          current = section.id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg shadow-lg transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-white flex items-center text-2xl">
            <FaHome className="text-yellow-400 mr-2" />
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-gray-300 hove:text-white transition-colors px-1 ${
                  active === link.id ? 'text-yellow-400 underline underline-offset-8 decoration-2' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Gradient border line at the bottom */}
      <div className="absolute left-0 bottom-0 w-full h-[3px] pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400 opacity-70" />
      </div>
    </nav>
  );
};