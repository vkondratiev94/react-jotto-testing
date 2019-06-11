import { actionTypes } from '../actions'
import successReducer from './successReducer'

describe('successReducer', () => {
  test('returns default initial state of `false` when no actions is dispatched', () => {
    const newState = successReducer(undefined, {})
    expect(newState).toBeFalsy()
  })

  test('returns state of `true` when action with type `CORRECT_GUESS` is dispatched', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
    expect(newState).toBeTruthy()
  })
})