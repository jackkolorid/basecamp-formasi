import mongoose from "mongoose"; 

let isConnected = false;

const connectDB = async () => {
	if (isConnected) return; // Menggunakan koneksi database yang sudah ada.
	try {
		await mongoose.connect(process.env.MONGO_URI); // Koneksi ke MongoDB jika tidak ada
		isConnected = true;
	} catch (err) {
		console.error("ERROR : ", err.message);
		process.exit(1);
	}
};

export default connectDB;
