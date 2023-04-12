import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    axios.post('/login', { email, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" value={email} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;