import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("/directors")
      .then((res) => res.json())
      .then(setDirectors)
      .catch(console.error);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director, idx) => (
          <article key={idx}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, idx2) => (
                <li key={idx2}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
