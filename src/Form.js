import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props)
    this.check = this.check.bind(this)
  }
  check() {
    alert('React is just amazing');
  
  }

  render() {
    return (
      <button onClick={this.check}>click here!</button>
    );
  }
}
export default Form;
