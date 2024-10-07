const data = [
	{
		_id: {
			$oid: "67038adf37ca9941452fa6da",
		},
		tanggal: "102024",
		pembayaran: [
			{
				title: "Listrik",
				nominal: 50000,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fda",
				},
			},
			{
				title: "WIFI",
				nominal: 45000,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fdb",
				},
			},
		],
		user: [
			{
				nama: "Hifny",
				total_bayar: 0,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fdc",
				},
			},
			{
				nama: "Rosi",
				total_bayar: 0,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fdd",
				},
			},
			{
				nama: "Mustainul",
				total_bayar: 0,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fde",
				},
			},
			{
				nama: "Fauzi",
				total_bayar: 0,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fdf",
				},
			},
			{
				nama: "Gufron",
				total_bayar: 0,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fe0",
				},
			},
		],
	},
	{
		_id: {
			$oid: "67038aaf14c5f3e7bed46fd9",
		},
		tanggal: "092024",
		pembayaran: [
			{
				title: "Listrik",
				nominal: 25000,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fda",
				},
			},
			{
				title: "WIFI",
				nominal: 45000,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fdb",
				},
			},
		],
		user: [
			{
				nama: "Hifny",
				total_bayar: 70000,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fdc",
				},
			},
			{
				nama: "Rosi",
				total_bayar: 70000,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fdd",
				},
			},
			{
				nama: "Mustainul",
				total_bayar: 70000,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fde",
				},
			},
			{
				nama: "Fauzi",
				total_bayar: 70000,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fdf",
				},
			},
			{
				nama: "Gufron",
				total_bayar: 70000,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fe0",
				},
			},
		],
	},
	{
		_id: {
			$oid: "67038aaf14c5f3e7bed46fd9",
		},
		tanggal: "112024",
		pembayaran: [
			{
				title: "Listrik",
				nominal: 25000,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fda",
				},
			},
			{
				title: "WIFI",
				nominal: 45000,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fdb",
				},
			},
		],
		user: [
			{
				nama: "Hifny",
				total_bayar: 70000,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fdc",
				},
			},
			{
				nama: "Rosi",
				total_bayar: 0,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fdd",
				},
			},
			{
				nama: "Mustainul",
				total_bayar: 70000,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fde",
				},
			},
			{
				nama: "Fauzi",
				total_bayar: 70000,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fdf",
				},
			},
			{
				nama: "Gufron",
				total_bayar: 70000,
				denda: 0,
				_id: {
					$oid: "67038aaf14c5f3e7bed46fe0",
				},
			},
		],
	},
];

// Fungsi untuk mendapatkan bulan yang belum dilunasi
const getUnpaidMonths = (data) => {
	return data
		.map((month) => {
			// Hitung total pembayaran untuk bulan ini
			const totalPayment = month.pembayaran.reduce((sum, payment) => sum + payment.nominal, 0);

			// Filter pengguna yang belum melunasi
			const unpaidUsers = month.user.filter((user) => user.total_bayar < totalPayment);

			// Jika ada pengguna yang belum melunasi, kembalikan bulan ini
			if (unpaidUsers.length > 0) {
				return {
					tanggal: month.tanggal,
					pembayaran: month.pembayaran,
					unpaidUsers: unpaidUsers,
				};
			}

			return null; 
		})
		.filter(Boolean);
};

// Memanggil fungsi dan menampilkan hasil
const unpaidMonths = getUnpaidMonths(data);
console.log(unpaidMonths);
