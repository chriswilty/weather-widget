%%raw("import 'components/WeatherWidget.css'")

let pauseMillis = 2000

/**
 * This widget uses setTimeout to set the weather location every N seconds.
 *
 * Whenever location is changed - either when the current timeout expires, or
 * when the user clicks a location dot - a new timeout is started to select the
 * next location in the list (or return to the start). Any existing timeout is
 * cleared first - only necessary if the user has selected location
 * manually.
 *
 * TODO Change to use setInterval, and call setCurrentLocation(prev => prev + 1)
 */
 @react.component
let make = () => {
	let (forecastData, setForecastData) = React.useState(() => [])
	let (currentLocation, setCurrentLocation) = React.useState(() => None)
	let incrementLocation = () => setCurrentLocation(current => {
			switch current {
				| None => None
				| Some(index) => Some(mod(index + 1, Js.Array2.length(forecastData)))
			}})
	let logWithTime = message =>
			Js.Console.log(`${Js.Date.toLocaleTimeString(Js.Date.make())} ${message}`)

	React.useEffect0(() => {
		WeatherService.fetchData()
		->Js.Promise2.then(data => {
			setForecastData(_ => data)
			setCurrentLocation(_ => Some(0))
			Js.Promise2.resolve()
		})->ignore
		None
	})

	React.useEffect1(() => {
			let timerId = Js.Global.setTimeout(incrementLocation, pauseMillis);
			logWithTime(j`starting new timer $(timerId)`)
			Some(() => {
				logWithTime(j`clearing timer $(timerId)`)
				Js.Global.clearTimeout(timerId) // no-op if timer already expired
			})
		},
		[currentLocation]
	)

	let setLocation = (index) => setCurrentLocation(_ => Some(index))

	<div className="weather-widget">
		{ switch currentLocation {
			| None => <Loading />
			| Some(currentIndex) =>
				<WeatherPanel forecastData currentIndex setLocation />
		}}
	</div>
}
