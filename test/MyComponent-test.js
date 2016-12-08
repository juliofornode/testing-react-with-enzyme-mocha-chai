import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import MyComponent from '../src/MyComponent';

describe('A suite', function() {
  it('contains the expected jsx node', function() {
    expect(shallow(<MyComponent />).contains(<div className='my-component'><h3>Hello World!</h3></div>)).to.equal(true);
  });

  it('is the expected class', function() {
    expect(shallow(<MyComponent />).is('.my-component')).to.equal(true);
  });

  it('the my-component class is applied only one time', function() {
    expect(mount(<MyComponent />).find('.my-component').length).to.equal(1);
  });
});
