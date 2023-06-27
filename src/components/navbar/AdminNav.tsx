/** @format */

import Link from "next/link";

type Props = {};

const Menus = [
  {
    name: "Dashboard",
    link: "/admin",
  },
  {
    name: "Projects",
    link: "/admin/project",
  },
];

const AdminNav = (props: Props) => {
  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l bg-black">
      <a href="#">
        {/* <img className="w-auto h-7" src="https://merakiui.com/images/logo.svg" alt=""> */}
      </a>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs text-gray-500 uppercasetext-gray-400">
              Menu
            </label>

            {Menus.map((menu, index) => (
              <div key={index}>
                <Link
                  href={menu.link}
                  className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-gray-200  hover:bg-gray-800 hover:text-gray-200 "
                >
                  <span className="mx-2 text-sm font-medium">{menu.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AdminNav;
