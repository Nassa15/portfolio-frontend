import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaTiktok, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  // Gestion du scroll pour mettre à jour le menu actif
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      navItems.forEach(({ path }) => {
        const el = document.querySelector(path);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          setActiveSection(path);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      const el = document.querySelector(path);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(path);
    }
    setMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-indigo-900/30 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg sm:text-xl font-mono font-semibold text-white tracking-wide cursor-pointer select-none hover:text-indigo-400 transition"
        >
          gustiawan<span className="text-indigo-400">-dev</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navItems.map(({ name, path }) => (
            <button
              key={name}
              onClick={() => handleNavClick(path)}
              className="relative font-medium text-gray-300 hover:text-indigo-400 transition"
            >
              {name}
              {activeSection === path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 h-0.5 bg-indigo-400 rounded"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  style={{ width: "100%" }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Icônes sociales Desktop */}
        <div className="hidden md:flex items-center gap-5 text-gray-400">
          {[
            { href: "https://github.com/tonpseudo", icon: <FaGithub /> },
            { href: "https://www.tiktok.com/@tonpseudo", icon: <FaTiktok /> },
            { href: "https://www.linkedin.com/in/tonpseudo", icon: <FaLinkedin /> },
            { href: "https://wa.me/tonnumero", icon: <FaWhatsapp /> },
          ].map(({ href, icon }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
              whileHover={{ scale: 1.2, color: "#6366f1" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Bouton mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 text-gray-200 border-t border-gray-800 flex flex-col items-center space-y-6 py-6"
          >
            {navItems.map(({ name, path }) => (
              <button
                key={name}
                onClick={() => handleNavClick(path)}
                className={`text-lg font-medium transition ${
                  activeSection === path ? "text-indigo-400" : "text-gray-300 hover:text-indigo-400"
                }`}
              >
                {name}
              </button>
            ))}

            {/* Icônes sociales Mobile */}
            <div className="flex gap-6 pt-4 text-gray-400">
              <FaGithub className="hover:text-indigo-400 transition" />
              <FaTiktok className="hover:text-indigo-400 transition" />
              <FaLinkedin className="hover:text-indigo-400 transition" />
              <FaWhatsapp className="hover:text-indigo-400 transition" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
