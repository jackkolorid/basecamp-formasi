import CardHome from "@/components/CardHome";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Fragment } from "react";
import { IoArrowDownOutline } from "react-icons/io5";
// import { IoArrowUpOutline } from "react-icons/io5";
export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col p-6 overflow-hidden">
      <div className="flex flex-col gap-3 h-full">
        <CardHome />
        <h1 className="text-xl font-semibold my-t">Riwayat Terbaru</h1>
        <ScrollArea className="h-full w-full rounded-md border mb-[65px]">
          <div className="p-4">
            <table className="w-full">
              <tbody>
                {Array.from({ length: 50 }).map((_, i) => (
                  <Fragment key={i}>
                    <tr className="*:py-1 border-b *:text-center">
                      <td>
                        <IoArrowDownOutline color="red" />
                      </td>
                      <td>Gufron</td>
                      <td>Tagihan</td>
                      <td className="col-span-2">Rp 1.000.000</td>
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
