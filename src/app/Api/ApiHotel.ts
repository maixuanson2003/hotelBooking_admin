"use server";
export async function GetAllHotel() {
  const res = await fetch("http://localhost:8080/api/hotels", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}
export async function CreatHotel(datas: any) {
  const res = await fetch("http://localhost:8080/api/hotels", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify(datas),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
}
export async function UpdateHotel(id: number, datas: any) {
  const res = await fetch(`http://localhost:8080/api/hotels/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify(datas),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
}
export async function DeleteHotelById(id: number) {
  const res = await fetch(`http://localhost:8080/api/hotels/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
}
export async function GetHotelDetail(id: number) {
  const res = await fetch(`http://localhost:8080/api/hotels/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log(data);

  return data;
}
