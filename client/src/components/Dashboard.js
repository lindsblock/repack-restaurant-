import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends React.Component {
  state = { items: [] }

  componentDidMount() {
    axios.get('/api/items')
      .then( res => this.setState({ items: res.data }) )
  }

  render() {
    let { items } = this.state;
      return (
        <ul>
          { items.map( p =>
              <li key={p.id}>
                <Link to={`/items/${p.id}`}>{p.name}</Link>
              </li>
            )
          }
        </ul>
      )
  }
}

export default Dashboard;
