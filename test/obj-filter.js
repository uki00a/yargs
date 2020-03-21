'use strict'
/* global describe, it */

import objFilter from '../lib/obj-filter.js'

describe('ObjFilter', () => {
  it('returns a new reference to the original object if no filter function is given', () => {
    const original = { foo: 'bar', baz: 'foo' }
    const result = objFilter(original)

    original.should.not.equal(result)
    original.should.deep.equal(result)
  })
})
