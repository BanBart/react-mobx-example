import React, { Component } from 'react';
import './App.css';
import { Provider } from 'mobx-react'
import AppStore from "./stores/app_store/app_store"
import Router from './components/router/router'
import { BrowserRouter } from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store || AppStore.create({})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Provider store={this.store}>
            <Router />
          </Provider>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
