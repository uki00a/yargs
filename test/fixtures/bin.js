#!/usr/bin/env deno
import yargs from '../../mod.ts'
var argv = yargs
  .help('help')
  .completion()
  .argv
console.log(JSON.stringify(argv._))
