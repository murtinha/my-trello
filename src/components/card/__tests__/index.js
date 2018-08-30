import React from 'react';
import TestRenderer from 'react-test-renderer';
import Card from '../';


describe('<Card />', () => {
  describe('render', () => {
    it('should render properly', () => {
      const comp = TestRenderer
       .create(<Card description="ola" />)
       .toJSON();
      expect(comp).toMatchSnapshot();
    });
  });
});
