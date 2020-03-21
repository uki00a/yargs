import * as compat from "https://denopkg.com/uki00a/deno-yargs-compat@v0.0.2/mod.ts"
import util from "https://dev.jspm.io/util@0.12.2"
import stringWidth from "https://dev.jspm.io/string-width@4.2.0"
import stripAnsi from "https://dev.jspm.io/strip-ansi@6.0.0"
import wrapAnsi from "https://dev.jspm.io/wrap-ansi@6.2.0"
import decamelize from "https://dev.jspm.io/decamelize@1.2.0"
import camelCase from "https://dev.jspm.io/camelcase@5.3.1"
import Parser from "https://denopkg.com/uki00a/yargs-parser@v18.1.2-rc1/mod.ts"
// import Y18n from "https://dev.jspm.io/y18n@4.0.0"
import cliui from "https://dev.jspm.io/cliui@6.0.0"
import getCallerFile from "https://dev.jspm.io/get-caller-file@2.0.5"

function setBlocking() {}

export {
  compat,
  util,
  stringWidth,
  stripAnsi,
  wrapAnsi,
  decamelize,
  camelCase,
  Parser,
  cliui,
  getCallerFile,
  setBlocking
};
