import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import MyComponent from '../src/MyComponent';
import MyChild from '../src/MyChild';

describe('A suite', function() {
  it('is the expected class', function() {
    expect(shallow(<MyComponent />).is('.my-component')).to.equal(true);
  });

  it('the my-component class is applied only one time', function() {
    expect(mount(<MyComponent />).find('.my-component').length).to.equal(1);
  });
});

describe('Find methods (find, filter, at index, etc)', () => {
  let myWrapper;

  beforeEach(() => {
    myWrapper = shallow(<MyComponent />);
  });

  it('should find a css class', () => {
    expect(myWrapper.find('.my-component')).to.have.length(1);
  });

  it('should find that a css class occurs 3 times', () => {
    expect(myWrapper.find('.repeated-class')).to.have.length(3);
  });

  it('should find a child component', () => {
    expect(myWrapper.find(MyChild)).to.have.length(1);
  });

  it('should find a child component by name', () => {
    expect(myWrapper.find('MyChild')).to.have.length(1);
  });

  it('should find the number of filtered items', () => {
    expect(myWrapper.find('.repeated-class').filter('.unique')).to.have.length(1);
  });

  it('should find the number of negative-filetered items', () => {
    expect(myWrapper.find('.repeated-class').not('.unique')).to.have.length(2);
  });

  it('should find the value of the first item', () => {
    expect(myWrapper.find('MyChild').first()).to.have.length(1);
  });

});
