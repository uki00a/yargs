// This file is ported from https://github.com/yargs/yargs-parser/blob/v18.1.0/lib/tokenize-arg-string.js
// Copyright (c) 2016, Contributors
//
// Permission to use, copy, modify, and/or distribute this software
// for any purpose with or without fee is hereby granted, provided
// that the above copyright notice and this permission notice
// appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES
// OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE
// LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES
// OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
// WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION,
// ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.



// take an un-split argv string and tokenize it.
export default function (argString) {
  if (Array.isArray(argString)) {
    return argString.map(e => typeof e !== 'string' ? e + '' : e)
  }

  argString = argString.trim()

  let i = 0
  let prevC = null
  let c = null
  let opening = null
  const args = []

  for (let ii = 0; ii < argString.length; ii++) {
    prevC = c
    c = argString.charAt(ii)

    // split on spaces unless we're in quotes.
    if (c === ' ' && !opening) {
      if (!(prevC === ' ')) {
        i++
      }
      continue
    }

    // don't split the string if we're in matching
    // opening or closing single and double quotes.
    if (c === opening) {
      opening = null
    } else if ((c === "'" || c === '"') && !opening) {
      opening = c
    }

    if (!args[i]) args[i] = ''
    args[i] += c
  }

  return args
}
