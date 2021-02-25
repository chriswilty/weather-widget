module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: 3
    }],
    ['@babel/preset-react', {
      runtime: 'automatic',
      development: process.env.BABEL_ENV === 'development'
    }]
  ]
}