$(document).ready(function () {
  // displays the current day + five day
  $('#today').text(dayjs().format('dddd, MMM DD'));
  $('#day-1').text(dayjs().add(1, 'day').format('dddd, DD'));
  $('#day-2').text(dayjs().add(2, 'day').format('dddd, DD'));
  $('#day-3').text(dayjs().add(3, 'day').format('dddd, DD'));
  $('#day-4').text(dayjs().add(4, 'day').format('dddd, DD'));
  $('#day-5').text(dayjs().add(5, 'day').format('dddd, DD'));
});