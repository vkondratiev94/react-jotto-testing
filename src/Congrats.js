import React from 'react'
import PropTypes from 'prop-types'

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props
 * @returns {JSX.Element} - rendered component or null if `success` prop is 
 */
const Congrats = props => {
  return props.success ? (
    <div data-test='component-congrats'>
      <span data-test='congrats-message'>
        Congratulations! You guessed the word!
      </span>
    </div>
  ) : (
    <div data-test='component-congrats' />
  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats
