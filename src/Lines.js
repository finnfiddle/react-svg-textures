import { Component } from 'react';
import PropTypes from 'prop-types';
import textures from 'textures';

import Selection from './selection';

export default class Lines extends Component {

  static displayName = 'Lines'

  static propTypes = {
    size: PropTypes.number,
    strokeWidth: PropTypes.number,
    orientation: PropTypes.string,
    shapeRendering: PropTypes.string,
    stroke: PropTypes.string,
    background: PropTypes.string,
    id: PropTypes.string,
  }

  render() {
    const t = textures.lines();
    [
      'size',
      'strokeWidth',
      'orientation',
      'shapeRendering',
      'stroke',
      'background',
      'id',
    ].forEach((key) => {
      if (this.props[key]) t[key](this.props[key]);
    });
    const selection = new Selection();
    t(selection);

    return selection.toReact();
  }
}
