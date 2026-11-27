import { User } from './user.types'

export const usersDB: User[] = [
	{
		id: 1,
		name: 'Алексей Смирнов',
		email: 'alexey.smirnov@example.com',
		createdAt: new Date('2026-01-15T10:00:00Z'),
		updatedAt: new Date('2026-01-15T10:00:00Z'),
	},
	{
		id: 2,
		name: 'Мария Иванова',
		email: 'maria.ivanova@example.com',
		createdAt: new Date('2026-02-20T14:30:00Z'),
		updatedAt: new Date('2026-02-21T09:15:00Z'),
	},
	{
		id: 3,
		name: 'Дмитрий Козлов',
		email: 'dmitry.kozlov@example.com',
		createdAt: new Date('2026-03-10T18:45:00Z'),
		updatedAt: new Date('2026-03-10T18:45:00Z'),
	},
]
