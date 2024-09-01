"use client";

import Link from "next/link";
import { CiViewList } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { TbCreditCardPay } from "react-icons/tb";
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
    icon: <TbCreditCardPay size={30} />,
  },
  {
    title: "Bayar",
    link: "/bayar",
    icon: <MdPayment size={30} />,
  },
];

const MenuBar = () => {
  return (
    <div className="absolute bottom-0 left-0 grid grid-cols-4 gap-3 items-center justify-between px-4 w-full rounded bg-gray-900">
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
