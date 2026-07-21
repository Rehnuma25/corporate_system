"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  FolderOpen,
  Bot,
  Shield,
  Cpu,
  BookOpen,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [platformOpen, setPlatformOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [technologyOpen, setTechnologyOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">

      <div className="max-w-7xl mx-auto h-24 px-6 flex items-center justify-between">

        {/* ================= Logo ================= */}

        <Link
          href="/"
          className="flex items-center gap-4"
        >

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">

            <span className="text-white text-2xl font-bold">
              DIS
            </span>

          </div>

          <div>

            <h2 className="text-1.5xl font-bold text-slate-600">
              Document Intelligence System
            </h2>

          </div>

        </Link>

        {/* ================= Desktop Menu ================= */}

        <nav className="hidden lg:flex items-center gap-10">

          <a
            href="#home"
            className="font-medium text-slate-700 hover:text-blue-600 transition"
          >
            Home
          </a>

          {/* ================= Platform ================= */}

          <div
            className="relative"
            onMouseEnter={() => setPlatformOpen(true)}
            onMouseLeave={() => setPlatformOpen(false)}
          >

            <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600">

              Platform

              <ChevronDown size={18} />

            </button>

            {platformOpen && (

              <div className="absolute top-10 left-0 w-80 rounded-2xl bg-white border border-slate-200 shadow-2xl p-5">

                <div className="space-y-4">

                  <a
                    href="#dashboard"
                    className="flex gap-4 rounded-xl p-3 hover:bg-slate-100 transition"
                  >

                    <LayoutDashboard
                      className="text-blue-600"
                    />

                    <div>

                      <h4 className="font-semibold">

                        Enterprise Dashboard

                      </h4>

                      <p className="text-sm text-slate-500">

                        Manage every workspace from one place.

                      </p>

                    </div>

                  </a>

                  <a
                    href="#knowledge"
                    className="flex gap-4 rounded-xl p-3 hover:bg-slate-100 transition"
                  >

                    <FolderOpen
                      className="text-indigo-600"
                    />

                    <div>

                      <h4 className="font-semibold">

                        Knowledge Workspace

                      </h4>

                      <p className="text-sm text-slate-500">

                        Organize enterprise documents securely.

                      </p>

                    </div>

                  </a>

                  <a
                    href="#aiworkspace"
                    className="flex gap-4 rounded-xl p-3 hover:bg-slate-100 transition"
                  >

                    <Bot
                      className="text-purple-600"
                    />

                    <div>

                      <h4 className="font-semibold">

                        AI Workspace

                      </h4>

                      <p className="text-sm text-slate-500">

                        Chat with enterprise knowledge using AI.

                      </p>

                    </div>

                  </a>

                  <a
                    href="#security"
                    className="flex gap-4 rounded-xl p-3 hover:bg-slate-100 transition"
                  >

                    <Shield
                      className="text-emerald-600"
                    />

                    <div>

                      <h4 className="font-semibold">

                        Security Center

                      </h4>

                      <p className="text-sm text-slate-500">

                        Enterprise protection & compliance.

                      </p>

                    </div>

                  </a>
                
                                  <a
                    href="#analytics"
                    className="flex gap-4 rounded-xl p-3 hover:bg-slate-100 transition"
                  >
                    <Cpu className="text-cyan-600" />

                    <div>
                      <h4 className="font-semibold">
                        Analytics
                      </h4>

                      <p className="text-sm text-slate-500">
                        Monitor enterprise insights and AI performance.
                      </p>
                    </div>
                  </a>

                </div>

              </div>

            )}

          </div>

          {/* ================= Solutions ================= */}

          <div
            className="relative"
            onMouseEnter={() => setSolutionOpen(true)}
            onMouseLeave={() => setSolutionOpen(false)}
          >

            <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600">

              Solutions

              <ChevronDown size={18} />

            </button>

            {solutionOpen && (

              <div className="absolute top-10 left-0 w-80 rounded-2xl bg-white border border-slate-200 shadow-2xl p-5">

                <div className="space-y-4">

                  <a
                    href="#document-intelligence"
                    className="block rounded-xl p-3 hover:bg-slate-100"
                  >
                    <h4 className="font-semibold">
                      Document Intelligence
                    </h4>

                    <p className="text-sm text-slate-500">
                      AI powered document understanding.
                    </p>
                  </a>

                  <a
                    href="#enterprise-search"
                    className="block rounded-xl p-3 hover:bg-slate-100"
                  >
                    <h4 className="font-semibold">
                      Enterprise Search
                    </h4>

                    <p className="text-sm text-slate-500">
                      Search thousands of documents instantly.
                    </p>
                  </a>

                  <a
                    href="#workflow"
                    className="block rounded-xl p-3 hover:bg-slate-100"
                  >
                    <h4 className="font-semibold">
                      Workflow Automation
                    </h4>

                    <p className="text-sm text-slate-500">
                      Automate enterprise operations using AI.
                    </p>
                  </a>

                  <a
                    href="#multi-agent"
                    className="block rounded-xl p-3 hover:bg-slate-100"
                  >
                    <h4 className="font-semibold">
                      Multi-Agent AI
                    </h4>

                    <p className="text-sm text-slate-500">
                      Intelligent collaboration between AI agents.
                    </p>
                  </a>

                </div>

              </div>

            )}

          </div>

          {/* ================= Technology ================= */}

          <div
            className="relative"
            onMouseEnter={() => setTechnologyOpen(true)}
            onMouseLeave={() => setTechnologyOpen(false)}
          >

            <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600">

              Technology

              <ChevronDown size={18} />

            </button>

            {technologyOpen && (

              <div className="absolute top-10 left-0 w-80 rounded-2xl bg-white border border-slate-200 shadow-2xl p-5">

                <div className="space-y-4">

                  <a
                    href="#technology"
                    className="flex gap-4 rounded-xl p-3 hover:bg-slate-100"
                  >
                    <BookOpen className="text-indigo-600" />

                    <div>

                      <h4 className="font-semibold">
                        Modern Stack
                      </h4>

                      <p className="text-sm text-slate-500">
                        Next.js • FastAPI • ChromaDB • RAG
                      </p>

                    </div>

                  </a>

                  <a
                    href="#technology"
                    className="block rounded-xl p-3 hover:bg-slate-100"
                  >
                    LLM Integration
                  </a>

                  <a
                    href="#technology"
                    className="block rounded-xl p-3 hover:bg-slate-100"
                  >
                    Enterprise Security
                  </a>

                  <a
                    href="#technology"
                    className="block rounded-xl p-3 hover:bg-slate-100"
                  >
                    AI Infrastructure
                  </a>

                </div>

              </div>

            )}

          </div>

                    {/* ================= Resources ================= */}

          <div
            className="relative"
            onMouseEnter={() => setResourceOpen(true)}
            onMouseLeave={() => setResourceOpen(false)}
          >
            <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600">
              Resources
              <ChevronDown size={18} />
            </button>

            {resourceOpen && (
              <div className="absolute top-10 left-0 w-80 rounded-2xl bg-white border border-slate-200 shadow-2xl p-5">

                <div className="space-y-4">

                  <a
                    href="#features"
                    className="block rounded-xl p-3 hover:bg-slate-100"
                  >
                    Documentation
                  </a>

                  <a
                    href="#workflow"
                    className="block rounded-xl p-3 hover:bg-slate-100"
                  >
                    Workflow
                  </a>

                  <a
                    href="#technology"
                    className="block rounded-xl p-3 hover:bg-slate-100"
                  >
                    Developer Guide
                  </a>

                  <a
                    href="#faq"
                    className="block rounded-xl p-3 hover:bg-slate-100"
                  >
                    FAQs
                  </a>

                </div>

              </div>
            )}

          </div>

          <a
            href="#contact"
             className="mr-10 font-medium text-slate-700 hover:text-blue-600 transition"
          >
            Contact
          </a>

        </nav>

        {/* ================= Right Buttons ================= */}

        <div className="hidden lg:flex items-center gap-8">

          <Link
            href="/login"
            className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            href="/login"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition shadow-lg"
          >
            Get Started
          </Link>

        </div>

        {/* ================= Mobile Menu Button ================= */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>

      </div>

      {/* ================= Mobile Menu ================= */}

      {mobileOpen && (

        <div className="lg:hidden bg-white border-t">

          <div className="flex flex-col px-6 py-6 space-y-5">

            <a href="#home">Home</a>

            <a href="#platform">Platform</a>

            <a href="#solutions">Solutions</a>

            <a href="#technology">Technology</a>

            <a href="#resources">Resources</a>

            <a href="#pricing">Pricing</a>

            <a href="#contact">Contact</a>

            <Link
              href="/login"
              className="mt-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-center text-white font-semibold"
            >
              Login / Get Started
            </Link>

          </div>

        </div>

      )}

    </header>

  );

}