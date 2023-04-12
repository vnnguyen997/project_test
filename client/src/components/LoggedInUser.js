import React from 'react';

class LoggedInUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null
    };
  }

  componentDidMount() {
    fetch('/profile')
      .then(res => res.json())
      .then(data => {
        if (data.email) {
          this.setState({ user: data });
        }
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { user, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div>
        {user ? (
          <p>Welcome {user.email}!</p>
        ) : (
          <p>Please log in.</p>
        )}
      </div>
    );
  }
}

export default LoggedInUser;