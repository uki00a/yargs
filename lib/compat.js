import * as deps from './deps.js'
export { path, process } from './deps.js'

const fs = {
  ...deps.fs,
  statSync: Deno.statSync,
  readFileSync: readFileSync
}

export { fs }

function readFileSync(path) {
  const decoder = new TextDecoder()
  return decoder.decode(Deno.readFileSync(path))
}

export function env() {
  return Deno.env()
}

export function cwd() {
  return Deno.cwd()
}

export function require(module) {
  const extname = deps.path.extname(module)
  if (extname === '.json') {
    return JSON.parse(readFileSync(module))
  }

  switch (module) {
    default:
      throw new Error(`require('${module}') is not supported`)
  }
}

export function inspect(value) {
  return Deno.inspect(value)
}

export function nextTick() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}

require.resolve = () => {
  throw new Error('require.resolve() is not supported')
}
