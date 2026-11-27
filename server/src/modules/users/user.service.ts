import { UserSource } from "./user-source"

export class UserService {
	constructor(private readonly userSource: UserSource) {}

	async getUsers(): Promise<unknown> {
		return this.userSource.getUsers()
	}
}
