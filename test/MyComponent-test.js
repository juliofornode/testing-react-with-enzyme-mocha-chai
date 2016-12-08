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

describe('Contain methods (contains, equals, matches, etc)', () => {
  let myWrapper;
  beforeEach(() => {
    myWrapper = shallow(<MyComponent />);
  });

  it('should contain a MyChild element', () => {
    expect(myWrapper.contains(<MyChild />)).to.equal(true);
  });

  it('should contain the described p elements', () => {
    expect(myWrapper.contains([
      <p className="repeated-class unique">1</p>,
      <p className="repeated-class">2</p>
    ])).to.equal(true);
  });

  it('should have class my-component', () => {
    expect(myWrapper.hasClass('my-component')).to.equal(true);
  });

  it('the h3 element should have the class exclusive', () => {
    expect(myWrapper.find('h3').hasClass('exclusive')).to.equal(true);
  });

  it('the shallow copy has the type of div', () => {
    expect(myWrapper.type()).to.equal('div');
  });

});

describe('Children and parent methods', () => {
  let myWrapper;

  beforeEach(() => {
    myWrapper = shallow(<MyComponent />);
  });

  it('the ul element has 2 children', () => {
    expect(myWrapper.find('ul').children()).to.have.length(2);
  });

  it('the li element has ul as parent', () => {
    expect(myWrapper.find('li').parent().is('ul')).to.equal(true);
  });


});

describe('Cheerio Wrapper', () => {
  let myWrapper;
  beforeEach(() => {
    myWrapper = shallow(<MyComponent />);
  });

  it('should find a h5 element inside a Cheerio Wraper', () => {
    expect(myWrapper.render(MyChild).find('h5')).to.have.length(1);
  });

});

describe('State and props methods', () => {
  let myWrapper;
  beforeEach(() => {
    myWrapper = shallow(<MyComponent name='Napoleon'/>);
  });

  it('should have the expected state', () => {
    expect(myWrapper.state('word')).to.equal('secret');
  });

  it('the shallow component should have the expected prop', () => {
    expect(myWrapper.prop('name')).to.equal('Napoleon');
  });

});
