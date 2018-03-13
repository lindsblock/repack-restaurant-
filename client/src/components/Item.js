import React from 'react';
import axios from 'axios';

class Item extends React.Component {
  state = { Item: {} }

  componentDidMount() {
    axios.get(`/api/items/${this.props.match.params.id}`)
      .then( res => this.setState({ item: res.data }) )
  }

  render() {
    let { item: { name, description, price }} = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
      </div>
    )
  }
}

export default Item;
