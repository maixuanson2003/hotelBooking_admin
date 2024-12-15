"use client";
import { GetTotalUser } from "@/app/Api/ApiDashboard";
export default function Header() {
  return (
    <header className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-6">
      <div className="font-bold">Welcome to Admin Dashboard</div>
      <div className="flex items-center space-x-4">
        <span onClick={GetTotalUser}>Admin</span>
        <button className="bg-red-600 px-4 py-2 rounded text-white">
          Logout
        </button>
      </div>
    </header>
  );
}
