"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("token", "loggedin");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 to-indigo-100 p-6">
      <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl p-10">

        <div className="flex justify-center mb-4">
          <div className="w-20 h-25 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
            DIs
          </div>
        </div>

        <h1 className="text-center text-6xl font-extrabold text-indigo-600 leading-tight">
          Document
          <br />
          Intelligence
          <br />
          System
        </h1>

        <p className="text-center text-slate-500 text-2xl mt-6 mb-10">
          Corporate Document Intelligence System
        </p>

        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-full p-5 mb-6 border border-slate-300 rounded-3xl text-xl text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-5 mb-6 border border-slate-300 rounded-3xl text-xl text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-between items-center mb-8">
          <label className="flex items-center gap-3 text-slate-700">
            <input type="checkbox" />
            Remember Me
          </label>

          <button
            type="button"
            className="text-blue-600 font-medium"
          >
            Forgot Password?
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-5 rounded-3xl text-white text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition"
        >
          Login
        </button>
        

        <div className="text-center mt-10 text-slate-700 text-xl">
          Don't have an account?
          <span className="text-blue-600 font-bold ml-2 cursor-pointer">
            Sign Up
          </span>
          
        </div>

      </div>
    </div>
  );
}