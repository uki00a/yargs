import _factory from './yargs.js'
import type Yargs from './types.ts'

interface Factory<T> {
  (processArgs?: string[], cwd?: string): Yargs.Argv<T>
}

const factory = _factory as Factory<{}>;

export default factory
