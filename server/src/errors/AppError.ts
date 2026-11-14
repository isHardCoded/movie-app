import { ERROR_MESSAGES, ErrorCode } from '../constants/errors'

export class AppError extends Error {
	constructor(
		public readonly statusCode: number,
		public readonly code: ErrorCode,
		public readonly originalError?: unknown,
	) {
		super(ERROR_MESSAGES[code])
	}
}
