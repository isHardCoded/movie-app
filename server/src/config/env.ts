function requireEnv(name: string): string {
	const value = process.env[name]?.trim()

	if (!value) {
		throw new Error(`Не задана переменная окружения ${name}`)
	}

	return value
}

const moviesApiUrl = requireEnv('KINOPOISK_URL')
new URL(moviesApiUrl)

export const env = {
	moviesApiUrl,
	moviesApiKey: requireEnv('KINOPOISK_API_KEY'),
	moviesApiTimeoutMs: 8_000,
}
