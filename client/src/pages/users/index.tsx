import { USER_SERVICE } from '@/services/user'
import type { UserResponse } from '@/types/user'
import { useEffect, useState } from 'react'

export function UsersPage() {
	const [users, setUsers] = useState<UserResponse[]>([])
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function getUsers() {
			try {
				const data = await USER_SERVICE.getAll()
				setUsers(data)
			} catch (err) {
				setError( 'Ошибка загрузки')
            }
		}

		getUsers()
	}, [])

	if (error) return <p>{error}</p>
	if (!users.length) return <p>Пользователей нет</p>

	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>
					{user.id} - {user.name} - {user.email}
				</li>
			))}
		</ul>
	)
}
