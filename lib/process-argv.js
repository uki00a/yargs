import { compat } from './deps.js'

const { process } = compat

function getProcessArgvBinIndex () {
  // The binary name is the first command line argument for:
  // - Deno
  if (isDeno()) return 0
  // or the second one (default) for:
  // - standard node apps: node bin.js argv1 argv2 ... argvn
  // - unbundled Electron apps: electron bin.js argv1 arg2 ... argvn
  return 1
}

function isDeno () {
  return typeof Deno !== 'undefined' && process.argv[0] === Deno.execPath()
}

function getProcessArgvWithoutBin () {
  return process.argv.slice(getProcessArgvBinIndex() + 1)
}

function getProcessArgvBin () {
  return process.argv[getProcessArgvBinIndex()]
}

export {
  getProcessArgvBin,
  getProcessArgvWithoutBin
}
