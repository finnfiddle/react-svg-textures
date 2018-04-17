import { Component } from 'react';
import PropTypes from 'prop-types';
import textures from 'textures';
import isEqual from 'lodash.isequal';

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
    components: PropTypes.shape({
      defs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      g: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      circle: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      rect: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      pattern: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      path: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    }),
  }

  static defaultProps = {
    components: {
      defs: 'defs',
      g: 'g',
      circle: 'circle',
      rect: 'rect',
      pattern: 'pattern',
      path: 'path',
    },
  }

  state = {
    pattern: null,
  }

  componentWillMount() {
    this.generate();
  }

  componentDidUpdate(oldProps) {
    if (!isEqual(oldProps, this.props)) this.generate();
  }

  generate() {
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

    this.setState({
      pattern: selection.toReact(this.props.components),
    });
  }

  render() {
    return this.state.pattern;
  }
}
