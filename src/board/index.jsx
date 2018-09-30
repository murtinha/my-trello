// @flow

import React from 'react';
import './style.css';

type Props = {
  children: React$Node,
}

class Board extends React.Component<Props> {
  render() {
    return (
      <div className="Board">
        {this.props.children}
      </div>
    );
  }
}

export default Board;
