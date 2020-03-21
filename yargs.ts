import _factory from './yargs.js'
import type Yargs from './types.ts'
import type { Parser } from './types.ts'

import * as yargs from './yargs.js'

interface Factory<T> {
  Parser: Parser
  (processArgs?: string[], cwd?: string): Yargs.Argv<T>
}

const factory = _factory as Factory<{}>
const _Parser = yargs.Parser as Parser
const rebase = yargs.rebase as (base: string, dir: string) => string
factory.Parser = _Parser;

export default factory
export { _Parser as Parser }
export { rebase }
