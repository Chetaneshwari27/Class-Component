import React, { Component } from 'react'

export default class ApiCalling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json
        });
      })
  }
  render() {
    const {items} = this.state;
    return (
      <div>
        <h1> Fetch data from an api </h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>email</th>
          </tr>
          {items.map((item) => (
            <tr key={item.id} >
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))
        }
        </table>
      </div>
    );
  }
}
