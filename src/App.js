import React from 'react';
import DateHeader from './DateHeader';
import Spinner from './Spinner';
import Categories from './Categories';
import './App.css';

class App extends React.Component {
  render() {
    return <div className="App">
    <header className="App-header">
      What's On Sale @ Jul
    </header>
    <DateHeader />
    <Spinner />
    <main>
      <Categories />
    </main>
  </div>
  }
}

export default App;
