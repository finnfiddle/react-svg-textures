import React from 'react';
import camel from 'lodash.camelcase';

const rand = () =>
  (`${Math.random().toString(36)}00000000000000000`).replace(/[^a-z]+/g, '').slice(0, 5);

export default class Selection {

  children = []
  attrs = {}

  constructor(tagName) {
    this.tagName = tagName;
    return this;
  }

  append(tagName) {
    const child = new Selection(tagName);
    this.children.push(child);
    return child;
  }

  attr(key, value) {
    this.attrs[camel(key)] = value;
    return this;
  }

  toReact(components) {
    const children = this.children.map(child => child.toReact(components));
    const the = { component: components[this.tagName] };
    return this.tagName ? (
      <the.component {...this.attrs} key={this.attrs.id || rand()}>
        {children}
      </the.component>
    ) : children[0];
  }

}
