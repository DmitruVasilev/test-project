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
    description: "С фуа-гра",
    servings: "10 порций",
    gift: "мышь в подарок",
    weight: 0.5,
    unit: "кг",
    footer_default: "Чего сидишь? Порадуй котэ,",
    footer_selected: "Печень утки разварная с артишоками.",
    footer_disabled: "Чего сидишь? Порадуй котэ,",
    link_url: "#",
    link_text: "купи.",
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
