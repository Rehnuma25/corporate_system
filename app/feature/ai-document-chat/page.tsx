import { ArrowRight, MessageCircleMore } from "lucide-react";

export default function AIDocumentChat() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-100">

      <section className="max-w-7xl mx-auto px-10 py-20">

        <div className="grid grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">

              Intelligent

              <span className="text-cyan-600">

                {" "}Document Conversation

              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              Communicate with your Corporate documents using
              natural language. Ask questions, receive accurate
              answers and quickly explore important information
              without searching manually.

            </p>


          </div>

          {/* Right */}

          <div className="rounded-3xl bg-white p-8 shadow-2xl">

            <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 p-8">

              <div className="space-y-4">

                <div className="ml-auto w-64 rounded-2xl bg-white px-5 py-4 text-slate-700">

                  Summarize this uploaded document.

                </div>

                <div className="w-72 rounded-2xl bg-cyan-100 px-5 py-4 text-slate-700">

                  The document discusses Corporate documents,
                  semantic search and secure knowledge
                  management.

                </div>

                <div className="ml-auto w-60 rounded-2xl bg-white px-5 py-4 text-slate-700">

                  Show  the pdf key .

                </div>

                <div className="w-72 rounded-2xl bg-cyan-100 px-5 py-4 text-slate-700">

                  Key findings have been generated
                  successfully.

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= Features ================= */}

      <section className="max-w-7xl mx-auto px-10 pb-20">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold text-slate-900">

            Powerful Chat Features

          </h2>

          <p className="mt-5 text-lg text-slate-600">

            Everything you need to communicate with your
            Corporate documents securely and intelligently.

          </p>

        </div>

        <div className="grid grid-cols-3 gap-8">

          {/* Card 1 */}

          <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white shadow-xl hover:-translate-y-2 transition">

            <h3 className="text-3xl font-bold">

              Ask Anything

            </h3>

            <p className="mt-5 leading-7">

              Ask questions in natural language and receive
              accurate answers from uploaded documents.

            </p>

          </div>

          {/* Card 2 */}

          <div className="rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 p-8 text-white shadow-xl hover:-translate-y-2 transition">

            <h3 className="text-3xl font-bold">

              Multi Document

            </h3>

            <p className="mt-5 leading-7">

              Chat with multiple PDFs and DOCX files
              simultaneously from one workspace.

            </p>

          </div>

          {/* Card 3 */}

          <div className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-white shadow-xl hover:-translate-y-2 transition">

            <h3 className="text-3xl font-bold">

              Source Citation

            </h3>

            <p className="mt-5 leading-7">

              Every response includes document references
              for better trust and transparency.

            </p>

          </div>

          {/* Card 4 */}

          <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 p-8 text-white shadow-xl hover:-translate-y-2 transition">

            <h3 className="text-3xl font-bold">

              Chat History

            </h3>

            <p className="mt-5 leading-7">

              View previous conversations, organize
              discussions and continue anytime.

            </p>

          </div>

          {/* Card 5 */}

          <div className="rounded-3xl bg-gradient-to-br from-indigo-500 to-blue-700 p-8 text-white shadow-xl hover:-translate-y-2 transition">

            <h3 className="text-3xl font-bold">

              Secure Workspace

            </h3>

            <p className="mt-5 leading-7">

              Every conversation is protected with
              Corporate-grade security and access control.

            </p>

          </div>

          {/* Card 6 */}

          <div className="rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 p-8 text-white shadow-xl hover:-translate-y-2 transition">

            <h3 className="text-3xl font-bold">

              Instant Response

            </h3>

            <p className="mt-5 leading-7">

              Receive fast AI-generated responses with
              high-quality document understanding.

            </p>

          </div>

        </div>

      </section>

    </div>
  );
}