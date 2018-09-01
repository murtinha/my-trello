// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import registerServiceWorker from './registerServiceWorker';
import List from './components/list';
import { list1 } from './data';

import './index.css';

type Props = {}

const root = document.getElementById('root');

class App extends React.Component<Props> {
  onDragEnd() {
    return null;
  }

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <List
          list={list1}
          key={list1.id}
        />
      </DragDropContext>
    );
  }
}

if (root === null) {
  throw new Error('no root element');
}

ReactDOM.render(<App />, root);
registerServiceWorker();
