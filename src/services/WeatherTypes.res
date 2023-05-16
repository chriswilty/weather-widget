type weather = {
	code: string,
	description: string
}

type temperature = {
	minimum: string,
	current: string,
	maximum: string
}

type wind = {
	speed: string,
	fromDegrees: int
}

type forecast_data = {
	id: int,
	location: string,
	weather: weather,
	temperature: temperature,
	wind: wind
}