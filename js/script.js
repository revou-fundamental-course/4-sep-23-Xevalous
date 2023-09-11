function hitung(tipe) {
	let resetButton, formInput, jawaban, p;
	switch (tipe) {
		case 'luas':
			resetButton = document.querySelector('#content-luas-persegi .form-container > .reset-button');
			formInput = document.querySelector('#content-luas-persegi .form-container input');
			if (formInput.value.toString().length === 0) {
				return alert('Kamu memasukan nilai kosong, silahkan di isi angka nya terlebih dahulu');
			}
			jawaban = document.querySelector('#content-luas-persegi .jawaban');
			jawaban.innerHTML = '';
			p = document.createElement('p');
			p.innerHTML = `L = S x S<br>
			L = ${formInput.value} x ${formInput.value}<br>
			L = ${hitungLuasPersegi(formInput.value)}`;
			jawaban.append(p);
			resetButton.style.display = 'block';
			break;
		case 'keliling':
			resetButton = document.querySelector('#content-keliling-persegi .form-container > .reset-button');
			formInput = document.querySelector('#content-keliling-persegi .form-container input');
			if (formInput.value.toString().length === 0) {
				return alert('Kamu memasukan nilai kosong, silahkan di isi angka nya terlebih dahulu');
			}
			jawaban = document.querySelector('#content-keliling-persegi .jawaban');
			jawaban.innerHTML = '';
			p = document.createElement('p');
			p.innerHTML = `K = 4 x S<br>
			K = 4 x ${formInput.value}<br>
			K = ${hitungKelilingPersegi(formInput.value)}`;
			jawaban.append(p);
			resetButton.style.display = 'block';
			break;
	}
}

function reset(tipe) {
	let resetButton, formInput, jawaban;

	switch (tipe) {
		case 'luas':
			tipe = '#content-luas-persegi';
			resetButton = document.querySelector('#content-luas-persegi .form-container > .reset-button');
			formInput = document.querySelector('#content-luas-persegi .form-container input');
			jawaban = document.querySelector('#content-luas-persegi .jawaban');
			break;
		case 'keliling':
			tipe = '#content-keliling-persegi';
			resetButton = document.querySelector('#content-keliling-persegi .form-container > .reset-button');
			formInput = document.querySelector('#content-keliling-persegi .form-container input');
			jawaban = document.querySelector('#content-keliling-persegi .jawaban');
			break;
	}

	resetButton.style.display = 'none';
	formInput.value = '';
	jawaban.innerHTML = '';
}

function show(tipe) {
	let card;
	const tipeId = ['#content-luas-persegi', '#content-keliling-persegi'];
	switch (tipe) {
		case 'luas':
			tipe = 0;
			break;
		case 'keliling':
			tipe = 1;
			break;
	}
	card = document.querySelector(tipeId[tipe]);
	card.style.display = 'block';
	tipeId.reverse();
	card = document.querySelector(tipeId[tipe]);
	card.style.display = 'none';
}

function hitungLuasPersegi(sisi) {
	const hasil = sisi * sisi;
	return hasil;
}

function hitungKelilingPersegi(sisi) {
	const hasil = 4 * sisi;
	return hasil;
}
