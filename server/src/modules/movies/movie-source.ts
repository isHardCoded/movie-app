export interface MovieSource {
	getMovies(page: number, order: string): Promise<unknown>
	getMovie(id: number): Promise<unknown>
	getVideos(id: number): Promise<unknown>
}
