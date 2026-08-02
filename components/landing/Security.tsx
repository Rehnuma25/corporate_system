import {
  ShieldCheck,
  Lock,
  KeyRound,
  Fingerprint,
  FileCheck,
  DatabaseZap,
} from "lucide-react";

const security = [
  {
    title: "Role Based Access",
    desc: "Separate permissions for Admin, Manager and Employee.",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Attribute Based Access",
    desc: "Department, Clearance Level and Project based authorization.",
    icon: KeyRound,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Data Encryption",
    desc: "End-to-end encryption protects enterprise documents.",
    icon: Lock,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Biometric Authentication",
    desc: "Supports MFA, fingerprint and secure authentication.",
    icon: Fingerprint,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Audit Logs",
    desc: "Track every login, upload, download and AI activity.",
    icon: FileCheck,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Secure Vector Database",
    desc: "Corporate ChromaDB with protected embeddings.",
    icon: DatabaseZap,
    color: "from-cyan-500 to-blue-700",
  },
];

export default function Security() {
  return (
    <section className="py-24 bg-white text-slate-700">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="px-5 py-2 rounded-full bg-blue-400">
            System Security
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Security Comes First
          </h2>

          <p className="mt-8 text-white-700 max-w-3xl mx-auto">
            Protect knowledge using modern authentication,
            encryption,monitoring and advanced access control.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {security.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="rounded-3xl border border-slate-700 bg-slate-800 p-8 hover:bg-slate-700 transition duration-300"
              >

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color}
                  flex items-center justify-center mb-6`}
                >

                  <Icon size={32} />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="mt-4 text-gray-300 leading-7">

                  {item.desc}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}