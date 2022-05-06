import { Worker } from 'worker_threads'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import os from 'os'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const threadsCount = os.cpus().length

const workerCreationPromise = (count) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: { count } })

    worker.on('error', err => reject(err))

    worker.on('message', data => resolve(data.result))

    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  })
}

export const run = (count) => {
  const tests = Array.from(Array(threadsCount)).map(i => workerCreationPromise(count / threadsCount))
  return Promise.allSettled(tests)
}

export default {
  run
}
