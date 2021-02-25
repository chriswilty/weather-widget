# Weather Widget

A very simple weather widget, originally intended as a demo of some React Hooks, now expanded into a
React / Webpack 5 template project.

Project is built using [Yarn 2 Zero-Installs](https://next.yarnpkg.com/features/zero-installs),
and bundled using [Webpack 5](https://webpack.js.org/concepts/),
with Babel for transpiling from [ES2020](https://babeljs.io/docs/en/babel-preset-env)
and [JSX](https://babeljs.io/docs/en/babel-preset-react) syntax.
I have included some [SASS](https://sass-lang.com/) usage
and [styled-components]() for good measure - take your pick.

Weather Icons courtesy of [owfont](http://websygen.github.io/owfont/).

## Run me!

As this is a Zero-Installs project, simply clone/fork the repo, then:

```
yarn start
```

to run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view
in a browser.

Under the bonnet, this uses Webpack Dev Server with hot-module reloading via
[React Fast Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin/) (which replaces
deprecated [react-hot-loader](https://github.com/gaearon/react-hot-loader)). It also uses
[ESLint](https://eslint.org/docs/user-guide/), so you will see linter warnings in the console.

## Widget me!

If you want to see it as a desktop widget, give OpenFin a try:

```
# Run this in one terminal
yarn start

# Run this in another terminal
yarn dlx -p openfin-cli openfin --launch --config openfin.json
```

## Build me!

```
yarn build
yarn dlx serve
```

## Learn More

- Learn about [React](https://reactjs.org/)
  and its [Hooks API](https://reactjs.org/docs/hooks-reference.html)
- Learn about [Webpack 5](https://webpack.js.org/concepts/) - _don't be afraid!_

## ToDo

- Add and use [FontAwesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) icons