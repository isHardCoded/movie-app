import express from 'express'
import { MovieRepository } from './modules/movies/movie.repository'
import { env } from './config/env'
import { MovieService } from './modules/movies/movie.service'
import { MovieController } from './modules/movies/movie.controller'
import { createMovieRouter } from './modules/movies/movie.routes'
import { errorHandler } from './middlewares/errorHandler'
import { AppError } from './errors/AppError'
import { ERROR_CODES } from './constants/errors'

const app = express()

app.use(express.json())

const movieRepository = new MovieRepository({
	url: env.moviesApiUrl,
	apiKey: env.moviesApiKey,
	timeoutMs: env.moviesApiTimeoutMs,
})

const movieService = new MovieService(movieRepository)
const movieController = new MovieController(movieService)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/movies', createMovieRouter(movieController))

app.use((_req,_res, next) => {
	next(new AppError(404, ERROR_CODES.ROUTE_NOT_FOUND))
})

app.use(errorHandler)

export default app