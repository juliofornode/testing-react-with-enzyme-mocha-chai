import React from 'react';
import MyChild from './MyChild';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-component">
        <h3 className="exclusive">Hello World!</h3>
        <p className="repeated-class unique">1</p>
        <p className="repeated-class">2</p>
        <p className="repeated-class">3</p>
        <MyChild />
        <ul>
          <li>This is an li element</li>
          <li>This is an li element</li>
        </ul>
      </div>
    );
  }
}


export default MyComponent;
