import { Link, NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Search,
  Newspaper,
  Globe,
  Languages,
} from "lucide-react";

import NAVIGATION from "../../../constants/navigation";
import COUNTRIES from "../../../constants/countries";
import LANGUAGES from "../../../constants/languages";
import { useFilter } from "../../../context/FilterContext";
import { useUI } from "../../../context/UIContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isMenuOpen, closeMenu } = useUI();
  const { country, language, setCountry, setLanguage } = useFilter();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Branding */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-transform group-hover:scale-105">
              <Newspaper size={18} className="stroke-[2.25]" />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-slate-950">
                NewsHub
              </h1>
              <p className="text-[10px] text-slate-400 font-medium">
                Latest Headlines
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Link Tabs */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAVIGATION.filter((item) => item.path !== "#").map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 bg-blue-50/60"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions & Filters */}
          <div className="flex items-center gap-3">
            
            {/* Country Dropdown Selector */}
            <div className="relative hidden md:block">
              <Globe
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="appearance-none rounded-lg border border-slate-200 bg-white py-1.5 pl-8 pr-7 text-xs font-medium text-slate-700 outline-none transition hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              >
                {COUNTRIES.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Dropdown Selector */}
            <div className="relative hidden md:block">
              <Languages
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none rounded-lg border border-slate-200 bg-white py-1.5 pl-8 pr-7 text-xs font-medium text-slate-700 outline-none transition hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              >
                {LANGUAGES.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Global Search Interaction Action */}
            <button
              onClick={() => navigate("/search")}
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <Search size={16} className="stroke-[2.25]" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Drawer Panel View (Context Overlays) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-xs"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xs overflow-y-auto bg-white p-6 shadow-xl border-l border-slate-100"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Options</h2>
                <button
                  onClick={closeMenu}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-700 transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Mobile Filter Options */}
              <div className="space-y-4 mb-6 md:hidden">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-500">
                    Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 p-2 text-sm bg-white"
                  >
                    {COUNTRIES.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-500">
                    Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 p-2 text-sm bg-white"
                  >
                    {LANGUAGES.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="h-px bg-slate-100 my-4 md:hidden" />

              {/* Navigation Elements Inside Drawer Context */}
              <nav className="space-y-1">
                {NAVIGATION.filter((item) => item.path !== "#").map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`
                    }
                  >
                    <item.icon size={16} className="stroke-[2.25]" />
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;