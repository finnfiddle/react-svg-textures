import expect from 'expect'; // eslint-disable-line
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Lines from '../src/Lines';

configure({ adapter: new Adapter() });

describe('Lines', () => {

  it('kitchensink', () => {
    const actual = shallow(<Lines
      strokeWidth={10}
      stroke='purple'
      size={10}
      orientation='diagonal'
      shapeRendering='foo'
      background='blue'
      id='bar'
    />);
    expect(actual.containsMatchingElement(<defs><pattern id='bar' patternUnits='userSpaceOnUse' width={10} height={10}><rect width={10} height={10} fill='blue' /><path d='M 0,10 l 10,-10 M -2.5,2.5 l 5,-5 M 7.5,12.5 l 5,-5' strokeWidth={10} shapeRendering='foo' stroke='purple' strokeLinecap='square' /></pattern></defs>)).toBe(true);
  });

});

