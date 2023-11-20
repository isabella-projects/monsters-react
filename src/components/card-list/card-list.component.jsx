import Card from "../card/card.component";
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
const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return <Card key={monster.id} monster={monster} />;
        })}
    </div>
);

export default CardList;
