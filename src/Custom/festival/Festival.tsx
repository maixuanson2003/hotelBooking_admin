"use client";
import { useEffect, useState } from "react";
import { GetAllEvent } from "@/app/Api/ApiEvent";
import { Button } from "@/components/ui/button";
import AddEventModal from "./EventForm";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [render, setRender] = useState(0);

  useEffect(() => {
    // Gọi API lấy danh sách Events
    const fetchEvents = async () => {
      try {
        const response = await GetAllEvent();

        setEvents(response);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  useEffect(() => {
    // Gọi API lấy danh sách Events
    const fetchEvents = async () => {
      try {
        const response = await GetAllEvent();

        setEvents(response);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [render]);
  const hanldeClose = () => {
    setIsModal(false);
    setRender(render + 1);
  };

  if (loading) {
    return <div className="p-8 text-center">Đang tải danh sách sự kiện...</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Danh sách Sự kiện
        </h1>
        <Button onClick={() => setIsModal(true)}>Thêm sự kiện</Button>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="bg-gray-200 text-gray-600 text-sm uppercase font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Tên sự kiện</th>
              <th className="px-6 py-3 text-left">Mô tả</th>
              <th className="px-6 py-3 text-left">Hình ảnh</th>
              <th className="px-6 py-3 text-left">Ngày bắt đầu</th>
              <th className="px-6 py-3 text-left">Ngày kết thúc</th>
              <th className="px-6 py-3 text-left">action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event: any) => (
              <tr key={event.id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4 text-sm text-gray-700">{event.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {event.nameEvent}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {event.description}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <img
                    src={event.image}
                    alt={event.nameEvent}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {event.dateStart}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {event.dateEnd}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <button className="text-blue-500 hover:underline mr-4">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddEventModal isOpen={isModal} onClose={hanldeClose} />
      </div>
    </div>
  );
};

export default EventList;
