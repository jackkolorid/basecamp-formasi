import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { numberToIdr } from "@/utils/toIDR";
import moment from "moment";
import { Fragment } from "react";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data-bulanan`, {
    cache: "no-store",
  });
  const { dataBulanan } = await res.json();
  return (
    <main className="flex h-full w-full flex-col overflow-hidden">
      <div className="flex flex-col gap-3 h-full">
        <ScrollArea className="h-full w-full rounded-md">
          <div className="">
            <Accordion type="single" collapsible className="w-full">
              {dataBulanan.map((bulan, i) => (
                <Fragment key={i}>
                  <AccordionItem value={`item-${i + 1}`} className="w-full">
                    <AccordionTrigger>{moment(bulan.tanggal, "MMYYYY").format("MMMM YYYY")}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2">
                        {bulan.user.map((user, i) => (
                          <Fragment key={i}>
                            <Card
                              ifSome={
                                bulan.pembayaran.reduce(
                                  (a, b) => a + b.nominal,
                                  0
                                ) === user.total_bayar
                              }
                              name={user.nama}
                              price={
                                bulan.pembayaran.reduce(
                                  (a, b) => a + b.nominal,
                                  0
                                ) === user.total_bayar
                                  ? "Lunas"
                                  : `- ${numberToIdr(
                                      bulan.pembayaran.reduce(
                                        (a, b) => a + b.nominal,
                                        0
                                      ) - user.total_bayar
                                    )}`
                              }
                            />
                          </Fragment>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Fragment>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </div>
    </main>
  );
}

const Card = (props) => {
  return (
    <div
      className={`flex items-center justify-between rounded-md p-4 w-full hover:bg-gray-900 cursor-pointer transition-all border ${
        props.className
      } ${props.ifSome ? "border-green-700" : "border-red-700"}`}
    >
      <h1 className="text-lg font-semibold">{props.name}</h1>
      <p className="text-lg font-semibold">{props.price}</p>
    </div>
  );
};
