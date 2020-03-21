#!/usr/bin/env deno

// pretend we are a TTY
// process.stdout.isTTY = true
// process.stderr.isTTY = true

import yargs from '../../mod.ts'
var y = yargs.command('download <url> <files..>', 'make a get HTTP request')
  .help()

for (var i = 0; i < 1000; i++) {
  yargs.option('o' + i, {
    describe: 'option ' + i
  })
}

y.parse()

console.log('never get here')
