import got from 'got'

export const run = async (count) => {
  const tests = Array.from(Array(count)).map(i => got.get('https://google.com/'))
  return Promise.allSettled(tests)
}

export default {
  run
}
