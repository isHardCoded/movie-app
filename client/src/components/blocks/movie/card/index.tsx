import { Badge } from '@/components/ui/badge'
import {
	Card,
	CardAction,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Skeleton } from '@/components/ui/skeleton'

interface MovieCardProps {
	title: string | undefined
	description: string | undefined
	posterUrlPreview: string | undefined
	ratingKinopoisk: number | undefined | null
	kinopoiskId: number | undefined
	loading: boolean
}

export const MovieCard = ({
	title,
	description,
	posterUrlPreview,
	ratingKinopoisk,
	kinopoiskId,
	loading,
}: MovieCardProps) => {
	if (loading) {
		return (
			<div className=''>
				<Skeleton className='relative w-full h-90 aspect-video rounded-t-xl' />

				<div className='p-6'>
					<div className='flex items-center justify-between gap-2'>
						<Skeleton className='h-6 w-3/4' />
						<Skeleton className='h-6 w-10 rounded-full' />
					</div>

					<Skeleton className='mt-3 h-4 w-full' />
				</div>
			</div>
		)
	}

	return (
		<Link to={`/movie/${kinopoiskId}`}>
			<Card className='relative hover:shadow-lg transition-all hover:scale-102 pt-0 cursor-pointer'>
				<img
					src={posterUrlPreview}
					alt={title ?? 'Movie poster'}
					className='relative w-full h-90 aspect-video object-cover'
				/>

				<CardHeader>
					{ratingKinopoisk && (
						<CardAction>
							<Badge variant='secondary'>{ratingKinopoisk}</Badge>
						</CardAction>
					)}

					<CardTitle className='truncate'>{title}</CardTitle>
					<CardDescription className='truncate'>{description}</CardDescription>
				</CardHeader>
			</Card>
		</Link>
	)
}
