// @flow

import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import List from '../components/list';
import { list1 } from '../data';

import './style.css';

type Props = {}

class Board extends React.Component<Props> {
  render() {
    return (
      <Droppable droppableId="board-1">
        {provided => (
          <div className="Board" ref={provided.innerRef}>
            <List
              title={list1.title}
              cards={list1.cards}
              {...provided.droppableProps}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default Board;
