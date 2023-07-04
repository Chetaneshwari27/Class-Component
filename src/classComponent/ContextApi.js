import React, { Component } from 'react'
import SecondContext from './SecondContext';
import ThirdContext from './ThirdContext';

export const mycontext = React.createContext()

export default class ContextApi extends Component {
    state = {
        name: "unknown",
        age: 23
    }
    render() {
        return (
            <div>
                <h4>First</h4>
                <mycontext.Provider value={this.state}>
                    <SecondContext />
                    <ThirdContext />
                </mycontext.Provider>
            </div>
        )
    }
}
