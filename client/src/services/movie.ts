import type { MoviesResponse } from "@/types/movie"
import { request } from "./request"

export const movie = {
  getAll: () => request<MoviesResponse>("/movies")
}