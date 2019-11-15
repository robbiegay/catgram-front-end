import React from 'react';
import Layout from './Layout.js';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    }

    this.getToken = this.getToken.bind(this);
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/posts`)
      .then(response => {
        const data = response.data;
        // this.setState({ persons });
        // console.log(data);
      })
  }

  getToken(token) {
    this.setState({ token: token });
    console.log(this.state);
  }

  render() {
    return (
      <Layout tokenSetter={this.getToken} token={this.state.token} />
    );
  }
}


export default App;
