export interface Video {
	url: string
	name: string
	site: string
}

export interface VideosResponse {
	total: number
	items: Video[]
}
