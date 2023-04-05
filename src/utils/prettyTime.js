export default function prettyTime(
  timeInMillis,
  onlyMinutes = false,
  includeHours = false,
) {
  includeHours && console.log(timeInMillis);
  if (includeHours) debugger;
  const secondInMillis = 1000;
  const minuteInMillis = secondInMillis * 60;
  const hourInMillis = minuteInMillis * 60;

  const hours =
    timeInMillis >= hourInMillis ? parseInt(timeInMillis / hourInMillis) : 0;

  let remainingMillis = timeInMillis - hours * hourInMillis;

  const minutes =
    remainingMillis >= minuteInMillis
      ? parseInt(remainingMillis / minuteInMillis)
      : 0;

  remainingMillis = remainingMillis - minutes * minuteInMillis;

  const seconds = parseInt(remainingMillis / secondInMillis);
  return (
    (includeHours ? `${hours}:` : '') +
    addLeadingZeros(minutes) +
    (onlyMinutes ? "'" : `:${addLeadingZeros(seconds)}`)
  );
}

export function addLeadingZeros(number, unit = 1) {
  return number > unit * 10 - 1 ? number : zeros(unit) + number;
}

function zeros(number) {
  return [...Array(number).keys()].map(k => '0').join('');
}
