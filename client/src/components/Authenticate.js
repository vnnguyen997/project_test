import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
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
    const { username, email, password } = this.state;
    axios.post('/register', { username, email, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={username} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={email} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;