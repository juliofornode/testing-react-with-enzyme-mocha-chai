import React from 'react';
import MyChild from './MyChild';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-component">
        <h3>Hello World!</h3>
        <p className="repeated-class unique">1</p>
        <p className="repeated-class">2</p>
        <p className="repeated-class">3</p>
        <MyChild />
      </div>
    );
  }
}


export default MyComponent;
