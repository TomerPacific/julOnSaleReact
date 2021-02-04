import React from 'react';
import './Spinner.css';

class Spinner extends React.Component {
  render() {
	  const shouldShow = this.props.status;
	  if (shouldShow) {
		return <div className="loader">
			<div>
			</div>
			<h4>מביא פריטים...</h4>
			</div>
	  }
	  return null;
  }
}

export default Spinner;
