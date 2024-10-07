import { ScrollArea } from "@/components/ui/scroll-area";
import { numberToIdr } from "@/utils/toIDR";
import moment from "moment";
import { Fragment } from "react";
import ActionTagihan from "../components-admin/actionTagihan";
import FormTagihan from "../components-admin/formTagihan";
export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data-bulanan`, {
    cache: "no-store",
  });
  const { dataBulanan } = await res.json();
  const filter = dataBulanan.filter((v) => {
    return v.tanggal == moment().format("MMYYYY");
  })[0].pembayaran;
  
  return (
    <div className="flex flex-col gap-3 h-full mb-3">
      <h1 className="text-lg font-semibold mt-2">List tagihan bulan ini :</h1>
      <ScrollArea className="h-full w-full rounded-md border">
        <div className="p-4">
          <table className="w-full">
            <tbody>
              {filter.map((data, i) => ( 
                <Fragment key={i}>
                  <tr className="*:py-1 border-b">
                    <td className="text-center">{i + 1}.</td>
                    <td>{data.title}</td>
                    <td className="text-center">
                      {numberToIdr(data.nominal).replace(",00", "")}
                    </td> 
                    <td>
                      <ActionTagihan
                        data={{
                          id: data._id,
                          title: data.title,
                          nominal: data.nominal, 
                        }}
                      />
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollArea>
      <FormTagihan />
    </div>
  );
}
