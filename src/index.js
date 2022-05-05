import asyncTest from './async.test.js'
import workerTest from './workers/main.test.js'

const { QUERY_TYPE } = process.env
const TEST_COUNT = +process.env.TEST_COUNT || 40

if (QUERY_TYPE === 'async') {
  console.log('query type: async')
  const result = await asyncTest.run(TEST_COUNT)

  console.log('\nresult:')
  console.log(`total: ${result.length}`)
  console.log(`fulfilled: ${result.filter(i => i.status === 'fulfilled').length}`)
} else if (QUERY_TYPE === 'worker') {
  console.log('query type: worker')
  const result = await workerTest.run(TEST_COUNT)

  console.log('\nresult:')
  console.log(`total: ${result.length}`)
  console.log(`fulfilled: ${result.filter(i => i.status === 'fulfilled').length}`)
}
