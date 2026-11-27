import { MOVIES_SERVICE } from '@/services/movie'
import type { Movie } from '@/types/movie'
import { useEffect, useState } from 'react'
import { MovieCard } from '@/components/blocks/movie/card'
import { MoviesPagination } from '@/components/blocks/movie/pagination'

export function HomePage() {
	const [movies, setMovies] = useState<Movie[]>([])
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [totalPages, setTotalPages] = useState<number>(1)

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<unknown | null>(null)

	useEffect(() => {
		async function getMovies() {
			try {
				setLoading(true)
				const data = await MOVIES_SERVICE.getAll(currentPage)
				setMovies(data.items)
				setTotalPages(data.totalPages)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}

		getMovies()
	}, [currentPage])

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
		// window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	if (error) {
		return <div>Ошибка</div>
	}

	return (
		<div>
			<ul className='mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 xl:grid-cols-6'>
				{movies.map(movie => (
					<li key={movie.kinopoiskId}>
						<MovieCard
							title={movie.nameOriginal! || movie.nameRu!}
							description={movie.description!}
							posterUrlPreview={movie.posterUrlPreview}
							ratingKinopoisk={movie.ratingKinopoisk}
							kinopoiskId={movie.kinopoiskId}
							loading={loading}
						/>
					</li>
				))}
			</ul>
			<div className='mt-10'>
				<MoviesPagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</div>
		</div>
	)
}
