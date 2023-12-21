import { Link } from "react-router-dom";
import "../Index.scss";

const PersonCard = ({
  id,
  name,
  occupation,
  sex,
  popularity,
  works,
  imagePath,
}) => {
  return (
    <Link to={`/person/${id}`}>
      <div className="person-card" key={id}>
        <h2>{name}</h2>
        <figure>
          <img src={`https://image.tmdb.org/t/p/w200${imagePath}`} alt="" />
        </figure>
        <h4>Occupation: {occupation}</h4>
        <p>
          <strong>Sex:</strong> {sex === 1 ? "Female" : "Male"}
        </p>
        <p>
          <strong>Popularity:</strong> {popularity}
        </p>
        <strong>Works:</strong>
        <ul>
          {works.map((work, index) => (
            <li key={index}>{work.title}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default PersonCard;
