import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service'

export class UserController {
	constructor(private readonly userService: UserService) {}

	getUsers = async (_req: Request, res: Response, next: NextFunction) => {
		try {
			const users = await this.userService.getUsers()
			res.json(users)
		} catch (error) {
			next(error)
		}
	}
}
