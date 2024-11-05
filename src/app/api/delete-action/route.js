import dbConnect from "@/lib/mongoose";
import DataPemasukan from "@/models/DataPemasukan";
import DataPengeluaran from "@/models/DataPengeluaran";

export async function DELETE(req) {
	await dbConnect();

	const { _id, type } = await req.json();
	const MESSEAGETYPE = type === "pengeluaran" ? "Pengeluaran" : "Pemasukan";

	if (!_id) {
		return new Response(JSON.stringify({ error: "ID tidak disediakan" }), {
			status: 400,
		});
	}

	try {
		const deletedData = type === "pengeluaran" ? await DataPengeluaran.findByIdAndDelete(_id) : await DataPemasukan.findByIdAndDelete(_id);

		if (!deletedData) {
			return new Response(JSON.stringify({ error: `${MESSEAGETYPE} tidak ditemukan` }), { status: 404 });
		}

		return new Response(
			JSON.stringify({
				message: `${MESSEAGETYPE} berhasil dihapus`,
			}),
			{ status: 200 }
		);
	} catch (error) {
		return new Response(JSON.stringify({ error: `Gagal menghapus ${MESSEAGETYPE} ${error}` }), { status: 500 });
	}
}
