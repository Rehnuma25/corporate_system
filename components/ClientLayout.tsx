"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const publicRoutes = [
    "/",
    "/login",
    "/signup",
    "/forgot-password",
  ];

  const isPublicPage =
    publicRoutes.includes(pathname) ||
    pathname.startsWith("/feature");

  if (isPublicPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="min-h-screen bg-[#ccffff] dark:bg-slate-900 p-8 transition-colors duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}