import expect from 'expect'; // eslint-disable-line
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Paths from '../src/Paths';

configure({ adapter: new Adapter() });

describe('Paths', () => {

  it('static d', () => {
    const actual = shallow(<Paths
      strokeWidth={10}
      stroke='purple'
      size={10}
      background='blue'
      id='bar'
      complement
      radius={20}
      shapeRendering='foo'
      d='squares'
    />);
    expect(actual.containsMatchingElement(<defs><pattern id='bar' patternUnits='userSpaceOnUse' width={10} height={10}><rect width={10} height={10} fill='blue' /><path d='M 2.5 2.5 l 5 0 l 0 5 l -5 0 Z' fill='transparent' stroke='purple' strokeWidth={10} strokeLinecap='square' shapeRendering='foo' /></pattern></defs>)).toBe(true);
  });

  it('func d', () => {
    const actual = shallow(<Paths
      strokeWidth={10}
      stroke='purple'
      size={10}
      background='blue'
      id='bar'
      complement
      radius={20}
      shapeRendering='foo'
      d={s => `M 0,${(s * 3) / 4} l ${s / 2},${-s / 2} l ${s / 2},${s / 2}`}
    />);
    expect(actual.containsMatchingElement(<defs><pattern id='bar' patternUnits='userSpaceOnUse' width={10} height={10}><rect width={10} height={10} fill='blue' /><path d='M 0,7.5 l 5,-5 l 5,5' fill='transparent' stroke='purple' strokeWidth={10} strokeLinecap='square' shapeRendering='foo' /></pattern></defs>)).toBe(true);
  });

});

