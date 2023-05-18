const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {

    return (
        <div>
            <button onClick={() => onClose(id)}>x</button>
            <h1>{name}</h1>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <h3>{gender}</h3>
            <h3>{origin}</h3>
            <img src={image} alt="character image" />

        </div>
    )
}


export default Card
