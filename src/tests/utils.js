import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers'
import { middlewares } from '../configureStore'

/**
 * Create a testing store with imported reducers, middleware and initial state.
 * globals: rootReducer, middlewares
 * @param {object} initState
 * @function storeFactory
 * @returns {Store}
 */
export const storeFactory = (initState) => {
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddlewares(rootReducer, initState)
}

/**
 * return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'prop',
    component.name
  )
  expect(propError).toBeUndefined()
}