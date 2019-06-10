export default function (dateStr) {
  const date = new Date(dateStr)
  return date.getHours() + ':' + date.getMinutes()
}
