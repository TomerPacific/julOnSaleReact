import React from 'react';
import DateHeader from './DateHeader';
import './App.css';
import Routes from './Routes';

const endpoint = "https://jul-on-sale.herokuapp.com/jul";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowSpinner: true,
      categories: [],
      serverError: false,
    }
  }
  
  render() {
    return <div className="App">
    <DateHeader />
    <div>
			<h4>Avo 🥑 (formerly known as Jul) has shut its service</h4>
			<h4>Like Avo, this project has gone into the sunset 🌇 </h4>
		</div>
    <Routes categories={this.state.categories} />
    {this.state.serverError ? (<div>
      אוי לא! כנראה שישנה בעיה עם השרת. אנא נסו שנית מאוחר יותר.
    </div>) : null }
  </div>
  }
}

export default App;
