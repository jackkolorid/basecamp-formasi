"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CiViewList } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { TbCreditCardPay } from "react-icons/tb";
const linksUser = [
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
const linksAdmin = [
  {
    title: "Home",
    link: "/admin",
    icon: <IoHomeOutline size={30} />,
  },
  {
    title: "User",
    link: "/admin/data-user",
    icon: <CiViewList size={30} />,
  },
  {
    title: "Pembayaran",
    link: "/admin/data-pembayaran",
    icon: <TbCreditCardPay size={30} />,
  },
  {
    title: "Tagihan",
    link: "/admin/tagihan",
    icon: <MdPayment size={30} />,
  },
];

const MenuBar = () => {
  const [size, setSize] = useState(null);
  const [uri, setUri] = useState(null);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /iPhone|iPad|Android|Windows Phone/i.test(userAgent);

    if (isMobile) {
      setSize("w-screen");
    } else {
      setSize("w-[32rem]");
    }
  }, []);

  useEffect(() => {
    setUri(window.location.href); 
  }, [uri]);

  return (
    size && (
      <div
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2  grid grid-cols-4 gap-3 items-center justify-between px-4 ${size} rounded bg-gray-900`}
      >
        {uri.includes("admin")
          ? linksAdmin.map((link, i) => (
              <Link
                key={i}
                href={link.link}
                className="p-2 flex gap-1 flex-col items-center justify-center"
              >
                {link.icon}
                <p className="text-xs">{link.title}</p>
              </Link>
            ))
          : linksUser.map((link, i) => (
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
    )
  );
};

export default MenuBar;
