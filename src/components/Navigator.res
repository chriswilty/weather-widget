%%raw("import './Navigator.css'")

@react.component
let make = (~locations: array<string>, ~currentIndex: int, ~onSelected: int => unit) => {
	let selectors = Js.Array2.mapi(locations, (location, index) =>
		<input
			type_="radio"
			name="locations"
			key={location}
			title={location}
			value={location}
			checked={index === currentIndex}
			onChange={_ => onSelected(index)}
		/>
	)

	<div role="group" ariaLabel="location selector" className="navigator">
		{React.array(selectors)}
	</div>
}
