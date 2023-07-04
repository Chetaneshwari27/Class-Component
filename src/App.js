import React, { Component } from 'react'
import Demo from './classComponent/Demo'
import ApiCalling from './classComponent/ApiCalling'
import ContextApi from './classComponent/ContextApi'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Demo/> */}
        {/* <ApiCalling/> */}
        <ContextApi/>
      </div>
    )
  }
}
