import CardHutang from "@/components/CardHutang";
import { numberToIdr } from "@/utils/toIDR";

const data = [];
export default function Page() {
  return (
    <div className="h-full flex flex-col gap-2 p-6">
      {data.length > 0 ? (
        data.map((data, i) => (
          <CardHutang
            key={i}
            name={data.name}
            price={numberToIdr(data.nominal)}
          />
        ))
      ) : (
        <h1 className="text-center text-xl font-semibold h-full flex items-center justify-center">
          Tidak ada hutang...
        </h1>
      )}
    </div>
  );
}
