import { ScrollArea } from "@/components/ui/scroll-area";
import { numberToIdr } from "@/utils/toIDR";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const dataTable = [
  {
    title: "Listrik",
    nominal: 25000,
  },
  {
    title: "WIFI",
    nominal: 0,
  },
];

export default async function Page() {
  let detailTagihan = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/detail-tagihan`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    detailTagihan = await res.json();
  } catch (error) {
    console.error("Error fetching payment details:", error);
  }

  return (
    <ScrollArea className="h-full w-full rounded-md border">
      <div className="p-4">
        <div className="h-full flex flex-col gap-2 items-center justify-center p-6">
          <h1 className="text-xl font-semibold">Tagihan yang harus dibayar bulan ini</h1>
          <table className="w-[80%] border-collapse mb-4">
            <tbody>
              {detailTagihan.map((data, i) => (
                <tr key={i} className="*:border *:text-center *:py-1">
                  <td>{Object.keys(data)[1]}</td>
                  <td>{numberToIdr(Object.values(data)[1])}</td>
                </tr>
              ))}
              <tr className="*:border *:text-center *:py-1">
                <td>Total</td>
                <td>
                  {numberToIdr(
                    detailTagihan.reduce(
                      (sum, item) =>
                        sum +
                        Object.values(item)
                          .slice(1)
                          .reduce((a, b) => a + b, 0),
                      0
                    )
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <h1 className="text-xl font-semibold">Untuk Pembayaran Online</h1>
          <Image
            src="/qris.png"
            width={200}
            height={200}
            className="w-[60%] mb-4"
            alt="QRIS"
          />
          <h1 className="text-xl font-semibold">Untuk Pembayaran Offline</h1>
          <div className="flex gap-2 mb-4 p-2 items-center justify-center w-full">
            <p>Hubungi No Berikut : </p>
            <Link
              href="https://wa.me/6285655207366"
              target="_blank"
              className="text-lg font-semibold flex gap-2 items-center justify-center rounded-md bg-green-600 px-4 py-2"
            >
              <FaWhatsapp size={20} />
              <p>Bayar Sekarang</p>
            </Link>
          </div>

          <p className="border rounded-md p-2 text-center">
            Jika sudah melakukan pembayaran harap konfirmasi ke whastapp di
            atas!
          </p>

          <p className="border rounded-md p-2 text-center">
            Catatan : Waktu liburan/tidak ada di asrama tetap wajib melakukan
            pembayaran!
          </p>
        </div>
      </div>
    </ScrollArea>
  );
}
