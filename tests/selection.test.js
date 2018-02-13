import expect from 'expect'; // eslint-disable-line
import React from 'react';
import textures from 'textures';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Selection from '../src/selection';

configure({ adapter: new Adapter() });

describe('selection', () => {

  it('lines thicker', () => {
    const t = textures.lines().thicker();
    const selection = new Selection();
    t(selection);
    const actual = shallow(selection.toReact());
    expect(actual.containsMatchingElement(<defs><pattern patternUnits='userSpaceOnUse' width={10} height={10}><path d='M 0,10 l 10,-10 M -2.5,2.5 l 5,-5 M 7.5,12.5 l 5,-5' strokeWidth={2} shapeRendering='auto' stroke='#343434' strokeLinecap='square' /></pattern></defs>)).toBe(true);
  });

  it('kitchensink', () => {
    const t = textures.lines()
      .orientation('diagonal')
      .size(40)
      .strokeWidth(26)
      .stroke('darkorange')
      .background('firebrick');
    const selection = new Selection();
    t(selection);
    const actual = shallow(selection.toReact());
    expect(actual.containsMatchingElement(<defs><pattern patternUnits='userSpaceOnUse' width={40} height={40}><rect width={40} height={40} fill='firebrick' /><path d='M 0,40 l 40,-40 M -10,10 l 20,-20 M 30,50 l 20,-20' strokeWidth={26} shapeRendering='auto' stroke='darkorange' strokeLinecap='square' /></pattern></defs>)).toBe(true);
  });

});

