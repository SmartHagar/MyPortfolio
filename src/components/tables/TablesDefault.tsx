/** @format */

import getProperty from "@/services/getProperty";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

type Props = {
  headTable: string[];
  dataTable: [];
  tableBodies: string[];
  setEdit: (data: any) => void;
  setDelete: (data: number | string) => void;
  limit: number;
  page: number;
  ubah: boolean;
  hapus: boolean;
};

const TablesDefault = (props: Props) => {
  const showNo = (index: number) => {
    let noUrut = (props.page - 1) * props.limit + index;
    return noUrut + 1;
  };
  return (
    <table className="w-full border-collapse text-left">
      <thead className="">
        <tr>
          {props.headTable &&
            props.headTable.map((row, index) => (
              <th key={index} scope="col" className={`px-6 py-4`}>
                {row}
              </th>
            ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100 ">
        {/* loop tr */}
        {props.dataTable &&
          props.dataTable.map((row, index) => {
            const { id } = row;
            return (
              <tr key={index} className="hover:bg-gray-50 hover:text-body">
                <td className="px-6 py-4 rounded-l-xl">{showNo(index)}</td>
                {/* loop td */}
                {props.tableBodies.map((column, index) => {
                  return (
                    <td key={index} className={`px-6 py-4 }`}>
                      {getProperty(row, column)}
                    </td>
                  );
                })}
                {/* aksi */}
                <td className="px-6 py-4 rounded-r-xl">
                  <div className="flex flex-row gap-2">
                    {props.ubah && (
                      <BsFillPencilFill
                        onClick={() => props.setEdit(row)}
                        size={20}
                        className="cursor-pointer hover:text-yellow-500"
                      />
                    )}
                    {props.hapus && (
                      <BsFillTrashFill
                        onClick={() => props.setDelete(id)}
                        size={20}
                        className="cursor-pointer hover:text-red-700"
                      />
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TablesDefault;
