import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">

          {/* Logo */}

          <div>

            <div className="flex items-top gap-3">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                DIS
              </div>

              <div>

                <h2 className="text-white text-xl font-bold">
                  Document Intelligence System
                </h2>

                <p className="text-sm text-gray-400">
                  Corporate Management Platform
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-gray-400">
               AI-powered Corporate document intelligence platform
              with RAG, ChromaDB, Voice AI and Image Understanding.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Product
            </h3>

            <ul className="space-y-3">

              <li><Link href="/">AI Workspace</Link></li>

              <li><Link href="/">Knowledge Base</Link></li>

              <li><Link href="/">Analytics</Link></li>

              <li><Link href="/">Security</Link></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3">

              <li><Link href="/">About</Link></li>

              <li><Link href="/">Research</Link></li>

              <li><Link href="/">Careers</Link></li>

              <li><Link href="/">Contact</Link></li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3">

              <li><Link href="/">Documentation</Link></li>

              <li><Link href="/">API</Link></li>

              <li><Link href="/">Help Center</Link></li>

              <li><Link href="/">Community</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Contact
            </h3>

            <p>Email</p>

            <p className="text-blue-400">
              nadiaupoma@gmail.com
            </p>

            <div className="mt-6">

              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Get Started
              </button>

            </div>

          </div>

        </div>

        <hr className="my-10 border-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Document Intelligence Platform. All Rights Reserved.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">

            <Link href="/">Privacy</Link>

            <Link href="/">Terms</Link>

            <Link href="/">Cookies</Link>

          </div>

        </div>

      </div>

    </footer>
  );
}