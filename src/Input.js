import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'

import { guessWord } from './actions'

export class UnconnectedInput extends Component {
  /**
   * Create ref for input box
   * @method constructor
   * @param {object} props
   * @returns {undefined}
   */
  constructor(props) {
    super(props)

    this.inputBox = createRef()
    this.submitGuessedWord = this.submitGuessedWord.bind(this)
  }

  submitGuessedWord(e) {
    e.preventDefault()
    const guessedWord = this.inputBox.current.value
    if (guessedWord.trim()) {
      this.props.guessWord(guessedWord)
      this.inputBox.current.value = ''
    }
  }

  /**
   * Render the component
   * @method render
   * @returns {JSX.Element}
   */
  render() {
    const contents = this.props.success ?
      null :
      (
        <form className='form-inline'>
          <input
            ref={this.inputBox}
            data-test='input-box'
            className='mb-2 mx-sm-3'
            id='word-guess'
            type='text'
            placeholder='enter guess'
          />
          <button
            type='submit'
            data-test='submit-button'
            className='btn btn-primary mb-2'
            onClick={this.submitGuessedWord}  
          >Submit</button>
        </form>
      )
    return (
      <div data-test='component-input'>
        {contents}
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => ({ success }) 

export default connect(mapStateToProps, { guessWord })(UnconnectedInput)
