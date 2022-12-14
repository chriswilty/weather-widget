%%raw("import 'styles/icons/owfont-regular.css'")
%%raw("import './WeatherIcon.css'")

@react.component
let make = (~code: string, ~description: string) => {
	<div role="img" ariaLabel={"weather: " ++ description} className="weather-icon">
		<i title={description} className={`owf owf-5x owf-${code}`} />
	</div>
}
