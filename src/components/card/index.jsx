import React from 'react';

import './style.css';

export const Card: SComponent<Props> = ({
  description,
}) => (
  <div className="Card">
    <div className="Card-description">
      {description}
    </div> 
  </div>  
);

export default Card;
