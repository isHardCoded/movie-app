import { MovieCard } from "./components/blocks/movie/card"
import { movie } from "./services/movie"
import type { Movie } from "./types/movie"
import { useEffect, useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  useEffect(() => {
    async function getMovies() {
      const data = await movie.getAll()
      setMovies(data.items)
      setTotalPages(data.totalPages)
    }

    getMovies()
  }, [])

  const handlePageChange = (page: number, e: React.MouseEvent) => {
    e.preventDefault()

    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const renderPageItems = () => {
    const items = []
    const maxVisible = 5

    let startPage = Math.max(1, currentPage - 2)
    let endPage = Math.min(totalPages, startPage + maxVisible - 2)

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1)
    }

    for (let i = startPage; i < endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink href="#" isActive={i === currentPage} onClick={(e) => handlePageChange(i, e)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }

    return items
  }
  
  return <div className="p-10">
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={(e) => handlePageChange(currentPage - 1, e)} />
        </PaginationItem>
        {renderPageItems()}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={(e) => handlePageChange(currentPage + 1, e)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    <ul className="flex flex-wrap gap-5 mt-10">
      {movies.map((movie) => (
          <li key={movie.kinopoiskId}>
            <MovieCard title={movie.nameOriginal! || movie.nameRu!} description={movie.description!} posterUrlPreview={movie.posterUrlPreview}  />
          </li>    
      ))}
    </ul> 
  </div>
}

export default App