import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		nama: { type: String, required: true },
	},
	{ versionKey: false }
);

const DataUser = mongoose.models.DataUser || mongoose.model("DataUser", UserSchema);

export default DataUser;
