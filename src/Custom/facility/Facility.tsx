"use client";
import { useEffect, useState } from "react";
import { GetAllFacility } from "@/app/Api/ApiFacility";
import { Button } from "@/components/ui/button";

const HotelFacilityList = () => {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi API lấy danh sách Hotel Facilities
    const fetchFacilities = async () => {
      try {
        const response = await GetAllFacility();
        setFacilities(response);
      } catch (error) {
        console.error("Error fetching hotel facilities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center">Đang tải danh sách tiện ích...</div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Danh sách Loại Tiện ích
        </h1>
        <Button>Thêm Loại Tiện ích</Button>
      </div>
      <div className="bg-white shadow-lg rounded-lg">
        <table className="table-auto w-full">
          <thead className="bg-gray-200 text-gray-600 text-sm uppercase font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Tên Tiện ích</th>
            </tr>
          </thead>
          <tbody>
            {facilities.map((facility: any) => (
              <tr key={facility.id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4 text-sm text-gray-700">
                  {facility.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {facility.nameHotelFacility}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelFacilityList;
