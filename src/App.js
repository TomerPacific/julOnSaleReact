import React from 'react';
import DateHeader from './DateHeader';
import Spinner from './Spinner';
import Categories from './Categories';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {shouldShowSpinner: true}
    this.spinnerHandler = this.spinnerHandler.bind(this);
  }
  spinnerHandler() {
    this.setState({
      ...this.state, shouldShowSpinner: false
    })
  }
  render() {
    return <div className="App">
    <header className="App-header">
      What's On Sale @ Jul
    </header>
    <DateHeader />
    <Spinner status = {this.state.shouldShowSpinner}/>
    <Categories spinnerHandler = {this.spinnerHandler}/>
  </div>
  }
}

export default App;
