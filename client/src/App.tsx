import { MovieCard } from "./components/blocks/movie/card"
import { movie } from "./services/movie"
import type { Movie } from "./types/movie"
import { useEffect, useState } from "react"

function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    async function getMovies() {
      setMovies((await movie.getAll()).items)
    }

    getMovies()
  }, [])
  
  return <div className="p-10">
    <ul className="flex flex-wrap gap-5">
      {movies.map((movie) => (
          <li key={movie.kinopoiskId}>
            <MovieCard title={movie.nameOriginal! || movie.nameRu!} description={movie.description!} posterUrl={movie.posterUrl}  />
          </li>    
      ))}
    </ul> 
  </div>
}

export default App