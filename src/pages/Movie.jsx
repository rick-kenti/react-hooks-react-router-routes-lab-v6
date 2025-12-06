import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/movies/${id}`)
      .then((res) => res.json())
      .then(setMovie)
      .catch(console.error);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres?.map((genre, idx) => (
          <span key={idx}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
