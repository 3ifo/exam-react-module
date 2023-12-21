import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import "../App.css";
import "../Index.scss";
const apiKey = import.meta.env.VITE_API_KEY;

const HomePage = () => {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`
      );
      const result = await response.json();
      setPeople(result.results);
    } catch (error) {
      setError("Error.Try Again.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <h1>Popular People of the Day</h1>
      {error && <div className="error-message">{error}</div>}
      {!error && people.length === 0 && <div>Loading...</div>}
      {!error && people.length !== 0 && (
        <div className="container">
          {people.map((p, index) => {
            return (
              <div key={index}>
                <PersonCard
                  id={p.id}
                  imagePath={p.profile_path}
                  name={p.name}
                  occupation={p.known_for_department}
                  popularity={p.popularity}
                  sex={p.gender}
                  works={p.known_for}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default HomePage;
