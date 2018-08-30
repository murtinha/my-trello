import React from 'react';

import './style.css';

const List: SComponent<Props> = ({
  title,
  children,
}) => {
  const cardsAmount = React.Children.count(children);
  const amountText = cardsAmount > 1 && cardsAmount !== 0
    ? 'cards'
    : 'card';
  return (
    <div className="List">
      <div className="List-header">
        <div className="List-header-titleWrapper">
          <div className="List-header-title">
            {title}
          </div>
          <span className="List-header-menu fas fa-ellipsis-h" />
        </div>
        <div className="List-header-amount">
          {`${cardsAmount} ${amountText}`}
        </div>
      </div>

      <div className="List-body">
        {children}
      </div>
    </div>
  );
};

export default List;
