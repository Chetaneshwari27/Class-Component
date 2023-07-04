import React, { Component } from 'react'
import { mycontext } from './ContextApi'

export default class ThirdContext extends Component {
  render() {
    return (
      <div>
        <h4>Third</h4>
        <mycontext.Consumer>
            {data=><p>{data.age}</p>}
        </mycontext.Consumer>
      </div>
    )
  }
}
