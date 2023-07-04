import React, { Component } from 'react'
import { mycontext } from './ContextApi'

export default class SecondContext extends Component {
  render() {
    return (
      <div>
        <h4>Second</h4>
        <mycontext.Consumer>
            {data=><p>{data.name}</p>}
        </mycontext.Consumer>
      </div>
    )
  }
}
