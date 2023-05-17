# Weather Widget

A very simple weather widget, intended as a demo for the React Hooks API.

Weather Icons courtesy of [owfont](http://websygen.github.io/owfont/)

Project recently rewritten in [Rescript](https://rescript-lang.org/docs/react/latest/introduction) 🚀

## Run me!

This project uses [Yarn 2](https://yarnpkg.com/getting-started), but in _unplugged_ mode because Rescript does not yet
support Yarn Plug'n'Play. [Watch this compatibility list!](https://yarnpkg.com/features/pnp/#incompatible)

In the meantime, you'll need to install the packages first:

```
yarn
```

Then start the app:

```
yarn start
```

This runs the app in development mode (using parcel to bundle and serve).
Open [http://localhost:1234](http://localhost:1234) to view in a browser.

## Widget me!

If you want to see it as a desktop widget, give OpenFin a try:

```
# Run this in one terminal
yarn start

# Run this in another terminal
yarn dlx -p openfin-cli openfin --launch --config openfin.json
```

## Learn More

- Learn about [React](https://reactjs.org/) and its [Hooks API](https://reactjs.org/docs/hooks-reference.html)
- Read about [Rescript](https://rescript-lang.org/docs/manual/latest/introduction) and maybe give it a try yourself...
