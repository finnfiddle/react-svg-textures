import { Component } from 'react';
import PropTypes from 'prop-types';
import textures from 'textures';

import Selection from './selection';

export default class Paths extends Component {

  static displayName = 'Paths'

  static propTypes = {
    size: PropTypes.number,
    strokeWidth: PropTypes.number,
    d: PropTypes.oneOfType([
      PropTypes.oneOf([
        'squares',
        'nylon',
        'waves',
        'woven',
        'caps',
        'crosses',
        'hexagons',
      ]),
      PropTypes.func,
    ]),
    shapeRendering: PropTypes.string,
    stroke: PropTypes.string,
    background: PropTypes.string,
    id: PropTypes.string,
  }

  render() {
    const t = textures.paths();
    [
      'size',
      'strokeWidth',
      'shapeRendering',
      'stroke',
      'background',
      'id',
      'd',
    ].forEach((key) => {
      if (this.props[key]) t[key](this.props[key]);
    });
    const selection = new Selection();
    t(selection);
    return selection.toReact();
  }
}
