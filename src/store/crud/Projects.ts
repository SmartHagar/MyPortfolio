/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import Cookies from "js-cookie";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  setToken: () => void;
  dtProject: any;
  setProject: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  addData: (data: any) => Promise<{ status: string; data?: any; error?: any }>;
  removeData: (data: any) => void;
  updateData: (id: number | string, data: any) => void;
};

const useProject = create(
  devtools<Store>((set, get) => ({
    setToken: () => {
      const getToken = Cookies.get("token");
      return getToken;
    },
    dtProject: [],
    setProject: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await crud({
          method: "get",
          url: `/project`,
          headers: { Authorization: `Bearer ${get().setToken()}` },
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
    addData: async (row) => {
      let formData = new FormData();
      formData.append("name", row.name);
      formData.append("link_github", row.link_github);
      formData.append("link_website", row.link_website);
      formData.append("description", row.description);
      formData.append("image", row?.image[0].file);

      // memeriksa jika tidak ada image
      !row.image && (formData = row);
      try {
        const res = await crud({
          method: "post",
          url: `/project`,
          headers: {
            Authorization: `Bearer ${get().setToken()}`,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        set((prevState) => ({
          dtProject: {
            last_page: prevState.dtProject.last_page,
            current_page: prevState.dtProject.current_page,
            data: [res.data.data, ...prevState.dtProject.data],
          },
        }));
        return {
          status: "berhasil tambah",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    removeData: async (id) => {
      try {
        const res = await crud({
          method: "delete",
          url: `/project/${id}`,
          headers: { Authorization: `Bearer ${get().setToken()}` },
        });
        set((prevState) => ({
          dtProject: {
            last_page: prevState.dtProject.last_page,
            current_page: prevState.dtProject.current_page,
            data: prevState.dtProject.data.filter(
              (item: any) => item.id !== id
            ),
          },
        }));
        return {
          status: "berhasil hapus",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    updateData: async (id, row) => {
      let formData = new FormData();
      formData.append("name", row.name);
      formData.append("link_github", row.link_github);
      formData.append("link_website", row.link_website);
      formData.append("description", row.description);
      formData.append("image", row?.image[0].file);
      // memeriksa jika tidak ada image
      !row.image && (formData = row);
      try {
        const response = await crud({
          method: "post",
          url: `/project/${id}`,
          headers: { Authorization: `Bearer ${get().setToken()}` },
          data: formData,
          params: {
            _method: "PUT",
          },
        });
        set((prevState) => ({
          dtProject: {
            last_page: prevState.dtProject.last_page,
            current_page: prevState.dtProject.current_page,
            data: prevState.dtProject.data.map((item: any) => {
              if (item.id === id) {
                return {
                  ...item,
                  ...response.data.data,
                };
              } else {
                return item;
              }
            }),
          },
        }));
        return {
          status: "berhasil update",
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

export default useProject;
