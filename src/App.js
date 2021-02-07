import React from 'react';
import DateHeader from './DateHeader';
import Spinner from './Spinner';
import './App.css';
import Routes from './Routes';

const endpoint = "https://jul-on-sale.herokuapp.com/jul";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowSpinner: true,
      categories: []
    }
  }
  componentDidMount() {
    if (this.state.categories.length === 0) {
        this.fetchData();
    }
  }
  fetchData() {
    fetch(endpoint)
    .then(response => response.json())
    .then(result => {
        this.setState({
            ...this.state, 
            shouldShowSpinner: false, 
            categories: result.message
        });
    })
    .catch(error => {
        this.setState({
            ...this.state, 
            shouldShowSpinner: false
        });
    })
  } 
  render() {
    return <div className="App">
    <DateHeader />
    <Spinner status = {this.state.shouldShowSpinner}/>
    <Routes categories={this.state.categories} />
  </div>
  }
}

export default App;
