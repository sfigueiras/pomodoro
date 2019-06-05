import prettyTime from './prettyTime'

describe('prettyTime module', () => {
  it('should display seconds without minutes and hours correctly', () => {
    const timeString = prettyTime(1000)
    expect(timeString).toEqual('00:00:01')
  })

  it('should display hours, minutes and seconds correctly', () => {
    const timeString = prettyTime(1000 * 60 * 60 + 1000 * 60 * 10 + 1000 * 3)
    expect(timeString).toEqual('01:10:03')
  })
})
