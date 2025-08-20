import React from "react"
import { Toaster } from "./components/ui/toaster"
import { Toaster as Sonner } from "./components/ui/sonner"
import { TooltipProvider } from "./components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/layout/Layout"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import Upload from "./pages/Upload"
import Financing from "./pages/Financing"
import Disbursements from "./pages/Disbursements"
import Clients from "./pages/Clients"
import HelpCenter from "./pages/HelpCenter"
import Showcase from "./pages/showcase"
import NotFound from "./pages/NotFound"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="dark min-h-screen flex flex-col">
        <BrowserRouter>
          <Routes>
            {/* ✅ Public Landing Page */}
            <Route
              path="/"
              element={
                <div className="flex flex-col min-h-screen">
                  <Landing />
                  <FAQSection />
                  <Footer />
                </div>
              }
            />

            {/* ✅ App Pages inside Layout */}
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/financing" element={<Financing />} />
              <Route path="/disbursements" element={<Disbursements />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/showcase" element={<Showcase />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
