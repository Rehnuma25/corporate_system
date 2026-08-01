import {
  Globe,
  Building2,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function GlobalCollaboration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-50 to-indigo-100">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-10 py-16">

        <div className="grid grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <h1 className="text-6xl font-extrabold leading-tight text-slate-900">

              Global

              <span className="text-cyan-600">
                {" "}Collaboration
              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              Our System Platform enables organizations
              to collaborate securely with global technology
              leaders. Teams can share knowledge, analyze
              Corporate documents, automate workflows and
              build  solutions while maintaining
              security, governance and compliance.

            </p>

            <div className="mt-10 flex gap-5">

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl bg-white p-8 shadow-2xl">

            <div className="rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-8 text-white">

              <h2 className="mt-6 text-3xl font-bold">

                Worldwide Corporate Network

              </h2>

              <p className="mt-4 leading-7 text-cyan-100">

                Connect organizations, systems and corporte
                knowledge across multiple countries with secure
                collaboration and intelligent automation.

              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">

                <div className="rounded-2xl bg-white/20 p-5">

                  <Building2 size={32} />

                  <h3 className="mt-3 text-2xl font-bold">

                    50+

                  </h3>

                  <p className="text-cyan-100">

                    Global Partners

                  </p>

                </div>

                <div className="rounded-2xl bg-white/20 p-5">

                  <Users size={32} />

                  <h3 className="mt-3 text-2xl font-bold">

                    10K+

                  </h3>

                  <p className="text-cyan-100">

                    Active Users

                  </p>

                </div>

                <div className="rounded-2xl bg-white/20 p-5">

                  <ShieldCheck size={32} />

                  <h3 className="mt-3 text-2xl font-bold">

                    99.9%

                  </h3>

                  <p className="text-cyan-100">

                    Secure Platform

                  </p>

                </div>

                <div className="rounded-2xl bg-white/20 p-5">

                  <Globe size={32} />

                  <h3 className="mt-3 text-2xl font-bold">

                    35+

                  </h3>

                  <p className="text-cyan-100">

                    Countries

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Collaboration Partners */}

      <section className="max-w-7xl mx-auto px-10 pb-16">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-slate-900">

            Trusted Technology Partners

          </h2>

          <p className="mt-4 text-slate-600 text-lg">

            Our corporate platform is designed to integrate
            with the world's leading technology companies to
            deliver secure, scalable and intelligent solutions.

          </p>

        </div>

        <div className="grid grid-cols-3 gap-8">

          {/* Microsoft */}

          <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 p-8 text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition">

            <Building2 size={48} />

            <h3 className="mt-6 text-3xl font-bold">

              Microsoft

            </h3>

            <p className="mt-4 leading-7">

              Azure , Microsoft 365 integration,
              corporate cloud services and secure
              collaboration.

            </p>

          </div>

          {/* Google */}

          <div className="rounded-3xl bg-gradient-to-br from-red-500 via-yellow-400 to-green-500 p-8 text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition">

            <Globe size={48} />

            <h3 className="mt-6 text-3xl font-bold">

              Google

            </h3>

            <p className="mt-4 leading-7">

              Google Cloud , Workspace integration,
              Gemini services and intelligent search.

            </p>

          </div>

          {/* Amazon */}

          <div className="rounded-3xl bg-gradient-to-br from-orange-400 to-yellow-500 p-8 text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition">

            <Building2 size={48} />

            <h3 className="mt-6 text-3xl font-bold">

              Amazon

            </h3>

            <p className="mt-4 leading-7">

              AWS cloud computing, scalable storage
              and system infrastructure.

            </p>

          </div>

          {/* NVIDIA */}

          <div className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-700 p-8 text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition">

            <ShieldCheck size={48} />

            <h3 className="mt-6 text-3xl font-bold">

              NVIDIA

            </h3>

            <p className="mt-4 leading-7">

              GPU acceleration, model training
              and high-performance computing.

            </p>

          </div>

          {/* IBM */}

          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700 p-8 text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition">

            <Users size={48} />

            <h3 className="mt-6 text-3xl font-bold">

              IBM

            </h3>

            <p className="mt-4 leading-7">

               Corporate automation, Watson AI
              and securely  business intelligence.

            </p>

          </div>

          {/* OpenAI */}

          <div className="rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 p-8 text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition">

            <Globe size={48} />

            <h3 className="mt-6 text-3xl font-bold">

              OpenAI

            </h3>

            <p className="mt-4 leading-7">

              GPT-powered system assistants,
              document intelligence and automation.

            </p>

          </div>

        </div>

      </section>

    </div>
  );
}