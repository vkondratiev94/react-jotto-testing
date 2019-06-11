import { actionTypes } from '../actions'

/**
 * @function successReducer
 * @param {object} action
 * @returns {boolean}
*/
export default (state = false, action) => {
  switch(action.type) {
    case actionTypes.CORRECT_GUESS: {
      return true
    }
    default:
      return state
  }
}