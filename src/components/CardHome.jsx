import { numberToIdr } from "@/utils/toIDR";
import { Fragment } from "react";

const CardHome = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data-bulanan`);
  const { totalSaldo } = await res.json();

  const data = [
    {
      title: "Total Saldo",
      desc: "Total Saldo yang tersedia",
      price: numberToIdr(totalSaldo),
    },
  ];

  return data.map((data, i) => (
    <Fragment key={i}>
      <Card title={data.title} desc={data.desc} price={data.price} />
    </Fragment>
  ));
};

const Card = (props) => {
  return (
    <div className="flex items-center justify-between border rounded-md p-4 w-full hover:bg-gray-900 cursor-pointer transition-all">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <p>{props.desc}</p>
      </div>
      <p className="text-lg font-semibold">{props.price}</p>
    </div>
  );
};

export default CardHome;
