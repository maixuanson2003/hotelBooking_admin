"use server";
export async function GetTotalUser() {
  const res = await fetch(`http://localhost:8080/api/DashBoard/amountuser`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
}
