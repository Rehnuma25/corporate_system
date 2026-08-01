import {
  Database,
  ShieldCheck,
  Server,
  Cloud,
} from "lucide-react";

export default function DatabasePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cyan-100 via-sky-50 to-indigo-100">

      {/* Background Circles */}

      <div className="absolute top-16 left-16 h-40 w-40 rounded-full bg-cyan-300/40 blur-3xl animate-pulse" />

      <div className="absolute right-24 top-32 h-52 w-52 rounded-full bg-blue-300/40 blur-3xl animate-pulse" />

      <div className="absolute bottom-20 left-1/3 h-56 w-56 rounded-full bg-purple-300/40 blur-3xl animate-pulse" />

      {/* Main Content */}

      <div className="relative flex min-h-screen flex-col items-center justify-center px-8 text-center">

        <h1 className="mt-8 text-7xl font-extrabold leading-tight text-slate-900">

          Intelligent

          <span className="text-cyan-600">

            {" "}Database

          </span>

        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">

          Store, organize and retrieve corporate knowledge
          securely.Intelligent database architecture
          enables fast access, reliable storage and seamless
          integration with  applications.

        </p>

        <div className="mt-14 flex gap-10">

          <div className="flex flex-col items-center">

            <div className="rounded-2xl bg-white p-5 shadow-xl">

              <Database size={40} className="text-cyan-600" />

            </div>

            <p className="mt-4 font-semibold text-slate-700">

              Smart Storage

            </p>

          </div>

          <div className="flex flex-col items-center">

            <div className="rounded-2xl bg-white p-5 shadow-xl">

              <ShieldCheck size={40} className="text-green-600" />

            </div>

            <p className="mt-4 font-semibold text-slate-700">

              Secure Access

            </p>

          </div>

          <div className="flex flex-col items-center">

            <div className="rounded-2xl bg-white p-5 shadow-xl">

              <Cloud size={40} className="text-blue-600" />

            </div>

            <p className="mt-4 font-semibold text-slate-700">

              Cloud Ready

            </p>

          </div>

          <div className="flex flex-col items-center">

            <div className="rounded-2xl bg-white p-5 shadow-xl">

              <Server size={40} className="text-purple-600" />

            </div>

            <p className="mt-4 font-semibold text-slate-700">

              High Performance

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}