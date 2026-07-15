"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-5xl font-bold text-slate-900">
            Executive Dashboard
          </h1>

          <p className="text-slate-500 mt-2 text-lg">
             Secure Document Platform
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow"
        >
          Logout
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-3xl shadow-xl">
          <p className="text-lg">Security Score</p>
          <h2 className="text-5xl font-bold mt-2">96%</h2>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-3xl shadow-xl">
          <p className="text-lg">Threats Blocked</p>
          <h2 className="text-5xl font-bold mt-2">14</h2>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6 rounded-3xl shadow-xl">
          <p className="text-lg">Documents</p>
          <h2 className="text-5xl font-bold mt-2">124</h2>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-3xl shadow-xl">
          <p className="text-lg">Queries</p>
          <h2 className="text-5xl font-bold mt-2">845</h2>
        </div>

      </div>

      {/* Threats + Users */}
      <div className="grid grid-cols-2 gap-6 mb-8">

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-6">
            Recent Threats
          </h2>

          <div className="space-y-4">

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl">
              Prompt Injection Attempt Blocked
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-xl">
              Suspicious Login Detected
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-xl">
              API Abuse Attempt Detected
            </div>

          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-6">
            Active Users
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">
              <span>User 1</span>
              <span className="text-green-500 font-semibold">
                Online
              </span>
            </div>

            <div className="flex justify-between">
              <span>User 2</span>
              <span className="text-green-500 font-semibold">
                Online
              </span>
            </div>

            <div className="flex justify-between">
              <span>User 3</span>
              <span className="text-yellow-500 font-semibold">
                Idle
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>User 4</span>
              <span className="text-green-500 font-semibold">
                Online
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Documents + Analytics */}
      <div className="grid grid-cols-2 gap-6 mb-8">

        <div className="bg-[#00E1FF] rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-6">
            Top Uploaded Documents
          </h2>

          <div className="space-y-4">

            <div className="p-4 bg-slate-100 rounded-xl">
              Annual-Report-2025.pdf
            </div>

            <div className="p-4 bg-slate-100 rounded-xl">
              HR-Policy-Guide.pdf
            </div>

            <div className="p-4 bg-slate-100 rounded-xl">
              Security-Standards.pdf
            </div>

            <div className="p-4 bg-slate-100 rounded-xl">
              Research-Data.pdf
            </div>

          </div>
        </div>

        <div className="bg-[#f7b8f7] rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-6">
            Security Events Timeline
          </h2>

          <div className="space-y-4">

            <div className="flex gap-4">
              <span className="font-bold">09:15</span>
              <span>Prompt Injection Blocked</span>
            </div>

            <div className="flex gap-4">
              <span className="font-bold">10:20</span>
              <span>Unauthorized Login Attempt</span>
            </div>

            <div className="flex gap-4">
              <span className="font-bold">12:10</span>
              <span>Malicious Document Detected</span>
            </div>

            <div className="flex gap-4">
              <span className="font-bold">14:30</span>
              <span>Policy Violation Alert</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}