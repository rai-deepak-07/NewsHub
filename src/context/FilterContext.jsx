import { createContext, useContext, useMemo, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [country, setCountry] = useState("all");
  const [language, setLanguage] = useState("en");

  const value = useMemo(
    () => ({
      country,
      language,
      setCountry,
      setLanguage,
    }),
    [country, language]
  );

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};