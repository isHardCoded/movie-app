import { ERROR_CODES } from '../constants/errors'
import { AppError } from '../errors/AppError'

export function parseOrder(value: unknown): string {
	if (value === undefined) {
		return 'RATING'
	}

	if (typeof value !== 'string') {
		throw new AppError(400, ERROR_CODES.INVALID_ORDER)
	}

	const order = String(value)
	return order
}
