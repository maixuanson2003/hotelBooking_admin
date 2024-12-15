"use server";
import { cookies } from "next/headers";
export async function signIns(bodyRequest: any) {
  const cookieStore = await cookies();
  const res = await fetch(`http://localhost:8080/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    cache: "no-store",
    body: JSON.stringify(bodyRequest),
  });

  const statusCode = res.status;
  const data = await res.json();
  cookieStore.set("token", data.token);
  return { data, statusCode };
}
