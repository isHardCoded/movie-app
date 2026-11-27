import { request } from './request'
import type { UserResponse } from '@/types/user'

export const USER_SERVICE = {
    getAll: () => request<UserResponse[]>(`/users`),
}
