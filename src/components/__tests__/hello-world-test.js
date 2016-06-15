import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import HelloWorld from '../hello-world.jsx';

describe('HelloWorld', function () {
  it('works', function () {
    const renderer = createRenderer();
    renderer.render(<HelloWorld />);
    const component = renderer.getRenderOutput();
    expect(component.props.children).toEqual('Hello World');
  });
});
