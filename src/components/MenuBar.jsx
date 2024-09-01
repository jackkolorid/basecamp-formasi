"use client";

import Link from "next/link";
import { CiViewList } from "react-icons/ci";
import { FaMoneyBillTransfer, FaMoneyBillWave } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
const links = [
  {
    title: "Home",
    link: "/",
    icon: <IoHomeOutline size={30} />,
  },
  {
    title: "Data",
    link: "/data",
    icon: <CiViewList size={30} />,
  },
  {
    title: "Hutang",
    link: "/hutang",
    icon: <FaMoneyBillWave size={30} />,
  },
  {
    title: "Bayar",
    link: "/bayar",
    icon: <FaMoneyBillTransfer size={30} />,
  },
];

const MenuBar = () => {
  return (
    <div className="grid grid-cols-4 gap-3 items-center justify-between px-4 w-full rounded left-0 bottom-0 bg-gray-900">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.link}
          className="p-2 flex gap-1 flex-col items-center justify-center"
        >
          {link.icon}
          <p className="text-xs">{link.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default MenuBar;
