# Alami Takehome Test App

| Android Demo  | iOS Demo |
| ------------- | ------------- |
|  https://drive.google.com/file/d/17EDg153NKmxn0NFBJ0p7yfPC9NARx-cU/view?usp=sharing  |  https://drive.google.com/file/d/1kg6CTlVV-l1pdup6U-8RdpK5pn9Jizh5/view?usp=sharing |


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
App/
├── android
├── ios
├── assets/
│   ├── fonts
│   ├── icons
│   └── ilustrations
└── src/
    ├── components (presentational components)
    ├── navigation (react navigation navigators)
    ├── screens (application screens)
    ├── services (application services, e.g. API clients)
    ├── themes/
    │   ├── colors.js
    │   ├── images.js
    │   └── typography.js
    └── App.js (app entry point)
```

## Things to improve if I have more time

- using TS
- improve UI/UX
- better RTK config/setup
- write unit test
