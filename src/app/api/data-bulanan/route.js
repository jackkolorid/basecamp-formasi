import { getDataBulananNew } from "@/data";
import dbConnect from "@/lib/mongoose";
import DataBulanan from "@/models/DataBulanan";
import DataPemasukan from "@/models/DataPemasukan";
import DataPengeluaran from "@/models/DataPengeluaran";
import hitungHutang from "@/utils/hitungHutang";
import moment from "moment";

export const dynamic = "force-dynamic";

export async function GET() {
	await dbConnect();
	const monthsNow = moment().format("MMYYYY");
	const findDataBulananNow = await DataBulanan.findOne({ tanggal: monthsNow });
	if (!findDataBulananNow) new DataBulanan(await getDataBulananNew()).save();

	const dataBulanan = await DataBulanan.find({});
	const dataPengeluaran = await DataPengeluaran.find({});
	const dataPemasukan = await DataPemasukan.find({});
	const uangMasuk = dataPemasukan
		.map((pengeluaran) => pengeluaran.nominal)
		.flat()
		.reduce((a, b) => a + b, 0);
	const uangKeluar = dataPengeluaran
		.map((pengeluaran) => pengeluaran.nominal)
		.flat()
		.reduce((a, b) => a + b, 0);
	const hitungDataBulan = dataBulanan
		.map((data) => data.user.map((user) => user.total_bayar))
		.flat()
		.reduce((a, b) => a + b, 0);
	const totalSaldo = hitungDataBulan + uangMasuk - uangKeluar;

	const listHutang = hitungHutang(dataBulanan);
	const listTagihan = dataBulanan.map((data) => data.pembayaran).flat();

	return Response.json({
		listTagihan,
		dataBulanan,
		dataPengeluaran,
		dataPemasukan,
		totalSaldo,
		listHutang,
	});
}
