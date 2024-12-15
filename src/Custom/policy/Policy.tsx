"use client";
import { useEffect, useState } from "react";
import { GetAllPolicy } from "@/app/Api/ApiPolicy";
import { Button } from "@/components/ui/button";

const PolicyList = () => {
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi API
    const fetchPolicies = async () => {
      try {
        const response = await GetAllPolicy();
        setPolicies(response);
      } catch (error) {
        console.error("Error fetching policies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Đang tải...</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Danh sách Loại Chính sách
        </h1>
        <Button>Thêm Loại chính sách</Button>
      </div>
      <div className="bg-white shadow-lg rounded-lg">
        <table className="table-auto w-full">
          <thead className="bg-gray-200 text-gray-600 text-sm uppercase font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Tên Chính sách</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy: any) => (
              <tr key={policy.id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4 text-sm text-gray-700">{policy.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {policy.nameHotelPolicy}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PolicyList;
