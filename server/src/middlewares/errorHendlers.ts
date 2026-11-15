import { NextFunction, Request, Response} from 'express'
import { AppError } from '../errors/AppError'
import { ERROR_CODES, ERROR_MESSAGES } from '../constants/errors'

export function errorHandlers(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const isAppError = error instanceof AppError
  const statusCode = isAppError ? error.statusCode:500
  const code = isAppError ? error.code: ERROR_CODES.INTERNAL_ERROR

  if(statusCode >= 500 ){
    console.error({
      method: req.method,
      path: req.path,
      error,
    })
  }
  res.status(statusCode).json({
    error:{
      code,
      message: ERROR_MESSAGES[code],
    },
  })
}
