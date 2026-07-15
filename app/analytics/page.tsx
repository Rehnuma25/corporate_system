export default function AnalyticsPage() {
  return (
    <div className="space-y-8">

      <h1 className="text-5xl font-bold text-slate-900">
        Analytics Dashboard
      </h1>

      {/* Query Trend */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6">
          AI Query Trends
        </h2>

        <div className="h-80 flex items-end gap-4 px-4">
          {[120, 180, 220, 350, 420, 510, 460].map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div
                className="w-full rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400"
                style={{ height: `${v / 2}px` }}
              />
              <span className="mt-2 text-sm font-medium">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 1 */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* User Activity */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            User Activity
          </h2>

          <div className="space-y-5">
            {[
              ["User 1", 90],
              ["User 2", 70],
              ["User 3", 95],
              ["User 4", 50],
              ["User 5", 80],
            ].map(([user, value]) => (
              <div key={user}>
                <div className="flex justify-between mb-1">
                  <span>{user}</span>
                  <span>{value}%</span>
                </div>

                <div className="h-4 bg-slate-200 rounded-full">
                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Query Distribution */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Query Distribution
          </h2>

          <div className="flex justify-center items-center h-72">
            <div className="relative w-56 h-56 rounded-full bg-[conic-gradient(#2563eb_0deg_144deg,#8b5cf6_144deg_252deg,#10b981_252deg_324deg,#f59e0b_324deg_360deg)]">
              <div className="absolute inset-10 bg-white rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded" />
              Research
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded" />
              Security
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded" />
              Documents
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded" />
              Analytics
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Usage */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6">
          Monthly Platform Usage
        </h2>

        <div className="flex items-end gap-4 h-80">
          {[400, 550, 700, 900, 1100, 1350].map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div
                className="w-full rounded-t-xl bg-gradient-to-t from-emerald-600 to-cyan-400"
                style={{ height: `${v / 5}px` }}
              />

              <span className="mt-2 font-medium">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* Top Uploaded Documents */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Top Uploaded Documents
          </h2>

          <div className="space-y-4">
            {[
              "Research_Paper.pdf",
              "AI_Governance.docx",
              "Security_Report.pdf",
              "Threat_Analysis.pdf",
              "Final_Project.docx",
            ].map((doc, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 rounded-xl bg-slate-100"
              >
                <span className="font-medium">{doc}</span>

                <span className="text-blue-600 font-bold">
                  {120 - i * 15} Views
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Most Active Users */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Most Active Users
          </h2>

          <div className="space-y-4">
            {[
              ["User 1", "342 Queries"],
              ["User 2", "290 Queries"],
              ["User 3", "255 Queries"],
              ["User 4", "214 Queries"],
              ["User 5", "180 Queries"],
            ].map(([user, queries]) => (
              <div
                key={user}
                className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50"
              >
                <span className="font-semibold">
                  {user}
                </span>

                <span className="text-cyan-700 font-bold">
                  {queries}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Events Timeline */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-8">
          Security Events Timeline
        </h2>

        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-red-500" />
            <div>
              <p className="font-semibold">
                Prompt Injection Attempt Blocked
              </p>
              <p className="text-slate-500 text-sm">
                Today • 09:45 AM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-yellow-500" />
            <div>
              <p className="font-semibold">
                Suspicious Login Detected
              </p>
              <p className="text-slate-500 text-sm">
                Today • 08:20 AM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-blue-500" />
            <div>
              <p className="font-semibold">
                New Document Embedded
              </p>
              <p className="text-slate-500 text-sm">
                Yesterday • 06:30 PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-green-500" />
            <div>
              <p className="font-semibold">
                Security Scan Completed
              </p>
              <p className="text-slate-500 text-sm">
                Yesterday • 03:10 PM
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}