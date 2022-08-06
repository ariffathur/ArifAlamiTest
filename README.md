# Alami Takehome Test App

## Prerequisite

Make sure you have followed the [React Native CLI Quick Start](https://reactnative.dev/docs/environment-setup).

## Install packages

`yarn`

## Run debug version

for android

`yarn android`

for ios

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..`
- `yarn ios`
- or run directly from xcode

## Debugging

- Install [reacotron](https://github.com/infinitered/reactotron)
- open Reacotron debugger before run the project
- for debugging on android run `adb reverse tcp:9090 tcp:9090`
- for iOS simulator it will connect automatically after reload app
- for console logging you can use `console.tron.log()`

## Built with

- [React Native 0.69.3](https://reactnative.dev/)
- [Redux Tool Kit](https://redux-toolkit.js.org/) for state management
- [React-Redux](https://react-redux.js.org/introduction/quick-start) react binding for redux
- [React Navigation 6](https://reactnavigation.org/docs/getting-started) for screens navigator

## App Directories

```
📦 App
 ┣ 📂 Assets (static assets)
 ┃ ┗ 📂 Images (image assets)
 ┣ 📂 Components (presentational components)
 ┣ 📂 Config (configuration of the application)
 ┣ 📂 Containers (container components, i.e. the application's screens)
 ┣ 📂 Models (rematch models)
 ┃ ┣ 📂 Persisted (rematch persisted models)
 ┣ 📂 Navigators (react navigation navigators)
 ┣ 📂 Services (application services, e.g. API clients)\
 ┣ 📂 Themes (base styles for the application)
 ┣ 📂 Transforms (common functions to transform data)
 ┗ 📜 App.js (app entry point)
```
