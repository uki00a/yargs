import "https://deno.land/std/node/global.ts"
import * as path from "https://deno.land/std@v0.36.0/path/mod.ts"
import * as fs from "https://deno.land/std@v0.36.0/fs/mod.ts"
import { process } from "https://deno.land/std@v0.36.0/node/process.ts"
import util from "https://dev.jspm.io/util@0.12.2"
import stringWidth from "https://dev.jspm.io/string-width@4.2.0"
import stripAnsi from "https://dev.jspm.io/strip-ansi@6.0.0"
import wrapAnsi from "https://dev.jspm.io/wrap-ansi@6.2.0"
import decamelize from "https://dev.jspm.io/decamelize@4.0.0"
import Parser from "https://dev.jspm.io/yargs-parser@18.1.0"
// import Y18n from "https://dev.jspm.io/y18n@4.0.0"
import cliui from "https://dev.jspm.io/cliui@6.0.0"
import getCallerFile from "https://dev.jspm.io/get-caller-file@2.0.5"

function setBlocking() {}

export {
  path,
  fs,
  process,
  util,
  stringWidth,
  stripAnsi,
  wrapAnsi,
  decamelize,
  Parser,
  cliui,
  getCallerFile,
  setBlocking
};
