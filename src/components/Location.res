%%raw("import './Location.css'")

@react.component
let make = (~name: string) => {
	<div title="location" className="location">{React.string(name)}</div>
}
