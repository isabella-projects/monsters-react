import "./card.styles.css";

const Card = ({ monster }) => {
    const { id, firstName, lastName, email, age } = monster;
    const fullName = `${firstName} ${lastName}`;

    return (
        <div key={id} className="card-container">
            <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt={`monster ${fullName}`}
            />
            <h2>{fullName}</h2>
            <p>{email}</p>
            <p>Age: {age * 5}</p>
        </div>
    );
};

export default Card;
