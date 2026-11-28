import { MovieHero } from '@/components/blocks/movie/hero'
import { getFrameSrc } from '@/lib/get-frame'
import { MOVIES_SERVICE } from '@/services/movie'
import type { MovieResponse } from '@/types/movie'
import { type Video } from '@/types/video'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function MoviePage() {
	const [movie, setMovie] = useState<MovieResponse>(null)
	const [videos, setVideos] = useState<Video[]>([])
	const { id } = useParams()

	useEffect(() => {
		async function fetchData() {
			const [movie, videos] = await Promise.all([
				MOVIES_SERVICE.getById(Number(id)),
				MOVIES_SERVICE.getVideos(Number(id)),
			])
			setMovie(movie)
			setVideos(videos.items)

			console.log(videos)
		}

		fetchData()
	}, [id])

	return (
		<div>
			<MovieHero movie={movie} />
			<div>
				{videos.map(video => (
					<iframe
						key={video.url}
						src={getFrameSrc(video)}
						width='500'
						height='281'
						allow='autoplay; fullscreen; encrypted-media'
						allowFullScreen
						title={video.name}
					/>
				))}
			</div>
		</div>
	)
}
