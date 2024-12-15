import { useState } from "react";

interface SaleCodeFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SaleCode) => void;
}

interface SaleCode {
  id: number;
  discountPercentage: number;
  image: string;
  title: string;
  description: string;
  code: string;
  dateEnd: string;
  dateStart: string;
}

const SaleCodeFormModal: React.FC<SaleCodeFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<SaleCode>({
    id: 0,
    discountPercentage: 0,
    image: "",
    title: "",
    description: "",
    code: "",
    dateEnd: "",
    dateStart: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[60%] ">
        <h2 className="text-xl font-bold mb-4">Create New Sale Code</h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Discount Percentage */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="discountPercentage"
            >
              Discount Percentage
            </label>
            <input
              type="number"
              id="discountPercentage"
              name="discountPercentage"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.discountPercentage}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image */}
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

          {/* Code */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="code">
              Code
            </label>
            <input
              type="text"
              id="code"
              name="code"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.code}
              onChange={handleChange}
              required
            />
          </div>

          {/* Date Start */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="dateStart"
            >
              Start Date
            </label>
            <input
              type="date"
              id="dateStart"
              name="dateStart"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.dateStart}
              onChange={handleChange}
              required
            />
          </div>

          {/* Date End */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="dateEnd">
              End Date
            </label>
            <input
              type="date"
              id="dateEnd"
              name="dateEnd"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.dateEnd}
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

export default SaleCodeFormModal;
