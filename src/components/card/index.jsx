import React from 'react';

import './style.css';

export const Card: SComponent<Props> = ({
  description,
  amountNotifications = 1,
}) => (
  <div className="Card">
    <div className="Card-description">
      {description}
    </div> 

    <div className="Card-footer">
      <div className="Card-footer-notifications">
        <span className="Card-footer-icon far fa-bell" />
        <span className="Card-footer-amount">
          {amountNotifications}
        </span>
      </div>
    </div>
  </div>  
);

export default Card;
