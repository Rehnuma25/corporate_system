export default function SecurityPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-slate-900 mb-8">
        Security Center
      </h1>

      {/* Top Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-3xl shadow-xl">
          <p className="text-sm">Threats Detected</p>
          <h2 className="text-5xl font-bold mt-2">14</h2>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-3xl shadow-xl">
          <p className="text-sm">Security Score</p>
          <h2 className="text-5xl font-bold mt-2">96%</h2>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6 rounded-3xl shadow-xl">
          <p className="text-sm">Active Users</p>
          <h2 className="text-5xl font-bold mt-2">324</h2>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-3xl shadow-xl">
          <p className="text-sm">Blocked Attacks</p>
          <h2 className="text-5xl font-bold mt-2">8</h2>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-3 gap-6">

        {/* Live Threat Timeline */}
        <div className="col-span-2 bg-white rounded-3xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-5">
            Live Threat Timeline
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between items-center border-l-4 border-red-500 bg-red-50 p-4 rounded-xl">
              <div>
                <p className="font-semibold">
                  Prompt Injection Attempt
                </p>
                <p className="text-gray-500 text-sm">
                  User: researcher01
                </p>
              </div>
              <span className="text-red-600 font-bold">
                HIGH
              </span>
            </div>

            <div className="flex justify-between items-center border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-xl">
              <div>
                <p className="font-semibold">
                  Suspicious Login
                </p>
                <p className="text-gray-500 text-sm">
                  IP: 192.168.1.22
                </p>
              </div>
              <span className="text-yellow-600 font-bold">
                MEDIUM
              </span>
            </div>

            <div className="flex justify-between items-center border-l-4 border-blue-500 bg-blue-50 p-4 rounded-xl">
              <div>
                <p className="font-semibold">
                  API Abuse Detected
                </p>
                <p className="text-gray-500 text-sm">
                  Rate limit exceeded
                </p>
              </div>
              <span className="text-blue-600 font-bold">
                INFO
              </span>
            </div>

          </div>
        </div>

        {/* Attack Sources */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-5">
            Attack Sources
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Bangladesh</span>
              <span className="text-red-400">42%</span>
            </div>

            <div className="flex justify-between">
              <span>India</span>
              <span className="text-yellow-400">27%</span>
            </div>

            <div className="flex justify-between">
              <span>USA</span>
              <span className="text-green-400">18%</span>
            </div>

            <div className="flex justify-between">
              <span>Germany</span>
              <span className="text-cyan-400">13%</span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6 mt-8">

        {/* Prompt Injection Logs */}
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-5">
            Prompt Injection Logs
          </h2>

          <div className="space-y-3">
            <div className="bg-red-50 p-3 rounded-xl">
              Ignore previous instructions...
            </div>

            <div className="bg-red-50 p-3 rounded-xl">
              Reveal system prompt...
            </div>

            <div className="bg-red-50 p-3 rounded-xl">
              Bypass security rules...
            </div>
          </div>
        </div>

        {/* Blocked Requests */}
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-5">
            Blocked Requests
          </h2>

          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th>User</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td>User 1</td>
                <td>Prompt Injection</td>
                <td className="text-red-600">Blocked</td>
              </tr>

              <tr className="border-b">
                <td>User 2</td>
                <td>API Abuse</td>
                <td className="text-red-600">Blocked</td>
              </tr>

              <tr>
                <td>User 3</td>
                <td>Unauthorized Query</td>
                <td className="text-red-600">Blocked</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}