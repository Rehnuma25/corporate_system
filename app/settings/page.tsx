export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-8">
        Settings
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            Profile Settings
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-100 p-4 rounded-xl">
              Admin/User/Manager Profile
            </div>

            <div className="bg-slate-100 p-4 rounded-xl">
              Email Preferences
            </div>

            <div className="bg-slate-100 p-4 rounded-xl">
              Notification Settings
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            System Configuration
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white/20 p-4 rounded-xl">
              AI Model
            </div>

            <div className="bg-white/20 p-4 rounded-xl">
              API Keys
            </div>

            <div className="bg-white/20 p-4 rounded-xl">
              Security Policy
            </div>

            <div className="bg-white/20 p-4 rounded-xl">
              Access Control/- Account Security
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}