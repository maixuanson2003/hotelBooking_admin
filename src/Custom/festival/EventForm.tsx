import React, { useEffect, useState } from "react";
import { GetAllCity } from "@/app/Api/ApiCity";
import { CreatEvent } from "@/app/Api/ApiEvent";
interface Event {
  id?: number;
  nameEvent: string;
  description: string;
  image: string;
  dateStart: string;
  dateEnd: string;
}

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddEventModal: React.FC<AddEventModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<Event>({
    nameEvent: "",
    description: "",
    image: "",
    dateStart: "",
    dateEnd: "",
  });
  const [idCity, setIdCity] = useState<number | null>(null); // Thành phố được chọn
  const [cities, setCities] = useState<any>([]); // Danh sách thành phố

  useEffect(() => {
    // Lấy danh sách thành phố từ API
    const fetchData = async () => {
      const data = await GetAllCity();
      setCities(data);
    };
    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIdCity(Number(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!idCity) {
      alert("Vui lòng chọn thành phố");
      return;
    }
    const data = await CreatEvent(idCity, formData);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Thêm Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nameEvent" className="block text-sm font-medium">
              Tên Event
            </label>
            <input
              type="text"
              id="nameEvent"
              name="nameEvent"
              value={formData.nameEvent}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium">
              Thành phố
            </label>
            <select
              id="city"
              value={idCity || ""}
              onChange={handleCityChange}
              className="w-full mt-1 p-2 border rounded"
              required
            >
              <option value="" disabled>
                Chọn thành phố
              </option>
              {cities.map((city: any) => (
                <option key={city.id} value={city.id}>
                  {city.nameCity}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium">
              Mô tả
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium">
              Link Hình Ảnh
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dateStart" className="block text-sm font-medium">
              Ngày Bắt Đầu
            </label>
            <input
              type="date"
              id="dateStart"
              name="dateStart"
              value={formData.dateStart}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dateEnd" className="block text-sm font-medium">
              Ngày Kết Thúc
            </label>
            <input
              type="date"
              id="dateEnd"
              name="dateEnd"
              value={formData.dateEnd}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
            >
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventModal;
