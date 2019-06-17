export default function prettyTime (timeInMillis, onlyMinutes=false) {
  const minuteInMillis = 1000 * 60
  const secondInMillis = 1000

  const minutes = timeInMillis >= minuteInMillis
    ? parseInt(timeInMillis / minuteInMillis)
    : 0
  const seconds = parseInt(timeInMillis - (minutes * minuteInMillis)) / secondInMillis
  return addLeadingZeros(minutes) + (onlyMinutes ? '\'' : `:${addLeadingZeros(seconds)}`)
}

export function addLeadingZeros (number, unit=1) {
  return number > (unit * 10 - 1) ? number : zeros(unit) + number
}

function zeros (number) {
  return [...Array(number).keys()].map(k => '0').join("")
}
