import { Fragment } from "react";

const data = [
  {
    title: "Uang Masuk",
    desc: "Catatan Uang Masuk",
    price: "Rp. 1.000.000",
  },
  {
    title: "Uang Keluar",
    desc: "Catatan Uang Keluar",
    price: "Rp. 1.000.000",
  },
  {
    title: "Saldo Tersisa",
    desc: "Catatan Saldo Tersisa",
    price: "Rp. 1.000.000",
  },
];

const CardHome = () => {
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
        <h1 className="text-xl font-semibold">{props.title}</h1>
        <p>{props.desc}</p>
      </div>
      <p className="text-xl font-semibold">{props.price}</p>
    </div>
  );
};

export default CardHome;
