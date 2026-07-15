"use client";

import Link from "next/link";
import { Gift, Trophy, Coins, ArrowRight } from "lucide-react";

export default function reward() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-900 text-white">

      {/* Background Blur */}

      <div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl top-0 left-0 animate-pulse"></div>

      <div className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-3xl bottom-0 right-0 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-300">

              Intelligence Rewards Program

            </span>

            <h2 className="mt-8 text-6xl font-extrabold leading-tight">

              Earn AI Credits

              <br />

              Unlock Premium

            </h2>

            <p className="mt-8 text-xl text-slate-300 leading-9">

              Start with a
              <span className="text-cyan-400 font-bold">
                {" "}30 Days FREE Trial
              </span>

              and earn Intelligence Credits every time you interact with the platform.

            </p>

            {/* Trial Card */}

            <div className="mt-10 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6">

              <div className="flex justify-between">

                <div>

                  <h3 className="text-3xl font-bold">

                    30 Days Free Trial

                  </h3>

                  <p className="mt-2 text-slate-300">

                    Full access to AI Chat, Voice,
                    Images, PDF Analysis and RAG Search.

                  </p>

                </div>

                <Gift className="text-cyan-300" size={45} />

              </div>

              <div className="mt-8">

                <div className="flex justify-between text-sm">

                  <span>Trial Progress</span>

                  <span>12 / 30 Days</span>

                </div>

                <div className="mt-3 h-4 rounded-full bg-white/20 overflow-hidden">

                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"
                    style={{ width: "40%" }}
                  />

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex gap-5">

              <Link
                href="/login"
                className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 font-semibold flex items-center gap-2 transition"
              >
                Start Free Trial

                <ArrowRight size={20} />

              </Link>

              <button className="px-8 py-4 rounded-xl border border-white hover:bg-white hover:text-black transition">

                View Rewards

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            {/* Floating Card */}

            <div className="relative">

              <div className="rounded-[35px] bg-white text-slate-900 p-10 shadow-2xl animate-bounce">

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">

                    <Coins size={35} className="text-white" />

                  </div>

                  <div>

                    <p className="text-gray-500">

                      Current Intelligence Credits

                    </p>

                    <h2 className="text-5xl font-bold">

                      1,250

                    </h2>

                  </div>

                </div>

                {/* Progress */}

                <div className="mt-10">

                  <div className="flex justify-between">

                    <span>Premium Unlock</span>

                    <span>78%</span>

                  </div>

                  <div className="mt-3 h-5 rounded-full bg-gray-200 overflow-hidden">

                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse"
                      style={{ width: "78%" }}
                    />

                  </div>

                </div>

                {/* Reward */}

                <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-6">

                  <div className="flex justify-between items-center">

                    <div>

                      <h3 className="font-bold text-2xl">

                        Next Reward

                      </h3>

                      <p className="text-gray-500">

                        Unlock 7 Premium Days

                      </p>

                    </div>

                    <Trophy
                      size={45}
                      className="text-yellow-500"
                    />

                  </div>

                </div>

              </div>

              {/* Floating Circle */}

              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-cyan-400/30 blur-2xl animate-ping"></div>

              <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-purple-400/30 blur-xl animate-pulse"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}