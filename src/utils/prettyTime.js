

  export default function prettyTime (timeInMillis) {
    const hourInMillis = 1000 * 60 * 60
    const minuteInMillis = 1000 * 60
    const secondInMillis = 1000
    const hours = timeInMillis >= hourInMillis ?
      parseInt(timeInMillis / hourInMillis) :
      0
    const minutes = timeInMillis >= minuteInMillis ? 
      parseInt((timeInMillis - (hours * hourInMillis)) / minuteInMillis) :
      0
    const seconds = parseInt((timeInMillis - (hours * hourInMillis) - (minutes * minuteInMillis))) / secondInMillis
    return `${addLeadingZeros(hours)}:${addLeadingZeros(minutes)}:${addLeadingZeros(seconds)}`
  }

  function addLeadingZeros (number, unit=1) {
    return number > (unit * 10 - 1) ? number : zeros(unit) + number
  }

  function zeros (number) {
    return [...Array(number).keys()].map(k => '0').join("")
  }
