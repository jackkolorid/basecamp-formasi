import { AutoIncrement } from "@/lib/mongoose";
import mongoose from "mongoose";

const DataPengeluaranSchema = new mongoose.Schema(
	{
		_id: { type: Number },
		title: { type: String, required: true },
		nominal: { type: Number, required: true },
		tanggal: { type: String, required: true },
	},
	{ versionKey: false }
);

DataPengeluaranSchema.plugin(AutoIncrement, { inc_field: "_id" });

const DataPengeluaran = mongoose.models.DataPengeluaran || mongoose.model("DataPengeluaran", DataPengeluaranSchema);

export default DataPengeluaran;
