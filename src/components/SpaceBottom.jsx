"use client";

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
    link: "/",
    icon: <CiViewList size={30} />,
  },
  {
    title: "Hutang",
    link: "/",
    icon: <TbCreditCardPay size={30} />,
  },
  {
    title: "Bayar",
    link: "/",
    icon: <MdPayment size={30} />,
  },
];

const SpaceBottom = () => {
  return (
    <div
      className={`grid grid-cols-4 gap-3 items-center justify-between px-4  rounded bg-gray-900 opacity-0`}
    >
      {links.map((link, i) => (
        <h1
          key={i}
          className="p-2 flex gap-1 flex-col items-center justify-center"
        >
          {link.icon}
          <p className="text-xs">{link.title}</p>
        </h1>
      ))}
    </div>
  );
};

export default SpaceBottom;
