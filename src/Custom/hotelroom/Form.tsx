import { useState } from "react";

interface HotelFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const HotelFormModal: React.FC<HotelFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<any>({
    id: 1,
    typeRoom: "",
    status: "",
    numberPeople: 1,
    pricePerNight: 0,
    image: "",
    amount: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]:
        name === "numberPeople" || name === "pricePerNight" || name === "amount"
          ? Number(value)
          : value, // Convert số
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData); // Gửi dữ liệu lên cha
    onClose(); // Đóng modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[60%]">
        <h2 className="text-xl font-bold mb-4">Add New Room</h2>
        <form onSubmit={handleSubmit}>
          {/* Type Room */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="typeRoom"
            >
              Room Type
            </label>
            <input
              type="text"
              id="typeRoom"
              name="typeRoom"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.typeRoom}
              onChange={handleChange}
              required
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="CONPHONG">còn phòng</option>
              <option value="HETPHONG">Hết phòng</option>
            </select>
          </div>

          {/* Number of People */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="numberPeople"
            >
              Number of People
            </label>
            <input
              type="number"
              id="numberPeople"
              name="numberPeople"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.numberPeople}
              onChange={handleChange}
              required
            />
          </div>

          {/* Price Per Night */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="pricePerNight"
            >
              Price Per Night
            </label>
            <input
              type="number"
              id="pricePerNight"
              name="pricePerNight"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.pricePerNight}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="image">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="amount">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelFormModal;
