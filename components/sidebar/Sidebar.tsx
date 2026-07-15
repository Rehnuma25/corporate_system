"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Knowledge Workspace",
    path: "/knowledge",
  },
  {
    name: "Chat Workspace",
    path: "/ai-workspace",
  },
  {
    name: "Security Center",
    path: "/security",
  },
  {
    name: "Analytics",
    path: "/analytics",
  },
  {
    name: "Governance",
    path: "/governance",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
   <aside className="w-72 bg-[#3d73ea] text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
         Document Intelligence System
      </h1>

      <nav className="space-y-2">

        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block rounded-lg px-4 py-3 transition ${
              pathname === item.path
                ? "bg-[#ff8080] text-white"
                : "hover:bg-slate-800"
            }`}
          >
            {item.name}
          </Link>
        ))}

      </nav>

    </aside>
  );
}