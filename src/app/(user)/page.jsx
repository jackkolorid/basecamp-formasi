import CardHome from "@/components/CardHome";
import { ScrollArea } from "@/components/ui/scroll-area";
import { numberToIdr } from "@/utils/toIDR";
import moment from "moment";
import { Fragment } from "react";
export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data-bulanan`, {
    cache: "no-store",
  });
  const { dataPengeluaran } = await res.json();
  return (
    <main className="flex h-full w-full flex-col p-6 overflow-hidden">
      <div className="flex flex-col gap-3 h-full">
        <CardHome />
        <h1 className="text-lg font-semibold mt-2">
          Riwayat Pemasukan & Pengeluaran
        </h1>
        <ScrollArea className="h-full w-full rounded-md border">
          <div className="p-4">
            <table className="w-full">
              <tbody>
                {dataPengeluaran.map((data, i) => (
                  <Fragment key={i}>
                    <tr className="*:py-1 border-b *:text-center">
                      <td>{i + 1}.</td>
                      <td>{data.title}</td>
                      <td>{numberToIdr(data.nominal)}</td>
                      <td className="col-span-2">
                        {moment(data.tanggal, "DDMMYYYY").format("DD/MM/YYYY")}
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollArea>
      </div>
    </main>
  );
}
