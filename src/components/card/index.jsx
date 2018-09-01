// @flow

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import './style.css';

type Props = {
  card: {
    description: string,
    id: number,
  },
  index: number,
}

class Card extends React.Component<Props> {
  render() {
    const { card, index } = this.props;
    return (
      <Draggable draggableId={card.id} index={index}>
        {provided => (
          <div
            className="Card"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="Card-description">
              {card.description}
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Card;
