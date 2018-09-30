// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import registerServiceWorker from './registerServiceWorker';
import Board from './board';
import List from './components/list';
import { initialData } from './data';

import './index.css';

type Props = {}

const root = document.getElementById('root');

class App extends React.Component<Props, State> {
  state = initialData;

  onDragEnd(result) {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId
      && destination.index === source.index) {
      return;
    }
  }

  renderLists() {
    return this.state.listOrder.map(listId => {
      const list = this.state.lists[listId];
      const cards = list.cardIds.map(
        cardId => this.state.cards[cardId]
      );

      return (
        <List list={list} cards={cards} key={list.id} />
      );
    });
  }

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <Board>
          {this.renderLists()}
        </Board>
      </DragDropContext>
    );
  }
}

if (root === null) {
  throw new Error('no root element');
}

ReactDOM.render(<App />, root);
registerServiceWorker();
