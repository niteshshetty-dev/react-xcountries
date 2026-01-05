import "./Card.css";
function Card({ country }) {
  return (
    <div className="card">
      <div className="card-media">
        <img className="card-image" src={country.flag} alt={country.name} />
      </div>
      <div className="card-content">
        <span className="card-title">{country.name}</span>
      </div>
    </div>
  );
}

export default Card;
