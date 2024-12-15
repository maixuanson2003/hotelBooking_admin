"use client";
import { useEffect, useState } from "react";
import { UpdateHotel } from "@/app/Api/ApiHotel";
import { GetHotelDetail } from "@/app/Api/ApiHotel";

export default function UpdateHotelForm() {
  const [hotelData, setHotelData] = useState<any>({
    name: "",
    address: "",
    starpoint: 0,
    desCription: "",
    hotelFacilityList: [{ nameHotelFacility: "", desCription: "" }],
    hotelPolicyDTOList: [
      {
        namePolicy: "",
        description: "",
        fee: 0,
        coditionalInfo: "",
        note: "",
        beforeDayAmount: 0,
      },
    ],
    hotelRoomDTOList: [
      {
        typeRoom: "",
        status: "",
        numberPeople: 0,
        pricePerNight: 0,
        image: "",
        amount: 0,
      },
    ],
    imageList: [""],
    bankaccountnumber: 0,
    totalRoom: 0,
    bankName: "",
    city: "",
    hotline: "",
    email: "",
  });
  const [idHotel, setIdHotel] = useState<any>();
  useEffect(() => {
    const params = window.location.search;
    const urlParams = new URLSearchParams(params);
    const id = urlParams.get("hotelId");
    const fetchData = async (id: number) => {
      const data = await GetHotelDetail(id);
      setHotelData(data);
    };
    setIdHotel(Number(id));
    fetchData(Number(id));
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setHotelData({ ...hotelData, [name]: value });
  };
  const handleArrayChange2 = (field: any, index: any, value: any) => {
    const updatedArray = [...hotelData[field]];
    updatedArray[index] = value;
    setHotelData({ ...hotelData, [field]: updatedArray });
  };

  const handleArrayChange = (field: any, index: any, key: any, value: any) => {
    const updatedArray = [...hotelData[field]];
    updatedArray[index][key] = value;
    setHotelData({ ...hotelData, [field]: updatedArray });
  };

  const addToArrayField = (field: any, defaultObject: any) => {
    setHotelData({
      ...hotelData,
      [field]: [...hotelData[field], defaultObject],
    });
  };

  const removeFromArrayField = (field: any, index: any) => {
    const updatedArray = [...hotelData[field]];
    updatedArray.splice(index, 1);
    setHotelData({ ...hotelData, [field]: updatedArray });
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    console.log(hotelData);

    const data = await UpdateHotel(idHotel, hotelData);
    window.location.href = "/hotel";
  };

  return (
    <div className="w-[80%] mx-auto p-8 bg-white shadow-xl rounded-lg border border-gray-200">
      <button
        onClick={() => (window.location.href = "/hotel")}
        type="button"
        className="text-blue-500 hover:text-blue-700"
      >
        Quay trở lại
      </button>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Cập nhật khách sạn
      </h1>
      <form onSubmit={handleUpdate} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Hotel Name
            </label>
            <input
              type="text"
              name="name"
              value={hotelData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              placeholder="Enter the hotel name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={hotelData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              placeholder="Enter the address"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Star Point
            </label>
            <select
              name="starpoint"
              value={hotelData.starpoint}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
            >
              <option value="" disabled>
                Select star rating
              </option>
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} Star{star > 1 && "s"}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="desCription"
              value={hotelData.desCription}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              placeholder="Enter hotel description"
            />
          </div>
        </div>

        {/* Hotel Facility List */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Tiện ích khách sạn
          </label>
          <div className="space-y-4">
            {hotelData.hotelFacilityList.map((facility: any, index: any) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <select
                  value={facility.nameHotelFacility}
                  onChange={(e) =>
                    handleArrayChange(
                      "hotelFacilityList",
                      index,
                      "nameHotelFacility",
                      e.target.value
                    )
                  }
                  className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                >
                  <option value="" disabled>
                    Select Facility
                  </option>
                  <option value="WiFi">WiFi</option>
                  <option value="Parking">Parking</option>
                  <option value="Pool">Swimming Pool</option>
                  <option value="Gym">Gym</option>
                  <option value="Spa">Spa</option>
                </select>

                <input
                  type="text"
                  placeholder="Facility Description"
                  value={facility.desCription || ""}
                  onChange={(e) =>
                    handleArrayChange(
                      "hotelFacilityList",
                      index,
                      "desCription",
                      e.target.value
                    )
                  }
                  className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                />
                <button
                  type="button"
                  onClick={() =>
                    removeFromArrayField("hotelFacilityList", index)
                  }
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                addToArrayField("hotelFacilityList", {
                  nameHotelFacility: "",
                  desCription: "",
                })
              }
              className="text-blue-500 hover:text-blue-700"
            >
              + Thêm
            </button>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Chính sách
          </label>
          <div className="space-y-4">
            {hotelData.hotelPolicyDTOList.map((policy: any, index: any) => (
              <div
                key={index}
                className="space-y-2 bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Policy Name
                  </label>
                  <input
                    type="text"
                    placeholder="Policy Name"
                    value={policy.namePolicy}
                    onChange={(e) =>
                      handleArrayChange(
                        "hotelPolicyDTOList",
                        index,
                        "namePolicy",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Description
                  </label>
                  <textarea
                    placeholder="Description"
                    value={policy.description}
                    onChange={(e) =>
                      handleArrayChange(
                        "hotelPolicyDTOList",
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Fee
                  </label>
                  <input
                    type="text"
                    placeholder="Fee"
                    value={policy.fee}
                    onChange={(e) =>
                      handleArrayChange(
                        "hotelPolicyDTOList",
                        index,
                        "fee",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Conditional Information
                  </label>
                  <input
                    type="text"
                    placeholder="Conditional Info"
                    value={policy.coditionalInfo}
                    onChange={(e) =>
                      handleArrayChange(
                        "hotelPolicyDTOList",
                        index,
                        "coditionalInfo",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Note
                  </label>
                  <textarea
                    placeholder="Note"
                    value={policy.note}
                    onChange={(e) =>
                      handleArrayChange(
                        "hotelPolicyDTOList",
                        index,
                        "note",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Before Day Amount
                  </label>
                  <input
                    type="number"
                    placeholder="Before Day Amount"
                    value={policy.beforeDayAmount}
                    onChange={(e) =>
                      handleArrayChange(
                        "hotelPolicyDTOList",
                        index,
                        "beforeDayAmount",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    removeFromArrayField("hotelPolicyDTOList", index)
                  }
                  className="text-red-500 hover:text-red-700 mt-2"
                >
                  Remove Policy
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                addToArrayField("hotelPolicyDTOList", {
                  namePolicy: "",
                  description: "",
                  fee: 0,
                  coditionalInfo: "",
                  note: "",
                  beforeDayAmount: 0,
                })
              }
              className="text-blue-500 hover:text-blue-700"
            >
              + Add Policy
            </button>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Hotel Rooms
          </label>
          <div className="space-y-4">
            {hotelData.hotelRoomDTOList.map((room: any, index: any) => (
              <div
                key={index}
                className="space-y-2 bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Room Type
                  </label>
                  <input
                    type="text"
                    placeholder="Type of Room"
                    value={room.typeRoom}
                    onChange={(e) =>
                      handleArrayChange(
                        "hotelRoomDTOList",
                        index,
                        "typeRoom",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Status
                  </label>
                  <select
                    value={room.status}
                    onChange={(e) =>
                      handleArrayChange(
                        "hotelRoomDTOList",
                        index,
                        "status",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  >
                    <option value="" disabled>
                      Select Status
                    </option>
                    <option value="CONPHONG">Còn phòng</option>
                    <option value="HETPHONG">Hết phòng</option>
                    <option value="Out of Service">Out of Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Number of People
                  </label>
                  <input
                    type="number"
                    placeholder="Number of People"
                    value={room.numberPeople}
                    onChange={(e) =>
                      handleArrayChange(
                        "hotelRoomDTOList",
                        index,
                        "numberPeople",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Price Per Night
                  </label>
                  <input
                    type="text"
                    placeholder="Price per Night"
                    value={room.pricePerNight}
                    onChange={(e) =>
                      handleArrayChange(
                        "hotelRoomDTOList",
                        index,
                        "pricePerNight",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Image
                  </label>
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={room.image}
                    onChange={(e) =>
                      handleArrayChange(
                        "hotelRoomDTOList",
                        index,
                        "image",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Number of Rooms Available
                  </label>
                  <input
                    type="number"
                    placeholder="Amount"
                    value={room.amount}
                    onChange={(e) =>
                      handleArrayChange(
                        "hotelRoomDTOList",
                        index,
                        "amount",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    removeFromArrayField("hotelRoomDTOList", index)
                  }
                  className="text-red-500 hover:text-red-700 mt-2"
                >
                  Remove Room
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                addToArrayField("hotelRoomDTOList", {
                  typeRoom: "",
                  status: "",
                  numberPeople: 0,
                  pricePerNight: 0,
                  image: "",
                  amount: 0,
                })
              }
              className="text-blue-500 hover:text-blue-700"
            >
              + Add Room
            </button>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Image List
          </label>
          <div className="space-y-4">
            {hotelData.imageList.map((image: string, index: number) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <input
                  type="text"
                  placeholder="Image URL"
                  value={image}
                  onChange={(e) =>
                    handleArrayChange2("imageList", index, e.target.value)
                  }
                  className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeFromArrayField("imageList", index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addToArrayField("imageList", "")}
              className="text-blue-500 hover:text-blue-700"
            >
              + Add Image
            </button>
          </div>
        </div>

        {/* Bank Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Bank Account Number
            </label>
            <input
              type="text"
              name="bankaccountnumber"
              value={hotelData.bankaccountnumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              placeholder="Enter bank account number"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Bank Name
            </label>
            <input
              type="text"
              name="bankName"
              value={hotelData.bankName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              placeholder="Enter bank name"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <input
              type="text"
              name="city"
              value={hotelData.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              placeholder="Enter city"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Hotline
            </label>
            <input
              type="text"
              name="hotline"
              value={hotelData.hotline}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              placeholder="Enter hotline number"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={hotelData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              placeholder="Enter email address"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            Update Hotel
          </button>
        </div>
      </form>
    </div>
  );
}
