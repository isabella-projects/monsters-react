import { Component } from "react";
import PropTypes from "prop-types";

import "./card-list.styles.css";

/**
 * CardList component for showing the monster cards.
 *
 * @class CardList
 * @extends Component
 * @example
 * // Usage example:
 * <CardList monsters={Array}
 */
class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    const { name, email, id } = monster;
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
                })}
            </div>
        );
    }
}

CardList.propTypes = {
    monsters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            website: PropTypes.string.isRequired,
            address: PropTypes.shape({
                city: PropTypes.string.isRequired,
                street: PropTypes.string.isRequired,
                suite: PropTypes.string.isRequired,
                zipcode: PropTypes.string.isRequired,
                geo: PropTypes.shape({
                    lat: PropTypes.string.isRequired,
                    lng: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
            company: PropTypes.shape({
                bs: PropTypes.string.isRequired,
                catchPhrase: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired
    ),
};

export default CardList;
