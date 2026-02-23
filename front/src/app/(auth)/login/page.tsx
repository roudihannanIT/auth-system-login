"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);
      toast.success("welcome");
      router.push("/"); 
    } catch (error: any) {
      toast.error(error.response?.data?.message || "invalid data");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
        <h2 className="text-center text-3xl font-bold text-gray-900">login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 text-gray-800">
            <input
              type="email"
              placeholder="name@example.com"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="password*****"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 transition-colors"
          >
            login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600">
          no have account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
           create a new account
          </Link>
        </p>
      </div>
    </div>
  );
}