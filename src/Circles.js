import { Component } from 'react';
import PropTypes from 'prop-types';
import textures from 'textures';

import Selection from './selection';

export default class Circles extends Component {

  static displayName = 'Circles'

  static propTypes = {
    size: PropTypes.number,
    strokeWidth: PropTypes.number,
    stroke: PropTypes.string,
    background: PropTypes.string,
    id: PropTypes.string,
    complement: PropTypes.bool,
    radius: PropTypes.number,
  }

  render() {
    const t = textures.circles();
    [
      'size',
      'strokeWidth',
      'stroke',
      'background',
      'id',
      'complement',
      'radius',
    ].forEach((key) => {
      if (this.props[key]) t[key](this.props[key]);
    });
    const selection = new Selection();
    t(selection);

    return selection.toReact();
  }
}
