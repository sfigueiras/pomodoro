export default function (obj, fn) {
  return Object
    .keys(obj)
    .map((key, index) => {
      return fn(key, obj[key])
    })
}

