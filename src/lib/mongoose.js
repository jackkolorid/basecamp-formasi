import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
	if (isConnected) {
		console.log("Menggunakan koneksi database yang sudah ada.");
		return;
	}

	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		isConnected = true;
		console.log("MongoDB Connected...");
	} catch (err) {
		console.error("ERROR : ", err.message);
		process.exit(1);
	}
};

export default connectDB;
