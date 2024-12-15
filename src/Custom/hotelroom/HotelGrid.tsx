"use client";
import { useState, useEffect } from "react";
import { GetAllHotel } from "@/app/Api/ApiHotel"; // Đảm bảo bạn đã cấu hình API đúng cách

export default function HotelGrid() {
  const [hotels, setHotels] = useState<any[]>([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await GetAllHotel(); // Giả sử GetAllHotel là API trả về danh sách khách sạn
        setHotels(response); // Lưu danh sách khách sạn vào state
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Chọn 1 khách sạn để quản lý
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hotels?.map((hotel) => (
            <div
              key={hotel.id}
              onClick={() =>
                (window.location.href = `/roomofhotel?hotelId=${hotel.id}`)
              }
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <img
                src={hotel.imageList[0]}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {hotel.name}
                </h3>
                <p className="text-sm text-gray-500">{hotel.address}</p>
                <p className="text-sm text-gray-500">{hotel.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
