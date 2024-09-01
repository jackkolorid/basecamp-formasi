import mongoose from "mongoose";

const DataPengeluaranSchema = new mongoose.Schema({
  title: { type: String, required: true },
  nominal: { type: Number, required: true },
  tanggal: { type: String, required: true },
});

const DataPengeluaran = mongoose.models.DataPengeluaran || mongoose.model('DataPengeluaran', DataPengeluaranSchema);

export default  DataPengeluaran;
