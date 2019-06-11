import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from './tests/utils'
import Input, { UnconnectedInput } from './Input'

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

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true
    const wrapper = setup({ success })
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })

  test('`guessWord` action creator is a function prop', () => {
    const wrapper = setup()
    const guessWordProp = wrapper.instance().props.guessWord
    expect(guessWordProp).toBeInstanceOf(Function)
  })
})

describe('`guessWord` action creator call', () => {
  let wrapper
  let guessWordMock
  const guessedWord = 'train'

  beforeEach(() => {
    // setup mock for `guessWord`
    guessWordMock = jest.fn()

    const props = {
      guessWord: guessWordMock
    }

    // set up app component with guessWordMock as the guessWord prop
    wrapper = shallow(<UnconnectedInput {...props} />)

    // add value to input box
    wrapper.instance().inputBox.current = { value: guessedWord }

    // simulate click
    const button = findByTestAttr(wrapper, 'submit-button')
    button.simulate('click', { preventDefault() {} })
  })

  test('calls `guessWord` when button is clicked', () => {  
    // check if mock ran
    const guessWordCallCount = guessWordMock.mock.calls.length
    expect(guessWordCallCount).toBe(1)
  })

  test('calls `guessWord` with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0]
    expect(guessWordArg).toBe(guessedWord)
  })

  test('input box clears on submit', () => {
    expect(wrapper.instance().inputBox.current.value).toBe('')
  })
})