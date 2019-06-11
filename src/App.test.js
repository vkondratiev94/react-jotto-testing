import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

import { storeFactory } from './tests/utils'

const setup = (initState = {}) => {
  const store = storeFactory(initState)
  const wrapper = shallow(<App store={store} />).dive()
  return wrapper
}

describe('redux properties', () => {
  test('has access to `success` state', () => {
    const success = true
    const wrapper = setup({ success })
    const successProp = wrapper.props().success
    expect(successProp).toBe(success)
  })

  test('has access to `secretWord` state', () => {
    const secretWord = 'party'
    const wrapper = setup({ secretWord })
    const secretWordProp = wrapper.props().secretWord
    expect(secretWordProp).toBe(secretWord)
  })

  test('has access to `guessedWords` state', () => {
    const guessedWords = [{
      guessedWord: 'train',
      letterMatchCount: 3
    }]
    const wrapper = setup({ guessedWords })
    const guessedWordsProp = wrapper.props().guessedWords
    expect(guessedWordsProp).toEqual(guessedWords)
  })

  test('`getSecretWord` action creator is a function on the props' , () => {
    const wrapper = setup()
    const getSecretWordProp = wrapper.props().getSecretWord
    expect(getSecretWordProp).toBeInstanceOf(Function)
  })
})