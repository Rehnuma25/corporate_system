"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // যেসব page-এ Sidebar/Navbar থাকবে না
  const publicRoutes = [
    "/",
    "/login",
    "/signup",
    "/forgot-password",
  ];

  const isPublicPage =
    publicRoutes.includes(pathname) ||
    pathname.startsWith("/feature");

  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900">
        {isPublicPage ? (
          children
        ) : (
          <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex-1">
              <Navbar />

              <main className="min-h-screen bg-[#ccffff] p-8">
                {children}
              </main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}