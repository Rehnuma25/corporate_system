import {
  ShieldCheck,
  Users,
  Settings,
  Database,
  ArrowRight,
} from "lucide-react";

export default function RoleManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-50 to-indigo-100">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-10 py-16">

        <div className="text-center">

          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full font-semibold">

            Role Management

          </div>

          <h1 className="mt-6 text-6xl font-extrabold text-slate-900">

            System Access

            <span className="text-cyan-600">

              {" "}Control

            </span>

          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600 max-w-4xl mx-auto">

            Our corporate  Intelligence System Platform provides secure
            role-based access control (RBAC). Different users
            receive different permissions based on their
            responsibilities to ensure maximum security and
            efficient collaboration.

          </p>

        </div>

      </section>

      {/* Admin Section */}

      <section className="max-w-7xl mx-auto px-10 pb-16">

        <div className="grid grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-700 font-semibold">

              Administrator Part

            </div>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">

              Admin Full Access

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Administrators have complete control over the
              Enterprise AI Platform. They can manage users,
              monitor activities, configure system settings,
              review security logs and control every feature
              available in the platform.

            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">

                <span>1) Manage all users and permissions</span>

              </div>

              <div className="flex items-center gap-3">

                <span>2) Access all enterprise documents</span>

              </div>

              <div className="flex items-center gap-3">

                <span>3) Configure Intelligence and security settings</span>

              </div>

              <div className="flex items-center gap-3">

                <span>4) Monitor all user activities</span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <div className="rounded-3xl bg-gradient-to-br from-red-400 to-pink-500 p-8 text-white">

                <h3 className="mt-6 text-3xl font-bold">

                  Admin Dashboard

                </h3>

                <p className="mt-4 text-red-100">

                  Complete control over users,
                  Corporate documents and Intelligence
                  infrastructure.

                </p>

                <div className="grid grid-cols-2 gap-5 mt-10">

                  <div className="rounded-2xl bg-white/20 p-5">

                    <h1 className="text-3xl font-bold">

                      248

                    </h1>

                    <p>

                      Users

                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/20 p-5">

                    <h1 className="text-3xl font-bold">

                      6,520

                    </h1>

                    <p>

                      Documents

                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/20 p-5">

                    <h1 className="text-3xl font-bold">

                      32

                    </h1>

                    <p>

                      Managers

                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/20 p-5">

                    <h1 className="text-3xl font-bold">

                      99%

                    </h1>

                    <p>

                      Security

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= Manager Section ================= */}

      <section className="max-w-7xl mx-auto px-10 pb-20">

        <div className="grid grid-cols-2 gap-14 items-center">

          {/* Left Demo */}

          <div>

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">

                <h2 className="mt-6 text-3xl font-bold">
                  Manager Workspace
                </h2>

                <p className="mt-4 text-blue-100">
                  Manage teams, approve documents and monitor
                  System performance.
                </p>

                <div className="mt-10 space-y-4">

                  <div className="rounded-xl bg-white/20 p-4 flex justify-between">
                    <span>Pending Documents</span>
                    <span className="font-bold">18</span>
                  </div>

                  <div className="rounded-xl bg-white/20 p-4 flex justify-between">
                    <span>Team Members</span>
                    <span className="font-bold">42</span>
                  </div>

                  <div className="rounded-xl bg-white/20 p-4 flex justify-between">
                    <span>Projects</span>
                    <span className="font-bold">12</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold">

              Manager part

            </div>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">

              Team Management

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Managers supervise team activities, approve
              corporate documents, monitor analytics and
              collaborate with employees. They have more
              permissions than regular users but cannot modify
              core system settings.

            </p>

            <div className="mt-8 space-y-4">

              <div className="flex gap-3">
                 1) Approve uploaded documents
              </div>

              <div className="flex gap-3">
                2) Manage team members
              </div>

              <div className="flex gap-3">
                3) View analytics reports
              </div>

              <div className="flex gap-3">
                4) Assign tasks to employees
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= User Section ================= */}

      <section className="max-w-7xl mx-auto px-10 pb-24">

        <div className="grid grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">

              User part

            </div>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">

              Personal Workspace

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Regular users can securely upload documents,
              chat with Intelligence system, organize conversations and manage
              their own workspace. Users cannot access
              administrator or manager features.

            </p>

            <div className="mt-8 space-y-4">

              <div>1) Upload Personal Documents</div>

              <div>2)  Chat & Ask Questions</div>

              <div>3) View Chat History</div>

              <div>4) Pin Important Conversations</div>

              <div>5) Delete Previous Chats</div>

              <div>6) Download AI Responses</div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="rounded-3xl bg-white shadow-2xl p-8">

              <div className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-white">

                <Users size={70} />

                <h2 className="mt-6 text-3xl font-bold">

                  User Dashboard

                </h2>

                <p className="mt-4 text-green-100">

                   personal workspace with document
                  management and conversation history.

                </p>

                <div className="mt-10 space-y-4">

                  <div className="rounded-xl bg-white/20 p-4 flex justify-between">

                    <span>My Documents</span>

                    <span>26</span>

                  </div>

                  <div className="rounded-xl bg-white/20 p-4 flex justify-between">

                    <span>Saved Chats</span>

                    <span>14</span>

                  </div>

                  <div className="rounded-xl bg-white/20 p-4 flex justify-between">

                    <span>Pinned Chats</span>

                    <span>5</span>

                  </div>

                  <div className="rounded-xl bg-white/20 p-4 flex justify-between">

                    <span>AI Requests</span>

                    <span>324</span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}