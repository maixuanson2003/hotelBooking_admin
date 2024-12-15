"use server";
export async function GetAllUser() {
  const res = await fetch("http://localhost:8080/api/actors/all", {
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
export async function CreateUser(Data: any) {
  const res = await fetch("http://localhost:8080/api/actors/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify(Data),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}
export async function DeleteUser(id: number) {
  const res = await fetch(`http://localhost:8080/api/actors/id/${id}`, {
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
