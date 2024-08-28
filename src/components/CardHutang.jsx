const CardHutang = (props) => {
  return (
    <div className="flex items-center justify-between border rounded-md p-4 w-full hover:bg-gray-900 cursor-pointer transition-all">
      <h1 className="text-lg font-semibold">{props.name}</h1>
      <p className="text-lg font-semibold">{props.price}</p>
    </div>
  );
};

export default CardHutang;
