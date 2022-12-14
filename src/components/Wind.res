%%raw("import './Wind.css'")

@react.component
let make = (~speed: string, ~fromDegrees: int) => {
	let normalisedDegrees = Js.String2.make(mod(fromDegrees, 360))
	let iconDescription = `Direction ${normalisedDegrees} degrees (Northerly being 0)`
	let iconStyle = ReactDOM.Style.make(~transform=`rotate(${normalisedDegrees}deg)`, ())

	<div role="region" ariaLabel="wind" className="wind">
		<i
			role="img"
			ariaLabel={iconDescription}
			title={iconDescription}
			className="wind-icon"
			style={iconStyle}
		/>
		<div title="wind speed" className="wind-speed">
			{React.string(speed)}
			<span className="units">{React.string("m/s")}</span>
		</div>
	</div>
}
