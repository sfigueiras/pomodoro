import { addLeadingZeros } from './prettyTime'

export default function (dateStr) {
  const date = new Date(dateStr)
  return addLeadingZeros(date.getHours()) + ':' + addLeadingZeros(date.getMinutes())
}
