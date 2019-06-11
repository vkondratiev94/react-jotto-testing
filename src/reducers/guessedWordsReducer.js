import { actionTypes } from '../actions'

/**
 * @function guessedWordsReducer
 * @param {array} state
 * @param {object} action
 * @returns {array}
*/
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD: {
      return [
        ...state,
        action.payload
      ]
    }
    default:
      return state
  }
}