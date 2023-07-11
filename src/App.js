import React, { Component } from 'react'
import Demo from './classComponent/Demo'
import ApiCalling from './classComponent/ApiCalling'
import ContextApi from './classComponent/ContextApi'
import HigherComponent from './classComponent/HigherComponent'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Demo/> */}
        {/* <ApiCalling/> */}
        {/* <ContextApi/> */}
        <HigherComponent/>
      </div>
    )
  }
}
