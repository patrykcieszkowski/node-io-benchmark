import { Worker } from 'worker_threads'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const workerCreationPromise = () => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: {} })

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
  const tests = Array.from(Array(count)).map(i => workerCreationPromise())
  return Promise.allSettled(tests)
}

export default {
  run
}
