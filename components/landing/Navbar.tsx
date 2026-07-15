"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
            DIS
          </div>

          <div>
            <h2 className="font-bold text-xl text-slate-900">
              Document Intelligence System
            </h2>

            <p className="text-xs text-gray-500">
              Document Management Platform
            </p>
          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex gap-8 font-medium text-gray-700">

          <a
            href="#home"
            className="hover:text-blue-600 transition"
          >
            Home
          </a>

          <a
            href="#companies"
            className="hover:text-blue-600 transition"
          >
            Companies
          </a>

          <div className="relative group">

            <button className="hover:text-blue-600 transition">
              Features ▼
            </button>

            <div
              className="absolute left-0 top-full mt-2 hidden group-hover:block
              bg-white rounded-xl shadow-xl border w-64 p-4"
            >

              <a
                href="#features"
                className="block py-2 hover:text-blue-600"
              >
                Chatbot
              </a>

              <a
                href="#features"
                className="block py-2 hover:text-blue-600"
              >
                Knowledge Workspace
              </a>

              <a
                href="#features"
                className="block py-2 hover:text-blue-600"
              >
                Voice Assistant
              </a>

              <a
                href="#features"
                className="block py-2 hover:text-blue-600"
              >
                Image Understanding
              </a>

            </div>

          </div>

          <a
            href="#security"
            className="hover:text-blue-600 transition"
          >
            Security
          </a>

          <a
            href="#contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </a>

        </nav>

        {/* Right Side */}

        <div className="hidden lg:flex gap-4">

          <Link
            href="/login"
            className="px-5 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <button className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
            Get Started
          </button>

        </div>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-white border-t">

          <a
            href="#home"
            className="block p-4 hover:bg-gray-100"
          >
            Home
          </a>

          <a
            href="#companies"
            className="block p-4 hover:bg-gray-100"
          >
            Companies
          </a>

          <a
            href="#features"
            className="block p-4 hover:bg-gray-100"
          >
            Features
          </a>

          <a
            href="#security"
            className="block p-4 hover:bg-gray-100"
          >
            Security
          </a>

          <a
            href="#contact"
            className="block p-4 hover:bg-gray-100"
          >
            Contact
          </a>

          <Link
            href="/login"
            className="block p-4 hover:bg-gray-100"
          >
            Login
          </Link>

        </div>

      )}

    </header>
  );
}