import moxios from 'moxios'

import { actionTypes, getSecretWord } from './'
import { storeFactory } from '../tests/utils'

describe('getSecretWord action creator', () => {
  const secretWord = 'party'
  let store  = storeFactory()

  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('adds response word to state', () => {
    
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: secretWord
      })
    })

    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState()
        expect(newState.secretWord).toBe(secretWord)
      })

  })
})
