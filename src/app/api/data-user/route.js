import dbConnect from "@/lib/mongoose";
import DataUser from "@/models/DataUser";

export const dynamic = "force-dynamic";

export async function GET() {
	await dbConnect();
	const dataUser = await DataUser.find({});
	return Response.json(dataUser);
}

export async function POST(request) {
	await dbConnect();

	const body = await request.json();

	const newDataUser = new DataUser(body);
	await newDataUser.save();

	return Response.json(newDataUser, { status: 201 });
}
