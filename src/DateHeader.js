import React from 'react';
import './DateHeader.css';
import { withRouter } from "react-router";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class DateHeader extends React.Component {
  constructor() {
    super();
    this.state = {date : new Date()};
  }
  formatDate() {
    return "For the day of " + months[this.state.date.getMonth()] + ' ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear(); 
  }
  render() {
    return <>
      <header className="App-header">
        What's On Sale @ Jul {this.props?.match?.params?.categoryName}
      </header>
      <div className="DateHeader">
        <p>{this.formatDate()}</p>
      </div>
  </>
  }
}

export default withRouter(DateHeader);