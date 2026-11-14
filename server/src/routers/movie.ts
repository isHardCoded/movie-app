import { Request, Response, Router } from 'express'
import 'dotenv/config'

const router = Router()

const KINOPOISK_URL =
	'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections'

function parsePage(value: unknown): number {
	const n = Number(value)
	return Number.isInteger(n) && n >= 1 ? n : 1
}

router.get('/', async (req: Request, res: Response) => {
	const page = parsePage(req.query.page)

	const url = new URL(KINOPOISK_URL)
	console.log(url)

	url.searchParams.set('page', String(page))

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'X-API-KEY': process.env.KINOPOISK_API_KEY!,
				'Content-Type': 'application/json',
			},
		})

		if (!response.ok) {
			return res
				.status(response.status)
				.json({ error: `API ответил: ${response.status}` })
		}

		const data = await response.json()
		res.status(200).json(data)
	} catch (err) {
		console.error(`Ошибка запроса к API: ${err}`)
		return res.status(502).json({ error: 'Не удалось получить список фильмов' })
	}
})

export default router
