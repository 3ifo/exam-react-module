import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import dayjs from "dayjs";
import "../Index.css";

const apiKey = import.meta.env.VITE_API_KEY;

const PersonPage = () => {
  const { id } = useParams();
  const [valueId, setValueId] = useState(null);

  const handleApiId = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
      );
      const result = await response.json();
      setValueId(result);
    } catch (error) {
      setValueId(null);
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      handleApiId();
    }
  }, [id]);

  const calculateAge = (birthdate) => {
    const today = dayjs();
    const birthDate = dayjs(birthdate);
    return today.diff(birthDate, "year");
  };

  return (
    <>
      {id === null ? (
        <Navigate to="/homepage" />
      ) : (
        <>
          {valueId ? (
            <div className="person-page">
              <figure>
                {valueId.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${valueId.profile_path}`}
                    alt=""
                  />
                )}
              </figure>
              <h2>{valueId.name}</h2>
              <h4>Profession: {valueId.known_for_department}</h4>
              <p>
                <strong>Sex:</strong> {valueId.gender === 1 ? "Female" : "Male"}
              </p>
              <p>
                <strong>Age:</strong>
                {valueId.birthday && calculateAge(valueId.birthday)}
              </p>
              <p>
                <strong>Biography:</strong>
                {valueId.biography}
              </p>
            </div>
          ) : (
            <div>Nessun personaggio trovato</div>
          )}
        </>
      )}
    </>
  );
};

export default PersonPage;
