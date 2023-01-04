export function formatDate(inputDate: Date) {
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();

  date = date.toString().padStart(2, '0');

  month = month.toString().padStart(2, '0');

  return `${date}/${month}/${year}`;
}

export function formatTime(inputTime: Date) {
  let hours, minutes;

  hours = inputTime.getHours();
  minutes = inputTime.getMinutes();

  hours = hours.toString().padStart(2, '0');

  minutes = minutes.toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}
