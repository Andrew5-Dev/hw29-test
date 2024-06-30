const weekFn = require('../weekFn(cond)')

test('returns correct day names', () => {
    expect(weekFn(1)).toBe('Понеділок')
    expect(weekFn(3)).toBe('Середа')
    expect(weekFn(7)).toBe('Неділя')
    expect(weekFn(9)).toBe(null)
    expect(weekFn(1.5)).toBe(null)
    expect(weekFn('2')).toBe(null)
})