import { NextFunction, Request, Response } from 'express'
import { parsePage } from '../../validators/parsePage'
import { MovieService } from './movie.service'
import { parseOrder } from '../../validators/parseOrder'

export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	getMovies = async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			const page = parsePage(req.query.page)
			const order = parseOrder(req.query.order)

			const movies = await this.movieService.getMovies(page, order)

			res.status(200).json(movies)
		} catch (error: unknown) {
			next(error)
		}
	}

	getMovie = async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			const id = Number(req.params.id)
			const movie = await this.movieService.getMovie(id)

			res.status(200).json(movie)
		} catch (error: unknown) {
			next(error)
		}
	}
}
