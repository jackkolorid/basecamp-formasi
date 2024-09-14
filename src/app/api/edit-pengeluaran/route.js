import dbConnect from "@/lib/mongoose";
import DataPengeluaran from "@/models/DataPengeluaran";
import moment from "moment";

export async function PUT(req) {
	await dbConnect();

	const { _id, title, nominal, tanggal } = await req.json();

	if (!_id || !title || !nominal) {
		return new Response(JSON.stringify({ error: "Data tidak lengkap" }), {
			status: 400,
		});
	}

	try {
		const updatedPengeluaran = await DataPengeluaran.findByIdAndUpdate(
			_id,
			{
				title,
				nominal,
				tanggal: moment(tanggal).format("DDMMYYYY"),
			},
			{ new: true }
		);

		if (!updatedPengeluaran) {
			return new Response(JSON.stringify({ error: "Pengeluaran tidak ditemukan" }), { status: 404 });
		}

		return new Response(
			JSON.stringify({
				message: "Pengeluaran berhasil diperbarui",
				pengeluaran: updatedPengeluaran,
			}),
			{ status: 200 }
		);
	} catch (error) {
		return new Response(JSON.stringify({ error: "Gagal memperbarui pengeluaran" }), { status: 500 });
	}
}
