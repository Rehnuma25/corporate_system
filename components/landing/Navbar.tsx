"use client";

import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-red-200 bg-[#ff8fa3] shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-17 w-17 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-xl font-bold text-white">
            CDIS
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-700">
              Corporate Document system
            </h2>
            <p className="text-xs text-slate-600">
              Document Intelligence System
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">

            {/* Home */}
              <Link href="/" className="font-medium hover:text-cyan-600">
                        Home
               </Link>

             {/* Documents */}
                <div className="relative group">

               <button className="flex items-center gap-1 font-medium hover:text-cyan-600">
                     Documents
                     <ChevronDown size={18} />
               </button>

               <div className="absolute left-0 top-8 hidden w-64 rounded-xl border bg-white p-2 shadow-xl group-hover:block">
                    <Link href="/feature/knowledge-workspace"className="block rounded-lg p-3 hover:bg-slate-100">
                            Knowledge Workspace
                     </Link>

                         <Link href="/feature/ai-document-chat" className="block rounded-lg p-3 hover:bg-slate-100">
                            Document Chat
                          </Link>
                          </div>
                          </div>

                        {/* AI */}

                <div className="relative group">

                  <button className="flex items-center gap-1 font-medium hover:text-cyan-600">
                       Features<ChevronDown size={18} />
                  </button>

               <div className="absolute left-0 top-8 hidden w-64 rounded-xl border bg-white p-2 shadow-xl group-hover:block">
                  <Link href="/feature/semantic-search" className="block rounded-lg p-3 hover:bg-slate-100">
                              Semantic Search
                     </Link>

                      <Link href="/feature/Voice_Image_part"className="block rounded-lg p-3 hover:bg-slate-100">
                              Voice & Image
                      </Link>
                       <Link href="/feature/vector-database"className="block rounded-lg p-3 hover:bg-slate-100">
                                Vector Database
                        </Link>

                </div>
                </div>


               {/* Security */}

                <div className="relative group">

                       <button className="flex items-center gap-1 font-medium hover:text-cyan-600">
                           Security<ChevronDown size={18} />
                         </button>

               <div className="absolute left-0 top-8 hidden w-64 rounded-xl border bg-white p-2 shadow-xl group-hover:block">

                     <Link href="/feature/Role-Management"className="block rounded-lg p-3 hover:bg-slate-100">
                        Role Management
                      </Link>
                       <Link href="/feature/global-collaboration" className="block rounded-lg p-3 hover:bg-slate-100">
                           Global Collaboration
                         </Link>

              </div>
              </div>

          </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <div className="flex items-center gap-2 rounded-xl border bg-slate-50 px-4 py-2">
            <Search size={18} className="text-slate-500" />

            <input
              type="text"
              placeholder="Search..."
              className="w-40 bg-transparent outline-none text-sm"
            />
          </div>

          <ThemeToggle />

          <Link
            href="/login"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Get Started
          </Link>

        </div>

      </div>
    </header>
  );
}