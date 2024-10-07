import moment from "moment";
import DataUser from "./models/DataUser";

const dataUser = async () => {
	const data = await DataUser.find({});
	const mapping = data.map((user) => {
		return {
			nama: user.nama,
			total_bayar: user.total_bayar || 0,
			denda: 0,
		};
	});
	return mapping;
};

export async function getDataBulananNew() {
	const userData = await dataUser();
	return {
		tanggal: moment().format("MMYYYY"),
		pembayaran: [
			{
				title: "Listrik",
				nominal: 25000,
			},
			{
				title: "WIFI",
				nominal: 45000,
			},
		],
		user: userData,
	};
}
