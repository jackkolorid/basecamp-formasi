import dbConnect from "@/lib/mongoose";
import DataPengeluaran from "@/models/DataPengeluaran";
import moment from "moment";

export async function POST(req) {
	await dbConnect();
	const { title, nominal, tanggal } = await req.json();
	if (!title || !nominal) {
		return new Response(JSON.stringify({ error: "Data tidak lengkap" }), {
			status: 400,
		});
	}
	try {
		const newPengeluaran = new DataPengeluaran({
			title,
			nominal,
			tanggal: moment(tanggal).format("DDMMYYYY"),
		});
		await newPengeluaran.save();
		return new Response(
			JSON.stringify({
				message: "Pengeluaran berhasil ditambahkan",
				pengeluaran: newPengeluaran,
			}),
			{
				status: 201,
			}
		);
	} catch (error) {
		return new Response(JSON.stringify({ error: "Gagal menambah pengeluaran" }), {
			status: 500,
		});
	}
}
