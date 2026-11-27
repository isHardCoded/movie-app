import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import type { MovieResponse } from '@/types/movie'
import { Heart } from 'lucide-react'

interface MovieHeroProps {
	movie: MovieResponse | null
}

export function MovieHero({ movie }: MovieHeroProps) {
	if (!movie) {
		return null
	}

	const countries = movie.countries?.map(({ country }) => country).join(', ')
	const genres = movie.genres?.map(({ genre }) => genre).join(', ')

	const formatDuration = (minutes?: number | null) => {
		if (!minutes) return null

		const hours = Math.floor(minutes / 60)
		const restMinutes = minutes % 60

		return hours > 0 ? `${hours} ч ${restMinutes} мин` : `${restMinutes} мин`
	}

	const duration = formatDuration(movie.filmLength)
	const ageLimit = movie.ratingAgeLimits?.replace('age', '')

	const about = [
		{
			label: 'Год производства',
			value: movie.year ? String(movie.year) : null,
		},
		{ label: 'Страна', value: countries },
		{ label: 'Жанр', value: genres },
		{ label: 'Слоган', value: movie.slogan ?? null },
		{ label: 'Время', value: duration },
	].filter((item): item is { label: string; value: string } =>
		Boolean(item.value),
	)

	return (
		<section className='px-6 pt-10 sm:px-12 lg:px-24'>
			<BackButton className='mb-6' />

			<div className='flex flex-col gap-8 md:flex-row'>
				{/* Постер слева */}
				<div className='w-full shrink-0 md:w-[300px]'>
					<img
						src={movie.posterUrl ?? ''}
						alt={movie.nameRu ?? movie.nameOriginal ?? 'Фильм'}
						className='aspect-[2/3] w-full rounded-lg object-cover'
					/>
				</div>

				{/* Центральный блок */}
				<div className='min-w-0 flex-1'>
					<h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
						{movie.nameRu ?? movie.nameOriginal}
					</h1>

					{ageLimit && (
						<p className='mt-2 text-sm text-muted-foreground'>{ageLimit}+</p>
					)}

					{(movie.shortDescription ?? movie.description) && (
						<p className='mt-4 max-w-xl text-base leading-relaxed'>
							{movie.shortDescription ?? movie.description}
						</p>
					)}

					<div className='mt-6 flex items-center gap-3'>
						<Button className='bg-green-600 px-10 py-6 text-base font-semibold text-white hover:bg-green-500'>
							Смотреть
						</Button>

						<Button
							variant='outline'
							size='icon'
							aria-label='Добавить в избранное'
							className='h-12 w-12 rounded-lg'
						>
							<Heart />
						</Button>
					</div>

					<h2 className='mt-12 text-xl font-semibold'>О фильме</h2>

					<dl className='mt-4 space-y-3 text-sm'>
						{about.map(item => (
							<div key={item.label} className='flex gap-4'>
								<dt className='w-40 shrink-0 text-muted-foreground'>
									{item.label}
								</dt>
								<dd>{item.value}</dd>
							</div>
						))}
					</dl>
				</div>

				{/* Рейтинги справа */}
				{(movie.ratingKinopoisk != null || movie.ratingImdb != null) && (
					<div className='flex shrink-0 gap-6 md:w-40 md:flex-col'>
						{movie.ratingKinopoisk != null && (
							<div>
								<span className='text-2xl font-bold text-green-600'>
									{movie.ratingKinopoisk}
								</span>
								<p className='text-sm text-muted-foreground'>Кинопоиск</p>
							</div>
						)}

						{movie.ratingImdb != null && (
							<div>
								<span className='text-2xl font-bold text-green-600'>
									{movie.ratingImdb}
								</span>
								<p className='text-sm text-muted-foreground'>IMDb</p>
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	)
}
