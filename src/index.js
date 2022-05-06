import asyncTest from './async.test.js'
import workerTest from './workers/single/main.test.js'
import workerSharedTest from './workers/shared/main.test.js'

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
} else if (QUERY_TYPE === 'worker_shared') {
  console.log('query type: worker_shared')
  const result = await workerSharedTest.run(TEST_COUNT)
	const flatResult = result.flatMap(r => r.value)

  console.log('\nresult:')
  console.log(`thread workers: ${result.length}`)
  console.log(`total: ${flatResult.length}`)
  console.log(`fulfilled: ${flatResult.filter(i => i.status === 'fulfilled').length}`)
}
