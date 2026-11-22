export interface User {
	id: number
	name: string
	email: string
	createdAt: Date
	updatedAt: Date
}

export interface CreateUserInput {
	name: string
	email: string
}

export interface UserRepository {
	create(input: CreateUserInput): Promise<User>
}
