import expect from 'expect'; // eslint-disable-line
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Circles from '../src/Circles';

configure({ adapter: new Adapter() });

describe('Circles', () => {

  it('kitchensink', () => {
    const actual = shallow(<Circles
      strokeWidth={10}
      stroke='purple'
      size={10}
      background='blue'
      id='bar'
      complement
      radius={20}
    />);
    expect(actual.containsMatchingElement(<defs><pattern id='bar' patternUnits='userSpaceOnUse' width={10} height={10}><rect width={10} height={10} fill='blue' /><circle cx={5} cy={5} r={20} fill='#343434' stroke='purple' strokeWidth={10} /><circle cx={0} cy={0} r={20} fill='#343434' stroke='purple' strokeWidth={10} /><circle cx={0} cy={10} r={20} fill='#343434' stroke='purple' strokeWidth={10} /><circle cx={10} cy={0} r={20} fill='#343434' stroke='purple' strokeWidth={10} /><circle cx={10} cy={10} r={20} fill='#343434' stroke='purple' strokeWidth={10} /></pattern></defs>)).toBe(true);
  });

});

