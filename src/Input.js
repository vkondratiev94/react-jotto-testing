import React, { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {
  render() {
    const contents = this.props.success ?
      null :
      (
        <form className='form-inline'>
          <input
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

export default connect(mapStateToProps)(Input)
