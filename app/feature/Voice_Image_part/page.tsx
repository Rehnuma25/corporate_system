import {
  Mic,
  Bot,
  Volume2,
  MessageSquare,
  ArrowRight,
  ImageIcon,
  ScanSearch,
} from "lucide-react";

export default function VoiceImagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100 overflow-hidden">

      {/* Background Blur */}

      <div className="absolute top-10 left-10 h-56 w-56 rounded-full bg-pink-300/40 blur-3xl animate-pulse"></div>

      <div className="absolute right-16 top-24 h-64 w-64 rounded-full bg-cyan-300/40 blur-3xl animate-pulse"></div>

      {/* Voice Section */}

      <section className="relative max-w-7xl mx-auto px-10 py-20">

        <div className="grid grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">

              Voice

              <span className="text-pink-600">

                {" "}Assistant

              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              Talk naturally with the intelligence using 
              voice. Ask questions, receive intelligent answers,
              summarize documents and interact with corporatee
              knowledge without typing.

            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">

                 1) Real-Time Voice Chat

              </div>

              <div className="flex items-center gap-3">

                2) Speech To Text

              </div>

              <div className="flex items-center gap-3">

                3) Intelligence Generated Responses

              </div>

              <div className="flex items-center gap-3">

                 4) Natural Conversation

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <div className="rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 p-8 text-white">

                <h2 className="mt-6 text-3xl font-bold">

                  Voice Chat

                </h2>

                <p className="mt-4 text-pink-100">

                  Start a conversation using your voice and
                  receive instant responses.

                </p>

                <div className="mt-10 space-y-4">

                  <div className="rounded-2xl bg-white/20 p-4 flex items-center gap-3">

                    <Mic size={22} />

                    Listening...

                  </div>

                  <div className="rounded-2xl bg-white/20 p-4 flex items-center gap-3">

                    <Volume2 size={22} />

                    Speaking

                  </div>

                  <div className="rounded-2xl bg-white/20 p-4 flex items-center gap-3">

                    <MessageSquare size={22} />

                    Smart Conversation

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= Image Understanding ================= */}

      <section className="relative max-w-7xl mx-auto px-10 pb-20">

        <div className="grid grid-cols-2 gap-16 items-center">

          {/* Left Image Demo */}

          <div>

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white">

                <div className="flex items-center justify-between">

                </div>

                <h2 className="mt-6 text-3xl font-bold">

                  Intelligence Vision System

                </h2>

                <p className="mt-4 text-cyan-100">

                  Upload an image and let understand
                  objects, text and visual information.

                </p>

                <div className="mt-10 space-y-4">

                  <div className="rounded-2xl bg-white/20 p-4 flex justify-between">

                    <span>Objects Detected</span>

                    <span>12</span>

                  </div>

                  <div className="rounded-2xl bg-white/20 p-4 flex justify-between">

                    <span>Extracted Text</span>

                    <span>Ready</span>

                  </div>

                  <div className="rounded-2xl bg-white/20 p-4 flex justify-between">

                    <span>Confidence</span>

                    <span>98%</span>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <h2 className="mt-6 text-6xl font-extrabold leading-tight text-slate-900">

              Image

              <span className="text-cyan-600">

                {" "}Understanding

              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              Upload any image and automatically
              understands visual content. It can recognize
              objects, extract text, classify images and
              generate intelligent descriptions within
              seconds.

            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">

                1) Image Classification

              </div>

              <div className="flex items-center gap-3">

                2)Object Detection

              </div>

              <div className="flex items-center gap-3">

                3) OCR Text Extraction

              </div>

              <div className="flex items-center gap-3">

                4) Image Captioning

              </div>

              <div className="flex items-center gap-3">

                5) High Accuracy Analysis

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}