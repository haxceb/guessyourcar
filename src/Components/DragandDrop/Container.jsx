import { useState, useCallback, useEffect } from "react";
import { Card } from "./Card";
import update from "immutability-helper";
const style = {
  width: 280,
};
export const Container = ({
  answerOptions,
  checkBox,
  setCheckBox,
  questionNumber,
}) => {
  {
    const [cards, setCards] = useState(answerOptions ?? []);

    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
      },
      [cards]
    );

    useEffect(() => {
      if (cards) {
        setCheckBox({
          ...checkBox,
          [questionNumber]: cards,
        });
        console.log({ checkBox });
      }
    }, [cards]);
    const renderCard = (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    };
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};
