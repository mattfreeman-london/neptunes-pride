describe ('battle', () => {
  it('simulates a Neptunes Pride battle', () => {
    expect(battle(1, 10, 1, 10)).toEqual('Defender wins with 7 ships left.')
  })
});
