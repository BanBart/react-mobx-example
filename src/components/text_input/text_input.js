import React, {Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, decorate, action } from 'mobx'

class TextInput extends Component {
  inputValue = ''

  onChange = (e) => {
    this.inputValue = e.target.value
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      const { store: { wordsStore: { addWord }}} = this.props
      addWord(e.target.value)

      this.clearInputValue()
    }
  }


  clearInputValue() {
    this.inputValue = ''
  }

  render() {
    return (
      <div>
        <input type='text' value={this.inputValue} onChange={this.onChange} onKeyPress={this.handleKeyPress} />
        <p>{this.inputValue}</p>
      </div>
    )
  }
}

decorate(TextInput, {
  inputValue: observable,
  clearInputValue: action,
  handleKeyPress: action
})

export default inject('store')(observer(TextInput))
