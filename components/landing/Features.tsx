import {
  ShieldCheck,
  BrainCircuit,
  FileText,
  Search,
  Database,
  Lock,
  Mic,
  Image,
  BarChart3,
  Users,
  Workflow,
  Globe,
} from "lucide-react";

const features = [
  {
    title: "AI Document Chat",
    desc: "Ask questions from PDFs, DOCX, TXT and receive accurate answers with citations.",
    icon: BrainCircuit,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Knowledge Workspace",
    desc: "Upload, organize and manage enterprise documents securely.",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Semantic Search",
    desc: "Retrieve relevant information instantly using AI vector search.",
    icon: Search,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Vector Database",
    desc: "Powered by ChromaDB for enterprise document retrieval.",
    icon: Database,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Enterprise Security",
    desc: "Role-Based & Attribute-Based Access Control with audit logs.",
    icon: ShieldCheck,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Voice Assistant",
    desc: "Speak naturally and receive AI-generated answers instantly.",
    icon: Mic,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Image Understanding",
    desc: "Upload images and extract insights using Vision AI.",
    icon: Image,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Analytics Dashboard",
    desc: "Monitor usage, threats, uploads and AI performance.",
    icon: BarChart3,
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "Role Management",
    desc: "Separate dashboards for Admin, Manager and Employee.",
    icon: Users,
    color: "from-cyan-500 to-indigo-500",
  },
  {
    title: "Workflow Automation",
    desc: "Automate document processing and enterprise workflows.",
    icon: Workflow,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Secure Access",
    desc: "Enterprise-grade authentication, encryption and JWT security.",
    icon: Lock,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Global Collaboration",
    desc: "Access documents securely from anywhere in the world.",
    icon: Globe,
    color: "from-blue-500 to-indigo-700",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            Our Features
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Everything You Need In One Platform
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-3xl mx-auto">
            Our Intelligence platform combines document intelligence,
            corporately security, advanced search, voice interaction,
            analytics and workflow automation into one unified system.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg border border-slate-200 p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
              >

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color}
                  flex items-center justify-center text-white mb-6`}
                >

                  <Icon size={32} />

                </div>

                <h3 className="text-2xl font-bold text-slate-800">

                  {item.title}

                </h3>

                <p className="mt-4 text-gray-500 leading-7">

                  {item.desc}

                </p>

                <button
                  className="mt-8 text-blue-600 font-semibold group-hover:translate-x-2 transition"
                >

                  Learn More →

                </button>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}