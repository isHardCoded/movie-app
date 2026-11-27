import { User } from './user.types'

export interface UserSource {
	getUsers(): Promise<User[]>
}
