import {
  ShieldCheck,
  FileText,
  Search,
  Database,
  Lock,
  Mic,
  Image,
  BarChart3,
  Users,
  FileSearch,
  Workflow,
  Globe,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Document Chat",
    desc: "Ask questions from PDFs, DOCX, TXT and receive accurate answers with citations.",
    icon: FileSearch,
    color: "from-blue-500 to-cyan-500",
    link: "/feature/document-chat",
  },
  {
    title: "Knowledge Workspace",
    desc: "Upload, organize and manage enterprise documents securely.",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    link: "/feature/knowledge-workspace",
  },
  {
    title: "Semantic Search",
    desc: "Retrieve relevant information instantly using vector search.",
    icon: Search,
    color: "from-orange-500 to-red-500",
    link: "/feature/semantic-search",
  },
  {
    title: "Vector Database",
    desc: "Powered by ChromaDB for corporate document retrieval.",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    link: "/feature/vector-database" ,
  },
  {
    title: "Voice_Image_part",
    desc: "Speak naturally and receive AI-generated answers instantly. Also, Upload images and extract insights using Vision AI. ",
    icon: Image,
    icon1: Mic ,
    color: "from-pink-500 to-rose-500",
    link: "/feature/Voice_Image_part" ,
  },
  {
    title: "Analytics Dashboard",
    desc: "Monitor usage, threats, uploads and AI performance.",
    icon: BarChart3,
    color: "from-sky-500 to-blue-500",
    link: "/feature/Analytics-Dashboard" ,
  },
  {
    title: "Role Management",
    desc: "Separate dashboards for Admin, Manager and Employee.",
    icon: Users,
    color: "from-cyan-500 to-indigo-500",
    link: "/feature/Role-Management",
  },
  {
    title: "Global Collaboration",
    desc: "Access documents securely from anywhere in the world.",
    icon: Globe,
    color: "from-blue-500 to-indigo-700",
    link: "/feature/global-collaboration",
  },
];

export default function Features() {
  return (
    <section className=" bg-gradient-to-r from-blue-600 to-blue-400 text-whitenpm run dev
     pt-24 pb-36">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            Our Features
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Everything You Need In One Platform
          </h2>

            <p className="mt-5 text-lg text-slate-100 max-w-3xl mx-auto">
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

                <Link
                     href={item.link}
                          className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-blue-600 bg-white px-6 py-3 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-xl"
                           >
                          Learn More →
                </Link>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}