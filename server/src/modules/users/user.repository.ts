import { usersDB } from './usersDB'
import { UserSource } from './user-source'


export class UserRepository implements UserSource {
	async getUsers() {
		return usersDB
	}
}
