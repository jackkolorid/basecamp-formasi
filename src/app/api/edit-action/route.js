import dbConnect from "@/lib/mongoose";
import DataPemasukan from "@/models/DataPemasukan";
import DataPengeluaran from "@/models/DataPengeluaran";
import moment from "moment";

export async function PUT(req) {
	await dbConnect();

	const { _id, title, nominal, tanggal, type } = await req.json();
	const MESSEAGETYPE = type === "pengeluaran" ? "Pengeluaran" : "Pemasukan";

	if (!_id || !title || !nominal) {
		return new Response(JSON.stringify({ error: "Data tidak lengkap" }), {
			status: 400,
		});
	}

	const data = {
		title,
		nominal,
		tanggal: moment(tanggal).format("DDMMYYYY"),
	};

	try {
		const updateData = type === "pengeluaran" ? await DataPengeluaran.findByIdAndUpdate(_id, data, { new: true }) : await DataPemasukan.findByIdAndUpdate(_id, data, { new: true });

		if (!updateData) {
			return new Response(JSON.stringify({ error: `${MESSEAGETYPE} tidak ditemukan` }), { status: 404 });
		}

		return new Response(
			JSON.stringify({
				message: `${MESSEAGETYPE} berhasil diperbarui`,
				pengeluaran: updateData,
			}),
			{ status: 200 }
		);
	} catch (error) {
		return new Response(JSON.stringify({ error: `Gagal memperbarui ${MESSEAGETYPE}` }), { status: 500 });
	}
}
