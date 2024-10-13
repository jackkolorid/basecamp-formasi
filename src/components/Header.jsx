"use client";

import web from "@/lib/config";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [uri, setUri] = useState(null);

  useEffect(() => {
    setUri(window.origin);
  }, []);

  return (
    <div className="gap-3 items-center justify-between p-5 w-full rounded left-0 bottom-0 bg-gray-900 flex">
      <Link href="/" className="font-semibold text-lg">
        {web.title}
      </Link>
      <Link href={`${uri}/admin`} className="font-semibold text-lg">
        {moment().format("L")}
      </Link>
    </div>
  );
};

export default Header;
