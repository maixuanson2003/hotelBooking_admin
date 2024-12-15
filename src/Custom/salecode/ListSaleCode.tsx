"use client";
import { useEffect, useState } from "react";
import { GetAllSaleCode, CreateSaleCode } from "@/app/Api/ApiSaleCode";
import { Button } from "@/components/ui/button";
import SaleCodeFormModal from "./saleCodeForm";
export default function ListSaleCode() {
  const [saleCodes, setSaleCodes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [render, setRender] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllSaleCode();
      setSaleCodes(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllSaleCode();
      setSaleCodes(data);
    };
    fetchData();
  }, [render]);
  const handleAddSaleCode = async (newSaleCode: any) => {
    const data = await CreateSaleCode(newSaleCode);
    setRender(render + 1);
  };
  return (
    <div className="overflow-x-auto h-screen p-6">
      <div className="flex justify-between">
        {" "}
        <h1 className="text-3xl font-semibold mb-4">Quản lý user</h1>
        <Button onClick={() => setModalOpen(true)}>Thêm người dùng</Button>
      </div>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Image
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Title
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Description
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Discount (%)
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Code</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Date Start
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Date End
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {saleCodes.map((saleCode: any) => (
            <tr key={saleCode.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                {saleCode.id}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={saleCode.image}
                  alt={saleCode.title}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {saleCode.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {saleCode.description}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {saleCode.discountPercentage}%
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {saleCode.code}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {saleCode.dateStart}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {saleCode.dateEnd}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button className="text-blue-500 hover:underline mr-2">
                  Edit
                </button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SaleCodeFormModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddSaleCode}
      />
    </div>
  );
}
