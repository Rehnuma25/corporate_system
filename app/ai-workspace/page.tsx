export default function AIWorkspacePage() {
  return (
    <div>

      <h1 className="text-4xl font-bold text-black mb-6">
        Chat Workspace
      </h1>

      <div className="grid grid-cols-12 gap-6 h-[700px]">

        {/* Left Sidebar */}

        <div className="col-span-3 bg-white rounded-xl shadow p-4">

          <h2 className="font-bold text-xl mb-4">
            Chat History
          </h2>

          <div className="space-y-3">

            <div className="bg-slate-100 p-3 rounded-lg cursor-pointer">
              Deep Learning Notes
            </div>

            <div className="bg-slate-100 p-3 rounded-lg cursor-pointer">
              Research Summary
            </div>

            <div className="bg-slate-100 p-3 rounded-lg cursor-pointer">
              Security Analysis
            </div>

            <div className="bg-slate-100 p-3 rounded-lg cursor-pointer">
              PDF Question Answering
            </div>

          </div>

        </div>

        {/* Center Chat */}

        <div className="col-span-6 bg-white rounded-xl shadow flex flex-col">

          <div className="p-5 border-b">

            <h2 className="font-bold text-xl">
              System Intelligence
            </h2>

          </div>

          <div className="flex-1 p-5 space-y-5 overflow-y-auto">

            <div className="bg-slate-100 p-4 rounded-xl">
              Explain Deep Learning.
            </div>

            <div className="bg-blue-100 p-4 rounded-xl">
              Deep Learning is a subset of machine learning that uses
              multi-layer neural networks to learn complex patterns
              from large-scale datasets.
            </div>

            <div className="bg-slate-100 p-4 rounded-xl">
              What are its applications?
            </div>

            <div className="bg-blue-100 p-4 rounded-xl">
              Applications include Computer Vision, NLP, Medical Imaging,
              Autonomous Vehicles, Cybersecurity and Recommendation Systems.
            </div>

          </div>

          <div className="border-t p-4">

            <input
              type="text"
              placeholder="Ask a question..."
              className="w-full border rounded-lg p-3"
            />

          </div>

        </div>

        {/* Right Citation Panel */}

        <div className="col-span-3 bg-white rounded-xl shadow p-4">

          <h2 className="font-bold text-xl mb-4">
            Source Citations
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-100 p-3 rounded-lg">

              <h3 className="font-semibold">
                Deep learning
              </h3>

              <p className="text-sm text-gray-600">
                Meta AI Research
              </p>

            </div>

            <div className="bg-slate-100 p-3 rounded-lg">

              <h3 className="font-semibold">
                IEEE Reference
              </h3>

              <p className="text-sm text-gray-600">
                Deep Learning Survey
              </p>

            </div>

            <div className="bg-slate-100 p-3 rounded-lg">

              <h3 className="font-semibold">
                Uploaded PDF
              </h3>

              <p className="text-sm text-gray-600">
                research.pdf
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}