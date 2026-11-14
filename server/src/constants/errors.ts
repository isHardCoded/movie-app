export const ERROR_CODES = {
	INVALID_PAGE: 'INVALID_PAGE',
	MOVIES_API_ERROR: 'MOVIES_API_ERROR',
	MOVIES_API_TIMEOUT: 'MOVIES_API_TIMEOUT',
	ROUTE_NOT_FOUND: 'ROUTE_NOT_FOUND',
	INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES]

export const ERROR_MESSAGES: Record<ErrorCode, string> = {
	INVALID_PAGE: 'Параметр page должен быть положительным целым числом',
	MOVIES_API_ERROR: 'Не удалось получить список фильмов',
	MOVIES_API_TIMEOUT: 'Сервис фильмов не ответил вовремя',
	ROUTE_NOT_FOUND: 'Маршрут не найден',
	INTERNAL_ERROR: 'Внутреняя ошибка сервера',
}
