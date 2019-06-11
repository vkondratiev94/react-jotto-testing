import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from './tests/utils'
import Input from './Input'

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initState
 * @returns {ShallowWrapper} 
 */
const setup = (initState = {}) => {
  const store = storeFactory(initState)
  const wrapper = shallow(<Input store={store} />).dive().dive()
  return wrapper
}

describe('render', () => {
  describe('word hasn`t been guessed', () => {
    let wrapper
    beforeEach(() => {
      const initState = { success: false }
      wrapper = setup(initState)
    })

    test('renders the component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })

    test('renders input box', () => {
      const box = findByTestAttr(wrapper, 'input-box')
      expect(box.length).toBe(1)
    })

    test('renders submit button', () => {
      const button = findByTestAttr(wrapper, 'submit-button')
      expect(button.length).toBe(1)
    })
  })

  describe('word has been guessed', () => {
    let wrapper
    beforeEach(() => {
      const initState = { success: true }
      wrapper = setup(initState)
    })

    test('renders the component without error', () => {
      const congrats = findByTestAttr(wrapper, 'component-input')
      expect(congrats.length).toBe(1)
    })

    test('doesn`t renders input box', () => {
      const box = findByTestAttr(wrapper, 'input-box')
      expect(box.length).toBe(0)
    })

    test('doesn`t renders submit button', () => {
      const button = findByTestAttr(wrapper, 'submit-button')
      expect(button.length).toBe(0)
    })
  })
})

describe('updating state', () => {
  
})