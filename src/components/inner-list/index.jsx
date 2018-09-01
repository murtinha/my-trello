// @flow

import React from 'react';

type Props = {
  children: React$Node,
}

class InnerList extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    if (this.props.children === nextProps.children) {
      return false;
    }
    return true;
  }

  render() {
    return this.props.children;
  }
}

export default InnerList;
