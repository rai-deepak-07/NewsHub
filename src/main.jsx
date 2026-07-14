import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import "./styles/index.css";
import { FilterProvider } from "./context/FilterContext";
import { BookmarkProvider } from "./context/BookmarkContext";
import { UIProvider } from "./context/UIContext";
import { registerSW } from "virtual:pwa-register";

registerSW({ immediate: true });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <FilterProvider>
          <BookmarkProvider>
            <UIProvider>
              <App />
            </UIProvider>
          </BookmarkProvider>
        </FilterProvider>
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
);