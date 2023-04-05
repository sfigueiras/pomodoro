export default function formatDate(dateStr) {
  const date = new Date(dateStr);

  const monthNames = [
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
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();

  return day + ' ' + monthNames[monthIndex];
}

export function todayPretty() {
  return formatDate(Date.now());
}
