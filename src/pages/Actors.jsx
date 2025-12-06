import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("/actors")
      .then((res) => res.json())
      .then(setActors)
      .catch(console.error);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor, idx) => (
          <article key={idx}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, idx2) => (
                <li key={idx2}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
