import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Card.sass";

class Card extends Component {
  static propTypes = {
    entities: PropTypes.shape({
      key: PropTypes.number,
      state: PropTypes.string,
      header: PropTypes.string,
      caption: PropTypes.string,
      description: PropTypes.string,
      servings: PropTypes.string,
      number_of_servings: PropTypes.string,
      gift: PropTypes.string,
      number_of_gift: PropTypes.string,
      super_good: PropTypes.string,
      weight: PropTypes.string,
      unit: PropTypes.string,
      footer_default: PropTypes.string,
      footer_selected: PropTypes.string,
      footer_disabled: PropTypes.string,
      img: PropTypes.string,
    }),
  };

  static defaultProps = {
    entities: {},
  };

  state = {
    cardState: this.props.entities.state || "default",
    hover: false,
  };

  onClickCard = (state, evt, isHover = true) => {
    evt.preventDefault();
    if (state === "default") {
      this.setState({
        cardState: "selected",
        hover: isHover,
      });
    }
    if (state === "selected") {
      this.setState({
        cardState: "default",
        hover: isHover,
      });
    }
    return null;
  };

  getFooter = (state, entities) => {
    const isHover = false;
    switch (state) {
      case "selected":
        return <span className="footer-text">{entities.footer_selected}</span>;
      case "disabled":
        return <span className="footer-text">{entities.footer_disabled}</span>;
      default:
        return (
          <span className="footer-text">
            {entities.footer_default}
            <span className="footer-text__button" onClick={(evt) => this.onClickCard(state, evt, isHover)}>
              купи
            </span>
            <span className="footer-text__dot">.</span>
          </span>
        );
    }
  };

  toggleHover = () => {
    this.setState({
      hover: false,
    });
  };

  render() {
    const {cardState, hover} = this.state;
    const {entities} = this.props;
    return (
      <li className="card-wrapper">
        <div
          className={`card card--${cardState} ${hover ? "card--hoverOff" : ""}`}
          onClick={(evt) => this.onClickCard(cardState, evt)}
          onMouseLeave={this.toggleHover}
        >
          <div className="card__decor" />
          <span className="card__header">{entities.header}</span>
          <h3 className="card__caption">{entities.caption}</h3>
          <span className="card__description">{entities.description}</span>
          <span className="card__servings">
            <span>{entities.number_of_servings} </span>
            {entities.servings}
          </span>
          <span className="card__gift">
            {entities.number_of_gift && <span>{entities.number_of_gift} </span>}
            {entities.gift}
          </span>
          <span className="card__super_good">{entities.super_good}</span>
          <div className="circle">
            <span className="circle__weight">{entities.weight}</span>
            <span className="circle__unit">{entities.unit}</span>
          </div>
          <div className="card__img">
            <img src={entities.img} alt="cat" />
          </div>
          {cardState === "disabled" ? <div className="overlay" /> : ""}
        </div>
        {this.getFooter(cardState, entities)}
      </li>
    );
  }
}

export default Card;
