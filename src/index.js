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
  constructor(props: Props) {
    super(props);
    this.state = initialData;
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId
      && destination.index === source.index) {
      return;
    }

    const list = this.state.lists[source.droppableId];
    const newCardIds = [...list.cardIds];
    newCardIds.splice(source.index, 1);
    newCardIds.splice(destination.index, 0, draggableId);

    const newList = {
      ...list,
      cardIds: newCardIds,
    };

    const newState = {
      ...this.state,
      lists: {
        ...this.state.lists,
        [newList.id]: newList,
      },
    };

    this.setState(newState);
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
