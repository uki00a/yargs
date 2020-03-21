'use strict'
/* global it */

import yargs from '../yargs.ts'
import { Parser } from '../lib/deps.js'

it('should expose yargs-parser as Parser', () => {
  yargs.Parser.should.equal(Parser)
})
