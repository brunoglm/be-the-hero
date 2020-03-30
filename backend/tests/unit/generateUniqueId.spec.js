const generateUnique = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUnique()
    expect(id).toHaveLength(8)
  })
})