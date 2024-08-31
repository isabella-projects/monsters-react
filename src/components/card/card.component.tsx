import { TMonster } from '../../utils/data.utils';
import './card.styles.css';

type TCardProps = {
    monster: TMonster;
};

const Card = ({ monster }: TCardProps) => {
    const { id, firstName, lastName, maidenName, age, gender, height, weight } = monster;
    const fullName = `${firstName} ${lastName}`;

    return (
        <div key={id} className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${fullName}`} />
            <h2>{fullName}</h2>
            <small>{maidenName}</small>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height} cm</p>
            <p>Weight: {weight} kg</p>
        </div>
    );
};

export default Card;
