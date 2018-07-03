import fs from 'fs'
import assert from 'assert'
import testBin from './test.bin'

// testBin is imported as a string
const deStringed = Buffer.from(testBin)
const expected = fs.readFileSync('./test.bin')
assert(deStringed === expected)

