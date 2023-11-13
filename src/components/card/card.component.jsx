import { Component } from "react";
import PropTypes from "prop-types";

import "./card.styles.css";

class Card extends Component {
    render() {
        const { name, email, id } = this.props.monster;
        return (
            <div key={id} className="card-container">
                <img
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                    alt={`monster ${name}`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

Card.propTypes = {
    monster: PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
};

export default Card;
