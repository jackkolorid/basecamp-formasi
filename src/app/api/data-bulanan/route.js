// app/api/example/route.js
import dbConnect from "@/lib/mongoose";
import DataBulanan from "@/models/DataBulanan";
import DataPengeluaran from "@/models/DataPengeluaran";
import hitungHutang from "@/utils/hitungHutang";

export async function GET() {
	await dbConnect();

	const dataBulanan = await DataBulanan.find({});
	const dataPengeluaran = await DataPengeluaran.find({});
	const totalSaldo =
		dataBulanan
			.map((data) => data.user.map((user) => user.total_bayar))
			.flat()
			.reduce((a, b) => a + b, 0) -
		dataPengeluaran
			.map((pengeluaran) => pengeluaran.nominal)
			.flat()
			.reduce((a, b) => a + b, 0);

	const listHutang = hitungHutang(dataBulanan);
	const listTagihan = dataBulanan.map((data) => data.pembayaran).flat();
	

	return Response.json(
		{
			listTagihan,
			dataBulanan,
			dataPengeluaran,
			totalSaldo,
			listHutang,
		},
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "no-store, max-age=0",
			},
		}
	);
}
