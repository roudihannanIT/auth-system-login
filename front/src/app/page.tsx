"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function HomePage() {
  const { user, logout, loading } = useAuth();

  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      {user ? (
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">welcome {user.name}! 👋</h1>
          <p className="text-gray-600">login successfully</p>
          <button
            onClick={logout}
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            login
          </button>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">Professional authentication system</h1>
          <p className="text-gray-600">Please log in to access the control panel</p>
          <div className="space-x-4">
            <Link href="/login" className="px-6 py-2 bg-blue-600 text-white rounded-md">
              login
            </Link>
            <Link href="/register" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md">
                new login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}