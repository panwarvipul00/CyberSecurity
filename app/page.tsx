export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-white px-6 py-16 text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
        Secure Your Infrastructure
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
        Manage Cloud Security, Red Team & VAPT issues with a modern,
        secure, and efficient platform.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="group bg-white border border-red-100 rounded-2xl p-8 shadow-md hover:shadow-red-200 transition">
          <div className="text-red-600 text-3xl font-bold mb-4">
            Cloud Security
          </div>
          <p className="text-gray-600">
            Identify, track, and resolve cloud vulnerabilities with ease.
          </p>
        </div>

        <div className="group bg-white border border-red-100 rounded-2xl p-8 shadow-md hover:shadow-red-200 transition">
          <div className="text-red-600 text-3xl font-bold mb-4">
            Red Team
          </div>
          <p className="text-gray-600">
            Simulate real-world attacks and strengthen defenses.
          </p>
        </div>

        <div className="group bg-white border border-red-100 rounded-2xl p-8 shadow-md hover:shadow-red-200 transition">
          <div className="text-red-600 text-3xl font-bold mb-4">
            VAPT
          </div>
          <p className="text-gray-600">
            Perform vulnerability assessment and penetration testing.
          </p>
        </div>
      </div>
    </main>
  );
}
