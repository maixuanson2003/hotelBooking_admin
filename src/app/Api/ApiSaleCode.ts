"use server";
export async function GetAllSaleCode() {
  const res = await fetch("http://localhost:8080/api/salecodes", {
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
export async function CreateSaleCode(datas: any) {
  const res = await fetch("http://localhost:8080/api/salecodes", {
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

  const data = await res.text();
  return data;
}
