import {
  Database,
  UploadCloud,
  CheckCircle2,
  Trash2,
  FolderOpen,
  Sparkles,
  Settings,
} from "lucide-react";

export default function KnowledgeWorkspace() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-cyan-100 via-sky-50 to-indigo-100 relative">

      {/* Background */}

      <div className="absolute top-20 left-10 h-56 w-56 rounded-full bg-cyan-300/40 blur-3xl animate-pulse" />

      <div className="absolute right-20 top-24 h-64 w-64 rounded-full bg-blue-300/40 blur-3xl animate-pulse" />

      <div className="absolute bottom-10 left-1/3 h-60 w-60 rounded-full bg-purple-300/30 blur-3xl animate-pulse" />

      {/* Hero */}

      <section className="relative max-w-7xl mx-auto px-10 py-20">

        <div className="text-center">

          <h1 className="mt-8 text-6xl font-extrabold text-slate-900">

            Knowledge

            <span className="text-cyan-600">
              {" "}Workspace
            </span>

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-600">

            Upload, organize and manage Corporate documents
            in one secure workspace. Every uploaded document
            is stored safely and becomes available for 
            search and intelligent document understanding.

          </p>

        </div>

      </section>

      {/* Feature Cards */}

      <section className="relative max-w-7xl mx-auto px-10 pb-20">

        <div className="grid grid-cols-2 gap-8">

          {/* Upload */}

          <div className="rounded-3xl bg-white p-8 shadow-xl hover:-translate-y-2 transition">

            <UploadCloud
              className="text-cyan-600 animate-bounce"
              size={55}
            />

            <h2 className="mt-6 text-3xl font-bold">

              Upload Documents

            </h2>

            <p className="mt-4 text-slate-600 leading-7">

              Upload PDF, DOCX and corporatee documents
              securely into system knowledge workspace.

            </p>

          </div>

          {/* Success */}

          <div className="rounded-3xl bg-white p-8 shadow-xl hover:-translate-y-2 transition">

            <CheckCircle2
              className="text-green-600 animate-pulse"
              size={55}
            />

            <h2 className="mt-6 text-3xl font-bold">

              Upload Successful

            </h2>

            <p className="mt-4 text-slate-600 leading-7">

              Documents are successfully uploaded,
              indexed and ready for semantic search.

            </p>

          </div>

          {/* Storage */}

          <div className="rounded-3xl bg-white p-8 shadow-xl hover:-translate-y-2 transition">

            <Database
              className="text-blue-600 animate-bounce"
              size={55}
            />

            <h2 className="mt-6 text-3xl font-bold">

              Secure Storage

            </h2>

            <p className="mt-4 text-slate-600 leading-7">

              All corporate knowledge is stored safely
              with secure access control.

            </p>

          </div>

          {/* Delete */}

          <div className="rounded-3xl bg-white p-8 shadow-xl hover:-translate-y-2 transition">

            <Trash2
              className="text-red-500 animate-bounce"
              size={55}
            />

            <h2 className="mt-6 text-3xl font-bold">

              Delete Documents

            </h2>

            <p className="mt-4 text-slate-600 leading-7">

              Remove outdated files anytime while keeping
               workspace organized.

            </p>

          </div>

        </div>

      </section>
            {/* ================= Source Citation ================= */}

      <section className="relative max-w-7xl mx-auto px-10 pb-16">

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-5 py-2 text-purple-700 font-semibold">

            System Knowledge Features

          </div>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Source Citation &

            <span className="text-purple-600">

              {" "}Knowledge Library

            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">

            Every Intelligence response includes source references,
            allowing users to verify where the answer came
            from. Documents are automatically indexed and
            organized inside the corporate  knowledge base.

          </p>

        </div>

        <div className="grid grid-cols-3 gap-8">

          {/* Source Citation */}

          <div className="rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 p-8 text-white shadow-2xl hover:-translate-y-2 transition">

            <FolderOpen size={55} className="animate-pulse" />

            <h3 className="mt-6 text-3xl font-bold">

              Source Citation

            </h3>

            <p className="mt-4 leading-7 text-purple-100">

              Every generated answer contains the original
              document reference for better trust and
              transparency.

            </p>

          </div>

          {/* Knowledge Library */}

          <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white shadow-2xl hover:-translate-y-2 transition">

            <Database size={55} className="animate-pulse" />

            <h3 className="mt-6 text-3xl font-bold">

              Knowledge Library

            </h3>

            <p className="mt-4 leading-7 text-cyan-100">

              Organize PDFs, DOCX files and corporate
              documents in one secure  repository.

            </p>

          </div>

          {/* system Ready */}

          <div className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-white shadow-2xl hover:-translate-y-2 transition">

            <Settings
              size={55}
              className="animate-pulse"
            />

            <h3 className="mt-6 text-3xl font-bold">

              System Ready

            </h3>

            <p className="mt-4 leading-7 text-green-100">

              Uploaded documents are automatically indexed
              and prepared for intelligent semantic search.

            </p>

          </div>

        </div>

      </section>


      {/* ================= Bottom Cards ================= */}

      <section className="relative max-w-7xl mx-auto px-10 pb-24">

        <div className="grid grid-cols-4 gap-6">

          <div className="rounded-2xl bg-white p-6 shadow-lg hover:bg-cyan-50 transition">

            <UploadCloud className="text-cyan-600" size={40} />

            <h4 className="mt-4 text-xl font-bold">

              Fast Upload

            </h4>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg hover:bg-green-50 transition">

            <CheckCircle2 className="text-green-600" size={40} />

            <h4 className="mt-4 text-xl font-bold">

              Verified Files

            </h4>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg hover:bg-blue-50 transition">

            <Database className="text-blue-600" size={40} />

            <h4 className="mt-4 text-xl font-bold">

              System Storage

            </h4>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg hover:bg-red-50 transition">

            <Trash2 className="text-red-500" size={40} />

            <h4 className="mt-4 text-xl font-bold">

              Easy Delete

            </h4>

          </div>

        </div>

      </section>

    </div>
  );
}