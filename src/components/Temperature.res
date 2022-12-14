%%raw("import './Temperature.css'")

@react.component
let make = (~minimum: string, ~current: string, ~maximum: string) => {
	let degreeSymbol = "\u00B0c"
	<div role="region" ariaLabel="temperature" className="temperature">
		<div title={"minimum " ++ degreeSymbol} className="min">{React.string(minimum)}</div>
		<div title="current" className="current">{React.string(current ++ degreeSymbol)}</div>
		<div title={"maximum " ++ degreeSymbol} className="max">{React.string(maximum)}</div>
	</div>
}
