#!/usr/bin/env deno
import yargs from '../../mod.ts'

yargs
  .option('foo', {
    nargs: 1
  })
  .command(
    'bar <baz>',
    'example',
    function (yargs) { return yargs },
    function (argv) {
      console.log(JSON.stringify({ _: argv._, foo: argv.foo, baz: argv.baz }))
    }
  )
  .parse()
