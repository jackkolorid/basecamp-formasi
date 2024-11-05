import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { numberToIdr } from "@/utils/toIDR";
import moment from "moment";
import { Fragment } from "react";
import ActionTambahPengeluaran from "./components-admin/actionTambahPengeluaran";
import FormActionAdd from "./components-admin/formTambah";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data-bulanan`, {
    cache: "no-store",
  });
  const { dataPengeluaran, dataPemasukan } = await res.json();
  const PENGELUARAN = "Pengeluaran";
  const MASUKAN = "Masukan";
  return (
    <Tabs
      defaultValue={PENGELUARAN}
      className="h-full mt-2 flex flex-col overflow-hidden"
    >
      <TabsList className="*:w-full w-full">
        <TabsTrigger value={PENGELUARAN}>{PENGELUARAN}</TabsTrigger>
        <TabsTrigger value={MASUKAN}>{MASUKAN}</TabsTrigger>
      </TabsList>
      <TabsContent className="h-full overflow-hidden" value={PENGELUARAN}>
        <div className="flex flex-col gap-2 h-full overflow-hidden">
          <DataContent data={dataPengeluaran} />
          <FormActionAdd type={"pengeluaran"} />
        </div>
      </TabsContent>
      <TabsContent className="h-full overflow-hidden" value={MASUKAN}>
        <div className="flex flex-col gap-2 h-full overflow-hidden">
          <DataContent data={dataPemasukan} />
          <FormActionAdd type={"masukan"} />
        </div>
      </TabsContent>
    </Tabs>
  );
}

const DataContent = (props) => {
  return (
    <ScrollArea className="h-full w-full rounded-md border">
      <div className="p-4">
        <table className="w-full">
          <tbody>
            {props.data.reverse().map((data, i) => (
              <Fragment key={i}>
                <tr className="*:py-1 border-b">
                  <td className="text-center">{i + 1}.</td>
                  <td>{data.title}</td>
                  <td className="text-center">
                    {numberToIdr(data.nominal).replace(",00", "")}
                  </td>
                  <td className="text-center">
                    {moment(data.tanggal, "DDMMYYYY").format("DD/MM/YY")}
                  </td>
                  <td>
                    <ActionTambahPengeluaran
                      data={{
                        id: data._id,
                        title: data.title,
                        nominal: data.nominal,
                        tanggal: moment(data.tanggal, "DDMMYYYY").format(
                          "YYYY-MM-DD"
                        ),
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
  );
};
