"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Issue = {
  _id: string;
  title: string;
  description: string;
  type: string;
};

export default function Dashboard() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "cloud-security",
  });

  const router = useRouter();

  const loadIssues = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/issues", { credentials: "include" });
      const data = await res.json();
      setIssues(data);
    } catch {
      setError("Unable to load issues. Please login again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadIssues();
  }, []);

  const createIssue = async () => {
    if (!form.title || !form.description) return;
    setLoading(true);
    await fetch("/api/issues", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ title: "", description: "", type: "cloud-security" });
    loadIssues();
  };

  const deleteIssue = async (id: string) => {
    if (!confirm("Delete this issue?")) return;
    setLoading(true);
    await fetch(`/api/issues/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    loadIssues();
  };

  const logout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-wide">ApniSec Dashboard</h1>
          <button
            onClick={logout}
            className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
          >
            Logout
          </button>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl mb-10 space-y-4">
          <input
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Issue Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <textarea
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Description"
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <select
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="cloud-security">Cloud Security</option>
            <option value="red-team">Red Team Assessment</option>
            <option value="vapt">VAPT</option>
          </select>

          <button
            disabled={loading}
            onClick={createIssue}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition font-semibold tracking-wide disabled:opacity-50"
          >
            {loading ? "Processing..." : "Create Issue"}
          </button>
        </div>

        {error && <p className="text-red-400 text-center mb-6">{error}</p>}

        <div className="grid gap-4">
          {issues.map((issue) => (
            <div
              key={issue._id}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5 flex justify-between items-center shadow-lg hover:shadow-indigo-500/20 transition"
            >
              <div>
                <h3 className="text-lg font-semibold">{issue.title}</h3>
                <p className="text-sm text-gray-400 capitalize">{issue.type}</p>
              </div>

              <button
                disabled={loading}
                onClick={() => deleteIssue(issue._id)}
                className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500/20 transition disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
