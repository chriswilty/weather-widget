@react.component
let make = (
	~forecastData: array<WeatherTypes.forecast_data>,
	~currentIndex: int,
	~setLocation: int => unit
) => {
	let {
		location: name,
		weather: { code, description },
		temperature: { minimum, current, maximum },
		wind: { speed, fromDegrees }
	} = forecastData[currentIndex]
	let locations = Js.Array2.map(forecastData, ({ location }) => location)

	<>
		<Location name />
		<Wind speed fromDegrees />
		<WeatherIcon code description />
		<Temperature minimum current maximum />
		<Navigator locations currentIndex onSelected={setLocation} />
	</>
}
