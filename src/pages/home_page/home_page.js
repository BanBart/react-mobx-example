import React, { Component } from 'react'
import TextInput from '../../components/text_input/text_input'
import { observer } from 'mobx-react'
import { Link } from "react-router-dom"
import routes from '../../routes'

class HomePage extends Component {
  render() {
    return(
      <div>
        <h1>Home page</h1>
        <Link to={routes.words()}>Words</Link>

        <TextInput />
      </div>
    )
  }
}

export default observer(HomePage)
