describe ('defence', () => {
  it('calculates damage to the attacking fleet', () => {
    expect(defence(1, 10)).toEqual(9)
  })
})

describe ('attack', () => {
  it('calculates damage to the defending fleet', () => {
    expect(attack(2, 20)).toEqual(18)
  })
})
