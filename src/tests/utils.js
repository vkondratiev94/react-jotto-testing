import checkPropTypes from 'check-prop-types'

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