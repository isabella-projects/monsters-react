import Card from '../card/card.component';
import { TMonster } from '../../utils/data.utils';
import './card-list.styles.css';

type CardListProps = {
    monsters: TMonster[];
};

const CardList = ({ monsters }: CardListProps) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return <Card key={monster.id} monster={monster} />;
        })}
    </div>
);

export default CardList;
