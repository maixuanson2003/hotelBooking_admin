"use client";
import { useEffect, useState } from "react";
import { GetAllUser } from "@/app/Api/ApiUser";
import { CreateUser, DeleteUser } from "@/app/Api/ApiUser";
import { Button } from "@/components/ui/button";
import UserFormModal from "./userFormCreate";

export default function ListUser() {
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [render, setRender] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllUser();
      setData(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllUser();
      setData(data);
    };
    fetchData();
  }, [render]);
  const handleAddUser = async (newUser: any) => {
    const data = await CreateUser(newUser);
    setRender(render + 1);
  };
  const handleDeleteUser = async (id: number) => {
    await DeleteUser(id);
    setRender(render + 1);
  };
  return (
    <div className="overflow-x-auto h-screen p-6">
      <div className="flex justify-between">
        {" "}
        <h1 className="text-3xl font-semibold mb-4">Quản lý user</h1>
        <Button onClick={() => setModalOpen(true)}>Thêm người dùng</Button>
      </div>
      <table className="min-w-full border-collapse border border-gray-200 bg-white">
        <thead>
          <tr>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Full Name
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Username
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Phone
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Birthday
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Address
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Gender
            </th>

            <th className="border border-gray-200 px-4 py-2 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user: any, index: number) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="border border-gray-200 px-4 py-2">
                {user.fullName}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {user.username}
              </td>
              <td className="border border-gray-200 px-4 py-2">{user.phone}</td>
              <td className="border border-gray-200 px-4 py-2">{user.email}</td>
              <td className="border border-gray-200 px-4 py-2">
                {user.birthday}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {user.address}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {user.gender}
              </td>

              <td className="border border-gray-200 px-4 py-2">
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserFormModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddUser}
      />
    </div>
  );
}
