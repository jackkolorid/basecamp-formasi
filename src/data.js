import hitungHutang from "./utils/hitungHutang";

const dataBulanan = [
	{
		tanggal: "Januari 2023",
		pembayaran: [
			{
				title: "Listrik",
				nominal: 25000,
			},
			{
				title: "WIFI",
				nominal: 0,
			},
		],
		user: [
			{
				nama: "Hifny",
				total_bayar: 25000,
			},
			{
				nama: "Gufron",
				total_bayar: 0,
			},
			{
				nama: "Rosi",
				total_bayar: 0,
			},
			{
				nama: "Mustain",
				total_bayar: 0,
			},
		],
	},
	{
		tanggal: "Februari 2023",
		pembayaran: [
			{
				title: "Listrik",
				nominal: 25000,
			},
			{
				title: "WIFI",
				nominal: 0,
			},
		],
		user: [
			{
				nama: "Hifny",
				total_bayar: 25000,
			},
			{
				nama: "Gufron",
				total_bayar: 0,
			},
			{
				nama: "Rosi",
				total_bayar: 0,
			},
		],
	},
];

const dataPengeluaran = [
	{
		title: "Listrik",
		nominal: 28000,
		tanggal: "11-12-2024",
	},
	{
		title: "Listrik",
		nominal: 0,
		tanggal: "11-12-2024",
	},
	{
		title: "Listrik",
		nominal: 0,
		tanggal: "11-12-2024",
	},
	{
		title: "Listrik",
		nominal: 0,
		tanggal: "11-12-2024",
	},
];

const totalSaldo =
	dataBulanan
		.map((data) => data.user.map((user) => user.total_bayar))
		.flat()
		.reduce((a, b) => a + b, 0) - dataPengeluaran.map((pengeluaran) => pengeluaran.nominal)
		.flat()
		.reduce((a, b) => a + b, 0);

const pengeluaran = dataBulanan.map((data) => data.pengeluaran).flat();

const totalHutang = hitungHutang(dataBulanan);

export { dataBulanan, pengeluaran, totalHutang, totalSaldo };
