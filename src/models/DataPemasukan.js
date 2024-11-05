import mongoose from "mongoose";

const DataPemasukanSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		nominal: { type: Number, required: true },
		tanggal: { type: String, required: true },
	},
	{ versionKey: false }
);

const DataPemasukan = mongoose.models?.DataPemasukan || mongoose.model("DataPemasukan", DataPemasukanSchema);

export default DataPemasukan;
