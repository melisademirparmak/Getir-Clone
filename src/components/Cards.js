import React, { useState, useEffect } from 'react';
import cardData from 'api/cards.json';
import CardItem from 'components/ui/CardItem';

const Cards = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    setCard(cardData);
  }, []);
  return (
    <>
      <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {card && card.map((card, key) => <CardItem key={key} card={card} />)}
      </div>
    </>
  );
};

export default Cards;
