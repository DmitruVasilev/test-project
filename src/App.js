import React, {Component} from "react";
import Card from "./components/Card";
import cat from "./img/cat.png";
import "./sass/general.sass";

const cards = [
  {
    key: 1,
    state: "default",
    header: "Сказочное заморское яство",
    caption: "Нямушка",
    description: "c фуа-гра",
    servings: "порций",
    number_of_servings: "10",
    gift: "мышь в подарок",
    number_of_gift: "",
    super_good: "",
    weight: "0,5",
    unit: "кг",
    footer_default: "Чего сидишь? Порадуй котэ,",
    footer_selected: "Печень утки разварная с артишоками.",
    footer_disabled: "Печалька, с фуа-гра закончился.",
    img: cat,
  },
  {
    key: 2,
    state: "selected",
    header: "Сказочное заморское яство",
    caption: "Нямушка",
    description: "c рыбой",
    servings: "порций",
    number_of_servings: "40",
    gift: "мыши в подарок",
    number_of_gift: "2",
    super_good: "",
    weight: "2",
    unit: "кг",
    footer_default: "Чего сидишь? Порадуй котэ,",
    footer_selected: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    footer_disabled: "Печалька, с рыбой закончился.",
    img: cat,
  },
  {
    key: 3,
    state: "disabled",
    header: "Сказочное заморское яство",
    caption: "Нямушка",
    description: "c курой",
    servings: "порций",
    number_of_servings: "100",
    gift: "мышей в подарок",
    number_of_gift: "5",
    super_good: "заказчик доволен",
    weight: "5",
    unit: "кг",
    footer_default: "Чего сидишь? Порадуй котэ,",
    footer_selected: "Филе из цыплят с трюфелями в бульоне.",
    footer_disabled: "Печалька, с курой закончился.",
    img: cat,
  },
];

class App extends Component {
  render() {
    return (
      <section className="cards">
        <h1 className="cards__title">Ты сегодня покормил кота?</h1>
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card.key} entities={card} />
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
