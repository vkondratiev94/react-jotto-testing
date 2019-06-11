import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getSecretWord } from './actions'

import Input from './Input'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'

const App = ({ success, guessedWords }) => {
  return (
    <div className='container'>
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input />
      <GuessedWords guessedWords={guessedWords}/>
    </div>
  )
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => ({
  success,
  secretWord,
  guessedWords
})

export default connect(mapStateToProps, { getSecretWord })(App)
