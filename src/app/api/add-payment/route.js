import dbConnect from "@/lib/mongoose";
import DataBulanan from "@/models/DataBulanan";

export async function POST(req) {
	await dbConnect();
	const { nominal, tanggal, user } = await req.json();

	if (!nominal || !tanggal || !user) {
		return new Response(JSON.stringify({ error: "Data tidak lengkap" }), {
			status: 400,
		});
	}

	try {
		const updatedDocument = await DataBulanan.findOneAndUpdate(
			{ tanggal: tanggal, "user.nama": user },
			{
				$inc: {
					"user.$.total_bayar": nominal,
				},
			},
			{ new: true }
		);

		if (!updatedDocument) {
			return new Response(JSON.stringify({ error: "Data tidak ditemukan" }), {
				status: 404,
			});
		}

		return new Response(
			JSON.stringify({
				message: `Pembayaran berhasil ditambahkan ke ${user} pada bulan ${tanggal}`,
				data: updatedDocument,
			}),
			{
				status: 200,
			}
		);
	} catch (error) {
		return new Response(JSON.stringify({ error: "Gagal menambah pembayaran" }), {
			status: 500,
		});
	}
}
