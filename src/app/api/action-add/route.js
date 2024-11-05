import dbConnect from "@/lib/mongoose";
import DataMasukan from "@/models/DataPemasukan";
import DataPengeluaran from "@/models/DataPengeluaran";
import moment from "moment";

export async function POST(req) {
	await dbConnect();
	const { type, title, nominal, tanggal } = await req.json();
	if (!title || !nominal) {
		return new Response(JSON.stringify({ error: "Data tidak lengkap" }), {
			status: 400,
		});
	}
	try {
		if (type === "pengeluaran") {
			const newPengeluaran = new DataPengeluaran({
				title,
				nominal,
				tanggal: moment(tanggal).format("DDMMYYYY"),
			});
			await newPengeluaran.save();
		} else {
			const newPemasukan = new DataMasukan({
				title,
				nominal,
				tanggal: moment(tanggal).format("DDMMYYYY"),
			});
			await newPemasukan.save();
		}
		return new Response(
			JSON.stringify({
				message: type === "pengeluaran" ? "Pengeluaran berhasil ditambahkan" : "Pemasukan berhasil ditambahkan",
			}),
			{
				status: 201,
			}
		);
	} catch (error) {
		return new Response(JSON.stringify({ error: type === "pengeluaran" ? "Gagal menambah pengeluaran" : "Gagal menambah pemasukan" }), {
			status: 500,
		});
	}
}
