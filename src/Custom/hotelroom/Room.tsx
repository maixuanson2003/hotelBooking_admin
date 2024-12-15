"use client";
import { useState, useEffect } from "react";
import {
  GetAllHotelRoomByHotel,
  GetCreateHotelRoomForHotel,
} from "@/app/Api/ApiHotelRoom";
import { Button } from "@/components/ui/button";
import HotelFormModal from "./Form"; // Đảm bảo bạn đã cấu hình API đúng cách

export default function Room() {
  const [rooms, setRooms] = useState([]);
  const [render, setRender] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddHotel = async (newHotel: any) => {
    const params = window.location.search;
    const urlParams = new URLSearchParams(params);
    const id = urlParams.get("hotelId");
    const data = await GetCreateHotelRoomForHotel(id, newHotel);
    setRender(render + 1);
  };
  useEffect(() => {
    const params = window.location.search;
    const urlParams = new URLSearchParams(params);
    const id = urlParams.get("hotelId");

    const fetchData = async (hotelId: number) => {
      try {
        const data = await GetAllHotelRoomByHotel(hotelId);
        setRooms(data);
      } catch (error) {
        console.error("Error fetching hotel rooms:", error);
      }
    };

    if (id) fetchData(Number(id));
  }, []);
  useEffect(() => {
    const params = window.location.search;
    const urlParams = new URLSearchParams(params);
    const id = urlParams.get("hotelId");

    const fetchData = async (hotelId: number) => {
      try {
        const data = await GetAllHotelRoomByHotel(hotelId);
        setRooms(data);
      } catch (error) {
        console.error("Error fetching hotel rooms:", error);
      }
    };

    if (id) fetchData(Number(id));
  }, [render]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between">
          {" "}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Quản lý phòng
          </h1>
          <Button onClick={handleOpenModal}>Thêm phòng</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">Type Room</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Number of People</th>
                <th className="px-4 py-2 text-left">Price Per Night</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room: any) => (
                <tr key={room.id} className="border-t">
                  <td className="px-4 py-2">{room.typeRoom}</td>
                  <td className="px-4 py-2">{room.status}</td>
                  <td className="px-4 py-2">{room.numberPeople}</td>
                  <td className="px-4 py-2">${room.pricePerNight}</td>
                  <td className="px-4 py-2">
                    <img
                      src={room.image}
                      alt={room.typeRoom}
                      className="w-16 h-16 rounded object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">{room.amount}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => alert(`Edit Room: ${room.id}`)}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => alert(`Delete Room: ${room.id}`)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <HotelFormModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSubmit={handleAddHotel}
          />
        </div>
      </div>
    </div>
  );
}
