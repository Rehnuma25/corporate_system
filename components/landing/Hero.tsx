"use client";

import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Database,
  Sparkles,
} from "lucide-react";
import { MessageSquareText } from "lucide-react";
export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-50 via-pink-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= Left Side ================= */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">

              <ShieldCheck
                size={18}
                className="text-blue-600"
              />

              <span className="text-sm font-medium text-blue-700">
                Corporate Platform
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-[0.9] text-slate-900">

              Corporate Documents Intelligence Platform

              <span className="block text-blue-600 leading-[0.9]">
                 Intelligent Knowledge
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 text-xl leading-9 text-slate-600 max-w-2xl">

              Document Intelligence System helps 
              securely organize documents, retrieve knowledge
              instantly, automate workflows, and empower
              employees with AI-driven decision support.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/login"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
              >
                Get Started
              </Link>

              <a
                href="#features"
                className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition"
              >
                Explore  Our Platform
              </a>

            </div>

            {/* Feature Points */}

            <div className="mt-14 grid md:grid-cols-3 gap-16">

              <div className="flex items-start gap-5">

                <FileText size={32} className="text-blue-600 flex-shrink-0" />

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Smart Document Intelligence
                  </h3>

                  <p className="mt-2 text-lg  text-slate-600">
                    Document understanding and search.
                  </p>

                
                </div>

               <div className="flex items-start gap-5">
                  <Database size={32} className="text-pink-600 flex-shrink-0" />
                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                     Knowledge Base
                  </h3>

                  <p className="mt-2 text-lg  text-slate-600">
                    storage with  retrieval.
                  </p>

                </div>

              </div>

                   <div className="flex items-start gap-4">

                       <MessageSquareText size={30} className="mt-1 text-blue-600 flex-shrink-0"/>

                           <div className="min-w-0">

                                 <h3 className="text-xl font-bold text-slate-900 whitespace-nowrap">
                                                AI Assistant</h3>
                                      <p className="mt-2 text-base leading-7 text-slate-600">
                                              Get instant answers from enterprise knowledge.</p>

                                            </div>

                                              </div> 

                                            </div>
          </div>
          </div> 

          {/* ================= Right Side ================= */}

          <div className="relative">

            <div className="rounded-3xl border border-slate-200 bg-white shadow-2xl p-8">

              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-200 pb-5">

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    System Dashboard
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Real-time Intelligence Platform Overview
                  </p>

                </div>

                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                  ● Live
                </span>

              </div>

              {/* Statistics */}

              <div className="grid grid-cols-2 gap-5 mt-8">

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                  <p className="text-sm text-slate-500">
                    Security Score
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-emerald-600">
                    99.8%
                  </h2>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                  <p className="text-sm text-slate-500">
                    Documents
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-blue-600">
                    12.5K
                  </h2>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                  <p className="text-sm text-slate-500">
                    Intelligence Requests
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-purple-600">
                    1.8M
                  </h2>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                  <p className="text-sm text-slate-500">
                    Compliance
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-orange-500">
                    ISO 
                  </h2>

                </div>

              </div>

              {/*corporate Status */}

              <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">

                <h4 className="text-lg font-semibold text-slate-900">
                  Platform Status
                </h4>

                <div className="mt-5 space-y-4">

                  <div className="flex items-center justify-between">

                    <span className="text-slate-600">
                      Chatbot Services
                    </span>

                    <span className="font-semibold text-emerald-600">
                      Operational
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-slate-600">
                      Knowledge Base
                    </span>

                    <span className="font-semibold text-emerald-600">
                      Healthy
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-slate-600">
                      Security Monitor
                    </span>

                    <span className="font-semibold text-emerald-600">
                      Protected
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-slate-600">
                      Response Time
                    </span>

                    <span className="font-semibold text-blue-600">
                      0.24 sec
                    </span>

                  </div>

                </div>

              </div>
                            {/* ================= Technology Stack ================= */}

              <div className="mt-8">

                <h4 className="text-lg font-bold text-slate-900">
                  Corporate Technological Stack
                </h4>

                <div className="mt-5 grid grid-cols-2 gap-4">

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <h5 className="font-semibold text-slate-900">
                      Next.js 15
                    </h5>
                    <p className="mt-1 text-sm text-slate-500">
                      Modern React Framework
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <h5 className="font-semibold text-slate-900">
                      FastAPI
                    </h5>
                    <p className="mt-1 text-sm text-slate-500">
                      High Performance Backend
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <h5 className="font-semibold text-slate-900">
                      ChromaDB
                    </h5>
                    <p className="mt-1 text-sm text-slate-500">
                      Corporate Vector Database
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <h5 className="font-semibold text-slate-900">
                      OpenAI LLM
                    </h5>
                    <p className="mt-1 text-sm text-slate-500">
                      Intelligent  Assistant
                    </p>
                  </div>

                </div>

              </div>

              {/* ================= corporate Highlights ================= */}

              <div className="mt-8 rounded-2xl bg-slate-900 p-6">

                <h4 className="text-xl font-bold text-white">
                  Why Organizations Choose DIS
                </h4>

                <div className="mt-6 space-y-4">

                  <div className="flex items-center justify-between border-b border-slate-700 pb-3">

                    <span className="text-slate-300">
                      Intelligence Accuracy
                    </span>

                    <span className="font-bold text-emerald-400">
                      98.7%
                    </span>

                  </div>

                  <div className="flex items-center justify-between border-b border-slate-700 pb-3">

                    <span className="text-slate-300">
                      System Security
                    </span>

                    <span className="font-bold text-cyan-400">
                      AES-256
                    </span>

                  </div>

                  <div className="flex items-center justify-between border-b border-slate-700 pb-3">

                    <span className="text-slate-300">
                      Average Response
                    </span>

                    <span className="font-bold text-yellow-300">
                      240 ms
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-slate-300">
                      Platform Availability
                    </span>

                    <span className="font-bold text-emerald-400">
                      99.99%
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>
                        
</div>
</div>
</section>
  );
}