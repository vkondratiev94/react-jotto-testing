import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input from './Input'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import { getSecretWord } from './actions'

export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord()
  }

  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords}/>
      </div>
    )
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => ({
  success,
  secretWord,
  guessedWords
})

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp)
