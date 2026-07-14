import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import NAVIGATION from "../../../constants/navigation";
import { useUI } from "../../../context/UIContext";

const MobileNav = () => {
  const { isMenuOpen, toggleMenu } = useUI();

  return (
    <motion.nav
      initial={{ y: 80, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-md items-center justify-around rounded-2xl border border-slate-200/80 bg-white/75 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-lg lg:hidden"
    >
      {NAVIGATION.map((item) => {
        const Icon = item.icon;
        const isActionMenu = item.path === "#";

        if (isActionMenu) {
          return (
            <button
              key="menu"
              onClick={toggleMenu}
              className={`relative flex flex-1 flex-col items-center justify-center rounded-xl py-2.5 transition-colors duration-200 ${
                isMenuOpen ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Icon size={20} className="relative z-10 stroke-[2.25]" />
              <span className="relative z-10 mt-1 text-[10px] font-semibold tracking-wide">
                {item.label}
              </span>
              {isMenuOpen && (
                <motion.div
                  layoutId="activeTabMobile"
                  className="absolute inset-0 rounded-xl bg-blue-50/80"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        }

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative flex flex-1 flex-col items-center justify-center rounded-xl py-2.5 transition-colors duration-200 ${
                isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={20} className="relative z-10 stroke-[2.25]" />
                <span className="relative z-10 mt-1 text-[10px] font-semibold tracking-wide">
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabMobile"
                    className="absolute inset-0 rounded-xl bg-blue-50/80"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        );
      })}
    </motion.nav>
  );
};

export default MobileNav;