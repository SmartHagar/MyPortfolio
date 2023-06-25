/** @format */
"use client";
import { auth } from "@/services/baseURL";
import Cookies from "js-cookie";
const CekAuth = async () => {
  const token = Cookies.get("token");
  if (token) {
    try {
      const response = await auth({
        method: "post",
        url: `/cek-token`,
        headers: { Authorization: `Bearer ${token}` },
      });
      return true;
    } catch (error: any) {
      return false;
    }
  } else {
    console.log("Token tidak ada");
    return false;
  }
};

export default CekAuth;
