/** @format */
"use client";
import ButtonDefault from "@/components/button/ButtonDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useProject from "@/store/crud/Projects";
import { useEffect, useState } from "react";
import Form from "./Form";
import ModalDelete from "@/components/modal/ModalDelete";

const Project = () => {
  const { setProject, dtProject, removeData } = useProject();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const [showModal, setShowModal] = useState(false);
  const [dtEdit, setDtEdit] = useState(false);
  const [id, setId] = useState<number | string>();
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const fetchDataProject = async () => {
    const res = await setProject({
      page,
      limit,
      search: "",
    });
  };
  useEffect(() => {
    fetchDataProject();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  console.log({ dtProject });

  const setEdit = (row: any) => {
    setShowModal(true);
    setDtEdit(row);
  };
  // show dialog delete
  const setDelete = (id: any) => {
    setId(id);
    setShowDelete(true);
  };
  // menghapus data
  useEffect(() => {
    if (isDelete) {
      removeData(id);
      setIsDelete(false);
      setShowDelete(false);
    }

    return () => {
      setIsDelete(false);
    };
  }, [id, isDelete, removeData]);

  // table
  const headTable = [
    "No",
    "Nama",
    "Gambar",
    "Github",
    "Website",
    "Keterangan",
    "Aksi",
  ];
  const tableBodies = [
    "name",
    "image",
    "link_github",
    "link_website",
    "description",
  ];

  const handleTambah = () => {
    setShowModal(true);
    setDtEdit(false);
  };

  return (
    <div>
      {/* form */}
      <Form dtEdit={dtEdit} showModal={showModal} setShowModal={setShowModal} />
      <ModalDelete
        showDel={showDelete}
        setShowDel={setShowDelete}
        setIsDelete={setIsDelete}
      />
      <div className="m-4 flex justify-end">
        <ButtonDefault text="Tambah Project" onClick={handleTambah} />
      </div>
      <div className="overflow-auto">
        <TablesDefault
          headTable={headTable}
          tableBodies={tableBodies}
          dataTable={dtProject.data}
          page={page}
          limit={limit}
          setEdit={setEdit}
          setDelete={setDelete}
          ubah={true}
          hapus={true}
        />
      </div>
    </div>
  );
};

export default Project;
