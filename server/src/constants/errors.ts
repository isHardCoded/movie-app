export const ERROR_CODES = {
	INVALID_PAGE: 'INVALID_PAGE',
	INVALID_ORDER: 'INVALID_ORDER',
	MOVIES_API_ERROR: 'MOVIES_API_ERROR',
	MOVIES_API_TIMEOUT: 'MOVIES_API_TIMEOUT',
	MOVIE_API_ERROR: 'MOVIE_API_ERROR',
	ROUTE_NOT_FOUND: 'ROUTE_NOT_FOUND',
	INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES]

export const ERROR_MESSAGES: Record<ErrorCode, string> = {
	INVALID_PAGE: 'Параметр page должен быть положительным целым числом',
	INVALID_ORDER: 'Параметр сортироваки должен быть строкой',
	MOVIES_API_ERROR: 'Не удалось получить список фильмов',
	MOVIES_API_TIMEOUT: 'Сервис фильмов не ответил вовремя',
	MOVIE_API_ERROR: 'Не удалось получить инфморацию о фильме',
	ROUTE_NOT_FOUND: 'Маршрут не найден',
	INTERNAL_ERROR: 'Внутреняя ошибка сервера',
}
