import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { decorate, computed } from 'mobx'
import { Link } from "react-router-dom"
import routes from '../../routes'

class WordsPage extends Component {
  // view MST
  get anotherList() {
    const { store: { wordsStore: { betterWordsList }}} = this.props

    return betterWordsList.map( word => `${word}-no` )
  }

  render() {
    return(
      <div>
        <h1>Words page</h1>

        <Link to={routes.root()}>Home</Link>

        <ul>
          {this.anotherList.map(word => {
            return (<li key={word}>
              {word}
            </li>)
          })}
        </ul>
      </div>
    )
  }
}

decorate(WordsPage, {
  anotherList: computed
})



export default inject('store')(observer(WordsPage))
