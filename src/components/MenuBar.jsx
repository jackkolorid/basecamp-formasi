"use client";

import Link from "next/link";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaMoneyBillTransfer,
  FaMoneyBillWave,
} from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

const links = [
  {
    title: "Home",
    link: "/",
    icon: <TiHome size={30} />,
  },
  {
    title: "Masukan",
    link: "/masukan",
    icon: <FaArrowTrendUp size={30} />,
  },
  {
    title: "Pengeluaran",
    link: "/pengeluaran",
    icon: <FaArrowTrendDown size={30} />,
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
    <div className="grid grid-cols-5 gap-3 items-center justify-between px-4 w-full rounded left-0 bottom-0 bg-gray-900">
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
