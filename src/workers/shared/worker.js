import got from 'got'
import { parentPort, workerData } from 'worker_threads'

const run = async () => {
  const result = await Promise.allSettled(Array.from(Array(workerData.count)).map(i => got.get('https://google.com/')))

  parentPort.postMessage({
    done: true,
    result: result.map(({ status, value }) => ({ status, body: value.body }))
  })
}

run()
