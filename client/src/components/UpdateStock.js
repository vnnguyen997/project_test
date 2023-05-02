import React, { Component } from 'react';
import axios from 'axios';

class UpdateStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory_id: '',
      stock: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { inventory_id, stock } = this.state;
    axios.put(`/updateStock/${inventory_id}`, {
      stock
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
  render() {
    const { inventory_id, stock } = this.state;
    return (
      <div>
        <h2>Update Item Stock</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Inventory ID:
            <input type="text" name="inventory_id" value={inventory_id} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            New Stock:
            <input type="text" name="stock" value={stock} onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit">Update Item Stock</button>
        </form>
      </div>
    );
  }
}

export default UpdateStock;