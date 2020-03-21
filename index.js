'use strict'
// classic singleton yargs API, to use yargs
// without running as a singleton do:
// require('yargs/yargs')(process.argv.slice(2))
import yargs from './yargs.js'
import * as processArgv from './lib/process-argv.js'
import { compat } from './lib/deps.js'

const require = compat.require

Argv(processArgv.getProcessArgvWithoutBin())

export default Argv
export { Argv }

function Argv (processArgs, cwd) {
  const argv = yargs(processArgs, cwd, require)
  singletonify(argv)
  return argv
}

/*  Hack an instance of Argv with process.argv into Argv
    so people can do
    require('yargs')(['--beeble=1','-z','zizzle']).argv
    to parse a list of args and
    require('yargs').argv
    to get a parsed version of process.argv.
*/
function singletonify (inst) {
  Object.keys(inst).forEach((key) => {
    if (key === 'argv') {
      Argv.__defineGetter__(key, inst.__lookupGetter__(key))
    } else if (typeof inst[key] === 'function') {
      Argv[key] = inst[key].bind(inst)
    } else {
      Argv.__defineGetter__('$0', () => {
        return inst.$0
      })
      Argv.__defineGetter__('parsed', () => {
        return inst.parsed
      })
    }
  })
}
