'use strict'
import Hash from 'https://dev.jspm.io/hashish@0.0.4'
import { compat } from '../../lib/deps.js'

const { process } = compat

// capture terminal output, so that we might
// assert against it.
export function checkOutput (f, argv, cb) {
  let exit = false
  const _exit = process.exit
  const _emit = process.emit
  const _onerror = window.onerror
  const _env = Object.getOwnPropertyDescriptor(process, 'env')
  const _argv = Object.getOwnPropertyDescriptor(process, 'argv')
  const _error = console.error
  const _log = console.log
  const _warn = console.warn

  process.exit = () => { exit = true }
  const env = Hash.merge(process.env, { _: 'node' })
  Object.defineProperty(process, 'env', {
    get() {
      return env
    }
  })
  Object.defineProperty(process, 'argv', {
    get() {
      return argv || ['./usage']
    }
  });

  const errors = []
  const logs = []
  const warnings = []

  console.error = (msg) => { errors.push(msg) }
  console.log = (msg) => { logs.push(msg) }
  console.warn = (msg) => { warnings.push(msg) }

  let result

  if (typeof cb === 'function') {
    process.exit = () => {
      exit = true
      cb(null, done())
    }
    process.emit = function emit (ev, value) {
      if (ev === 'uncaughtException') {
        cb(value, done())
        return true
      }

      return _emit.apply(this, arguments)
    }
    window.onerror = (message, source, lineno, colno, error) => {
      cb(error, done())
    }

    f()
  } else {
    try {
      result = f()
    } finally {
      reset()
    }

    return done()
  }

  function reset () {
    process.exit = _exit
    process.emit = _emit
    window.onerror = _onerror
    Object.defineProperty(process, 'env', _env)
    Object.defineProperty(process, 'argv', _argv)

    console.error = _error
    console.log = _log
    console.warn = _warn
  }

  function done () {
    reset()

    return {
      errors,
      logs,
      warnings,
      exit,
      result
    }
  }
}
