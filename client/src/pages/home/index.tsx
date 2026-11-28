import { MOVIES_SERVICE } from '@/services/movie'
import type { Movie } from '@/types/movie'
import { useEffect, useState } from 'react'
import { MovieCard } from '@/components/blocks/movie/card'
import { MoviesPagination } from '@/components/blocks/movie/pagination'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

type Order = 'RATING' | 'NUM_VOTE' | 'YEAR'

type SortOption = {
	label: string
	value: Order
}

export function HomePage() {
	const [movies, setMovies] = useState<Movie[]>([])
	const [order, setOrder] = useState<Order>('RATING')
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [totalPages, setTotalPages] = useState<number>(1)

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<unknown | null>(null)

	useEffect(() => {
		async function getMovies() {
			try {
				setLoading(true)
				const data = await MOVIES_SERVICE.getAll(currentPage, order)
				setMovies(data.items)
				setTotalPages(data.totalPages)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}

		getMovies()
	}, [currentPage, order])

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
		// window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	if (error) {
		return <div>Ошибка</div>
	}

	const items: SortOption[] = [
		{ label: 'По рейтингу', value: 'RATING' },
		{ label: 'По оценкам', value: 'NUM_VOTE' },
		{ label: 'По году', value: 'YEAR' },
	]

	return (
		<div>
			<Select items={items}>
				<SelectTrigger className='w-[180px]'>
					<SelectValue placeholder='Сортировка' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{items.map(item => (
							<SelectItem
								onClick={() => setOrder(item.value)}
								key={item.value}
								value={item.value}
							>
								{item.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
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
