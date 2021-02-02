import React from 'react';
import './DateHeader.css';

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
    return <div className="DateHeader">
    <p>{this.formatDate()}</p>
  </div>
  }
}



export default DateHeader;