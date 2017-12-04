# React Bootstrap

React components that uses Bootstrap 4 as a base for styles.

Does not include Bootstrap and Font Awesome styles. You need to include it to your project, for example:
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
```

## Usage
Add to `package.json`:
```json
{
  ...
  "dependencies": {
    ...
    "react-bootstrap": "https://github.com/kisonic/react-bootstrap.git#build",
    ...
  },
  ...
}
```

## Installation

- Running `yarn` in the components's root directory will install everything you need for development.

## Demo Development Server

- `yarn start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Building

- `yarn run build` will build the component for publishing to npm and also bundle the demo app.

- `yarn run clean` will delete built resources.
