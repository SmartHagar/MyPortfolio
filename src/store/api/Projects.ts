/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtProject: any;
  setProject: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useProjectApi = create(
  devtools<Store>((set, get) => ({
    dtProject: [],
    setProject: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/project`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtProject: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default useProjectApi;
