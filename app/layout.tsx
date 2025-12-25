import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ApiSec | Issue Management",
  description: "Cybersecurity issue management platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white">
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            ApniSec
          </h1>

          <div className="flex gap-6 text-sm font-medium">
            <Link
              href="/login"
              className="hover:text-indigo-400 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="hover:text-purple-400 transition"
            >
              Register
            </Link>
          </div>
        </nav>

        <main className="pt-6">{children}</main>
      </body>
    </html>
  );
}
