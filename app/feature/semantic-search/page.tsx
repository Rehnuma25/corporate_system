import {
  Search,
  Brain,
  Database,
  FileSearch,
  Zap,
  ShieldCheck,
} from "lucide-react";

export default function SemanticSearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-50 to-indigo-100">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-10 py-16">

        <div className="text-center">

          <h1 className="mt-6 text-6xl font-extrabold text-slate-900">

            Intelligent

            <span className="text-cyan-600">

              {" "}Semantic Search

            </span>

          </h1>

          <p className="mt-8 max-w-4xl mx-auto text-lg leading-8 text-slate-600">

            Semantic Search allows users to search documents using
            natural language instead of exact keywords. The system
            understands the meaning of  question and retrieves
            the most relevant information from corporate knowledge,
            making document discovery faster, smarter and more
            accurate.

          </p>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-10 pb-20">

        <div className="grid grid-cols-3 gap-8">

          <div className="rounded-3xl bg-white p-8 shadow-xl hover:-translate-y-2 transition">

            <h2 className="mt-6 text-2xl font-bold">

              Smart Search

            </h2>

            <p className="mt-4 text-slate-600 leading-7">

              Search documents using natural language instead of
              exact keywords.

            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl hover:-translate-y-2 transition">

            <h2 className="mt-6 text-2xl font-bold">

              Intelligence Understanding

            </h2>

            <p className="mt-4 text-slate-600 leading-7">

              Intelligence system understands user intent and returns meaningful
              results from corporate knowledge.

            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl hover:-translate-y-2 transition">

            <h2 className="mt-6 text-2xl font-bold">

              Knowledge Base

            </h2>

            <p className="mt-4 text-slate-600 leading-7">

              Retrieve information from PDFs, DOCX files and
              corporatee databases instantly.

            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl hover:-translate-y-2 transition">

            <h2 className="mt-6 text-2xl font-bold">

              Accurate Results

            </h2>

            <p className="mt-4 text-slate-600 leading-7">

              Receive highly relevant answers instead of long lists
              of unrelated documents.

            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl hover:-translate-y-2 transition">

            <h2 className="mt-6 text-2xl font-bold">

              Fast Retrieval

            </h2>

            <p className="mt-4 text-slate-600 leading-7">

              Instantly find corporate knowledge with optimized 
              search technology.

            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl hover:-translate-y-2 transition">

            <h2 className="mt-6 text-2xl font-bold">

              Secure Access

            </h2>

            <p className="mt-4 text-slate-600 leading-7">

              Role-based access ensures users only retrieve
              information they are authorized to view.

            </p>

          </div>

        </div>

      </section>

    </div>
  );
}