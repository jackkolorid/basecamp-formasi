import mongoose from "mongoose";

let isConnected = false; // Track the connection status

const connectDB = async () => {
	if (isConnected) {
		// Jika sudah terhubung, gunakan koneksi yang ada
		console.log("Menggunakan koneksi database yang sudah ada.");
		return;
	}

	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		isConnected = true; // Set flag koneksi ke true
		console.log("MongoDB Connected...");
	} catch (err) {
		console.error("ERROR : ", err.message);
		process.exit(1);
	}
};

export default connectDB;
