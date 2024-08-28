import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const querySnapshot = await getDocs(collection(db, "rincian-pembayaran"));
		const paymentDetails = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
    
		return NextResponse.json(paymentDetails);
	} catch (error) {
		console.error("Error getting payment details: ", error);
		return NextResponse.json({ error: "Failed to fetch payment details" }, { status: 500 });
	}
}
