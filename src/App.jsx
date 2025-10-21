import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAnalytics } from "./hooks/useAnalytics.js";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";

const queryClient = new QueryClient();

const App = () => {
  const { trackPageView } = useAnalytics();

  // Track initial page load
  React.useEffect(() => {
    trackPageView('Home - Green Week');
  }, [trackPageView]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/greenweek">
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;