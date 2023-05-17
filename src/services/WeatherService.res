let fetchData = async () => {
	Js.Console.log("fetching data ...")
	await Js.Promise2.make((~resolve, ~reject) => {
		Js.Global.setTimeout(() => resolve(. MockData.forecastData), 1000)->ignore
	})
}
