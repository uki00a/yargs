'use strict'
/* global it */

import yargs from '../yargs.ts'
import Parser from '../lib/port/yargs-parser/index.js'

it('should expose yargs-parser as Parser', () => {
  yargs.Parser.should.equal(Parser)
})
