import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const value = useMemo(
    () => ({
      isMenuOpen,
      openMenu: () => setIsMenuOpen(true),
      closeMenu: () => setIsMenuOpen(false),
      toggleMenu: () => setIsMenuOpen((prev) => !prev),
    }),
    [isMenuOpen]
  );

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const ctx = useContext(UIContext);

  if (!ctx) {
    throw new Error("useUI must be used within a UIProvider");
  }

  return ctx;
};
