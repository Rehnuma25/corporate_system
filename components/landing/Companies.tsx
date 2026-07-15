export default function Companies() {
  const companies = [
    {
      name: "Microsoft",
      color: "from-blue-600 to-cyan-500",
    },
    {
      name: "Google",
      color: "from-red-500 to-yellow-400",
    },
    {
      name: "Amazon",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "IBM",
      color: "from-indigo-600 to-blue-500",
    },
    {
      name: "Oracle",
      color: "from-red-600 to-pink-500",
    },
    {
      name: "Cisco",
      color: "from-cyan-600 to-blue-600",
    },
    {
      name: "Intel",
      color: "from-sky-500 to-blue-700",
    },
    {
      name: "OpenAI",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            Trusted Worldwide
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Trusted by Leading Organizations
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Our System of Document Intelligence Platform is designed for
            modern organizations, research institutions, financial sectors,
            healthcare providers, and global enterprises.
          </p>

        </div>

        {/* Company Cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {companies.map((company) => (

            <div
              key={company.name}
              className="group bg-slate-50 rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

              <div className="p-8 flex flex-col items-center">

                {/* Logo */}

                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${company.color}
                  flex items-center justify-center text-white text-3xl font-bold
                  group-hover:rotate-6 transition-all duration-500`}
                >
                  {company.name.charAt(0)}
                </div>

                {/* Name */}

                <h3 className="mt-6 text-2xl font-bold text-slate-800">
                  {company.name}
                </h3>

                <p className="mt-2 text-gray-500 text-center text-sm">
                   Partner
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Stats */}

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-white p-8 text-center">

            <h3 className="text-5xl font-bold">
              500+
            </h3>

            <p className="mt-3 text-blue-100">
              Corporate Clients
            </p>

          </div>

          <div className="bg-gradient-to-r from-cyan-600 to-blue-500 rounded-3xl text-white p-8 text-center">

            <h3 className="text-5xl font-bold">
              50M+
            </h3>

            <p className="mt-3 text-cyan-100">
              Documents Processed
            </p>

          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-white p-8 text-center">

            <h3 className="text-5xl font-bold">
              99.9%
            </h3>

            <p className="mt-3 text-purple-100">
              Secure Availability
            </p>

          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-green-500 rounded-3xl text-white p-8 text-center">

            <h3 className="text-5xl font-bold">
              24/7
            </h3>

            <p className="mt-3 text-green-100">
              Intelligence Assistance
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}