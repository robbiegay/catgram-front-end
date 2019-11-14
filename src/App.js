import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/posts`)
      .then(response => {
        const data = response.data;
        // this.setState({ persons });
        console.log(data);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            meow...
            </p>
        </header>
      </div>
    );
  }
}


export default App;
