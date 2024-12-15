"use server";
export async function GetAllFacility() {
  const res = await fetch("http://localhost:8080/api/hotel-facilities/all", {
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
