// @flow

import React from 'react';

import './style.css';

type Props = {
  description: string,
}

export const Card: SComponent<Props> = ({
  description,
}) => (
  <div className="Card">
    <div className="Card-description">
      {description}
    </div>

    <div className="Card-footer" />
  </div>
);

export default Card;
