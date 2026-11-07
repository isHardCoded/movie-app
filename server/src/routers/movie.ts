import { Request, Response, Router } from 'express'
import "dotenv/config"

const router = Router()

router.get('/', async (_req: Request, res: Response) => {
	const response = await fetch(
		`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections`,
		{
			method: "GET",
			headers: {
				'X-API-KEY': process.env.KINOPOISK_API_KEY!,
    		'Content-Type': 'application/json',
			}
		}
	)

	const data = await response.json()
	res.status(200).json(data)
})

export default router
