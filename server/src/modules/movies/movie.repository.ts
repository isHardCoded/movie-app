import { ERROR_CODES } from '../../constants/errors'
import { AppError } from '../../errors/AppError'
import { MovieSource } from './movie-source'

type MoviesApiConfig = {
	url: string
	apiKey: string
	timeoutMs: number
}

export class MovieRepository implements MovieSource {
	constructor(private readonly config: MoviesApiConfig) {}

	async getMovies(page: number, order: string): Promise<unknown> {
		const url = new URL(this.config.url)

		const signal = AbortSignal.timeout(this.config.timeoutMs)
		try {
			const response = await fetch(
				`${url}?page=${String(page)}&order=${order}`,
				{
					method: 'GET',
					headers: {
						'X-API-KEY': this.config.apiKey,
						'Content-Type': 'application/json',
					},
					signal,
				},
			)

			if (!response.ok) {
				throw new AppError(
					502,
					ERROR_CODES.MOVIES_API_ERROR,
					new Error(`Movies API returned HTTP ${response.status}`),
				)
			}

			const data: unknown = await response.json()
			return data
		} catch (error: unknown) {
			if (error instanceof AppError) {
				throw error
			}

			if (signal.aborted) {
				throw new AppError(504, ERROR_CODES.MOVIES_API_TIMEOUT, error)
			}
			console.log(error)
			throw new AppError(502, ERROR_CODES.MOVIES_API_ERROR, error)
		}
	}

	async getMovie(id: number): Promise<unknown> {
		const url = new URL(this.config.url)

		const signal = AbortSignal.timeout(this.config.timeoutMs)
		console.log(url)
		try {
			const response = await fetch(`${url}/${id}`, {
				method: 'GET',
				headers: {
					'X-API-KEY': this.config.apiKey,
					'Content-Type': 'application/json',
				},
				signal,
			})

			if (!response.ok) {
				throw new AppError(
					502,
					ERROR_CODES.MOVIE_API_ERROR,
					new Error(`Movies API returned HTTP ${response.status}`),
				)
			}

			const data: unknown = await response.json()
			return data
		} catch (error: unknown) {
			if (error instanceof AppError) {
				throw error
			}

			if (signal.aborted) {
				throw new AppError(504, ERROR_CODES.MOVIES_API_TIMEOUT, error)
			}

			throw new AppError(502, ERROR_CODES.MOVIE_API_ERROR, error)
		}
	}
}
