"use client";
import { useState, useEffect } from "react";
import { GetAllHotel } from "@/app/Api/ApiHotel";
import { Button } from "@/components/ui/button";
import { DeleteHotelById } from "@/app/Api/ApiHotel";
export default function ListHotel() {
  const [hotels, setHotels] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    // Giả sử API trả về dữ liệu khách sạn
    const fetchHotels = async () => {
      const response = await GetAllHotel();
      setHotels(response);
    };

    fetchHotels();
  }, []);
  useEffect(() => {
    // Giả sử API trả về dữ liệu khách sạn
    const fetchHotels = async () => {
      const response = await GetAllHotel();
      setHotels(response);
    };

    fetchHotels();
  }, [render]);
  const handleDelete = async (id: number) => {
    const data = await DeleteHotelById(id);
    setRender(render + 1);
  };
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between">
        {" "}
        <h1 className="text-3xl font-semibold mb-4">Hotel Management</h1>
        <Button onClick={() => (window.location.href = "/hotelform")}>
          Thêm khách sạn
        </Button>
      </div>

      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border-b px-4 py-2">Hotel Name</th>
            <th className="border-b px-4 py-2">Address</th>
            <th className="border-b px-4 py-2">Star Points</th>
            <th className="border-b px-4 py-2">City</th>
            <th className="border-b px-4 py-2">Image</th>
            <th className="border-b px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel: any) => (
            <tr key={hotel.id}>
              <td className="border-b px-4 py-2 text-center">{hotel.name}</td>
              <td className="border-b px-4 py-2 text-center">
                {hotel.address}
              </td>
              <td className="border-b px-4 py-2 text-center">
                {hotel.starpoint}
              </td>
              <td className="border-b px-4 py-2 text-center">{hotel.city}</td>
              <td className="border-b px-4 py-2 text-center">
                <img className="w-14 h-14" src={hotel.imageList[0]} alt="" />
              </td>

              <td className="border-b px-4 py-2">
                <button
                  onClick={() =>
                    (window.location.href = `/hotelupdateform?hotelId=${hotel.id}`)
                  }
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>{" "}
                |
                <button
                  onClick={() => handleDelete(hotel.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
