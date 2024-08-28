const fullMonth = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

const getDate = () => {
	const dateNow = new Date();
	const day = dateNow.getDate();
	const month = fullMonth[dateNow.getMonth()];
	const year = dateNow.getFullYear();
	return `${day} - ${month} - ${year}`;
};

export { getDate };
