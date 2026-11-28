import type { MovieResponse, MoviesResponse } from '@/types/movie'
import { request } from './request'
import type { VideosResponse } from '@/types/video'

export const MOVIES_SERVICE = {
	getAll: (page: number = 1, order: string = 'RATING') =>
		request<MoviesResponse>(`/movies?page=${page}&order=${order}`),
	getById: (id: number = 1) => request<MovieResponse>(`/movies/${id}`),
	getVideos: (id: number) => request<VideosResponse>(`/movies/videos/${id}`),
}
