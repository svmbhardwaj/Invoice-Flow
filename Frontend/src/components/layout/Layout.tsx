import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Upload, BarChart2, Users, HelpCircle, Sparkles } from "lucide-react";
import Footer from "../Footer";

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/upload", label: "Upload Invoice", icon: Upload },
    { path: "/financing", label: "Financing", icon: BarChart2 },
    { path: "/disbursements", label: "Disbursements", icon: Sparkles },
    { path: "/clients", label: "Clients", icon: Users },
    { path: "/help", label: "Help Center", icon: HelpCircle },
    { path: "/showcase", label: "Showcase", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Delhi Invoice Flow
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600",
                    location.pathname === item.path
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300"
                  )}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
