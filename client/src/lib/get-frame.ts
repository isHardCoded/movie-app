import type { Video } from '@/types/video'

export function getFrameSrc(video: Video): string {
	if (video.site === 'KINOPOISK_WIDGET') {
		return video.url.replace('https://widgets.kinopoisk.ru', '/kp-widget')
	}
	return video.url
}
