import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(document).ready(function () {
	// :: DAY
	const selectDay = $('#select-day');
	for (let i = 1; i < 32; i++) {
		$('<option>')
			.val(('0' + i).slice(-2))
			.text(i)
			.appendTo(selectDay);
	}
	console.log('asdfasdf');

	// :: MONTH
	const selectMonth = $('#select-month');
	const options = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	for (let i = 0; i < options.length; i++) {
		const monthNumber = i + 1;
		$('<option>')
			.val(('0' + monthNumber).slice(-2))
			.text(options[i])
			.appendTo(selectMonth);
	}


	// :: YEAR
	const year = new Date().getFullYear();
	const selectYear = $('#select-year').empty();

	for (let i = 0; i < 99; i++) {
		$('<option>')
			.val(year - i)
			.text(year - i)
			.appendTo(selectYear);
	}
});

$(() => {
	svg4everybody();
});
