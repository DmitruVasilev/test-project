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
      gift: PropTypes.string,
      weight: PropTypes.number,
      unit: PropTypes.string,
      footer_default: PropTypes.string,
      footer_selected: PropTypes.string,
      footer_disabled: PropTypes.string,
      link: PropTypes.string,
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
        return <span className="card__footer">{entities.footer_selected}</span>;
      case "disabled":
        return <span className="card__footer">{entities.footer_disabled}</span>;
      default:
        return (
          <span className="card__footer">
            {entities.footer_default}
            <span className="card__link" onClick={(evt) => this.onClickCard(state, evt, isHover)}>
              {entities.link_text}
            </span>
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
          <span className="card__caption">{entities.caption}</span>
          <span className="card__description">{entities.description}</span>
          <span className="card__servings">{entities.servings}</span>
          <span className="card__gift">{entities.gift}</span>
          <div className="card__circle">
            <span className="card__weight">{entities.weight}</span>
            <span className="card__unit">{entities.unit}</span>
          </div>
          <div className="img-wrapper">
            <img src={entities.img} alt="cat" />
          </div>
        </div>
        {this.getFooter(cardState, entities)}
      </li>
    );
  }
}

export default Card;
