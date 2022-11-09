import * as data from '../data/input.json'

test('Data should be JSON data',()=>{
    expect(JSON.stringify(data)).not.toBeUndefined()
})
