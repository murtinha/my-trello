// @flow

import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import type { ListType, CardType } from '../../data';
import Card from '../card';

import './style.css';

type Props = {
  list: ListType,
  cards: CardType,
}

class List extends React.Component<Props> {
  render() {
    const { cards, list } = this.props;
    const { id, title } = list;
    return (
      <div className="List">
        <div className="List-header">
          <div className="List-header-titleWrapper">
            <div className="List-header-title">
              {title}
            </div>
            <span className="List-header-menu fas fa-ellipsis-h" />
          </div>
        </div>

        <Droppable droppableId={id}>
          {provided => (
            <div
              className="List-body"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {cards.map((card, idx) => (
                <Card
                  card={card}
                  index={idx}
                  key={card.id}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default List;
