export default function GovernancePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Governance Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-green-100 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-green-700">
            Fairness
          </h3>
          <p>Bias Monitoring Active</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-blue-700">
            Transparency
          </h3>
          <p>Explainable AI Enabled</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-yellow-700">
            Data Security
          </h3>
          <p>Encrypted Storage</p>
        </div>

        <div className="bg-red-100 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-red-700">
            Privacy
          </h3>
          <p>PII Protection Enabled</p>
        </div>

        <div className="bg-blue-300 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-cyan-700">
            Human Oversight
          </h3>
          <p>Manual Review Active</p>
        </div>

        <div className="bg-purple-100 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-purple-700">
            Compliance
          </h3>
          <p>GDPR & ISO Ready</p>
        </div>

      </div>
    </div>
  );
}