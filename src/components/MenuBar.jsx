"use client";

import Link from "next/link";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaMoneyBillWave,
} from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

const links = [
  {
    title: "Home",
    link: "/",
    icon: <TiHome size={30} color="green" />,
  },
  {
    title: "Masukan",
    link: "/masukan",
    icon: <FaArrowTrendUp size={30} color="green" />,
  },
  {
    title: "Pengeluaran",
    link: "/pengeluaran",
    icon: <FaArrowTrendDown size={30} color="green" />,
  },
  {
    title: "Bayar",
    link: "/bayar",
    icon: <FaMoneyBillWave size={30} color="green" />,
  },
];

const MenuBar = () => {
  return (
    <div className="flex gap-3 items-center justify-between px-4 w-full rounded absolute left-0 bottom-0 bg-blue-950">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.link}
          className="p-2 flex gap-1 flex-col items-center justify-center"
        >
          {link.icon}
          <p className="text-sm">{link.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default MenuBar;
