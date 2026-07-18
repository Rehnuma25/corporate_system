"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Database,
  BrainCircuit,
  Lock,
} from "lucide-react";

export default function Hero() {
  return (
     <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[60px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyan-300/20 blur-[60px]" />

      <div className="absolute top-40 right-40 w-[250px] h-[250px] rounded-full bg-indigo-400/10 blur-[60px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#64748b 1px, transparent 1px),linear-gradient(to right,#64748b 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200 bg-white shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />

              <span className="text-sm font-semibold text-slate-700">
                Corporate AI Platform
              </span>

            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="mt-8 text-6xl lg:text-7xl font-black leading-[1.05]"
            >

              Corporate

              <br />

              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">

                Document Intelligence

              </span>

              <br />

              Platform

            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.45,
              }}
              className="mt-8 text-xl text-slate-600 leading-9 max-w-xl"
            >

              AI-powered Corporate platform for intelligent document
              management, semantic search, RAG knowledge retrieval, analytics,
              governance and corporate-grade security.

            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
              }}
              className="mt-10 flex flex-wrap gap-5"
            >

              <button className="group flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold shadow-xl hover:bg-blue-700 transition">

                Start Free Trial

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />

              </button>

              <Link
                href="/login"
                className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold hover:bg-slate-100 transition"
              >

                Live Demo

              </Link>

            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
              }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
            >

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  10M+
                </h3>

                <p className="text-slate-500 mt-1">
                  Documents
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  250+
                </h3>

                <p className="text-slate-500 mt-1">
                  Companies
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  99.9%
                </h3>

                <p className="text-slate-500 mt-1">
                  Uptime
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  24/7
                </h3>

                <p className="text-slate-500 mt-1">
                  AI Support
                </p>
              </div>

            </motion.div>

          </motion.div>

                    {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative flex justify-center items-center px-8 lg:px-12"
          >

            {/* Background Glow */}

            <div className="absolute w-[520px] h-[520px] rounded-full bg-gradient-to-r from-blue-400/20 via-cyan-300/20 to-indigo-400/20 blur-[120px]" />

            {/* Floating Badge 1 */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -left-6 top-8 z-30 hidden md:block"
            >

              <div className="rounded-2xl bg-white shadow-xl border border-slate-200 px-6 py-4">

                <div className="flex items-center gap-1">

                  <ShieldCheck className="w-8 h-8 text-green-500" />

                  <div>

                    <h4 className="font-semibold">

                      Security

                    </h4>

                    <p className="text-sm text-slate-500">

                      99.9% Protected

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* Floating Badge 2 */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -right-6 bottom-16 z-30 hidden md:block"
            >

              <div className="rounded-2xl bg-white shadow-xl border border-slate-200 px-5 py-4">

                <div className="flex items-center gap-3">

                  <BrainCircuit className="w-8 h-8 text-blue-600" />

                  <div>

                    <h4 className="font-semibold">

                      AI Engine

                    </h4>

                    <p className="text-sm text-slate-500">

                      Online

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* Dashboard */}

            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative z-10 w-full max-w-[520px] rounded-[32px] border border-slate-200 bg-white shadow-2xl p-8"
            >

              {/* Header */}

              <div className="flex items-start justify-between gap-4">

                <div>

                  <p className="text-sm text-slate-500">

                    Corporate Workspace

                  </p>

                  <h3 className="text-2xl font-bold mt-1">

                    AI Dashboard

                  </h3>

                </div>

                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">

                  <Database className="text-white" />

                </div>

              </div>

              {/* Security */}

              <div className="mt-8">

                <div className="flex justify-between mb-2">

                  <span className="font-medium">

                    Security Score

                  </span>

                  <span className="font-bold text-blue-600">

                    98%

                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "98%" }}
                    transition={{
                      duration: 2,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  />

                </div>

              </div>

              {/* Status Cards */}

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="rounded-2xl bg-slate-50 p-5">

                  <h4 className="text-sm text-slate-500">

                    Documents

                  </h4>

                  <h2 className="text-3xl font-bold mt-2">

                    2,458

                  </h2>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <h4 className="text-sm text-slate-500">

                    AI Requests

                  </h4>

                  <h2 className="text-3xl font-bold mt-2">

                    15.2K

                  </h2>

                </div>

              </div>

              {/* Recent Activity */}

              <div className="mt-8 rounded-2xl bg-blue-50 p-5 border border-blue-100">

                <div className="flex items-center justify-between">

                  <div>

                    <h4 className="font-semibold">

                      Recent Upload

                    </h4>

                    <p className="text-slate-500 mt-1">

                      Financial_Report_2026.pdf

                    </p>

                  </div>

                  <Lock className="text-blue-600" />

                </div>

              </div>

              {/* AI Status */}

              <div className="mt-5 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 flex items-center justify-between">

                <div>

                  <h4 className="font-semibold">

                    AI Assistant

                  </h4>

                  <p className="text-slate-500">

                    Ready to answer enterprise queries

                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

                  <span className="font-medium">

                    Online

                  </span>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* ===== Continue with Part 3 ===== */}

                {/* ================= TRUSTED TECHNOLOGIES ================= */}


<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative mt-28 h-[260px]"
>

  {/* Title */}

  <h3 className="text-center text-2xl font-bold text-slate-800 mb-16">

    Corporate Intelligence Workflow

  </h3>

  {/* Animated SVG Line */}

  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1200 260"
    preserveAspectRatio="none"
  >

    <motion.path
      d="M120 120
         C220 120 220 160 320 160
         S420 120 520 120
         S620 200 720 200
         S820 120 920 120
         S1020 210 1120 210"
      fill="none"
      stroke="#3B82F6"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2 }}
    />

  </svg>

  {/* Boxes */}

  <div className="absolute left-[5%] top-[70px]">

    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
      whileHover={{ scale: 1.1 }}
      className="rounded-full bg-blue-100 text-blue-700 px-6 py-3 shadow-xl font-semibold"
    >

      AI Search

    </motion.div>

  </div>

  <div className="absolute left-[22%] top-[115px]">

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 5 }}
      whileHover={{ scale: 1.1 }}
      className="rounded-full bg-cyan-100 text-cyan-700 px-6 py-3 shadow-xl font-semibold"
    >

      RAG Engine

    </motion.div>

  </div>

  <div className="absolute left-[42%] top-[90px]">

    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 5 }}
      whileHover={{ scale: 1.1 }}
      className="rounded-full bg-indigo-100 text-indigo-700 px-6 py-3 shadow-xl font-semibold"
    >

      PDF Analysis

    </motion.div>

  </div>

  <div className="absolute left-[63%] top-[165px]">

    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ repeat: Infinity, duration: 4.5 }}
      whileHover={{ scale: 1.1 }}
      className="rounded-full bg-purple-100 text-purple-700 px-6 py-3 shadow-xl font-semibold"
    >

      Voice AI

    </motion.div>

  </div>

  <div className="absolute left-[80%] top-[75px]">

    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
      whileHover={{ scale: 1.1 }}
      className="rounded-full bg-pink-100 text-pink-700 px-6 py-3 shadow-xl font-semibold"
    >

      Image OCR

    </motion.div>

  </div>

  <div className="absolute right-[3%] top-[185px]">

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 5 }}
      whileHover={{ scale: 1.1 }}
      className="rounded-full bg-green-100 text-green-700 px-6 py-3 shadow-xl font-semibold"
    >

      Secure AI

    </motion.div>

  </div>

</motion.div>

       
        {/* ================= BOTTOM INFO BAR ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
          }}
          className="mt-20 rounded-[32px]
bg-gradient-to-br
from-slate-500
via-blue-600
to-indigo-500
border border-blue-500/30
shadow-[0_25px_80px_rgba(59,130,246,0.35)]
px-8 py-8
text-white
overflow-hidden
relative"
        >

          <div className="grid md:grid-cols-4 gap-8">

            <div>

              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                 50+
                    </h3>

              <p className="mt-2 text-slate-300">

                Corporate Features

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">

                50M+

              </h3>

              <p className="mt-2 text-slate-300">

                Documents Processed

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">

                ISO

              </h3>

              <p className="mt-2 text-slate-300">

                System Security

              </p>

            </div>

            <div>

             <h3 className="text-4xl font-bold text-violet-500">

                24/7

              </h3>

              <p className="mt-2 text-slate-300">

                AI Monitoring

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
