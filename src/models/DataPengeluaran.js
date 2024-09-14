import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

// Inisialisasi AutoIncrement
const AutoIncrement = AutoIncrementFactory(mongoose);

const DataPengeluaranSchema = new mongoose.Schema(
	{
		_id: { type: Number }, // Mengganti default _id dengan tipe Number
		title: { type: String, required: true },
		nominal: { type: Number, required: true },
		tanggal: { type: String, required: true },
	},
	{ versionKey: false }
);

// Menambahkan Auto Increment pada field _id
DataPengeluaranSchema.plugin(AutoIncrement, { inc_field: "_id" });

const DataPengeluaran = mongoose.models.DataPengeluaran || mongoose.model("DataPengeluaran", DataPengeluaranSchema);

export default DataPengeluaran;
