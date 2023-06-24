/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { auth } from "@/services/baseURL";

// type data login
interface dataLogin {
  email: string;
  password: string;
}
interface Store {
  setToken: () => void;
  setLogin: (
    data: dataLogin
  ) => Promise<{ status: string; data?: any; error?: any }>;
  setCekToken: () => void;
}

const useLogin = create(
  devtools<Store>((set, get) => ({
    setToken: () => {
      const dtAuth = JSON.parse(localStorage.getItem("auth_admin") || "");
      const getToken = dtAuth?.token;
      return getToken;
    },
    setLogin: async (data) => {
      try {
        const response = await auth({
          method: "post",
          url: `/login`,
          data,
        });
        return {
          status: "success",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    setCekToken: async () => {
      try {
        const response = await auth({
          method: "post",
          url: `/cek-token`,
          headers: { Authorization: `Bearer ${get().setToken()}` },
        });
        set((state) => ({ ...state, dtTask: response.data.data }));
        return {
          status: "success",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
  }))
);

export default useLogin;
