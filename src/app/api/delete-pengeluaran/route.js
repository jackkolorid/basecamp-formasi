import dbConnect from "@/lib/mongoose";
import DataPengeluaran from "@/models/DataPengeluaran";

export async function DELETE(req) {
	await dbConnect();

	const { _id } = await req.json();

	if (!_id) {
		return new Response(JSON.stringify({ error: "ID tidak disediakan" }), {
			status: 400,
		});
	}

	try {
		const deletedPengeluaran = await DataPengeluaran.findByIdAndDelete(_id);

		if (!deletedPengeluaran) {
			return new Response(JSON.stringify({ error: "Pengeluaran tidak ditemukan" }), { status: 404 });
		}

		return new Response(
			JSON.stringify({
				message: "Pengeluaran berhasil dihapus",
				pengeluaran: deletedPengeluaran,
			}),
			{ status: 200 }
		);
	} catch (error) {
		return new Response(JSON.stringify({ error: "Gagal menghapus pengeluaran" }), { status: 500 });
	}
}
