function hitungHutang(dataBulanan) {
	const hutangMap = {};

	dataBulanan.forEach(bulan => {
		const totalTagihan = bulan.pembayaran.reduce((total, pembayaran) => {
			return total + pembayaran.nominal;
		}, 0);
    
		bulan.user.forEach(user => {
			const totalHutang = totalTagihan - user.total_bayar;

			if (hutangMap[user.nama]) {
				hutangMap[user.nama] += totalHutang;
			} else {
				hutangMap[user.nama] = totalHutang;
			}
		});
	});
  
	const hutangs = Object.keys(hutangMap).map(nama => ({
		nama: nama,
		nominal: hutangMap[nama] > 0 ? hutangMap[nama] : 0,
	}));

	return hutangs;
}

export default hitungHutang