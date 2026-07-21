export default function Workflow() {
  return (
  <section className="relative w-full overflow-hidden bg-white py-24">

  {/* Grid Background */}

  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
        linear-gradient(to right,#edf2f7 1px,transparent 1px),
        linear-gradient(to bottom,#edf2f7 1px,transparent 1px)
      `,
      backgroundSize: "64px 64px",
    }}
  />

  <div className="relative mx-auto w-full max-w-[1700px] px-10">

    {/* Title */}

    <h2 className="mb-20 text-center text-5xl font-bold text-slate-900">
      Corporate Intelligence Workflow
    </h2>

    <div className="relative h-[420px] w-full">

      {/* SVG Curve */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 420"
        preserveAspectRatio="none"
      >

        <path
          d="
          M120 170
          C220 170 260 240 390 240
          S560 170 700 170
          S820 330 980 300
          S1160 170 1300 170
          S1440 320 1520 320
          "
          fill="none"
          stroke="#3B82F6"
          strokeWidth="5"
          strokeLinecap="round"
        />

      </svg>

      {/* AI Search */}

      <div className="absolute left-[2%] top-[90px]">

        <div className="rounded-full bg-blue-100 px-10 py-5 shadow-xl">
          <span className="text-3xl font-bold text-blue-700">
            AI Search
          </span>
        </div>

      </div>
            {/* RAG Engine */}

      <div className="absolute left-[22%] top-[185px]">

        <div className="rounded-full bg-cyan-100 px-10 py-5 shadow-xl">

          <span className="text-3xl font-bold text-cyan-700">
            RAG Engine
          </span>

        </div>

      </div>

      {/* PDF Analysis */}

      <div className="absolute left-[45%] top-[110px]">

        <div className="rounded-full bg-indigo-100 px-10 py-5 shadow-xl">

          <span className="text-3xl font-bold text-indigo-700">
            PDF Analysis
          </span>

        </div>

      </div>

      {/* Voice AI */}

      <div className="absolute left-[67%] top-[250px]">

        <div className="rounded-full bg-purple-100 px-10 py-5 shadow-xl">

          <span className="text-3xl font-bold text-purple-700">
            Voice AI
          </span>

        </div>

      </div>
            {/* Image OCR */}

      <div className="absolute right-[13%] top-[95px]">

        <div className="rounded-full bg-pink-100 px-10 py-5 shadow-xl">

          <span className="text-3xl font-bold text-pink-700">
            Image OCR
          </span>

        </div>

      </div>

      {/* Secure AI */}

      <div className="absolute right-[2%] top-[305px]">

        <div className="rounded-full bg-green-100 px-10 py-5 shadow-xl">

          <span className="text-3xl font-bold text-green-700">
            Secure AI
          </span>

        </div>

      </div>

      {/* Right Glow */}

      <div className="absolute -right-40 bottom-0 h-[320px] w-[420px] rounded-full bg-cyan-200/40 blur-3xl" />

      {/* Left Glow */}

      <div className="absolute -left-32 top-10 h-[220px] w-[220px] rounded-full bg-blue-100/40 blur-3xl" />
          </div>

  </div>

</section>
  );
}