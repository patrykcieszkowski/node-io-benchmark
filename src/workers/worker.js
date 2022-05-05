import got from 'got'
import { parentPort } from 'worker_threads'

const run = async () => {
  const result = await got.get('https://google.com/')

  parentPort.postMessage({ done: true, result: { body: result.body } })
}

run()
