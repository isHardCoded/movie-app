import { Request, Response, Router } from 'express'
import type { Movie } from '../types/movie'

const router = Router()

router.get('/:title', async (req: Request, res: Response) => {
	const title = req.params.title

	if (!title) {
		res.status(400).json({ error: 'Укажите название фильма' })
	}

	const response = await fetch(
		`http://www.omdbapi.com/?apikey=1996fd5a&i=${title}`,
	)

	const data = await response.json()
	console.log(data)

	res.status(200).json(data)
})

export default router
