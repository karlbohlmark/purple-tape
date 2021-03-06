'use strict'

const test = require('./')

test.beforeAll( function * (t) {
    t.ok(yield Promise.resolve(true), 'shall run beforeAll')
})

test.beforeEach( function * (t) {
    t.ok(yield Promise.resolve(true), 'shall run beforeEach')
})

test.afterEach( function * (t) {
    t.ok(yield Promise.resolve(true), 'shall run afterEach')
})

test('run test 1 with co', function * (t) {
    t.ok(yield Promise.resolve(true), 'shall yield results')
})

test('run test 2 with co', function * (t) {
    t.ok(yield Promise.resolve(true), 'shall yield results')
})
