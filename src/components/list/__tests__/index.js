import React from 'react';
import TestRenderer from 'react-test-renderer';
import List from '../';


describe('<List />', () => {
  describe('render', () => {
    it('should render properly', () => {
      const comp = TestRenderer
        .create(
          <List title="titulo">
            <div>CHILDREN</div>
          </List>
        )
        .toJSON();
      expect(comp).toMatchSnapshot();
    });
  });
});
