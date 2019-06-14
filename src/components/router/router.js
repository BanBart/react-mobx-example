import React from "react"
import { Route, withRouter, Switch } from "react-router-dom"
import { observer, inject } from "mobx-react"
import * as Pages from '../../pages'
import routes from '../../routes'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Router extends React.Component {
  componentDidMount() {
    const { store: { wordsStore: { loadExamples }}} = this.props
    loadExamples()
  }

  render() {
    return (
      <Wrapper>
        <Switch>
          <Route path={routes.words()} component={Pages.WordsPage} />
          <Route exact path={routes.root()} component={Pages.HomePage} />
        </Switch>
      </Wrapper>
    )
  }
}

export { Router }
export default inject('store')(withRouter(observer(Router)))
