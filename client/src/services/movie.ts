import type { MoviesResponse } from "@/types/movie"
import { request } from "./request"

export const movie = {
  getAll: (page: number = 1) => request<MoviesResponse>(`/movies?page=${page}`)
}