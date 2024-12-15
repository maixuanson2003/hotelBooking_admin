import Link from "next/link";
import {
  FaHome,
  FaUsers,
  FaHotel,
  FaBed,
  FaUmbrellaBeach,
  FaTag,
  FaEnvelope,
  FaClipboardList,
  FaSyncAlt,
  FaPuzzlePiece,
  FaRegClipboard,
} from "react-icons/fa"; // Đã thêm các biểu tượng mới

export default function SideBar() {
  return (
    <div className="w-64 bg-gray-800 text-white shadow-lg">
      <div className="p-4 text-center font-bold text-xl border-b-2 border-gray-700">
        TailAdmin
      </div>
      <ul className="mt-8 space-y-4">
        <li className="px-6 py-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
          <Link href="/" className="flex items-center space-x-3">
            <FaHome size={20} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
          <Link href="/hotel" className="flex items-center space-x-3">
            <FaHotel size={20} />
            <span>Hotel</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
          <Link href="/HotelRoom" className="flex items-center space-x-3">
            <FaBed size={20} />
            <span>Hotel Room</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
          <Link href="/festival" className="flex items-center space-x-3">
            <FaUmbrellaBeach size={20} />
            <span>Lễ hội</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
          <Link href="/user" className="flex items-center space-x-3">
            <FaUsers size={20} />
            <span>User</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
          <Link href="/facility" className="flex items-center space-x-3">
            <FaPuzzlePiece size={20} />
            <span>Loại Tiện ích</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
          <Link href="/policy" className="flex items-center space-x-3">
            <FaRegClipboard size={20} />
            <span>Loại Chính sách</span>
          </Link>
        </li>

        {/* Support Section */}
        <li className="px-6 py-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
          <Link href="/saleCode" className="flex items-center space-x-3">
            <FaTag size={20} />
            <span>Mã giảm giá</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
          <Link href="/inbox" className="flex items-center space-x-3">
            <FaEnvelope size={20} />
            <span>Inbox</span>
          </Link>
        </li>

        {/* Others */}
        <li className="px-6 py-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
          <Link href="/booking" className="flex items-center space-x-3">
            <FaClipboardList size={20} />
            <span>Đơn hàng</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
          <Link href="/bookingChange" className="flex items-center space-x-3">
            <FaSyncAlt size={20} />
            <span>Yêu cầu thay đổi</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
