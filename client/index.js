import React, {Component} from 'react'
import {render} from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>Hi</div>
    )
  }
}

const rootEl = document.querySelector('#root')
render(<App />, rootEl)
